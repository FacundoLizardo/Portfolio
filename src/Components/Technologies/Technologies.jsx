import { skills } from "./skills";
import style from "./Technologies.module.css";
export const Technologies = () => {
	return (
		<>
			<section className={style.technologiesContainer} id="technologies">
				{skills.map((item, index) => (
					<div key={index} className={style.tec}>
						<div className={style.tecLogo}>{item.icon}</div>
						<div className={style.tecText}>
							<h3>{item.name}</h3>
							<p>{item.category}</p>
						</div>
					</div>
				))}
			</section>
		</>
	);
};
