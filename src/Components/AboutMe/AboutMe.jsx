import man from "../../../assets/man.avif";
import styles from "./AboutMe.module.css";

export const AboutMe = () => {
	return (
		<div className={styles.aboutMeContainer} id="aboutMe">
			<div className={styles.imageAndName}>
				<div className={styles.image}>
					<img src={man}></img>
				</div>
				<div className={styles.name}>
					<h2>Hi! I'm Facundo Lizardo</h2>
				</div>
			</div>
			<article>
				<p className={styles.p1}>
					I was born on January 16, 1998, in Buenos Aires, Argentina.
				</p>
				<p className={styles.p2}>
					Passionate about technology since I can remember.{" "}
				</p>
				<p className={styles.p3}>
					I officially started my career in programming in 2023 after returning
					to Argentina from the United States.
				</p>
				<p className={styles.p4}>
					I spent three years in the USA learning my second language,{" "}
					<a
						href="https://www.efset.org/cert/ji2hLU"
						target="_blank"
						rel="noopener noreferrer"
					>
						English
					</a>
					.
				</p>
				<p className={styles.p5}>
					{" "}
					By the end of 2023, I obtained my{" "}
					<a
						href="https://certificates.soyhenry.com/new-cert?id=546f86824bb8cf9b6f7aeecb74ce6a3ef21113a3b7619c1728abbfa88c000b1d"
						target="_blank"
						rel="noopener noreferrer"
					>
						certification
					</a>{" "}
					as a Full Stack Developer at Henry.
				</p>
			</article>
		</div>
	);
};
