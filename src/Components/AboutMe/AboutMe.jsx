import styles from "./AboutMe.module.css";

export const AboutMe = () => {
	return (
		<div className={styles.aboutMeContainer} id="aboutMe">
			<h2>Hi! I'm Facundo Lizardo</h2>
			<p>I was born on January 16, 1998, in Buenos Aires, Argentina.</p>
			<p>Passionate about technology since I can remember. </p>
			<p>
				I officially started my career in programming in 2023 after returning to
				Argentina from the USA, where I spent three years learning my second
				language, English.
			</p>
			<p>
				{" "}
				By the end of 2023, I obtained{" "}
				<a
					href="https://certificates.soyhenry.com/new-cert?id=546f86824bb8cf9b6f7aeecb74ce6a3ef21113a3b7619c1728abbfa88c000b1d"
					target="_blank"
					rel="noopener noreferrer"
				>
					- certification -
				</a>{" "}
				as a Full Stack Developer at Henry.
			</p>
		</div>
	);
};
