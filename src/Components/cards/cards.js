import './cards.scss';

const Cards = ({ourBest ,assortment, cardsType}) => {

	let elements = [];
	if(cardsType === 'ourBest') {
		elements = ourBest.map(({src,name,country,price,mod, id}) => {
			let clazz = 'cards__item';
			if(mod) {
				clazz += ' cards__item-our-best';
			} else {
				clazz += ' cards__item-our-beans';
			}
			const countryName = country ? <div className='cards__item-country'>{country}</div> : <div className='cards__item-country'></div>;
			return (
				<a key={id} href='#' className={clazz}>
					<img src={src} alt="card" />
					 <div className={`cards__item-name`}>{name}</div>
					 {countryName}
					 <div className={'cards__item-price'}>{price}</div>
				</a>
			)
		})
	}
	if(cardsType === 'assortment') {
		elements = assortment.map(({src,name,country,price,mod, id}) => {
			let clazz = 'cards__item';
			if(mod) {
				clazz += ' cards__item-our-best';
			} else {
				clazz += ' cards__item-our-beans';
			}
			const countryName = country ? <div className='cards__item-country'>{country}</div> : <div className='cards__item-country'></div>;
			return (
				<a key={id} href='#' className={clazz}>
					<img src={src} alt="card" />
					 <div className={`cards__item-name`}>{name}</div>
					 {countryName}
					 <div className={'cards__item-price'}>{price}</div>
				</a>
			)
		})
	} 

	return(
		<div className="cards">
			{elements}
		</div>
	)
}

export default Cards;