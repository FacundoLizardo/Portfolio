import man from "../../../assets/man.avif";
import styles from "./AboutMe.module.css";
import Certificado2 from "/Certificado2.svg";
import certificadoHenry from "/certificadoHenry.svg";
import TA from "/TA.svg";

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
					I spent three years in the USA learning my second language, English.
				</p>
				<p className={styles.p5}>
					{" "}
					By the end of 2023, I earned my certification as a Full Stack
					Developer at Henry, where I also had the opportunity to assist the
					newest students in the process of starting to learn programming as a
					teaching assistant.
				</p>
			</article>
			<div className={styles.certifications}>
				<div>
					<a
						href="https://www.efset.org/cert/ji2hLU"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={Certificado2}></img>
					</a>
				</div>
				<div>
					<a
						href="https://certificates.soyhenry.com/new-cert?id=546f86824bb8cf9b6f7aeecb74ce6a3ef21113a3b7619c1728abbfa88c000b1d"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={certificadoHenry}></img>
					</a>{" "}
				</div>
				<div>
					{" "}
					<a
						href="https://certificates.soyhenry.com/new-cert?id=aba465e4880f30cf14ba712bdffed2ce7e6f1d9316e5c6271fb56b269bd4e98f"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={TA}></img>
					</a>{" "}
				</div>
			</div>
		</div>
	);
};
