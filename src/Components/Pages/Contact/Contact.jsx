import React from 'react'
import NavBar from '../../NavBar'
import Formulario from '../../Formulario';
import { BsWhatsapp, BsEnvelope } from "react-icons/bs";
import {ImWarning} from "react-icons/im"
import { Link } from 'react-router-dom';
const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center my-5">
                <div className="col-10 text-center my-5 ">
                    <h1 className="display-1"><ImWarning className="display-1 text-danger"/> Area en Mantenimiento <ImWarning className="display-1 text-danger"/></h1>
                    <Link to="/">Regresar Atras</Link>
                </div>
            </div>
            {/* <div className="mb_nav">
                <NavBar />
            </div>
            <h3 className='font-contact my-2'>Contacto</h3>
            <div className="container-fluid mx-auto rounded bg-warning spaunContainer">
                <div className="row my-5 justify-content-center">
                    <h3 className='col-10 col-lg-10 text-center font-contact text-dark'>Enviame tu Consulta</h3>
                    <div className="col-10 col-lg-5">
                        <Formulario />
                    </div>
                </div>  
            </div>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-4 shadow rounded text-center'>
                        <p className='h2 text-white'><BsEnvelope className='text-info' /> EMAIL <BsEnvelope className='text-info' /></p>
                        <p className='h4 text-white'>Josepe.gutierrezz@gmail.com</p>
                    </div>
                    <a target="_blank"
                        rel="noopener noreferrer"
                        href='https://api.whatsapp.com/send/?phone=5493516076315&text&app_absent=0'
                        className="col-5 text-decoration-none rounded text-center my-2">
                        <BsWhatsapp className='text-success h1' />
                        <p className='display-6 fs-5 text-white'>WhatsApp</p>
                    </a>
                </div>
            </div> */}
        </div>
    )
}

export default Contact
