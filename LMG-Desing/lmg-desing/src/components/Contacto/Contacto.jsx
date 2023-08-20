import React , {useRef}from "react";
import "../Contacto/Contacto.css"
import emailjs from '@emailjs/browser'
import instagram from './../../assets/instagram.png'
import facebook from './../../assets/facebook.png'
import whatsapp from './../../assets/whatsapp.png'
import { Link } from "react-router-dom";

export default function Contacto (){

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_z1sr8no";
        const templateId = "template_hyfxqds";
        const apikey = "4JRy4qUKQPOzZLVli";

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then(
            (result) => {console.log(result.text);
        })
        .catch( (error) => {console.log(error);})
    }

    return(
        <div>
           <h1>Contacto</h1>
           <h2>Nuestras Redes de Contacto</h2>
            <p className="conoce_nuestros">SEGUINOS EN INSTAGRAM Y FACEBOOK</p>

            <div className="pie_contacto">
                        
                        <Link to="https://www.instagram.com/" target="_bank" className="redes"><img src={instagram} className="img_logo" alt="nose"></img></Link>
                        <Link to="https://www.facebook.com/" target="_bank" className="redes"><img src={facebook} className="img_logo"alt=""></img></Link>
                        <Link to="https://wa.me/5491173618580/" target="_bank" className="redes"><img src={whatsapp} className="img_logo"alt=""></img></Link>
                        
                    </div>

            <div className="form-container">
    <form className="form"ref={refForm} onSubmit={handleSubmit}>
        <span className="heading">Envianos Tu Mensaje</span>
        
        <input name="user_name" placeholder="Nombre" type="text" className="input"/>
     
        
        <input name="user_email" placeholder="Email" id="mail" type="email" className="input"/>
       
     
        <textarea placeholder="Mensaje" rows="10" cols="30" id="message" name="message" className="textarea"></textarea>
       
        <div className="button-container">
        <button className="send-button">Enviar</button>
        
    </div>
    </form>
   
</div>


        </div>
    )
}