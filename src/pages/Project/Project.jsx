import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Project.css'
import Btn from '../../components/Btn/Btn'
import Title from '../../components/Title/Title'
import data from '../../data'

import GitHub from '@mui/icons-material/GitHub'

const Project = () => {
   const [project, setProject] = useState({});
   const [notExist, setNotExist] = useState(false);
   const {projectName} = useParams();

   useEffect(() => {
      const {portfolio} = data;
      const foundProject = portfolio.filter(work => work.name === projectName)[0];
      
      if (foundProject) {
         setProject(foundProject);
      } else {
         setNotExist(true);
      }
   }, [projectName]);

   if (notExist){
      return  <h1>This Project does not exist</h1>
   }

   const {url, github, technologies, title, subtitle} = project;

   return (
      <section className="page">
         <div className="project">
            <div className="projectLeft">
               <div className="projectWebsite">
               <Btn text="View Website" link={url}/>
               </div>
               <div className="projectTech">
                  <h6 className="projectTechTitle">Technologies</h6>
                  <ul className="projectTechList">
                     {technologies && technologies.map(tech => {
                        return <li key={tech}>{tech}</li>
                     })}
                  </ul>
                  <div className="projectGithub">
                    <a href={github} >
                        <GitHub fontSize="inherit"/> See code
                        </a>
                    </div>
               </div>
            </div>
            <div className="projectRight">
               <div className="projectRightInner">
                  <div className="projectTitle">
                     <Title title={title} subtitle={subtitle} position="start" />
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Project
