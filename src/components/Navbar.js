import React from 'react'
import gnh from "../GNH Logo(black).png"
import telephone from "../telephone.png"
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const activeChanger = (event) => {
        props.setCurrent(event.target.id);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid align-items-center">
                    <Link className="navbar-brand" to="home"><img src={gnh} alt="" className="mx-1" style={{ height: "5rem" }} /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
                            <li className="nav-item m-2" key="1">
                                <Link className={`nav-link ${props.current === "Home" ? "active" : ""}`} id="Home" onClick={activeChanger} aria-current="page" to="Home">Home</Link>
                            </li>
                            <li className="nav-item m-2" key="2">
                                <Link className={`nav-link ${props.current === "About" ? "active" : ""}`} id="About" onClick={activeChanger} to="About">About</Link>
                            </li>
                            <li className="nav-item m-2" key="3">
                                <Link className={`nav-link ${props.current === "Appointment" ? "active" : ""}`} id="Appointment" onClick={activeChanger} to="Appointment">Appointment</Link>
                            </li>
                            <li className="nav-item m-2" key="4">
                                <Link className={`nav-link ${props.current === "Refills" ? "active" : ""} disabled`} id="Refills" onClick={activeChanger} to="Refills">Refills</Link>
                            </li>
                            <li className="nav-item m-2" key="5">
                                <Link className={`nav-link ${props.current === "Admission" ? "active" : ""} disabled`} id="Admission" onClick={activeChanger} to="Admission">Admissions</Link>
                            </li>
                            <li className="nav-item m-2" key="6">
                                <Link className={`nav-link ${props.current === "FindUs" ? "active" : ""}`} id="FindUs" onClick={activeChanger} to="FindUs">Find Us</Link>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center align-items-center" role="search">
                            <img src={telephone} alt="" className="m-3" style={{ height: "25px" }} />
                            <ul className="navbar-nav d-block m-1">
                                <li className="nav-item" key="7">Ph : {props.number}</li>
                                <li className="nav-item" key="8">Ph : 1666-231323</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
