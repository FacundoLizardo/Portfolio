import educaStreamImg from "../../../assets/Images/ProjetImages/Educastream.jpg";
import imgEducaStreamLogo from "../../../assets/Images/imgLogos/educaStreamLogo.png";
import Card from "../Card/Card";
import Style from "../Projects/Projects.module.css";

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
		<div className={Style.mainContainer}>
			{listProjects.map((project) => {
				return <Card project={project} key={project.id} />;
			})}
		</div>
	);
};
export default Projects;
