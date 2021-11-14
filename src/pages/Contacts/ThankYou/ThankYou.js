import {useEffect} from 'react';
import './ThankYou.css';
import Title from '../../../components/Title/Title';

const ThankYou = ({message}) => {
     useEffect(() => {
		 window.scroll(0,0)
	 })
	return (
		<div className="thanks">
			<div className="thanksContent">
				<Title title="Thank You!" subtitle={message} />
			</div>
		</div>
	);
};

export default ThankYou;