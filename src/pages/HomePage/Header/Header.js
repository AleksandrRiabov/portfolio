import './Header.css';
import HeaderCard from './HeaderCard/HeaderCard';

const Header = () => {
	return (
		<div className="homeHeader">
			<div className="headerInner">
				<HeaderCard
					icon="https://icon-library.com/images/node-js-icon/node-js-icon-4.jpg"
					title="JavaScript"
					text="Responsive websites built for an optimal user experience that achieves your business
				goals."
				/>
				<HeaderCard
					icon="https://green-api.com/integrations/img/nodejs.png"
					title="Node.Js"
					text="Responsive websites built eexeee rttgfrt for an optimal user experience that achieves your business
				goals."
				/>
				<HeaderCard
					icon="https://ih1.redbubble.net/image.438910675.6211/st,small,507x507-pad,600x600,f8f8f8.u2.jpg"
					title="MongoDB"
					text="Responsive websites built for an optimal user experience that achieves your business
				goals."
				/>
			</div>
		</div>
	);
};

export default Header;