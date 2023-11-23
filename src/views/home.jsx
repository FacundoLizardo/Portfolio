import styles from "./home.module.css";
import profilePic from "../../Images/profilePic.webp";

const Home = () => {
	return (
		<div className={styles.mainContainer}>
			<div className={styles.head}>
				<img src={profilePic} className={styles.profilePic} />
				<div className={styles.nameAndLinks}>
					<h2 className={styles.name}>Facundo Lizardo</h2>
					<div className={styles.links}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 256 256"
							id="linkedin-logo"
							height="60"
							className={styles.linkedinLogo}
						>
							<rect width="256" height="256" fill="none" />
							<rect
								width="176"
								height="176"
								x="40"
								y="40"
								fill="none"
								stroke="#ffffff"
								stroke-width="8"
								rx="8"
							/>
							<line
								x1="120"
								x2="120"
								y1="112.001"
								y2="176.001"
								fill="none"
								stroke="#ffffff"
								stroke-width="8"
							/>
							<line
								x1="88"
								x2="88"
								y1="112.001"
								y2="176.001"
								fill="none"
								stroke="#ffffff"
								stroke-width="8"
							/>
							<path
								fill="none"
								stroke="#ffffff"
								stroke-width="8"
								d="M120,140.00094a28,28,0,1,1,56,0v36"
							/>
							<circle cx="88" cy="80" r="8" fill="#ffffff" />
						</svg>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="#ffffff"
							viewBox="0 0 64 64"
							height="53"
							className={styles.gitHubLogo}
						>
							<path
								d="M20 56a4 4 0 0 0 4-4 8 8 0 0 1 2.35-5.67s-13.69-1.53-16.6-7.41A21.67 21.67 0 0 1 8 29.42 17.23 17.23 0 0 1 11.9 18a15.43 15.43 0 0 1-.77-4.82C11.13 11 11 10 12 8c4.48 0 8 .85 11.37 3.52A39.58 39.58 0 0 1 32 10.7a39.58 39.58 0 0 1 8.63.82C44 8.85 47.52 8 52 8c1 1.95.87 3 .87 5.18A15.43 15.43 0 0 1 52.1 18 17.23 17.23 0 0 1 56 29.42a21.67 21.67 0 0 1-1.75 9.5c-2.91 5.88-16.6 7.41-16.6 7.41A8 8 0 0 1 40 52a4 4 0 0 0 4 4"
								class="color000 svgShape"
								strokeWidth={2}
							></path>
							<path
								d="M24 50.88c-4 2-6.31-.43-8.75-2S11 46.75 8 48"
								class="color000 svgShape"
								strokeWidth={2}
							></path>
							<ellipse
								cx="22.81"
								cy="31.72"
								rx="3.19"
								ry="4.82"
								class="color000 svgShape"
								strokeWidth={2}
							></ellipse>
							<ellipse
								cx="41.19"
								cy="31.72"
								rx="3.19"
								ry="4.82"
								class="color000 svgShape"
								strokeWidth={2}
							></ellipse>
						</svg>
					</div>
				</div>
			</div>

			<div className={styles.division} />
		</div>
	);
};

export default Home;
