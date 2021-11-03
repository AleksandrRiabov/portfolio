import "./Menu.css";
import { Link } from "react-router-dom";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseIcon from '@mui/icons-material/Close';

const Menu = ({ pathname, setMenuOpen }) => {
   const handleClick = (e) => {
      if (e.target.classList.contains("menuLink") || e.target.classList.contains("menuContactsBtn")) {
         setMenuOpen(false);
      }
   }

   return (
      <div className="menu">
         <div className="menuAside">
            <div className="asideHeader">
               <div className="menuSocials">
                  <a href="https://github.com/AleksandrRiabov"
                     target="_blank" rel="noreferrer">
                     <GitHubIcon fontSize="inherit" />
                  </a>
                  <a href="https://linkedin.com"
                     target="_blank"
                     rel="noreferrer">
                     <LinkedInIcon fontSize="inherit" />
                  </a>
               </div>
               <div onClick={() => setMenuOpen(false)} className="closeIcon">
                  <CloseIcon fontSize="inherit" />
               </div>
            </div>
            <div
               onClick={(e) => handleClick(e)}
               className="menuLinksContainer">
               <ul className="menuLinks">
                  <Link to="/"><li className={`menuLink ${pathname === "/" ? "menuActive" : ""}`}>Home</li></Link>
                  <Link to="/portfolio"><li className={`menuLink ${pathname === "/portfolio" ? "menuActive" : ""}`}>Portfolio</li></Link>
                  <Link to="/about"><li className={`menuLink ${pathname === "/about" ? "menuActive" : ""}`}>About</li></Link>
               </ul>
               <Link to="/contacts"><div className="menuContactsBtn">Get In Touch</div></Link>
            </div>
         </div>
      </div>
   )
}

export default Menu