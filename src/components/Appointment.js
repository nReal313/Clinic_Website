import React, { useContext, useEffect, useState } from 'react'
import Form from './Form'
import { Link } from 'react-router-dom'
import Slots from './Slots';
import { appContext } from '../appContext';
// import { appContext } from '../appContext';

export default function Appointment(props) {

    const [select, setSelect] = useState("Online");

    const handleSelect = (event) => {
        setSelect(event.target.id);
    }

    const { filled } = useContext(appContext);

    useEffect(() => {
        console.log(filled, "FILLED")
    }, [filled])

    return (
        <div className='container mt-2 mb-4 p-4'>
            <div className="row justify-content-around">
                <div className="col-8 col-lg-5">
                    <Form parent="appointment" />
                </div>
                <div className="col-8 col-lg-5" style={{ display: filled ? "block" : "none" }}>
                    <ul className="nav nav-underline justify-content-center">
                        <li className="nav-item">
                            <Link className={`nav-link ${select === "Online" ? "active" : ""}`} id="Online" to="" onClick={handleSelect}>Online</Link>
                        </li>
                        <li className="nav-item" >
                            <Link className={`nav-link ${select === "Offline" ? "active" : ""}`} id="Offline" to="" onClick={handleSelect}>Offline</Link>
                        </li>
                    </ul>
                    <Slots />
                </div>
            </div>
        </div>
    )
}
