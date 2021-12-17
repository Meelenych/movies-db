import { Link, useLocation } from "react-router-dom";
import styles from "./ButtonGoBack.module.css";

function ButtonGoBack() {
	const location = useLocation();
	const pathname = location.state?.from?.pathname;
	const search = location.state?.from?.search;

	return (
		<Link
			to={pathname ? `${pathname}${search}` : "/"}
			className={({ isActive }) =>
				isActive ? styles.activeNavLink : styles.navLink
			}
		>
			<div className={styles.goBackWrapper}>
				<svg className={styles.arrow} viewBox="0 100 800 800">
					<path d="M585.83 77.55v89.94l-.19 84.78-73.87.38-74.06.57v491.83l74.06.57 74.06.38-.38 90.9c-.19 49.95 0 90.9.57 90.71.57 0 91.67-96.45 202.47-214.33L990 499.14l-108.7-115.4c-59.9-63.34-150.41-159.41-201.13-213.37-50.91-53.77-92.81-97.98-93.39-97.98-.38 0-.76 2.29-.95 5.16zM10 499.14V746h135.88V252.27H10v246.87zM221.85 253.61c-.77.57-1.34 111.76-1.34 246.87V746h135.88V252.27h-66.6c-36.75 0-67.37.58-67.94 1.34z" />
				</svg>
			</div>
		</Link>
	);
}

export default ButtonGoBack;
