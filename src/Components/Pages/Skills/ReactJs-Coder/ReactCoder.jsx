import React from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import { BiArrowFromRight } from "react-icons/bi";

const ReactCoder = () => {
    return (
        <>
            <div className='mb_nav'>
                <NavBar />
            </div>
            <div className='container-fluid mx-1 py-1'>
                <Link exact to="/Skills" className='row btn-return'>
                    <p className='h4'><BiArrowFromRight className='h1' /> Return</p>
                </Link>
            </div>
            <div className='container py-5'>
                <div className="row text-center">
                    <img className='col-12' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/certificated/CERTIFICADO-REACT.JS-CODERHOUSE.jpg?raw=true" alt="" />
                </div>
            </div>
        </>
    )
}

export default ReactCoder
