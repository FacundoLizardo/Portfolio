import styles from "../NavBar/NavBar.module.css";
import man from "../../../assets/Images/man.avif";
import React, { useState } from "react";
import Modal from "react-modal";
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
	return (
		<>
			<div className={styles.lSide}>
				<img src={man} className={styles.profilePic} />
				<button onClick={openModal} className={styles.openModalButton}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-menu-2"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="currentColor"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M4 6l16 0" />
						<path d="M4 12l16 0" />
						<path d="M4 18l16 0" />
					</svg>
				</button>
			</div>

			<Modal
				isOpen={isModalOpen}
				onRequestClose={closeModal}
				contentLabel="Ejemplo Modal"
				className={styles.modal}
			>
				<button onClick={closeModal} className={styles.closeModalButton}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="icon icon-tabler icon-tabler-square-rounded-x"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						stroke-width="2"
						stroke="white"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path stroke="none" d="M0 0h24v24H0z" fill="none" />
						<path d="M10 10l4 4m0 -4l-4 4" />
						<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
					</svg>
				</button>
				<h3 onClick={() => scrollToSection(sectionHead)}>Links</h3>
				<h3 onClick={() => scrollToSection(sectionDescirption)}>Sobre mi</h3>
				<h3 onClick={() => scrollToSection(sectionProjects)}>Proyectos</h3>
				<h3>Tecnologías</h3>
			</Modal>
		</>
	);
};
