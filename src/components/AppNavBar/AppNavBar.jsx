import ButtonGoBack from "../../components/ButtonGoBack/ButtonGoBack";
import { NavLink } from "react-router-dom";
import styles from "./AppNavBar.module.css";

export default function AppNavBar() {
	return (
		<>
			<nav>
				<ul>
					<li>
						<ButtonGoBack />
					</li>
					<li>
						<NavLink
							className={({ isActive }) =>
								isActive ? styles.activeNavLink : styles.navLink
							}
							end
							to="/"
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/movies"
							className={({ isActive }) =>
								isActive ? styles.activeNavLink : styles.navLink
							}
						>
							Movies
						</NavLink>
					</li>
				</ul>
			</nav>
		</>
	);
}
