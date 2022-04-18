import React from 'react'
import NavBar from '../../NavBar'
import { FcGraduationCap, FcManager } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { BsFileEarmarkPdf, BsLinkedin, BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";


const About = () => {
    return (
        <>
            <div className="mb_nav">
                <NavBar />
            </div>
            <div className='container'>
                <h1 className="col-12 col-md-12 fontAbout"><FaReact className='mx-1 rotated bg-react' />¡Bienvenido A Mi Web!<FaReact className='mx-1 rotated bg-react' /></h1>
            </div>
            <div className='container-fluid bg-black my-4 animated'>
                <div className="container rounded">
                    <div className='row justify-content-center pt-5'>
                        <div className="col-12 col-lg-3 border rounded shadow bg-black m-1">
                            <img src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/gift/PERFIL-BLANCO.png?raw=true" alt="" className='img-perfil' />
                            <p className='text-center my-1 text-white h4 text-cente'>José Gutiérrez</p>
                            <p className='text-center text-white h5'>Argentina - Córdoba</p>
                        </div>
                        <div className="col-12 col-lg-8  border rounded shadow bg-black m-1">
                            <p className='display-6 fs-5 text-white lh-sm my-3'>
                                Soy desarrollador Front-end, diseñador y creador de web apps que como recién graduado,
                                me encantaría poder entrar a formar parte de una empresa en la que poder aplicar todos
                                mis conocimientos y, al mismo tiempo, que me permita desarrollarme profesionalmente.
                            </p>
                            <p className='display-6 fs-5 text-white lh-sm my-4'>
                                Gracias a mi formación especializada, considero que puedo aportar valor y seguir desarrollándome
                                profesionalmente en una compañía que coincida con mis valores y expectativas.
                            </p>
                            <p className='display-6 fs-5 text-white lh-sm my-4'>
                                Como persona organizada y con una gran motivación, soy capaz de adaptarme a cualquier circunstancia
                                y dar siempre lo mejor de mí en cualquier proyecto, al mismo tiempo que me esfuerzo por trabajar
                                en equipo y fomentar valores como los del compañerismo.
                            </p>
                            <p className='text-center h4 my-3 rounded display-6 text-white'><BsWhatsapp className='text-success h2'/> <BsFacebook className='text-primary h2'/> <BsInstagram className='text-danger h2'/> <BsLinkedin className='text-primary h2'/> Buscame en Redes <BsLinkedin className='text-primary h2'/> <BsInstagram className='text-danger h2'/> <BsFacebook className='text-primary h2'/> <BsWhatsapp className='text-success h2'/></p>
                        </div>
                    </div>
                    <div className="row justify-content-center py-3">
                        <div className="col-12 col-lg-11 border bg-black rounded shadow m-1">
                            <p className='h4 text-white'>Busco Empleo</p>
                            <p className='h5 text-white'>Front-end || React Developer || Javascript Developer</p>
                        </div>
                    </div>
                    <div className="row justify-content-center pb-5">
                            <a href="https://drive.google.com/u/0/uc?id=1hPO0BWHEAxQHz_OIFLnkDYdiv7H5bB56&export=download"
                                download="CV-JOSÉ-GUTIERREZ"
                                className='col-12 col-lg-11 py-2 btn-download'><BsFileEarmarkPdf className='h1 text-danger'/> DOWNLOAD CV <BsFileEarmarkPdf className='h1 text-danger'/></a>
                        
                    </div>
                </div>
            </div>

            


            <div>
                <h1 className="fontAbout">Educación <FcGraduationCap /></h1>
            </div>
            {/* PRIMER NIVEL DE EDUCACION */}
            <div className='container my-4 rounded border bg-edu'>
                <div className='row m-3'>
                    <div className='col-12 col-md-6 col-xl-6'>
                        <h3 className='text-white'>Bachiller en Ciencias Sociales y Humanidades</h3>
                        <p className='h5 text-white'>Colegio Parroquial San Francisco de Asis</p>
                        <p className='text-white'>Argentina, Córdoba</p>
                    </div>
                    <div className='col-4 col-md-2 col-xl-3  py-5 text-center'>
                        <a className='btn btn-warning' rel="noopener noreferrer" href="https://sanfranciscoasis.com.ar/" target="_blank">Ver Institucion</a>
                    </div>
                    <div className='col-4 col-md-1 col-xl-2 bg-white mx-5 rounded'>
                        <img className="w-200"
                            src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/logo-sanfra.png?raw=true"
                            alt="logo sanfra" />
                    </div>
                </div>
            </div>
            {/* SEGUNDO NIVEL DE EDUCACION */}
            <div className='container my-4 rounded border animated bg-edu'>
                <div className='row m-3'>
                    <div className='col-12 col-md-6 col-xl-6'>
                        <h3 className='text-white'>Tecnicatura en Papiloscopia</h3>
                        <p className='h5 text-white'>Instituto Superior de Ciencias Economicas y Tecnologias</p>
                        <p className='text-white'>Argentina, Córdoba</p>
                    </div>
                    <div className='col-5 col-md-2 col-xl-3 py-5 text-center'>
                        <a className='btn btn-danger' rel="noopener noreferrer" href="https://www.iscet.edu.ar/" target="_blank">Ver Institucion</a>
                    </div>
                    <div className='col-4 col-md-1 col-xl-2 bg-white mx-5 rounded'>
                        <img className="w-200"
                            src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/logo-iscet.png?raw=true"
                            alt="logo sanfra" />
                    </div>
                </div>
            </div>
            {/* TERCER NIVEL DE EDUCACION */}
            <div className='container bg-edu border rounded'>
                <div className='row m-3'>
                    <div className='col-12 col-md-5 col-xl-6'>
                        <h3 className='text-white'>Desarrollo Frontend React</h3>
                        <p className='h5 text-white'>Coder House</p>
                        <p className='text-white'>Argentina, Buenos Aires</p>
                    </div>
                    <div className='col-5 col-md-3 col-xl-3 py-5 text-center'>
                        <a className='btn btn-dark' rel="noopener noreferrer" href="https://www.coderhouse.es/online/carrera-online-desarrollo-frontend" target="_blank">Ver Institucion</a>
                        <a className="btn btn-dark text-decoration-none my-3 mx-2" rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1wg9tJ152867awlWvnHmpGyGXfNQEoTJS/view?usp=sharing">Ver Certificado</a>
                    </div>
                    <div className='col-4 col-md-2 col-xl-2 mx-5 bg-white rounded'>
                        <img className="w-200"
                            src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/logo-coder.png?raw=true"
                            alt="logo sanfra" />
                    </div>
                </div>
            </div>
            <div className="py-3">
                <h1 className='fontAbout'>Lenguas <FcManager /></h1>
            </div>
            <div className='container my-5'>
                <div className='row rounded text-center'>
                    <div className='mx-auto col-8 col-sm-7 col-md-3 col-xl-3 mx-5 my-3 shadow-lg radius bg-edu, border'>
                        <h5 className='rounded my-4 display-6 fs-2 text-white'>ESPAÑOL</h5>
                        <img className='w-100 rounded' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/espa%C3%B1a-icon.png?raw=true" alt="" />
                        <p className='rounded my-4 text-bold fs-4 text-white'>Nativo</p>
                    </div>
                    <div className='mx-auto col-8 col-sm-7 col-md-3 col-xl-3 mx-5 my-3 shadow-lg radius bg-edu, border'>
                        <h5 className='rounded my-4 display-6 fs-2 text-white'>PORTUGUÉS</h5>
                        <img className='w-100 rounded' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/portugal-icon.png?raw=true" alt="" />
                        <p className='rounded my-4 text-bold fs-4 text-white'>Nivel B1</p>
                    </div>
                    <div className='mx-auto col-8 col-sm-7 col-md-3 col-xl-3 mx-5 my-3 shadow-lg radius bg-edu border'>
                        <h5 className='rounded my-4 display-6 fs-2 text-white'>INGLÉS</h5>
                        <img className='w-100 rounded' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/inglaterra-icon.png?raw=true" alt="" />
                        <p className='rounded my-4 text-bold fs-4 text-white'>Nivel A2</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
