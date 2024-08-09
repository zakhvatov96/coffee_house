import './cards.scss';

const Cards = ({data}) => {

	const elements = data.ourBest.map(({src,name,country,price,mod, id}) => {
		const clazz = mod ? '-our-best' : '-our-beans';
		const countryName = country ? <div>{country}</div> : '';
		return (
			<a key={id} href='#' className={`cards__item${clazz}`}>
				<img src={src} alt="card" />
				 <div className={`cards__item${clazz}-name`}>{name}</div>
				 {country}
				 <div className={`cards__item${clazz}-price`}>{price}</div>
			</a>
		)
	})
	return(
		<div className="cards">
			{elements}
		</div>
	)
}

export default Cards;