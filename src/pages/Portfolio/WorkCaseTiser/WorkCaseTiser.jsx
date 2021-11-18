import './WorkCaseTiser.css';
import { Link } from 'react-router-dom';

const WorkCase = ({
  props: { imgSmall, imgMedium, imgLarge, imgXl, desc, title, name },
}) => {
  return (
    <div className='workPreview'>
      <div className='left'>
        <div className='inner'>
          <Link to={`/portfolio/${name}`}>
            <div className='image small'>
              <img src={imgSmall} alt='' className='screenShot' />
            </div>
          </Link>
          <div className='titleWrapper'>
            <Link to={`/portfolio/${name}`}>
              <h3 className='title'>
                <span className='arrow'> > </span>
                {title}
              </h3>
            </Link>
          </div>
          <p className='descriptions'>{desc}</p>
        </div>
      </div>
      <div className='right'>
        <Link to={`/portfolio/${name}`}>
          <div className='inner'>
            <div className='image xl'>
              <img src={imgXl} alt='' className='screenShot' />
            </div>
            <div className='image large'>
              <img src={imgLarge} alt='' className='screenShot' />
            </div>
            <div className='image medium'>
              <img src={imgMedium} alt='' className='screenShot' />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default WorkCase;

