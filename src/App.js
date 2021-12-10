// import { useState } from "react";

import HomePage from "./components/HomePage/HomePage";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import styles from "./App.module.css";

export default function App() {
  // const [submitValue, setSubmitValue] = useState("");

  // const onFormSubmit = (data) => {
  // 	setSubmitValue(data);
  // };

  return (
    <div className={styles.App}>
      <h1>Here is the movie DB</h1>
      <HomePage />
      <MoviesPage />
    </div>
  );
}

/* <SearchBar onFormSubmit={onFormSubmit} />
      <ImageGallery submitValue={submitValue} /> */
