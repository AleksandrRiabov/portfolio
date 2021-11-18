import WorkCaseTiser from './WorkCaseTiser/WorkCaseTiser';
import data from '../../data';
import Title from '../../components/Title/Title';
import Btn from '../../components/Btn/Btn';

const Portfolio = () => {
  return (
    <section className={'page'}>
      <Title
        title='My Portfolio'
        subtitle='See my works below. Unless explicitly stated otherwise, all their back-end and front-end parts were completely done by me..'
      />
      {data.portfolio.map((wCase) => {
        return <WorkCaseTiser key={wCase.title} props={{ ...wCase }} />;
      })}
      <Btn text='Get In Touch' path='/contacts' />
    </section>
  );
};

export default Portfolio;
