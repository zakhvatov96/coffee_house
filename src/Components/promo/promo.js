import Nav from '../nav/nav';
import Title from '../title/title';
import Divider from '../divider/divider';
import './promo.scss';

const Promo = (props) => {
	return (
		<div className="promo">
			<Nav />
			<div className="container"></div>
			<Title text='Everything You Love About Coffee'/>
			<Divider />
			<Title subtitle={true} text='We makes every day full of energy and taste' />
			<Title subtitle={true} text='Want to try our beans?' />
			<button className="promo__btn">More</button>
		</div>

	);
}

export default Promo;