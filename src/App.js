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
    <div className={styles.container}>
      <h1>Here is the movie DB</h1>
      <MoviesPage />
      <HomePage />
    </div>
  );
}

/* <SearchBar onFormSubmit={onFormSubmit} />
      <ImageGallery submitValue={submitValue} /> */
