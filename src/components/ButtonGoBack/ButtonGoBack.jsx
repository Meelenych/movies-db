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
			<span className="button-label">Go back</span>
		</Link>
	);
}

export default ButtonGoBack;
