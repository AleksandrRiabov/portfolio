import "./Btn.css";
import { Link } from "react-router-dom";

const Btn = ({ text, path, link, type = "button" }) => {
  if (link) {
    return (
    <div className="btnWrapper">
      <div className="btn">
        <a href={link} target="_blank" rel="noreferrer">
          <div className="inner">
            <p className="text">{text || "Get In Touch"} </p>
          </div>
        </a>
      </div>
    </div>
    );
  }

  return (
    <div className="btnWrapper">
      <div className="btn">
        <Link to={path || "/contacts"}>
          <div className="inner">
            <p className="text">{text || "Get In Touch"} </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Btn;
