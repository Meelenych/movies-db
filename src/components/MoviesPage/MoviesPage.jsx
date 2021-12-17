import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Loader/Loader";
import { useState } from "react";
import MoviesSearchResults from "../MoviesSearchResults/MoviesSearchResults";
import styles from "../MoviesPage/MoviesPage.module.css";

export default function MoviesPage() {
	const [submitValue, setSubmitValue] = useState("");
	const [changeValue, setChangeValue] = useState("");

	const onFormSubmit = (data) => {
		setSubmitValue(data);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (changeValue.trim() === "") {
			toast.warn("Please specify your request!");
			clearForm();
			return;
		}
		onFormSubmit(changeValue.toLowerCase().trim());
		clearForm();
	};

	const handleChange = (e) => {
		setChangeValue(e.currentTarget.value);
	};

	const clearForm = () => {
		setChangeValue("");
	};

	return (
		<>
			<h1>Find the Movie you like!</h1>
			{submitValue === "" ? (
				<>
					<header className={styles.Searchbar}>
						<form className={styles.SearchForm} onSubmit={handleSubmit}>
							<button type="submit" className={styles.SearchFormButton}>
								<span className={styles.SearchFormButtonLabel}>Search</span>
							</button>

							<input
								className={styles.SearchFormInput}
								type="text"
								autoComplete="off"
								autoFocus
								placeholder="Search a movie"
								onChange={handleChange}
								value={changeValue}
							/>
						</form>
					</header>
				</>
			) : (
				""
			)}
			<MoviesSearchResults submitValue={submitValue} />
			<ToastContainer />
			<Loader />{" "}
		</>
	);
}
