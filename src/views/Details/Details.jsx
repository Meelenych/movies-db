import { NavLink, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import MovieDetailsPage from "../../components/MovieDetailsPage/MovieDetailsPage";
import styles from "../../components/MovieDetailsPage/MovieDetailsPage";

const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export default function Details() {
	return (
		<>
			<MovieDetailsPage />
			<nav>
				<ul>
					<li>
						<NavLink to={`Cast`} className={styles.activeNavLink}>
							Cast
						</NavLink>
					</li>
					<li>
						<NavLink to={`Reviews`} className={styles.activeNavLink}>
							Reviews
						</NavLink>
					</li>
				</ul>
			</nav>

			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path="/cast" element={<Cast />} />
					<Route path="/reviews" element={<Reviews />} />
				</Routes>
			</Suspense>
		</>
	);
}
