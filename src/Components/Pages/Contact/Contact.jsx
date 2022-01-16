import React from 'react'
import NavBar from '../../NavBar'
import { FcContacts, FcIphone } from "react-icons/fc";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import Formulario from '../../Formulario';

const Contact = () => {
    return (
        <>
            <div className="mb_nav">
                <NavBar />
            </div>
            <div className='container-fluid bg-edu margin-container shadow'>
                <div className='row'>
                    <div className="col-12 col-lg-6 text-center">
                        <h3 className='fontAbout'> Contacto </h3>
                        <div className='list-group'>
                        <p className='h2 display-list'> EMAIL</p>
                            <p className='h4 mb-5'>Josepe.gutierrezz@gmail.com</p>
                            <p className='h2 '> MOVIL</p>
                            <p className='h4 mb-5'>+351 910 930 426</p>
                            <p className='h2'> WhatsApp</p>
                            <a target="_blank" 
                                href='https://api.whatsapp.com/send/?phone=351910930426&text&app_absent=0' 
                                className="btn btn-success col-3 mx-auto" >Click Aqui</a>
                        </div>
                            
                    </div>
                    <div className="col-12 col-lg-6 mx-auto">
                        <h3 className='text-center fontAbout'>Enviame tu Consulta</h3>
                    <Formulario />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Contact
