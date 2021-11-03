import "./WorkCaseTiser.css";
import { Link } from "react-router-dom";

const WorkCase = ({ props: { imgSmall, imgMedium, imgLarge, desc, title } }) => {

   return (
      <div className="workPreview">
         <div className="left">
            <div className="inner">
               <Link to="/">
                  <div className="image">
                     <img src={imgSmall} alt="" width="100%" />
                  </div>
               </Link>
               <div>
                  <Link to="/"><h3 className="title"><span className="arrow"> > </span>{title}</h3></Link>
               </div>
               <p className="descriptions">
                  {desc}
               </p>
            </div>
         </div>
         <div className="right">
            <Link to="/">
               <div className="inner">
                  <div className="image">
                     <img src={imgLarge} alt="" width="100%" />
                  </div>
                  {/* <div className="mimage">
                  <img src={imgMedium} alt="" width="100%" />
               </div> */}
               </div>
            </Link>
         </div>
      </div>
   )
}

export default WorkCase
