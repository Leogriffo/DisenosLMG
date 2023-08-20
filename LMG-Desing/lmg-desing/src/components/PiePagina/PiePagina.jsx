import React from "react";
import '../PiePagina/PiePagina.css'
import instagram from './../../assets/instagram.png'
import facebook from './../../assets/facebook.png'
import whatsapp from './../../assets/whatsapp.png'
import { Link } from "react-router-dom";

const PiePagina = () => {
    return(
        <div>
            <div className="pie_pagina">
                <p className="contac">CONTACTANOS:</p>
                    <div className="pie_contacto">
                        
                        <Link to="https://www.instagram.com/" target="_bank" className="redes">INSTAGRAM  <img src={instagram} className="img_instagram"alt=""></img></Link>
                        <Link to="https://www.facebook.com/" target="_bank" className="redes">FACEBOOK <img src={facebook} className="img_instagram"alt=""></img></Link>
                        <Link to="https://wa.me/5491173618580/" target="_bank" className="redes">WHATSAPP <img src={whatsapp} className="img_instagram"alt=""></img></Link>
                        
                    </div>

                    <p className="copy">©2023 DISEÑOS LMG - TODOS LOS DERECHOS RESERVADOS.</p>
                </div>
        </div>
    )
}

export default PiePagina