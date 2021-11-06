import Title from '../../components/Title/Title';
import Header from './Header/Header';
import Hr from '../../components/Hr/Hr';
import WorkCaseTiser from '../Portfolio/WorkCaseTiser/WorkCaseTiser';
import Btn from '../../components/Btn/Btn';
import data from '../../data';

const HomePage = () => {
	return (
		<section className="page">
			<section>
				<Title
					title="Successful Front-end Development"
					subtitle="Hi. I’m Ian, a freelance Front-end Developer with 12 years commercial experience creating successful websites."
				/>
				<Header />
			</section>
			<Hr />
			<section className="section">
				<Title title="Featured Work" />
				{data.portfolio.map((wCase) => {
					if (wCase.featured) {
						return <WorkCaseTiser key={wCase.title} props={{ ...wCase }} />;
					}
					return null;
				})}
			</section>
			<Btn/>
		</section>
	);
};

export default HomePage;