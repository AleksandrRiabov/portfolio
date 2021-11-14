import './About.css';
import Title from '../../components/Title/Title';
import Btn from "../../components/Btn/Btn";
import Aleks from '../../images/Aleks.jpg';

const About = () => {
	return (
		<section className="page">
			<Title title="About Aleksandr Riabov" />
			<div className="sectionAbout">
				<p className="inline">
					<img
						src={Aleks}
						alt="Aleksandr Riabov"
						className="img"
					/>
					I am a Front-end Developer with 12 years commercial experience, author of CSS3
					Foundations, and graduate of Internet Technology. I create successful websites
					that are fast, easy to use, and built with best practices.
				</p>

				<p>
					I work to make a better web; one that is fast, easy to use, beautiful,
					accessible to all, and frustration-free. Regardless of your specific business
					requirements, in solving these challenges, you have a great chance of finding
					success online.
				</p>
				<p>
					My main experience is in front-end development but I also have a passion for
					design. Given that producing a modern website requires the combination of
					design, server technology, and the layer that users interacts with, I believe
					having experience in both design and development allows for making the most
					optimal user experiences.
				</p>
				<p>
					My clients have found that hiring me has saved them time and money, made it
					easier to grow their website alongside their business, and made for a product
					that is consistently of high quality.
				</p>
			</div>
			<Btn />
		</section>
	);
};

export default About;