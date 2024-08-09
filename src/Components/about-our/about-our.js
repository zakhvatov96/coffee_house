import Title from '../title/title';
import Divider from '../divider/divider';
import girl from '../../images/girl.png'
import './about-our.scss';

const AboutOur = (props) => {
	return (
		<div className="about-our">
			<div className="container">
				<div className="about-our__wrapper">
					<img src={girl} alt="" className="about-our__img" />
					<div className="about-our__descr">
						<Title color='black' 
							   subtitle={true}
							   text="About our beans" />
						<Divider color='black' />
						<div className="about-our__text">
						Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
						<br />
						<br />
						Afraid at highly months do things on at. Situation recommend objection do  intention
						<br /> so questions. <br />
						As greatly removed calling pleased improve an. Last ask him cold feel <br />
						met spot shy want. Children me laughing we prospect answered followed. At it went <br />
						is song that held help face.
						</div>
					</div>
				</div>
				<div className="about-our__divider"></div>
			</div>
		</div>
	);
}

export default AboutOur;