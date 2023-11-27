import educaStreamImg from "../../../assets/Images/ProjetImages/Educastream.jpg";
import imgEducaStreamLogo from "../../../assets/Images/imgLogos/educaStreamLogo.png";
import Card from "../Card/Card";
//import style from "../Projects/";

const Projects = () => {
	const listProjects = [
		{
			id: 1,
			title: "EducaStream",

			img: educaStreamImg,
			url: "https://educastream.vercel.app/",

			logo: imgEducaStreamLogo,
		},
	];

	return (
		<div>
			{listProjects.map((project) => {
				<Card project={project} key={project.id} />;
			})}
		</div>
	);
};
export default Projects;

//className={style.mainContainer}
