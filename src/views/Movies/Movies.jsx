import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import MoviesPage from "../../components/MoviesPage/MoviesPage";
// import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";

const Details = lazy(() => import("../Details/Details"));

export default function Movies() {
	return (
		<>
			<MoviesPage />
			{/* <Outlet /> */}
			{/* <nav>
				<NavLink to="/movies/:movieId">Details</NavLink>
			</nav> */}
			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/:movieId/*" element={<Details />}></Route>
				</Routes>
			</Suspense>
		</>
	);
}
