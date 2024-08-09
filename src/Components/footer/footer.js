import Nav from '../nav/nav';
import Divider from '../divider/divider';

import './footer.scss';

const Footer = (props) => {
	return (
		<footer className="footer">
			<Nav color='black' />
			<Divider color='black' />
		</footer>
	);
}

export default Footer;