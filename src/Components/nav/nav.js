import './nav.scss';
import imgWhite from '../../images/pseudo_beans_white.svg';
import imgBlack from '../../images/pseudo_beans_black.svg';

const Nav = ({color}) => {
	let className = 'nav';
	let src = imgWhite;
	if (color === 'black') {
		className += ' nav-black'
		src = imgBlack;
	}
	return (
		<nav className={className}>
			<img className='nav__img' src={src} alt="beans" />
			<ul className="nav__list">
				<li><a href="#">Coffee house</a></li>
				<li><a href="#">Our coffee</a></li>
				<li><a href="#">For your pleasure</a></li>
			</ul>
		</nav>
	);
}

export default Nav;