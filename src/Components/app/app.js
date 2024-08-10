import {Component} from 'react';
import Promo from '../promo/promo';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';
import Header from '../header/header';
import AboutOur from '../about-our/about-our';
import Filter from '../filter/filter';
import Assortment from '../assortment/assortment';
import solimo from '../../images/solimo.png';
import presto from '../../images/presto.png';
import aromistico from '../../images/aromistico.png';


import './app.scss';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				ourBest: [
					{src: solimo, name: 'Solimo Coffee Beans 2 kg', country: null, price: '10.73$', mod: true, id: 0},
					{src: presto, name: 'Presto Coffee Beans 1 kg', country: null, price: '15.99$', mod: true, id: 1},
					{src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: null, price: '6.99$', mod: true, id: 2}
				],
				assortment: [
					{src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', mod: false, id: 0},
					{src: aromistico, name: 'BROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$', mod: false, id: 1},
					{src: aromistico, name: 'CROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', mod: false, id: 2},
					{src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', mod: false, id: 3},
					{src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', mod: false, id: 4},
					{src: aromistico, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', mod: false, id: 5}
				]
			},
			filter: '',
			term: ''
		}
	}

	searchGood = (data, term) => {
		return data.assortment.filter(item => {
			if(term !== '') {
				return item.name.indexOf(term) > -1
			}
			return item;
		})
	}

	onSearch = (term) => {
		this.setState({term})
	}

	filterGood = (data, filter) => {
		return data.filter(item => {
			if(filter === 'Brazil' || filter === 'Kenya' || filter === 'Columbia') {
				return item.country === filter;
			}
			return item;
			
		})
	}

	onFilter = (filter) => {
		this.setState({filter});
	}

	render() {
		const {data, filter, term} = this.state;
		const visibleData = this.filterGood(this.searchGood(data, term), filter);
		return (
			<div className="app">
				{/* <Promo />
				<AboutUs />
				<OurBest data={data.ourBest} />
				<Footer /> */}
				<Header />
				<AboutOur />
				<Filter active={filter} 
						onSearch={this.onSearch}
						onFilter={this.onFilter} />
				<Assortment data={visibleData} />
				<Footer />
			</div>
		)
	}
}

export default App;