import { NavLink, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import MovieDetailsPage from "../../components/MovieDetailsPage/MovieDetailsPage";

import Loader from "../../components/Loader/Loader";
import MovieDetailsPageNavBar from "../../components/MovieDetailsPageNavBar/MovieDetailsPageNavBar";

const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

export default function Details() {
	return (
		<>
			<MovieDetailsPage />
			<MovieDetailsPageNavBar />

			<Suspense fallback={<Loader />}>
				<Routes>
					<Route path="/cast" element={<Cast />} />
					<Route path="/reviews" element={<Reviews />} />
				</Routes>
			</Suspense>
		</>
	);
}
