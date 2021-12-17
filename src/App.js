import styles from "./App.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import ButtonGoBack from "./components/ButtonGoBack/ButtonGoBack";
import PageNotFound from "./components/PageNotFound/PageNotFound";

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
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/*" element={<Movies />}></Route>
          <Route path=":movieId/" element={<MovieDetailsPage />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
