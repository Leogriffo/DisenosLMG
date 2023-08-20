import React from "react";
import '../Inicio/Inicio.css'
import escritorio from './../../assets/escritorio.jpg'

import basico from './../../assets/diseño_basico.png'
import profesional from './../../assets/diseño_profesional.png'
import tienda from './../../assets/tienda_online.png'





export default function Inicio() {
    return (
        <div className="pantalla">
            <h1 className="titulo" >Diseños LMG </h1> 
            <h2>Diseño Web Profesional</h2>
                <div className="imagen_escritorio">
                    <img src={escritorio} alt=""/>     
                </div>    
            <div className="div_subt">
                <h3>En Diseños LMG nos enfocamos en plasmar el deseo y las necesidades de nuestros clientes con la maxima eficiencia y belleza para su sitio web. <br></br>
                    Siempre pensado para que el usuario tenga una experiencia facil e intuitiva.<br></br>
                    Contamos con diferentes paquetes, adaptables para cada cliente. Desde economicos (para que tu empresa empiece a estar en la web) hasta personalizados (pensado excusivamente para tu empresa, hasta el minimo detalle).<br></br>Realizamos todo tipos de diseños de sitios web (Para profesionales, Hoteleria, Restaurantes, Bares, Inmobiliarias, Tiendas).</h3>
            </div>
            <p className="ofrecemos">ELEGI LA OPCION QUE MAS TE GUSTE:</p>
            <div className="tarjetas">
            
            <div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <div className="profile-image">
        <img src={basico} className="basico"alt=""></img>
      </div>
    </div>
    <div className="flip-card-back">
      <div className="Description">
        <p className="description">
        <br/>
        - Dominio -<br/>( gratis por un año.)<br/>
        - Diseño Resposive -<br/>
        (Adaptable en computadoras, celulares, tablets)<br/>
       - Whatsapp integrado -<br/>
        <br/>
        - Hasta 3 secciones -<br/>
        (Se cobra adicional por mas secciones)
        
        </p>
        
          
      </div>
    </div>
  </div>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <div className="profile-image">
        <img src={profesional} className="basico"alt=""></img>
      </div>
    </div>
    <div className="flip-card-back">
      <div className="Description">
        <p className="description">
        <br/>
        - Dominio -<br/>(gratis por un año.)<br/>
        - Diseño Resposive -<br/>
        (Adaptable en computadoras, celulares, tablets)<br/>
        - Formulario de contacto -<br/>
        - Whatsapp integrado -<br/>
        <br/>
        - Hasta 5 secciones -<br/>
        (Se cobra adicional por mas secciones)
        </p>
        
          
      </div>
    </div>
  </div>
</div>

<div className="flip-card">
  <div className="flip-card-inner">
    <div className="flip-card-front">
      <div className="profile-image">
        <img src={tienda} className="basico"alt=""></img>
      </div>
    </div>
    <div className="flip-card-back">
      <div className="Description">
        <p className="description">
        <br/>
       - Dominio -<br/>(gratis por un año.)<br/>
        - Diseño Resposive -<br/>
        - Optmizado para redes -<br/>
        - Whatsapp integrado -<br/>
        - Metodos de Pago -<br/>
        (Mercado Pago - Transferencia)
        <br/>
        <br/>
        - Hasta 4 secciones -<br/>
        (Se cobra adicional por mas secciones)
        </p>
        
          
      </div>
    </div>
  </div>
</div>
 </div>
            
            <div className="presupuesto" >
              
            </div>    
        </div>
    )
}
