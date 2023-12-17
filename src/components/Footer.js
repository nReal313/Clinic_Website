import React from 'react'
import clock from "../clock.png"

export default function Footer() {
    return (
        <div className='bg-dark p-4'>
            <div className="row justify-content-center align-items-center">
                <div className="col-8 col-lg-6 text-center ">
                    <div className="text-light p-1 m-1 text-center d-flex align-items-center">
                        <div className="container ms-2">
                            <img className="m-2" src={clock} alt="" style={{ width: "30px" }} />
                            <h6 className="lead">Monday-Saturday : 10 AM to 2 PM</h6>
                            <h6 className="lead">Emergency Appointments on Sunday</h6>
                        </div>
                    </div>
                </div>
                <div className="col-8 col-lg-5 text-center">
                    <div className="text-light p-1 m-2 text-center">
                        <h3 className="lead m-2">© 1991-2023 <br /> Guleria Nursing Home<br /> Sirsa, Haryana <br />All Rights Reserved.</h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
