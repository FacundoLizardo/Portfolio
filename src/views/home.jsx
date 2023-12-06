import styles from "./home.module.css";
import { useRef } from "react";
import man from "../../assets/Images/man.avif";
import Projects from "../Components/Projects/Projects";

const Home = () => {
	const sectionHead = useRef(null);
	const sectionDescirption = useRef(null);
	const sectionProjects = useRef(null);
	// Agrega más referencias para cada sección según sea necesario

	const scrollToSection = (ref) => {
		console.log(ref);
		console.log("hola");
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.lSide}>
				<img src={man} className={styles.profilePic} />

				<h3
					onClick={() => scrollToSection(sectionHead)}
					className={styles.listE}
				>
					Links
				</h3>
				<h3
					onClick={() => scrollToSection(sectionDescirption)}
					className={styles.listE}
				>
					Sobre mi
				</h3>
				<h3
					onClick={() => scrollToSection(sectionProjects)}
					className={styles.listE}
				>
					Proyectos
				</h3>
				<h3 className={styles.listE}>Tecnologias</h3>
			</div>
			<div className={styles.rSide}>
				<div className={styles.head} ref={sectionHead}>
					<div className={styles.nameAndLinks}>
						<h2 className={styles.name}>Facundo Lizardo</h2>
						<div className={styles.links}>
							<a
								href={"https://www.linkedin.com/in/facundolizardo/"}
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 256 256"
									id="linkedin-logo"
									height="80"
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
							</a>
							<a
								href={"https://github.com/FacundoLizardo"}
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									stroke="#ffffff"
									viewBox="0 0 64 64"
									height="70"
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
										className="color000 svgShape"
										strokeWidth={2}
									></ellipse>
								</svg>
							</a>

							<a
								href={
									"https://docs.google.com/document/d/1ZFe7vaJfPOXd_lmddXrbIjsafCzxjSk5vcgBnBeCY9I/edit"
								}
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									fill="#ffffff"
									height="56px"
									width="56px"
									viewBox="0 0 512 512"
									className={styles.cv}
								>
									<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
									<g
										id="SVGRepo_tracerCarrier"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke="#CCCCCC"
										stroke-width="18.432"
									></g>
									<g id="SVGRepo_iconCarrier">
										{" "}
										<g transform="translate(1 1)">
											{" "}
											<g>
												{" "}
												<g>
													{" "}
													<path d="M373.576,92.448c5.828-6.13,9.424-14.401,9.424-23.475c0-18.773-15.36-34.133-34.133-34.133 c-18.773,0-34.133,15.36-34.133,34.133c0,9.075,3.596,17.345,9.424,23.475c-15.76,8.754-26.491,25.578-26.491,44.792v40.96 c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-40.96c0-18.773,15.36-34.133,34.133-34.133 c18.773,0,34.133,15.36,34.133,34.133v40.96c0,5.12,3.413,8.533,8.533,8.533s8.533-3.413,8.533-8.533v-40.96 C400.067,118.026,389.336,101.203,373.576,92.448z M331.8,68.973c0-9.387,7.68-17.067,17.067-17.067 c9.387,0,17.067,7.68,17.067,17.067s-7.68,17.067-17.067,17.067C339.48,86.04,331.8,78.36,331.8,68.973z"></path>{" "}
													<path d="M425.667-1H84.333c-14.507,0-25.6,11.093-25.6,25.6v460.8c0,14.507,11.093,25.6,25.6,25.6h341.333 c14.507,0,25.6-11.093,25.6-25.6V24.6C451.267,10.093,440.173-1,425.667-1z M434.2,485.4c0,5.12-3.413,8.533-8.533,8.533H84.333 c-5.12,0-8.533-3.413-8.533-8.533V24.6c0-5.12,3.413-8.533,8.533-8.533h341.333c5.12,0,8.533,3.413,8.533,8.533V485.4z"></path>{" "}
													<path d="M391.533,220.867H118.467c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h273.067 c5.12,0,8.533-3.413,8.533-8.533S396.653,220.867,391.533,220.867z"></path>{" "}
													<path d="M391.533,340.333H118.467c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h273.067 c5.12,0,8.533-3.413,8.533-8.533S396.653,340.333,391.533,340.333z"></path>{" "}
													<path d="M306.2,263.533h-42.667c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533H306.2 c5.12,0,8.533-3.413,8.533-8.533C314.733,266.947,311.32,263.533,306.2,263.533z"></path>{" "}
													<path d="M348.867,280.6c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-8.533c-5.12,0-8.533,3.413-8.533,8.533 c0,5.12,3.413,8.533,8.533,8.533H348.867z"></path>{" "}
													<path d="M263.533,314.733h25.6c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-25.6c-5.12,0-8.533,3.413-8.533,8.533 S258.413,314.733,263.533,314.733z"></path>{" "}
													<path d="M314.733,306.2c0,5.12,3.413,8.533,8.533,8.533H383c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-59.733 C318.147,297.667,314.733,301.08,314.733,306.2z"></path>{" "}
													<path d="M118.467,280.6h42.667c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-42.667 c-5.12,0-8.533,3.413-8.533,8.533C109.933,277.187,113.347,280.6,118.467,280.6z"></path>{" "}
													<path d="M203.8,280.6c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-8.533c-5.12,0-8.533,3.413-8.533,8.533 c0,5.12,3.413,8.533,8.533,8.533H203.8z"></path>{" "}
													<path d="M297.667,391.533c0-5.12-3.413-8.533-8.533-8.533h-25.6c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533 h25.6C294.253,400.067,297.667,396.653,297.667,391.533z"></path>{" "}
													<path d="M383,383h-59.733c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533H383c5.12,0,8.533-3.413,8.533-8.533 C391.533,386.413,388.12,383,383,383z"></path>{" "}
													<path d="M323.267,417.133h-25.6c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533h25.6c5.12,0,8.533-3.413,8.533-8.533 S328.387,417.133,323.267,417.133z"></path>{" "}
													<path d="M383,417.133h-25.6c-5.12,0-8.533,3.413-8.533,8.533s3.413,8.533,8.533,8.533H383c5.12,0,8.533-3.413,8.533-8.533 S388.12,417.133,383,417.133z"></path>{" "}
													<path d="M161.133,383h-42.667c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533h42.667 c5.12,0,8.533-3.413,8.533-8.533C169.667,386.413,166.253,383,161.133,383z"></path>{" "}
													<path d="M203.8,383h-8.533c-5.12,0-8.533,3.413-8.533,8.533c0,5.12,3.413,8.533,8.533,8.533h8.533 c5.12,0,8.533-3.413,8.533-8.533C212.333,386.413,208.92,383,203.8,383z"></path>{" "}
													<path d="M118.467,84.333H178.2c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-59.733 c-5.12,0-8.533,3.413-8.533,8.533S113.347,84.333,118.467,84.333z"></path>{" "}
													<path d="M118.467,152.6H178.2c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-59.733 c-5.12,0-8.533,3.413-8.533,8.533C109.933,149.187,113.347,152.6,118.467,152.6z"></path>{" "}
													<path d="M212.333,84.333h8.533c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-8.533c-5.12,0-8.533,3.413-8.533,8.533 S207.213,84.333,212.333,84.333z"></path>{" "}
													<path d="M212.333,118.467H255c5.12,0,8.533-3.413,8.533-8.533S260.12,101.4,255,101.4h-42.667c-5.12,0-8.533,3.413-8.533,8.533 S207.213,118.467,212.333,118.467z"></path>{" "}
													<path d="M212.333,152.6h8.533c5.12,0,8.533-3.413,8.533-8.533c0-5.12-3.413-8.533-8.533-8.533h-8.533 c-5.12,0-8.533,3.413-8.533,8.533C203.8,149.187,207.213,152.6,212.333,152.6z"></path>{" "}
													<path d="M212.333,186.733H255c5.12,0,8.533-3.413,8.533-8.533s-3.413-8.533-8.533-8.533h-42.667c-5.12,0-8.533,3.413-8.533,8.533 S207.213,186.733,212.333,186.733z"></path>{" "}
												</g>{" "}
											</g>{" "}
										</g>{" "}
									</g>
								</svg>
							</a>
						</div>
					</div>
				</div>

				<section
					className={styles.personalDescription}
					ref={sectionDescirption}
				>
					{" "}
					<p className={styles.parrafo}>
						En las profundidades del universo, donde las estrellas bailan en un
						ballet cósmico, surge una sinfonía de misterios insondables.
						Planetas danzan alrededor de soles ancianos, tejendo historias en
						las telas del espacio-tiempo. En este vasto lienzo estelar, la
						curiosidad es la brújula que guía a mentes exploradoras. En un
						rincón remoto de la galaxia, una civilización de seres luminosos
						desarrolla tecnologías que desafían las leyes conocidas de la
						física. Sus ciudades flotan sobre nubes de energía, y sus
						pensamientos se entrelazan en una red de conocimiento colectivo.
						Exploran los rincones más oscuros del cosmos, desentrañando enigmas
						que desafían la comprensión humana. Mientras tanto, en un pequeño
						planeta azul, criaturas curiosas exploran su propio entorno. Sus
						ciudades brillan con luces que cuentan historias de logros y
						desafíos. La naturaleza se convierte en su maestra, enseñándoles
						lecciones de resiliencia y cooperación. Aunque sus destinos están
						entrelazados con los hilos del cosmos, su enfoque en la vida
						cotidiana revela la belleza de lo simple. En el espacio
						interdimensional, se entrelazan realidades alternas. Seres de
						energía pura coexisten con formas de vida que desafían las leyes
						biológicas. Las fronteras entre lo real y lo imaginario se
						desdibujan, dando paso a posibilidades infinitas. En este caos
						creativo, se gestan nuevas formas de existencia que desafían
						cualquier descripción convencional.
					</p>
				</section>
				<section className={styles.projects} ref={sectionProjects}>
					<Projects />
				</section>
			</div>
		</div>
	);
};

export default Home;
