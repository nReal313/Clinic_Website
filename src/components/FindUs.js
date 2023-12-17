import React from 'react'
import Location from './Location'
export default function FindUs() {
    return (
        <div>
            <div className="row align-items-center m-3 mb-5">
                <div className="col-8 col-lg-8 rounded">
                    <Location />
                </div>
                <div className="col-8 col-lg-3 justify-content-start  text-start  m-2">
                    <h3>Address</h3>
                    <p className="lead strong">Guleria Nursing Home <br /> Opposite Surkhab Tourist Complex <br /> State Bank of India Street <br /> Hisar Road, Sirsa-125055 <br />Haryana</p>
                </div>
            </div>
        </div>
    )
}
