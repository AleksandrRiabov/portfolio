import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Menu from "../Menu/Menu";


const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const { pathname } = useLocation();

   return (
      <div className="navbar">
         <div className="container">
            <div className="navbarInner">
               <div className="navbarLeft">
                  <div className="navbarLogo">A Riabov</div>
               </div>
               <div className="navbarRight">
                  <ul className="navbarLinks">
                     <Link to="/"><li className={pathname === "/" ? "navbarActive" : "navLink"}>Home</li></Link>
                     <Link to="/portfolio"><li className={pathname === "/portfolio" ? "navbarActive" : "navLink"}>Portfolio</li></Link>
                     <Link to="/about"><li className={pathname === "/about" ? "navbarActive" : "navLink"}>About</li></Link>
                     <Link to="/contacts"><li className="navbarContacts">Get In Touch</li></Link>
                  </ul>
                  <div className="navbarMobile">
                     <div className="navbarBurger">
                        <IconButton onClick={() => setMenuOpen(true)} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                           <MenuIcon fontSize="large" />
                        </IconButton>
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
