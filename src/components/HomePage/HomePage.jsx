import { useState, useEffect } from "react";
import { fetchApi } from "../../service/api";

import { toast } from "react-toastify";
import styles from "../HomePage/HomePage.module.css";

export default function HomePage() {
	// let searchQuery = "star trek";
	const [loading, setLoading] = useState(false);
	const [movies, setMovies] = useState([]);

	console.log(loading);

	useEffect(() => {
		setLoading(true);
		fetchApi()
			.then((movieData) => {
				setMovies([...movieData.results]);
				if (movieData.results.length >= 1) {
					toast.success("Search successfull!");
				} else if (movieData.results.length === 0) {
					toast.error("Oops, nothing found!");
				}
			})
			.catch((err) => {
				toast.error("Fetch error!");
				console.log(err);
			})
			.finally(() => setLoading(false));
	}, []);

	console.log("movies", movies);

	useEffect(() => {
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: "smooth",
		});
	});

	return (
		<>
			<h2>The movie finder</h2>
			<ul className={styles.ImageGallery}>
				{movies.map((movie) => {
					return (
						<li key={movie.id} className={styles.movies__item}>
							<div className={styles.movie__card}>
								<img
									className={styles.movie__img}
									src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
									loading="lazy"
									alt={movie.original_title}
									data-src={movie.poster_path}
								/>

								<div className={styles.movie__label}>
									<h3 className={styles.movie__name}> {movie.title} </h3>
									<p className={styles.movie__genre}>
										Genres: {movie.genre_ids}
									</p>
									<p className={styles.movie__year}>
										Release date: {movie.release_date}
									</p>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
}

// import Loader from "../Loader/Loader";
// import ImageGalleryItem from "../GalleryItem/ImageGalleryItem";
// import Modal from "../Modal/Modal";
// import Button from "../ButtonLoadMore/Button";
// import "react-toastify/dist/ReactToastify.css";
// import styles from "./ImageGallery.module.css";

// export default function ImageGallery({ submitValue }) {
// 	const [images, setImages] = useState([]);
// 	const [largeImageURL, setLargeImageURL] = useState("");
// 	const [tags, setTags] = useState("");
// 	const [page, setPage] = useState(1);
// 	const [showModal, setShowModal] = useState(false);
// 	const [loading, setLoading] = useState(false);

// 	useEffect(() => {
// 		if (submitValue !== "") {
// 			setLoading(true);
// 			fetchApi(submitValue, page)
// 				.then((results) => {
// 					if (page === 1) {
// 						setImages([...results.hits]);
// 					} else {
// 						setImages([...images, ...results.hits]);
// 					}

// 					if (results.hits.length >= 1) {
// 						toast.success("Search successfull!");
// 					} else if (results.hits.length === 0) {
// 						toast.error("Oops, nothing found!");
// 					}
// 				})
// 				.catch((err) => {
// 					toast.error("Fetch error!");
// 					console.log(err);
// 				})
// 				.finally(() => setLoading(false));
// 		}
// 		reset();
// 		// eslint-disable-next-line react-hooks/exhaustive-deps
// 	}, [page, submitValue]);

// 	const loadMore = () => {
// 		setPage(page + 1);
// 	};

// 	const reset = () => {
// 		// setImages([]);
// 		setPage(1);
// 	};

// 	const bigImageSetState = (largeImageURL) => {
// 		setLargeImageURL(largeImageURL);
// 	};

// 	const closeModal = () => {
// 		setShowModal(!showModal);
// 		setLargeImageURL("");
// 		setTags("");
// 	};

// 	return (
// 		<>
// 			<ul className={styles.ImageGallery}>
// 				{loading && <Loader />}
// 				{images.map(({ id, webformatURL, largeImageURL, tags }) => (
// 					<ImageGalleryItem
// 						key={id}
// 						webformatURL={webformatURL}
// 						largeImageURL={largeImageURL}
// 						tags={tags}
// 						onClickProps={bigImageSetState}
// 					/>
// 				))}
// 				{images.length !== 0 && <Button onClick={loadMore} />}
// 			</ul>

// 			{largeImageURL && (
// 				<Modal onClose={closeModal}>
// 					<button
// 						type="button"
// 						className={styles.CloseBtn}
// 						onClick={closeModal}
// 					>
// 						X
// 					</button>
// 					<img src={largeImageURL} alt={tags} />
// 				</Modal>
// 			)}
// 		</>
// 	);
// }

//======================================================
