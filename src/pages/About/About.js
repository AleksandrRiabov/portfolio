import './About.css';
import Title from '../../components/Title/Title';
import Btn from '../../components/Btn/Btn';
import Aleks from '../../images/Aleks.jpg';

const About = () => {
  return (
    <section className='page'>
      <Title title='About Me' />
      <div className='sectionAbout'>
        <p className='inline'>
          <img src={Aleks} alt='web developer' className='img' />
          I'm proactive and results oriented self-taught web development
          enthusiast, I have a keen interest in emerging technology and key
          strengths in HTML, CSS, JavaScript, React, Node.Js (Express), MongoDB.
        </p>

        <p>
          In addition to my professional qualifications, I have also recently
          completed the ‘The Web Developer Bootcamp’ with Udemy, and I use my
          free time to refine these skills wherever I can. In parallel, I have
          proactively sought work experience where I can utilise my computer
          knowledge whilst developing my interpersonal and communication skills.
          I am now looking for a Junior Web Developer or Software Engineer role,
          where I can continue to learn and develop, whilst adding value to my
          team.
        </p>
      </div>
      <Btn />
    </section>
  );
};

export default About;
