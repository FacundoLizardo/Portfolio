import React from "react";
import styles from "./TrackRecord.module.css";
export const TrackRecord = () => {
	return (
		<section id="trackRecord" className={styles.trackRecordContainer}>
			<div className={styles.construction}>
				<h3>May 2020 → Mar 2023</h3>
				<p>
					Over those almost 3 years, I faced the challenge of entering a sector
					about which I had no knowledge.
				</p>
				<p>
					Additionally, I had to tackle the task of learning the local language,
					English, which was not easy.
				</p>

				<p>
					Curiosity, meticulousness, and a focus on results allowed me to
					advance to the position of manager, where I honed my soft skills.
				</p>
				<p>
					Because I not only had to coordinate people, they also came from
					different countries and cultures, much like our clients, making it a
					truly challenging experience.
				</p>
			</div>
			<div className={styles.arrow}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="128"
					height="128"
					viewBox="0 0 17 17"
				>
					<path
						fill="#ffffff"
						fill-rule="evenodd"
						d="M2.16 6.246c.225 0 .45.062.65.196l6.229 4.156l6.037-4.197a1.175 1.175 0 0 1 1.304 1.958l-6.688 4.63a1.174 1.174 0 0 1-1.304.002l-6.88-4.589a1.178 1.178 0 0 1 .652-2.156"
					/>
				</svg>
			</div>
			<div className={styles.theTop}>
				<h3>Mar 2016 → Jan 2020</h3>
				<p>
					After finishing high school, I get my first job at The Top (Wine
					Store).
				</p>
				<p>
					After a year, my boss offered me a partnership. Through hard work and
					study, we open three branches in different cities.
				</p>
				<p>
					During this time, I acquired skills in customer service, accounting,
					supplier management, stock control, employee recruitment, and team
					building, among others.
				</p>
				<p>
					After taking charge of all the responsibilities for a while,since my
					partner had a baby with many illnesses, and the country's economy was
					worsening.
				</p>
				<p> Unfortunately, we decided it was time to stop.</p>
			</div>

			<div>
				<div></div>
				<div></div>
			</div>
		</section>
	);
};
