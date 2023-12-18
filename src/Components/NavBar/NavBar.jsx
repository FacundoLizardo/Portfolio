import styles from "../NavBar/NavBar.module.css";
import man from "../../../assets/Images/man.avif";
import React, { useState } from "react";

export const NavBar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};
	const scrollToSection = (ref) => {
		console.log(ref);
		if (ref.current) {
			ref.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	let prevScrollpos = window.scrollY;
	window.onscroll = function () {
		console.log(document.getElementById("navBar"));
		let currentScrollPos = window.scrollY;
		if (prevScrollpos > currentScrollPos) {
			document.getElementById("navBar").style.top = "0";
		} else {
			document.getElementById("navBar").style.top = "-100px";
		}
		prevScrollpos = currentScrollPos;
	};
	return (
		<>
			<div id="navBar" className={styles.navBarContainer}>
				<nav>
					<div className={styles.profilePic}>
						<img src={man} />
					</div>
					<div
						className={`${styles.navbarLinks} ${
							isModalOpen ? styles.active : ""
						}`}
					>
						<ul>
							<li>
								<a onClick={() => scrollToSection(sectionHead)}>LINKS</a>
							</li>
							<li>
								<a onClick={() => scrollToSection(sectionDescirption)}>
									ABOUT ME
								</a>
							</li>
							<li>
								<a onClick={() => scrollToSection(sectionProjects)}>PROJECTS</a>
							</li>
							<li>
								<a>TECNOLOGIES</a>
							</li>
						</ul>
					</div>

					<div>
						{isModalOpen ? (
							<button onClick={closeModal} className={styles.closeModalButton}>
								{" "}
								<svg viewBox="0 0 24 24">
									<path
										fill="none"
										stroke="#ffffff"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 8h9m-9 4h16m0 0l-3-3m3 3l-3 3M4 16h9"
									/>
								</svg>
							</button>
						) : (
							<button onClick={openModal} className={styles.openModalButton}>
								{" "}
								<svg viewBox="0 0 24 24">
									<path
										fill="none"
										stroke="#ffffff"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M20 8h-9m9 4H4m0 0l3-3m-3 3l3 3m13 1h-9"
									/>
								</svg>
							</button>
						)}
					</div>
				</nav>
			</div>
		</>
	);
};
