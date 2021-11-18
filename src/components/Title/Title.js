import './Title.css';

const Title = ({ title = '', subtitle = '', position = 'center' }) => {
  return (
    <div className='titleRoot' style={{ textAlign: position }}>
      <h1 className='title'>{title}</h1>
      <h3 className='subtitle'>{subtitle}</h3>
    </div>
  );
};

export default Title;
