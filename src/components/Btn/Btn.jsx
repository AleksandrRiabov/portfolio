import "./Btn.css"
import { Link } from "react-router-dom"

const Btn = ({ text, path }) => {
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
   )
}

export default Btn
