import './divider.scss';
import dividerWhite from '../../images/divider_beans_white.svg';
import dividerBlack from '../../images/divider_beans_black.svg'

const Divider = ({color}) => {

	let className = 'divider__line';
	let src = dividerWhite;
	if(color === 'black') {
		className += ` divider__line-${color}`;
		src = dividerBlack;
	}
	return (
		<div className="divider">
			<div className={className}></div>
			<img src={src} alt="beans" className='divider__img' />
			<div className={className}></div>
		</div>
	);
}

export default Divider;