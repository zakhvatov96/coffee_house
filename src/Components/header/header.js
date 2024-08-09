import Nav from '../nav/nav';
import Title from '../title/title';
import './header.scss';

const Header = (props) => {
	return (
		<div className="header">
			<Nav />
			<div className="container">
				<Title text='Our Coffee' />
			</div>

		</div>
	);
}

export default Header;