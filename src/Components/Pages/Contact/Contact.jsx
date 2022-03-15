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
            <div className='container-fluid'>
                <div className='row'>
                        <h3 className='fontAbout my-3'> Contacto </h3>
                            <div className='col-4 text-center'>
                                <p className='h2'> EMAIL</p>
                                <p className='h4'>Josepe.gutierrezz@gmail.com</p>
                            </div>
                            <div className='col-4 text-center'>
                                <p className='h2'> MOVIL</p>
                                <p className='h4'>+54 351 607 6315</p>
                            </div>
                                
                            <div className='col-4 text-center'>
                                <p className='h2'> WhatsApp</p>
                                <a target="_blank" 
                                href='https://api.whatsapp.com/send/?phone=351910930426&text&app_absent=0' 
                                className="btn btn-success col-3 mx-auto" >Click Aqui</a>
                            </div>
                </div>
            </div>
            <div className="container mx-auto">
                <h3 className='col-12 col-lg-12 text-center fontAbout'>Enviame tu Consulta</h3>
                <Formulario/>
            </div>
            
        </>
    )
}

export default Contact
