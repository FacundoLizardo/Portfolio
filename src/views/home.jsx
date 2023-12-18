import styles from "./home.module.css";
import { NavBar } from "../Components/NavBar/NavBar";
import { NameAndLinks } from "../Components/Name and Links/NameAndLinks";
import { AboutMe } from "../Components/AboutMe/AboutMe";

const Home = () => {
	return (
		<div className={styles.mainContainer}>
			<NavBar />
			<NameAndLinks />
			<AboutMe />
		</div>
	);
};

export default Home;
