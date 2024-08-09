import './cards.scss';

const Cards = ({data}) => {

	const elements = data.ourBest.map(({src,name,country,price,mod, id}) => {
		const clazz = mod ? '-our-best' : '-our-beans';
		return (
			<a key={id} href='#' class={`cards__item${clazz}`}>
				<img src={src} alt="card" />
				 <div className={`cards__item${clazz}-name`}>{name}</div>
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