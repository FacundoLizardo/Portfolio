import styles from "./home.module.css";
import { NavBar } from "../Components/NavBar/NavBar";
import { NameAndLinks } from "../Components/Name and Links/NameAndLinks";
import { AboutMe } from "../Components/AboutMe/AboutMe";
import { useRef } from "react";
const Home = () => {
	//const refNameAndLinks = useRef(null);
	//const refAboutme = useRef(null);
	return (
		<div className={styles.mainContainer}>
			<NavBar />
			<NameAndLinks />
			<AboutMe />
		</div>
	);
};

export default Home;
