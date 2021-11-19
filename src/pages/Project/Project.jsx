import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './Project.css';
import Btn from '../../components/Btn/Btn';
import Title from '../../components/Title/Title';
import data from '../../data';

import GitHub from '@mui/icons-material/GitHub';

const Project = () => {
  const [project, setProject] = useState({});
  const [notExist, setNotExist] = useState(false);
  const { projectName } = useParams();

  useEffect(() => {
    window.scroll(0, 0);

    const { portfolio } = data;
    const foundProject = portfolio.filter(
      (work) => work.name === projectName
    )[0];

    if (foundProject) {
      setProject(foundProject);
    } else {
      setNotExist(true);
    }
  }, [projectName]);

  if (notExist) {
    return (
	   <section className="page"> 
	     <h2 className="notExist">This page does not exist or has been removed, please go to <span className="neLink"><Link to="/portfolio">portfolio</Link></span> page..</h2>
		</section>
	);
  }

  const {
    url,
    github,
    technologies,
    title,
    subtitle,
    imgMedium,
    imgLarge,
    imgXl,
    paragraphs,
    desc,
  } = project;

  return (
    <section className='page'>
      <div className='project'>
        <div className='projectInner'>
          <div className='projectLeft'>
            <div className='projectWebsite'>
              <Btn text='View Website' link={url} />
            </div>
            <div className='projectTech'>
              <h6 className='projectTechTitle'>Technologies</h6>
              <ul className='projectTechList'>
                {technologies &&
                  technologies.map((tech) => {
                    return <li key={tech}>{tech}</li>;
                  })}
              </ul>
              <div className='projectGithub'>
                <a href={github} target='_blank' rel='noreferrer'>
                  <GitHub fontSize='inherit' />
                  <span>See code</span>
                </a>
              </div>
            </div>
          </div>
          <div className='projectRight'>
            <div className='projectRightInner'>
              <div className='projectTitle'>
                <Title title={title} subtitle={subtitle} position='start' />
              </div>
              <p>{desc}</p>
              <div className='projectImgWrapper'>
                <img className="imgXl" src={imgXl} alt='' width='100%' />
				 <img className="imgLg" src={imgLarge} alt='' width='100%' />
				<img className="imgMd" src={imgMedium} alt='' width='100%' />
              </div>
            </div>
          </div>
        </div>
        <div className='projectParagraphs'>
          <div className='paragraphsLeft'></div>
          <div className='paragraphsRight'>
            {paragraphs &&
              paragraphs.map((paragraph, index) => {
                return (
                  <p key={index} className=''>
                    {paragraph}
                  </p>
                );
              })}
          </div>
        </div>
        <Btn></Btn>
      </div>
    </section>
  );
};

export default Project;

