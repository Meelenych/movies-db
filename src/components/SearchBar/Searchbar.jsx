import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "./SearchBar.module.css";

export default function SearchBar({ onFormSubmit }) {
	const [changeValue, setChangeValue] = useState("");

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
						placeholder="Search images and photos"
						onChange={handleChange}
						value={changeValue}
					/>
				</form>
			</header>
			<ToastContainer />
		</>
	);
}
