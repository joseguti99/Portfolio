import React from 'react'
import NavBar from '../../NavBar'
import { FcOpenedFolder } from "react-icons/fc";
import { BsCodeSlash } from "react-icons/bs";

const Proyects = () => {
    return (
        <>
            <div className="mb_nav">
                <NavBar/>
            </div>
            <h1 className='fontAbout'>Mis Proyectos <FcOpenedFolder/></h1>
            <div className='container bg-edu rounded'>
                <div className="row my-5">
                    <a target="_blank" 
                        href="https://joseguti99.github.io/E-commerce/" 
                        className="col-10 col-sm-10 col-md-10 col-lg-5 col-xl-5 bg-proyect text-center border shadow rounded text-decoration-none text-dark mx-5 my-5"
                        tabindex="0" 
                        data-toggle="tooltip" 
                        title="VER PROYECTO JAVASCRIPT JOSÉ GUTIERREZ">
                            <h2 className='h4'><BsCodeSlash className='h2 my-3'/> Proyecto Javascript <BsCodeSlash className='h2 my-3'/></h2>
                            <p> E-commerce</p>
                    </a>
                    <a target="_blank" 
                        href='https://joseguti99.github.io/E-commerce-React-App/' 
                        className="col-10 col-sm-10 col-md-10 col-lg-5 col-xl-5 bg-proyect text-center border shadow rounded text-decoration-none text-dark mx-5 my-5"
                        tabindex="0" 
                        data-toggle="tooltip" 
                        title="VER PROYECTO REACT-JS JOSÉ GUTIERREZ">
                        <h2 className='h4'><BsCodeSlash className='h2 my-3'/> Proyecto React js <BsCodeSlash className='h2 my-3'/> </h2>
                        <p> E-commerce</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Proyects
