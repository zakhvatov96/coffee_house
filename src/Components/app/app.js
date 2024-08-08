import Promo from '../promo/promo';
import AboutUs from '../about-us/about-us';

import './app.scss';

const App = (props) => {
	return (
		<div className="app">
			<Promo />
			<AboutUs />
		</div>
	)
}

export default App;