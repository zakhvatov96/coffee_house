import Title from '../title/title';
import Cards from '../cards/cards';
import './our-best.scss';

const OurBest = ({data}) => {
	return (
		<section className="our-best">
			<div className="container">
				<Title text="Our best" 
					   color="black"
					   subtitle={true} />
				<Cards ourBest={data} cardsType='ourBest'/>
			</div>
		</section>
	);
}

export default OurBest;