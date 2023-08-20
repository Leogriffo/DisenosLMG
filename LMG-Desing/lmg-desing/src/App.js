import React from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";
import Inicio from "./components/Inicio/Inicio"
import Navbar from "./components/Navbar/Navbar";
import Servicios from "./components/Servicios/Sevicios"

import Contacto from "./components/Contacto/Contacto"
import PiePagina from "./components/PiePagina/PiePagina";





function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/servicios" element={<Servicios/>}/>
        <Route path="/contacto" element={<Contacto/>}/>

      </Routes>   
      <PiePagina/>
    </div>
  );
}

export default App;
