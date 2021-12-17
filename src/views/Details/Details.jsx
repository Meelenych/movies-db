import { NavLink, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import MovieDetailsPage from "../../components/MovieDetailsPage/MovieDetailsPage";
import styles from "../../components/MovieDetailsPage/MovieDetailsPage";
import Loader from "../../components/Loader/Loader";

const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export default function Details() {
	return (
		<>
			<MovieDetailsPage />
			<nav>
				<ul>
					<li>
						<NavLink
							to={`Cast`}
							className={({ isActive }) =>
								isActive ? styles.activeNavLink : styles.navLink
							}
						>
							Cast
						</NavLink>
					</li>
					<li>
						<NavLink
							to={`Reviews`}
							className={({ isActive }) =>
								isActive ? styles.activeNavLink : styles.navLink
							}
						>
							Reviews
						</NavLink>
					</li>
				</ul>
			</nav>

			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/cast" element={<Cast />} />
					<Route path="/reviews" element={<Reviews />} />
				</Routes>
			</Suspense>
		</>
	);
}
