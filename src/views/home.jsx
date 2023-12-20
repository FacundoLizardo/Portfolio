import styles from "./home.module.css";
import { NavBar } from "../Components/NavBar/NavBar";
import { NameAndLinks } from "../Components/Name and Links/NameAndLinks";
import { AboutMe } from "../Components/AboutMe/AboutMe";
import { Projects } from "../Components/Projects/Projects";
import { Technologies } from "../Components/Technologies/Technologies";
const Home = () => {
	return (
		<div className={styles.mainContainer}>
			<NavBar />
			<NameAndLinks />
			<AboutMe />
			<Projects />
			<Technologies />
		</div>
	);
};

export default Home;
