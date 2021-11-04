import "./Title.css";

const Title = ({ title = "", subtitle = "" }) => {
   return (
      <div className="titleRoot">
         <h1 className="title">{title}</h1>
         <h3 className="subtitle">
            {subtitle}
         </h3>
      </div>
   )
}

export default Title;
