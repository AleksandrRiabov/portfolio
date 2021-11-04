import WorkCaseTiser from "./WorkCaseTiser/WorkCaseTiser"
import data from "../../data"
import Title from "../../components/Title/Title"
import Btn from "../../components/Btn/Btn"

const Portfolio = () => {

   return (
      <div className={"page"}>
         <Title
            title="Front-end Development Portfolio"
            subtitle="Succeed online with a website that is fast, easy to use, and built with best practices and a passion for design."
         />
         {data.portfolio.map(wCase => {
            return <WorkCaseTiser key={wCase.title} props={{ ...wCase }} />
         })}
         <Btn text="Get In Touch" path="/contacts"/>
      </div>
   )
}

export default Portfolio
