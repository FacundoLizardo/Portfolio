import styles from "./home.module.css";
import { useRef } from "react";
import man from "../../assets/Images/man.avif";
import Projects from "../Components/Projects/Projects";
import { NavBar } from "../Components/NavBar/NavBar";
import { NameAndLinks } from "../Components/Name and Links/NameAndLinks";

const Home = () => {
	const sectionDescirption = useRef(null);
	const sectionProjects = useRef(null);
	// Agrega más referencias para cada sección según sea necesario

	const scrollToSection = (ref) => {
		console.log(ref);
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div className={styles.mainContainer}>
			<NavBar />

			<NameAndLinks />

			{/* <section
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
				</section> */}
		</div>
	);
};

export default Home;
