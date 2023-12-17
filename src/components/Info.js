import React from 'react'
import './infoIMG.css'
import Form from './Form'
import { Link } from 'react-router-dom'
// import { appContext } from '../appContext';

export default function Info() {


    return (
        <div>
            <div className="row mt-2 mb-4 p-4 justify-content-center align-items-center">
                <div className="col-lg-6 col-8 text-center p-4">
                    <h2><strong>Dr. BS Guleria</strong> <br />MBBS MD (Psychiatry) </h2>
                    <p className="lead text-muted" >Transforming Lives Since 1991. <br /> Pioneers in Psychiatric Care and Compassionate Healing</p>
                    <span className='d-lg-block d-md-block d-sm-none'> <Link to="/About"><button className="btn btn-md btn-primary">Know your Doctor</button></Link></span>
                </div>
                <div className="col-lg-4 col-8">
                    <Form />
                </div>
            </div>
        </div >
    )
}
