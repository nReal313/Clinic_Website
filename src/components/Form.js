import React, { useState, useEffect, useContext } from 'react'
import { appContext } from '../appContext';
import { Link } from 'react-router-dom';

export default function Form(props) {

    // const f1 = {
    //     isExisting: false,
    //     firstName: "",
    //     lastName: "",
    //     city: "",
    //     state: "",
    //     patientID: null,
    //     appointmentDate: ""
    // }

    const today = new Date().toISOString().split('T')[0];

    const [existing, setExisting] = useState(false);
    const [valid, setValid] = useState(true);

    let { form, setForm, setFilled, click, setClick } = useContext(appContext); /**form is used to store the information 
                                                                        temporarily while we visit other components like 
                                                                        home->appointments or home->refills etc. Also could 
                                                                        have used local storage for this **/



    const handleChange = (event) => {
        let { name, value } = event.target;
        setForm((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    useEffect(() => {
        enableField();
        //console.log(props.parent)
    })

    function enableField() {
        if (props.parent === "refill") {
            document.getElementById("existingPatient").checked = true;
            document.getElementById("totalNewPatient").style.display = "none";
            setExisting(true);
        }
        else {
            document.getElementById("existingPatient").checked = form.isExisting;
            document.getElementById("newPatient").checked = !form.isExisting;
            setExisting(form.isExisting);
        }
    }
    useEffect(() => {
        if (existing === false) {
            document.getElementById('patientID').disabled = true;
            document.getElementById('refill').style.display = "none";
        } else {
            document.getElementById('patientID').disabled = false;
            document.getElementById('refill').style.display = "block";
        }
    }, [existing]);


    useEffect(() => {
        let isValid = false;
        if (form.firstName !== "" && form.lastName !== "" && form.city !== "" && form.state !== ""
            && form.appointmentDate !== "") {
            if (form.isExisting === true) {
                if (form.patientID !== "") {
                    isValid = true;
                }
            }
            else {
                isValid = true;
            }
        }
        setValid(isValid);
        // console.log(clicked);
    }, [form])

    useEffect(() => {
        console.log(valid, "VALID!!");
        if (valid === false) {
            setClick(false);
            setFilled(valid);
        }
        console.log(click, "CLICK!!")
        if (click === true)
            setFilled(valid);
    }, [valid, click])





    function disableField() {
        var existingPatient = document.getElementById("existingPatient");
        setExisting(existingPatient.checked);
        setForm((prevState) => ({
            ...prevState,
            isExisting: existingPatient.checked
        }))
    }

    return (
        <div>
            <form className='border border-success rounded p-2'>
                <div className="form-text mb-3">We'll not share your details with anyone</div>
                <div className="container mb-3 text-start d-flex justify-content-center">
                    <div className="form-check m-2" id="totalNewPatient">
                        <input className="form-check-input" type="radio" name="isExisting" id="newPatient" onClick={disableField} />
                        <label className="form-check-label ms-1" htmlFor="newPatient">
                            New Patient
                        </label>
                    </div>
                    <div className="form-check m-2">
                        <input className="form-check-input" type="radio" name="isExisting" id="existingPatient" onClick={disableField} />
                        <label className="form-check-label ms-1" htmlFor="existingPatient">
                            Existing Patient
                        </label>
                    </div>
                </div>
                <div className="mb-2">
                    <div className="d-flex justify-content-around">
                        <label htmlFor="firstName" className="form-label m-2">First Name</label>
                        <label htmlFor="lastName" className="form-label m-2">Last Name</label>
                    </div>
                    <div className="d-flex">
                        <input type="text" className="form-control m-2" id="firstName" name="firstName" value={form.firstName} onChange={handleChange} required />
                        <input type="text" className="form-control m-2" id="lastName" name="lastName" value={form.lastName} onChange={handleChange} required />
                    </div>
                </div>
                <div className="mb-2">
                    <div className="d-flex justify-content-around">
                        <label htmlFor="city" className="form-label m-2">City</label>
                        <label htmlFor="state" className="form-label m-2">State</label>
                    </div>
                    <div className="d-flex">
                        <input type="text" className="form-control m-2" id="city" name="city" value={form.city} onChange={handleChange} required />
                        <input type="text" className="form-control m-2" id="state" name="state" value={form.state} onChange={handleChange} required />
                    </div>
                </div>
                <div className="mb-2">
                    <label htmlFor="patientID" className="form-label m-2">Patient ID</label>
                    <input type="text" className="form-control m-2" id="patientID" name="patientID" value={form.patientID} onChange={handleChange} placeholder='' disabled={true} />
                </div>
                <div className="mb-2" style={{ display: props.parent === "refill" ? "block" : "none" }}>
                    <label htmlFor="address" className="form-label m-2">Address</label>
                    <input type="text" className="form-control m-2" id="address" name="address" value={form.address} onChange={handleChange} placeholder='' />
                </div>
                <div className="mb-2" style={{ display: props.parent === "refill" ? "none" : "block" }}>
                    <label htmlFor="date" className="form-label m-2">Preferred Appointment Date</label>
                    <input type="date" className="form-control m-2" id="date" name="appointmentDate" value={form.appointmentDate} onChange={handleChange} placeholder={today} min={today} required />
                </div>
                <div className="container d-flex p-2 justify-content-center">
                    <Link to="/Appointment" style={{ textDecoration: "none", pointerEvents: valid === false ? "none" : "" }} ><button className="btn btn-success btn-md m-1" style={{ display: (props.parent === "refill") ? "none" : "block" }} disabled={!valid} onClick={() => { setClick(true) }}>Find an Appointment</button></Link>
                    <Link to="/Refills" style={{ textDecoration: "none", display: props.parent === "refill" ? "block" : "none" }}><button id="refill" className="btn btn-success btn-md m-1">Refill your Prescription</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}
