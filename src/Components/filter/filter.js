import './filter.scss';

const Filter = (props) => {
	const buttonData = [
		{name: 'Brazil', label: 'Brazil'},
		{name: 'Kenya', label: 'Kenya'},
		{name: 'Columbia', label: 'Columbia'}
	];

	const buttons = buttonData.map(({name, label}) => {
		const active = props.active === name;
		let buttonClass = 'filter__filter-btn';
		if(active) {
			buttonClass += '-active';
		}

		return (
			<button className={buttonClass}
					key={name}>
						{label}
						</button>
		)
	})
	return (
		<div className="filter">
			<div className="filter__search">
				<span className="filter__search-label">Looking for</span>
				<input type="text"
					   className='filter__search-input'
					   placeholder='start typing here...' />
			</div>
			<div className="filter__filter">
				<span className="filter__filter-label">Or filter</span>
				<div className="filter__filter-buttons">{buttons}</div>
			</div>
		</div>
	);
}

export default Filter;