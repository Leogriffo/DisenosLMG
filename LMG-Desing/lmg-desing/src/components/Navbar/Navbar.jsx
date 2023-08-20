import React , {useState}from "react";
import "../Navbar/Navbar.css"
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

        return (
           <nav>
            <div className="menu" onClick={() => {setMenuOpen(!menuOpen)}}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open" : ""}>
                    <li>
                        <NavLink to ="/">INICIO</NavLink>
                    </li>
                    <li>
                        <NavLink to="/servicios">SERVICIOS</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/portfolio">PORTFOLIO</NavLink>
                    </li> */}
                    <li>
                        <NavLink to="/contacto">CONTACTO</NavLink> 
                    </li>
                </ul>
                
                </nav>
        )
        }

export default Navbar