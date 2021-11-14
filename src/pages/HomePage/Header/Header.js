import './Header.css';
import HeaderCard from './HeaderCard/HeaderCard';
import JS from '../../../images/headerImages/JS.png';
import nodeJs from '../../../images/headerImages/nodeJs.png';
import mongoDB from '../../../images/headerImages/mongoDB.jpg';
const Header = () => {
	return (
		<div className="homeHeader">
			<div className="headerInner">
				<HeaderCard
					icon={JS}
					title="JavaScript"
					text="Responsive websites built for an optimal user experience that achieves your business
				goals."
				/>
				<HeaderCard
					icon={nodeJs}
					title="Node.Js"
					text="Responsive websites built eexeee rttgfrt for an optimal user experience that achieves your business
				goals."
				/>
				<HeaderCard
					icon={mongoDB}
					title="MongoDB"
					text="Responsive websites built for an optimal user experience that achieves your business
				goals."
				/>
			</div>
		</div>
	);
};

export default Header;