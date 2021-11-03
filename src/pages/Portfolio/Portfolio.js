import WorkCaseTiser from "./WorkCaseTiser/WorkCaseTiser"
import data from "../../data"

const Portfolio = () => {


   return (
      <div>
         {data.portfolio.map(wCase => {
            return <WorkCaseTiser key={wCase.title} props={{...wCase}}/>
         })}
      </div>
   )
}

export default Portfolio
