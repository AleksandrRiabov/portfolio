import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "../Menu/Menu";


const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const { pathname } = useLocation();

   return (
      <div className="navbar">
         <div className="container">
            <div className="navbarInner">
               <div className="navbarLeft">
                  <Link to="/"><div className="navbarLogo">A Riabov</div></Link>
               </div>
               <div className="navbarRight">
                  <ul className="navbarLinks">
                     <Link to="/"><li className={pathname === "/" ? "navbarActive" : "navLink"}>Home</li></Link>
                     <Link to="/portfolio"><li className={pathname === "/portfolio" ? "navbarActive" : "navLink"}>Portfolio</li></Link>
                     <Link to="/about"><li className={pathname === "/about" ? "navbarActive" : "navLink"}>About</li></Link>
                     <Link to="/contacts"><li className="navbarContacts">Get In Touch</li></Link>
                  </ul>
                  <div className="navbarMobile">
                     <div onClick={() => setMenuOpen(true)} className="navbarBurger">
                           <MenuIcon fontSize="inherit" />
                     </div>
                     {menuOpen && <Menu pathname={pathname} setMenuOpen={setMenuOpen} />}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar
