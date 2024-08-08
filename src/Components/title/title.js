import './title.scss';

const Title = ({subtitle, text, color}) => {
	let className = 'title';
	if(subtitle) {
		className += ' subtitle';
	}
	if(color) {
		className += ` title-${color}`;
	}
	return (
		<h2 className={className}>{text}</h2>
	)
}

export default Title;