import styles from "./home.module.css";
import { NavBar } from "../Components/NavBar/NavBar";
import { NameAndLinks } from "../Components/Name and Links/NameAndLinks";
import { AboutMe } from "../Components/AboutMe/AboutMe";
import { Projects } from "../Components/Projects/Projects";
import { Technologies } from "../Components/Technologies/Technologies";
import { TrackRecordBanner } from "../Components/Banners/TrackRedordBanner/TrackRecordBanner";
import { TrackRecord } from "../Components/TrackRedord/TrackRecord";
import { AboutMeBanner } from "../Components/Banners/AboutMeBanner/AboutMeBanner";
import { ProjectsBanner } from "../Components/Banners/ProjectsBanner/ProjectsBanner";
import { StackBanner } from "../Components/Banners/StackBanner/StackBanner";
const Home = () => {
	return (
		<div className={styles.mainContainer}>
			<NavBar />
			<NameAndLinks />
			<AboutMeBanner />
			<AboutMe />
			<TrackRecordBanner />
			<TrackRecord />
			<ProjectsBanner />
			<Projects />
			<StackBanner />
			<Technologies />
		</div>
	);
};

export default Home;
