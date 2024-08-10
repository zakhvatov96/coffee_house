import { Component } from 'react';
import './filter.scss';

class Filter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: '',
			filter: ''
		}
	}

	onChange = (e) => {
		this.setState({
			term: e.target.value
		})
		this.props.onSearch(e.target.value)
	}

	onFilter = (e) => {
		this.props.onFilter(e.target.getAttribute('data-btn'))
	}


	render() {
		const {active} = this.props;

		const buttonData = [
			{name: 'Brazil', label: 'Brazil'},
			{name: 'Kenya', label: 'Kenya'},
			{name: 'Columbia', label: 'Columbia'}
		];
	
		const buttons = buttonData.map(({name, label}) => {
			const activeClass = active === name;
			let buttonClass = 'filter__filter-btn';
			if(activeClass) {
				buttonClass += '-active';
			}
	
			return (
				<button className={buttonClass}
						key={name}
						data-btn={name}
						onClick={this.onFilter}>
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
						   placeholder='start typing here...'
						   value={this.state.term}
						   onChange={this.onChange} />
				</div>
				<div className="filter__filter">
					<span className="filter__filter-label">Or filter</span>
					<div className="filter__filter-buttons">{buttons}</div>
				</div>
			</div>
		);
	}
}

export default Filter;