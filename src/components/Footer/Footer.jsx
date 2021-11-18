import './Footer.css';
import { Link } from 'react-router-dom';
import Aleks from '../../images/Aleks.jpg';
import data from '../../data';

const FooterLink = ({ link }) => {
  return (
    <div key={link.name} className='footerLink'>
      <div className='top'>
        {link.icon}
        <p className='linkName'>{link.name}</p>
      </div>
      <p className='desc'>{link.message}</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className='footer'>
      <div className='inner'>
        <div className='left'>
          <div className='card'>
            <div className='imageWrapper'>
              <img src={Aleks} alt='Me' width='100%' />
            </div>
            <div className='about'>
              <p>
                I'm proactive and results oriented self-taught web
                development enthusiast, I have a keen interest in emerging
                technology and key strengths in HTML, CSS, JavaScript, React,
                Node.Js (Express), MongoDB.
              </p>
            </div>
          </div>
        </div>
        <div className='right'>
          <div className='footerLinks'>
            {data.socialLinks.map((link) => {
              return (
                <a key={link.name} href={link.url}>
                  <FooterLink link={link} />
                </a>
              );
            })}
          </div>
          <div className='footerLinks internalLinks'>
            {data.links.map((link) => {
              if (link.message) {
                return (
                  <Link key={link.name} to={link.url}>
                    <FooterLink link={link} />
                  </Link>
                );
              } else {
                return '';
              }
            })}
          </div>
        </div>
      </div>
      <div className='copiright'>©2021 @Sania.Riabov@gmail.com</div>
    </div>
  );
};

export default Footer;