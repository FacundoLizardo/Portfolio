import style from "../Card/Card.module.css";
const Card = ({ project }) => {
	const { id, title, img, url, logo } = project;

	return (
		<div className={style.card} key={project.id}>
			<a href={url} target="_blank" rel="noopener noreferrer">
				<div className={style.cardTop}>
					{" "}
					<img src={img} alt={title} />
				</div>
			</a>

			<div className={style.cardButton}>
				<img src={logo} alt={logo} />
				<h3>{title} </h3>
			</div>
		</div>
	);
};
export default Card;
