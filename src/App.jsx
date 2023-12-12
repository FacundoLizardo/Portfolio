import styles from "./App.module.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./views/home";
import { useEffect } from "react";
const App = () => {
	return (
		<div className={styles.mainContainer}>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
};

export default App;
