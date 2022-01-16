import React from 'react'
import NavBar from '../../NavBar'
import { FcIdea, FcOk } from "react-icons/fc";
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Skills = () => {
    return (
        <>
            <div className="mb_nav">
                <NavBar />
            </div>
            <h2 className='fontAbout'>  <FcIdea className='rotated' /> Mis Habilidades <FcIdea className='rotated' />  </h2>
            <div className='container rounded py-4'>
                {/* FILA UNO */}
                <div className='row text-center my-2 justify-content-center'>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/html5.png?raw=true" alt="" />
                        <p className='fs-5 rounded bg-about'>HTML5</p>
                    </div>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/JS.png?raw=true" alt="" />
                        <p className='fs-5 rounded bg-about'>JAVASCRIPT</p>
                    </div>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/CSS.png?raw=true" alt="" />
                        <p className='fs-5 rounded bg-about'>CSS</p>
                    </div>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/react.png?raw=true" alt="" />
                        <p className='fs-5 rounded bg-about'>REACT JS</p>
                    </div>
                </div>
                {/* FILA DOS */}
                <div className='row text-center my-2 justify-content-center'>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/nodeJss.png?raw=true" alt="" />
                        <p className='fs-5 rounded bg-about'>NODE JS</p>
                    </div>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/Firebase.png?raw=true" alt="" />
                        <p className='fs-5 rounded bg-about'>FIREBASE</p>
                    </div>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/Git.png?raw=true" alt="" />
                        <p className='fs-5 rounded bg-about'>GIT</p>
                    </div>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/GitHub.png?raw=true" alt="" />
                        <p className='fs-5 rounded bg-about'>GITHUB</p>
                    </div>
                </div>
                {/* FILA TRES */}
                <div className='row text-center my-2 justify-content-center'>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/VScode.png?raw=true" alt="" />
                        <p className='fs-5 bg-white rounded bg-about'>VS CODE</p>
                    </div>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/Jquery.png?raw=true" alt="" />
                        <p className='fs-5 bg-white rounded bg-about'>JQUERY</p>
                    </div>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/bootstap.png?raw=true" alt="" />
                        <p className='fs-5 bg-white rounded bg-about'>BOOTSTRAP</p>
                    </div>
                    <div className='col-5 col-sm-5 col-md-3'>
                        <img className='img-icon my-3' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/sass.png?raw=true" alt="" />
                        <p className='fs-5 bg-white rounded bg-about'>SASS</p>
                    </div>
                </div>
            </div>
            <h2 className='fontAbout my-5'>Mis Certificaciones <FcOk />  </h2>
            <div className='container'>
                <div className='row'>
                    <Link className='col-10 col-sm-10 col-md-11 col-lg-10 col-xl-5 mx-auto border rounded bg-edu my-3 shadow text-decoration-none text-dark link' 
                            to="/Skills/Desarrollo-Web" 
                            exact={true} 
                            tabindex="0" 
                            data-toggle="tooltip" 
                            title="CLICK PARA VER CERTIFICADO">
                                <h3 className='h2 text-center'>Desarrollo Web <FcOk /></h3>
                                <p className='fs-5'>En este curso aprendí a crear un sitio web partiendo del prototipo en papel me sumergí en las mejores prácticas del desarrollo web, trabajando con HTML y CSS. Conocí herramientas para optimizar al máximo un sitio web, implementando prácticas de versionado de código con GIT, y preprocesadores como SASS. Al finalizar, supe cómo aplicar Bootstrap a mis proyectos, y comprendí lo importante del SEO en tus desarrollos. También aprendí a subir mi sitio a un servidor, y a como interactuar con este servicio.</p>
                                <p>Duracion: 9 Semanas</p>
                                <p className='text-center'>Ver Certificado</p>
                    </Link>
                    <Link className="col-10 col-sm-10 col-md-11 col-lg-10 col-xl-5 mx-auto border rounded bg-edu my-3 shadow text-decoration-none text-dark link" 
                            to="/Skills/Javascript" 
                            exact={true} 
                            tabindex="0" 
                            data-toggle="tooltip" 
                            title="CLICK PARA VER CERTIFICADO">
                            <h4 className='h2 text-center'>Javascript <FcOk /></h4>
                            <p className='fs-5'>En este curso aprendí los fundamentos del lenguaje de programación más usado en la actualidad, con el cual es posible crear aplicaciones de todo tipo. Explore inicialmente herramientas propias del mismo, indagando casos prácticos de aplicación. Conocí la utilidad de las librerías estudiando jQuery, y cómo aplicar técnicas de desarrollo para apps modernas con AJAX.  Entendí como poder desarrollar web interactivas, y trasladar los conocimientos del curso a cualquier framework JavaScript.</p>
                            <p>Duracion: 8 Semanas</p>
                            <p className='text-center my-5'>Ver Certificado</p>
                    </Link>
                </div>
            </div>
            <div className='container my-5'>
                <div className='row'>
                    <Link className='col-10 col-sm-10 col-md-11 col-lg-10 col-xl-5 mx-auto border rounded bg-edu my-3 shadow text-decoration-none text-dark link' 
                            to="/Skills/React-js-Coder" 
                            exact={true} tabindex="0" 
                            data-toggle="tooltip" 
                            title="CLICK PARA VER CERTIFICADO">
                                <h3 className='h2 my-3'>React Js - Coder House <FcOk /></h3>
                                <p className='fs-5'>En este curso que es el tercer nivel de la carrera de programación Front-end en Coder House, aprendí a programar por componentes, mediante Javascript, JS, ES6, y también conocí las ventajas de la utilización de flujos de datos. Asimismo como aplicar el manejo de rutas utilizando Firebase, y la utilización del virtual DOM mediante los desarrollos de React JS. Al finalizar, pude crear mis propias aplicaciones SPA, y estarás en condiciones de hacer cualquier desarrollo con uno de los frameworks más populares y avanzados del momento.</p>
                                <p>Duracion: 8 Semanas</p>
                                <p className='text-center'>Ver Certificado</p>
                    </Link>
                    <Link className="col-10 col-sm-10 col-md-11 col-lg-10 col-xl-5 mx-auto border rounded bg-edu my-3 shadow text-decoration-none text-dark link" 
                            to="/Skills/React-js-Udemy" 
                            exact={true} 
                            tabindex="0" 
                            data-toggle="tooltip" 
                            title="CLICK PARA VER CERTIFICADO">
                                <h4 className='h2 my-3'>React Js - Udemy <FcOk /></h4>
                                <p className='fs-5'>En este curso pude reforzar mis conocimientos sobre React Js, donde pude obtener otro punto de vista de otro desarrollador, donde aprendí las técnicas que usa con respecto al manejo del virtual DOM, las props, los estados, como manipular los ciclos de vida de los componentes. También pude aprender fundamentos de programación y como plasmar un proyecto en MVC (Modelo-Vista-Controlador).</p>
                                <p className='fs-5'>Duracion: 2 Semanas</p>
                                <p className='text-center my-5'>Ver Certificado</p>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Skills
