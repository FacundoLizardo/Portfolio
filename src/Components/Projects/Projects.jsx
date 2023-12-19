import educaStreamImg from "../../../assets/Images/ProjetImages/Educastream.jpg";
import imgEducaStreamLogo from "../../../assets/Images/imgLogos/educaStreamLogo.png";
import Card from "../Card/Card";
import Style from "../Projects/Projects.module.css";
import PI from "../../../assets/Images/ProjetImages/PI.jpg";

export const Projects = () => {
	const listProjects = [
		{
			id: 1,
			title: "EducaStream",

			img: educaStreamImg,
			url: "https://educastream.vercel.app/",

			logo: imgEducaStreamLogo,
		},
		{
			id: 2,
			title: "Individual Project",

			img: PI,
			url: "https://educastream.vercel.app/",

			logo: imgEducaStreamLogo,
		},
	];

	return (
		<div className={Style.projects} id="projects">
			{listProjects.map((project) => {
				return <Card project={project} key={project.id} />;
			})}
		</div>
	);
};
