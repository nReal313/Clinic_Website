import './App.css';
import Navbar from "./components/Navbar"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Info from "./components/Info"
import Footer from './components/Footer';
import Appointment from './components/Appointment';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appContext } from './appContext';
import { useState } from 'react'
import Refills from './components/Refills';
import About from './components/About';
import FindUs from './components/FindUs';

function App() {

  let [form, setForm] = useState({
    isExisting: false,
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    patientID: "",
    appointmentDate: "",
    address: ""
  })

  let [current, setCurrent] = useState("");

  let [filled, setFilled] = useState(false);

  const [click, setClick] = useState(false);



  return (
    <BrowserRouter>
      <div className="App">
        <appContext.Provider value={{ form, setForm, filled, setFilled, click, setClick }}>
          <Navbar number="94160-48323" current={current} setCurrent={setCurrent} />
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/About" element={<About />} />
            <Route path="/FindUs" element={<FindUs />} />
            <Route path="/Home" element={<Info />} />
            <Route path="/Appointment" element={<Appointment />} />
            <Route path="/Refills" element={<Refills />} />
          </Routes>
        </appContext.Provider>
        <Footer />
      </div >
    </BrowserRouter>
  );
}

export default App;
