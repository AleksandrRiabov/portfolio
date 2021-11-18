import './HeaderCard.css';

const HeaderCard = ({ icon, title, text }) => {
  return (
    <div className='headerCard'>
      <div className='headerCardInner'>
        <div className='headerCardIcon'>
          <img src={icon} alt='' width='100%' />
        </div>
        <div className='headerCardText'>
          <h4 className='headrerCardTitle'>{title}</h4>
          <p className='headerCardDecs'>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
