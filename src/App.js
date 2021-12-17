import styles from "./App.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const Home = lazy(() => import("./views/Home/Home"));
const Movies = lazy(() => import("./views/Movies/Movies"));
const MovieDetailsPage = lazy(() => import("./views/Details/Details"));

export default function App() {
  // const DOMloaded = () =>
  // 	window.addEventListener("DOMContentLoaded", (event) => {
  // 		console.log("DOM fully loaded and parsed");
  // 	});

  return (
    <div className={styles.container}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/*" element={<Movies />}>
            <Route path=":movieId/" element={<MovieDetailsPage />}></Route>
          </Route>
          <Route path="*">Error 404: Page not found!</Route>
        </Routes>
      </Suspense>
    </div>
  );
}
