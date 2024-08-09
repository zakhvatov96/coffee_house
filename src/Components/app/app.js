import {Component} from 'react';
import Promo from '../promo/promo';
import AboutUs from '../about-us/about-us';
import OurBest from '../our-best/our-best';
import Footer from '../footer/footer';
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
				]
			}
		}
	}
	render() {
		const {data} = this.state;
		return (
			<div className="app">
				<Promo />
				<AboutUs />
				<OurBest data={data} />
				<Footer />
			</div>
		)
	}
}

export default App;