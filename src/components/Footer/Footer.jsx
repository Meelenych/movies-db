import styles from "./Footer.module.css";

export default function Footer() {
	return (
		<div className={styles.Footer__block}>
			<p className={styles.Footer__text}>
				&#169; All rights reserved.
				<span className={styles.Footer__links}>
					Follow us on
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram
					</a>{" "}
					and
					<a
						href="https://www.facebook.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Facebook
					</a>
					.
				</span>
			</p>
		</div>
	);
}
