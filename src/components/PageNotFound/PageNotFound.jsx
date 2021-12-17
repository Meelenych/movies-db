import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
	return (
		<>
			<p className={styles.Error}>Error 404: Page not found!</p>
		</>
	);
}
