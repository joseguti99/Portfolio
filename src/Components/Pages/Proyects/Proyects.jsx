import React from 'react'
import NavBar from '../../NavBar'
import { FcOpenedFolder } from "react-icons/fc";

const Proyects = () => {
    return (
        <>
            <div className="mb_nav">
                <NavBar />
            </div>
            <div className='container bg-white vh-75 rounded'>
            <h1 className='fontAbout text-dark'>Mis Proyectos <FcOpenedFolder /></h1>
                <div className="row">
                    <div class="progress my-3">
                        <div className="progress-bar w-loader" role="progressbar"></div>
                    </div>
                </div>
                <div className="row mx-2 my-2">
                    <div className="col-3 col-lg-2">
                        <a target="_blank"
                            rel="noopener noreferrer"
                            href="https://joseguti99.github.io/E-commerce/"
                            className="spaun col-sm-10 col-md-10 col-lg-5 col-xl-5 rounded text-decoration-none text-dark my-5"
                            tabindex="0"
                            data-toggle="tooltip"
                            title="VER PROYECTO JAVASCRIPT JOSÉ GUTIERREZ">
                            <FcOpenedFolder className='h1 mx-4' />
                            <p className='h6'>E-commerce<p>(Javascript)</p></p>
                        </a>
                    </div>
                    <div className="col-3 col-lg-2">
                        <a target="_blank"
                            rel="noopener noreferrer"
                            href='https://joseguti99.github.io/E-commerce-React-App/'
                            className="spaun col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 text-decoration-none text-dark"
                            tabindex="0"
                            data-toggle="tooltip"
                            title="VER PROYECTO REACT-JS JOSÉ GUTIERREZ">
                            <FcOpenedFolder className='h1 mx-4' />
                            <p className='h6'>E-commerce<p>(React.js)</p></p>
                        </a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Proyects
