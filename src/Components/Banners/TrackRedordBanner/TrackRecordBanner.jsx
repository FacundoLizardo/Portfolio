import styles from "./TrackRecordBanner.module.css";
export const TrackRecordBanner = () => {
	return (
		<div className={styles.TrackRecordBannerContainer}>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="128"
					height="128"
					viewBox="0 0 24 24"
				>
					<path
						fill="#ffffff"
						d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z"
					/>
					<path
						fill="#ffffff"
						d="m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"
					/>
				</svg>
			</div>
			<div></div>
			<div>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="128"
					height="128"
					viewBox="0 0 24 24"
				>
					<path
						fill="#ffffff"
						d="M18 6.41L16.59 5L12 9.58L7.41 5L6 6.41l6 6z"
					/>
					<path
						fill="#ffffff"
						d="m18 13l-1.41-1.41L12 16.17l-4.59-4.58L6 13l6 6z"
					/>
				</svg>
			</div>
		</div>
	);
};
