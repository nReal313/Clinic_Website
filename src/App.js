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

function App() {
  let [form, setForm] = useState({
    isExisting: false,
    firstName: "",
    lastName: "",
    city: "",
    state: "",
    patientID: null,
    appointmentDate: ""
  })
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar number="94160-48323" />
        <appContext.Provider value={{ form, setForm }}>
          <Routes>
            <Route path="/" element={<Info />} />
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
