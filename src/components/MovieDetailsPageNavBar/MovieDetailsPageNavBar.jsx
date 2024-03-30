import { NavLink } from "react-router-dom";
import styles from "./MovieDetailsPageNavBar.module.css";

export default function MovieDetailsPageNavBar() {
	return (
		<>
			<nav className={styles.MDPNavBar}>
				<ul>
					<li>
						<NavLink to={`Cast`}>Cast</NavLink>
					</li>
					<li>
						<NavLink to={`Reviews`}>Reviews</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}
