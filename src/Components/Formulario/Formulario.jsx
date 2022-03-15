import { useState, useEffect } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore'
import { getFirestore } from '../../firebase'


const Formulario = () => {
    const [name, setName] = useState(null)
    const [lastName, setlastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [comment, setComment] = useState(null)

    useEffect( () => {
    const db = getFirestore()
    const consultas = collection(db, "Consultas")

    getDocs(consultas)
    .then((snapshot) => {
        let consulta = []
        snapshot.docs.forEach( (doc) => {
            consulta.push({...doc.data(), id:  doc.id  })
        });
    })
    .catch(err => {
        console.log(err.message)
    })
    }, []);

    const sendForm = (event) => {
        event.preventDefault()

        const dataConsulta = {
            "Nombre": name,
            "Apellido": lastName,
            "Correo": email,
            "Comentario": comment
        }

        const db = getFirestore()
        const consultas = collection(db, "Consultas")
        addDoc(consultas, dataConsulta)
        .then(() => {window.location.reload(true)})
        .catch(console.log("error"))
            

    };

    return (
        <>
        <div className='container-fluid text-center'>
            <div className='row text-center mx-auto'>
                <div className='col-4'></div>
                <form onSubmit={sendForm} className='col-9 mx-auto'>
                    <div className="my-4">
                        <input type="text"
                            placeholder='Nombre'
                            className='form-control border border-dark'
                            value={name}
                            required={true}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    
                    <div className='my-4'>
                        <input type="text"
                            placeholder='Apellido'
                            className='form-control border border-dark'
                            value={lastName}
                            required={true}
                            onChange={(e) => setlastName(e.target.value)} />
                    </div>

                    <div className="my-4">
                        <input type="Email"
                            placeholder='Email'
                            className='form-control border border-dark'
                            value={email}
                            rrequired={true}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    
                    <div className="my-4">
                        <textarea type="text"
                            placeholder='Comentario'
                            className='form-control border border-dark'
                            value={comment}
                            required={true}
                            onChange={(e) => setComment(e.target.value)} />
                    </div>
                    
                    <button className="btn btn-dark my-3" type='submit'>Enviar</button>
                </form>
                <div className='col-4'></div>
            </div>
        </div>
            
        </>
    )
}

export default Formulario
