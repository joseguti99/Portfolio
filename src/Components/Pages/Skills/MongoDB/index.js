import React from 'react'
import NavBar from '../../../NavBar'
import { Link } from 'react-router-dom'
import { BiArrowFromRight } from "react-icons/bi"

const MongoDB = () => {
    return (
        <>
            <div className='mb_nav'>
                <NavBar />
            </div>
            <div className='container-fluid  py-1'>
                <Link exact to="/Skills" className='row btn-return'>
                    <p className='h4'><BiArrowFromRight className='h1' /> Return</p>
                </Link>
            </div>
            <div className='container-fluid py-5'>
                <div className="row text-center justify-content-center">
                    <img className='col-6 border border-white py-2' src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/certificated/Mongo.png?raw=true" alt="" />
                </div>
            </div>
        </>
    )
}

export default MongoDB