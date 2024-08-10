import Cards from '../cards/cards';
import './assortment.scss';

const Assortment = ({data}) => {
	return (
		<section className="assortment">
			<div className="container">
				<Cards assortment={data} cardsType='assortment' />
			</div>
			
		</section>
	);
}

export default Assortment;