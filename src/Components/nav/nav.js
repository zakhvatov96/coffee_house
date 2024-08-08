import './nav.scss';
import img from '../../images/pseudo_beans.svg'

const Nav = (props) => {
	return (
		<nav className="nav">
			<img className='nav__img' src={img} alt="beans" />
			<ul className="nav__list">
				<li><a href="#">Coffee house</a></li>
				<li><a href="#">Our coffee</a></li>
				<li><a href="#">For your pleasure</a></li>
			</ul>
		</nav>
	);
}

export default Nav;