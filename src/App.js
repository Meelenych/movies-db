import styles from "./App.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";
import AppNavBar from "./components/AppNavBar/AppNavBar";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import ButtonGoUp from "./components/ButtonGoUp/ButtonGoUp";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./views/Home/Home"));
const Movies = lazy(() => import("./views/Movies/Movies"));
const MovieDetailsPage = lazy(() => import("./views/Details/Details"));

export default function App() {
  // const DOMloaded = () =>
  // 	window.addEventListener("DOMContentLoaded", (event) => {
  // 		console.log("DOM fully loaded and parsed");
  // 	});
  const scrollup = () => {
    // window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <AppNavBar />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movies/*" element={<Movies />}></Route>
          <Route path=":movieId/" element={<MovieDetailsPage />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Suspense>
      <ButtonGoUp onClick={scrollup} />
      <Footer />
      <ToastContainer />
    </div>
  );
}
