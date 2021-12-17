import { NavLink, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import MoviesPage from "../../components/MoviesPage/MoviesPage";
// import { Outlet } from "react-router-dom";

const Details = lazy(() => import("../Details/Details"));

export default function Movies() {
	return (
		<>
			<MoviesPage />
			{/* <Outlet /> */}
			<nav>
				<ul>
					<li>
						<NavLink to="/movies/:movieId">Details</NavLink>
					</li>
				</ul>
			</nav>
			<Suspense fallback={<p>Loading...</p>}>
				<Routes>
					<Route path="/:movieId/*" element={<Details />}></Route>
				</Routes>
			</Suspense>
		</>
	);
}
