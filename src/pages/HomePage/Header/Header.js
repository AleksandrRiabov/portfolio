import './Header.css';
import HeaderCard from './HeaderCard/HeaderCard';
import JS from '../../../images/headerImages/JS.png';
import nodeJs from '../../../images/headerImages/nodeJs.png';
import mongoDB from '../../../images/headerImages/mongoDB.jpg';

const Header = () => {
	
  return (
    <div className='homeHeader'>
      <div className='headerInner'>
        <HeaderCard
          icon={JS}
          title='JavaScript'
          text='I can create single page application using REACT or add interactivity to the website.'
        />
        <HeaderCard
          icon={nodeJs}
          title='Node.Js'
          text='Able to write back-end server for web applications using "Express" framework.'
        />
        <HeaderCard
          icon={mongoDB}
          title='MongoDB'
          text='Have experience performing CRUD operations in MERN stack applications.'
        />
      </div>
    </div>
  );
};

export default Header;
