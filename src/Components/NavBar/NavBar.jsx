import styles from "../NavBar/NavBar.module.css";
import man from "../../../assets/Images/man.avif";
import React, { useState } from "react";

export const NavBar = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	//Cancel scroll when the modal is open
	const toggleScroll = (disable) => {
		document.body.style.overflow = disable ? "hidden" : "visible";
	};

	const openModal = () => {
		setIsModalOpen(true);
		toggleScroll(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
		toggleScroll(false);
	};

	let prevScrollpos = window.scrollY;
	window.onscroll = function () {
		console.log(prevScrollpos);
		const currentScrollPos = window.scrollY;
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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="128"
							height="128"
							viewBox="0 0 128 128"
						>
							<path
								fill="#ffffff"
								d="M64 7.83H4.77l10.18 87.3l49 25h.06l49.07-25l10.15-87.3zm42.77 54.86c0 .88 0 1.67-.77 2L73.25 80.44l-2.42 1.13l-.27-3.15v-6.19l.24-1.57l1.09-.47l23.18-10.38l-21.54-9.6l-9.18 18.13l-5.45 10.53l-1.22 2.27l-2.05-.9L22 64.71a2.42 2.42 0 0 1-1.45-2v-5.8a2.39 2.39 0 0 1 1.42-2l34-15.73l3.21-1.44v9.66l.24 1.34l-1.56.7l-23.41 10.35l21.85 9.63l8.05-16l6.21-12.65l1.13-2.28l1.81.91L106 54.89c.73.35.76 1.14.76 2z"
							/>
						</svg>
					</div>
					<div
						className={`${styles.navbarLinks} ${
							isModalOpen ? styles.active : ""
						}`}
					>
						<ul>
							<li>
								<a href="#nameAndLinks" onClick={() => closeModal()}>
									LINKS
								</a>
							</li>
							<li>
								<a href="#aboutMe" onClick={() => closeModal()}>
									ABOUT ME
								</a>
							</li>
							<li>
								<a href="#projects" onClick={() => closeModal()}>
									PROJECTS
								</a>
							</li>
							<li>
								<a href="#technologies" onClick={() => closeModal()}>
									TECNOLOGIES
								</a>
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
