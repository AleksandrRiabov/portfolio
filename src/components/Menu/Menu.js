import "./Menu.css";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import data from "../../data";
import CV from "../../assets/CV.pdf";

const Menu = ({ pathname, setMenuOpen }) => {
  const handleClick = (e) => {
    if (
      e.target.classList.contains("menuLink") ||
      e.target.classList.contains("menuContactsBtn")
    ) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="menu">
      <div className="menuAside">
        <div className="asideHeader">
          <div className="menuSocials">
            {data.socialLinks.map((link) => {
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.icon}
                </a>
              );
            })}
          </div>
          <div onClick={() => setMenuOpen(false)} className="closeIcon">
            <CloseIcon fontSize="inherit" />
          </div>
        </div>
        <div onClick={(e) => handleClick(e)} className="menuLinksContainer">
          <ul className="menuLinks">
            {data.links.map(({ url, name, navLink }) => {
              if (navLink) {
                return (
                  <Link to={url} key={name}>
                    <li
                      className={`menuLink ${pathname === url ? "menuActive" : ""
                        }`}
                    >
                      {name}
                    </li>
                  </Link>
                );
              }

              return null;
            })}
            <a href={CV} target='_blank'>
              <li className='menuLink'>Resume</li>
            </a>
          </ul>

          <Link to="/contacts">
            <div className="menuContactsBtn">Get In Touch</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Menu;