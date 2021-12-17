import { useState, useEffect } from "react";
import { fetchApi } from "../../service/api";
import Button from "../ButtonLoadMore/Button";
import { toast } from "react-toastify";
import styles from "../HomePage/HomePage.module.css";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";

export default function HomePage() {
	const [loading, setLoading] = useState(false);
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);

	//=================TRENDING====================
	useEffect(() => {
		setLoading(true);

		fetchApi(1)
			.then((movieData) => {
				setMovies([...movieData.results]);
				if (movieData.results.length !== 0) {
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

	//=================LOAD MORE====================
	useEffect(() => {
		if (page !== 1) {
			setLoading(true);
			fetchApi(page)
				.then((movieData) => {
					setMovies([...movies, ...movieData.results]);

					if (movieData.results.length >= 1 && page > 1) {
						toast.success("More results successfully loaded!");
					} else if (movieData.results.length === 0 && page > 1) {
						toast.error("Oops, nothing more!");
					}
				})
				.catch((err) => {
					toast.error("Fetch error!");
					console.log(err);
				})
				.finally(() => setLoading(false));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [page]);

	//=================SCROLL TO BOTTOM====================
	useEffect(() => {
		if (page > 1) {
			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: "smooth",
			});
		}
	});

	const loadMore = () => {
		setPage(page + 1);
	};

	return (
		<>
			<h1>The Movie DB</h1>
			<h2>Trending movies</h2>
			<ul className={styles.ImageGallery}>
				{loading && <Loader />}
				{movies.map((movie) => {
					return (
						<li key={movie.id} className={styles.movies__item}>
							<Link to={`/movies/${movie.id}`}>
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
							</Link>
						</li>
					);
				})}
				{movies.length !== 0 && <Button onClick={loadMore} />}
			</ul>
		</>
	);
}
