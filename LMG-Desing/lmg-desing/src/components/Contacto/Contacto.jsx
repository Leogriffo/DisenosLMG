import React , {useRef, useState}from "react";
import "../Contacto/Contacto.css"
import emailjs from '@emailjs/browser'
import swal from "sweetalert";
import instagram from './../../assets/instagram.png'
import facebook from './../../assets/facebook.png'
import whatsapp from './../../assets/whatsapp.png'
import { Link } from "react-router-dom";
import logo from './../../assets/logo1.png'



export default function Contacto (){


    const refForm = useRef();
    const [emailValido, setEmailValido] = useState(true);

    const handleChangeEmail = (event) =>{
        const emailInput = event.target;
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const isValid = emailInput.value ==="" || regex.test(emailInput.value);
        setEmailValido(isValid);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const serviceId = "service_z1sr8no";
        const templateId = "template_hyfxqds";
        const apikey = "4JRy4qUKQPOzZLVli";

        const emailInput = refForm.current.querySelector('#mail');
        const isEmailEmpty = emailInput.value === '';
        const isMessageEmpty = refForm.current.querySelector('#message').value === '';


        if(isEmailEmpty || isMessageEmpty || !emailValido){
            return;
        }

        emailjs.sendForm(serviceId, templateId, refForm.current, apikey)
        .then(
            () => {console.log("Mensaje Enviado...");
                refForm.current.reset();
                swal({
                    title:"Mensaje Enviado",
                    text:"Nos contactaremos a la brevedad",
                    icon:"success",
                    button:"Aceptar",
                    timer:"4000"
                    
                })
        })
        .catch( (error) => {console.log(error);
        })


    }

    return(
        <div>
            <img src={logo} className="logo" alt="logo"></img>
           <div className="div-titulo">
                <h1>Contacto</h1>
                <h2>Nuestras Redes de Contacto</h2>
            </div>
            
           
            <p className="conoce_nuestros">SEGUINOS EN INSTAGRAM Y FACEBOOK</p>

            <div className="pie_contacto">
                        
                        <Link to="https://www.instagram.com/disenoslmg/" target="_bank" className="redes"><img src={instagram} className="img_logo" alt="nose"></img></Link>
                        <Link to="https://www.facebook.com/disenos.lmg" target="_bank" className="redes"><img src={facebook} className="img_logo"alt=""></img></Link>
                        <Link to="https://wa.me/5491154762093/" target="_bank" className="redes"><img src={whatsapp} className="img_logo"alt=""></img></Link>
                        
                    </div>

            <div className="form-container">
    <form className="form"ref={refForm} onSubmit={handleSubmit}>
        <span className="heading">Envianos Tu Mensaje</span>
        
        <input name="user_name" className="input" placeholder="Nombre" type="text" id="nombre" spellCheck="false"/>

        
        <input name="user_email" className={`input ${emailValido ? '' : 'invalid'} `} placeholder="Email" id="mail" type="email" spellCheck="false" onChange={handleChangeEmail}/>
         {!emailValido && (
         <span className="error-message">
            {refForm.current.querySelector('#mail').value=== ''
            ? 'Campo requerido'
            : 'Email invalido'
            }
            </span>
            )}
     
        <textarea placeholder="Mensaje" className="textarea" rows="10" cols="30" id="message" name="message" spellCheck="false"></textarea>
       
        <div className="button-container">
        <button className="send-button" >Enviar</button>
        
        
    </div>
    </form>
    
</div>


        </div>
    )
}