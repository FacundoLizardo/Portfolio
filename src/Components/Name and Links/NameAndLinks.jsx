import styles from "../Name and Links/NameAndLinks.module.css";
import { useRef } from "react";

export const NameAndLinks = () => {
	const sectionHead = useRef(null);
	return (
		<>
			<div className={styles.nameAndLinks}>
				<div className={styles.name}>
					{" "}
					<h2>Facundo Lizardo</h2>
				</div>

				<div className={styles.links}>
					<ul>
						<li>
							<a href={""} target="_blank" rel="noopener noreferrer">
								<svg viewBox="0 0 666 680">
									<path
										fill="#ffffff"
										d="M0 98v498c0 47 37 84 84 84h498c23 0 45-11 59-25c15-15 25-34 25-59V98c0-47-37-84-84-84H84c-25 0-44 10-59 25C11 53 0 75 0 98zm90 66c0-32 26-60 58-60c33 0 60 28 60 60c0 33-27 59-60 59c-32 0-58-26-58-59zm161 411V270c0-7 7-13 12-13h85c12 0 12 14 12 23c24-24 55-30 87-30c78 0 128 37 128 119v206c0 7-6 13-12 13h-88c-7 0-12-7-12-13V389c0-31-9-48-44-48c-44 0-55 29-55 68v166c0 7-7 13-14 13h-87c-5 0-12-7-12-13zm-159 0V270c0-7 7-13 12-13h87c8 0 13 5 13 13v305c0 7-6 13-13 13h-87c-6 0-12-7-12-13z"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href={""} target="_blank" rel="noopener noreferrer">
								<svg viewBox="0 0 2048 2048">
									<path
										fill="#ffffff"
										d="M1024 25q141 0 272 36t244 104t207 160t161 207t103 245t37 272q0 165-50 318t-143 281t-221 224t-286 149q-3 1-9 1t-9 1q-24 0-38-14t-14-37v-140q0-69 1-141q0-51-15-103t-54-87q116-13 203-47t146-96t88-150t30-212q0-78-26-147t-79-128q11-28 16-58t5-60q0-39-8-77t-23-76q-5-2-11-2t-11 0q-32 0-67 10t-69 26t-67 35t-57 36q-125-35-256-35t-256 35q-25-17-57-36t-66-34t-70-26t-67-11h-11q-6 0-11 2q-14 37-22 75t-9 78q0 30 5 60t16 58q-53 58-79 127t-26 148q0 122 29 211t88 150t146 97t203 48q-29 26-44 62t-21 75q-27 13-57 20t-60 7q-64 0-106-30t-75-82q-12-19-29-38t-37-34t-43-24t-48-10h-12q-8 0-15 3t-14 6t-6 10q0 12 14 23t23 18l3 2q22 17 38 32t30 33t23 38t23 47q34 78 95 113t147 36q26 0 52-3t52-9v174q0 24-14 38t-39 14h-8q-5 0-9-2q-157-51-286-147t-221-225t-142-282t-51-318q0-141 36-272t104-244t160-207t207-161T752 62t272-37z"
									/>
								</svg>
							</a>
						</li>
						<li>
							<a href={""} target="_blank" rel="noopener noreferrer">
								<svg viewBox="0 0 14 14">
									<g fill="none" stroke="#ffffff" stroke-linecap="round">
										<path
											stroke-linejoin="round"
											d="M4.098 3.65a1.15 1.15 0 1 0 2.3 0a1.15 1.15 0 0 0-2.3 0Z"
										/>
										<path
											stroke-linejoin="round"
											d="M3.5 5.94a2.22 2.22 0 0 1 .746-.834c.306-.2.652-.304 1.003-.304c.351 0 .697.104 1.003.304c.307.199.563.486.746.834"
										/>
										<path
											stroke-linejoin="round"
											d="M12.5 12.5a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1H9L12.5 4v8.5Z"
										/>
										<path d="M3.5 8.5h7m-7 2.5h4" />
									</g>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};
