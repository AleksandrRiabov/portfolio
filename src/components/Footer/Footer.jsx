import './Footer.css';
import { Link } from 'react-router-dom';
import data from '../../data';

const FooterLink = ({ link }) => {
	return (
		<div key={link.name} className="footerLink">
			<div className="top">
				{link.icon}
				<p className="linkName">{link.name}</p>
			</div>
			<p className="desc">{link.message}</p>
		</div>
	);
};

const Footer = () => {
	return (
		<div className="footer">
			<div className="inner">
				<div className="left">
					<div className="card">
						<div className="imageWrapper">
							<img
								src="https://sun6-21.userapi.com/s/v1/if2/zDslb-1nxEdejJ8XsvjNDHSlggDvHKAbm1i_nunwTkwVrklYDvbs2hXY7Lg7RkYhFJXy8KVstLT9AL-7n4eDBlAu.jpg?size=200x375&quality=96&crop=37,37,565,1061&ava=1"
								alt="Me"
								width="100%"
							/>
						</div>
						<div className="about">
							<p>
								I am a Front-end Developer with 12 years commercial experience,
								author of CSS3 Foundations, and graduate of Internet Technology. I
								create successful websites that are fast, easy to use, and built
								with best practices.
							</p>
						</div>
					</div>
					<div className="jobTitle">
						<p>Junior Web Developer</p>
					</div>
				</div>
				<div className="right">
					<div className="footerLinks">
						{data.socialLinks.map((link) => {
							return (
								<a key={link.name} href={link.url}>
									<FooterLink link={link} />
								</a>
							);
						})}
					</div>
					<div className="footerLinks internalLinks">
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
			<div className="copiright">©2021 @Sania.Riabov@gmail.com</div>
		</div>
	);
};

export default Footer;