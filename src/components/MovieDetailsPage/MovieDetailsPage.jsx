import styles from "./MovieDetailsPage.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApiMovie } from "../../service/api";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";

export default function MovieDetailsPage() {
	const [movieToShow, setMovieToShow] = useState();
	const { movieId } = useParams();

	useEffect(() => {
		fetchApiMovie(movieId).then((data) => {
			setMovieToShow(data);
		});
	}, [movieId]);

	console.log("movieToShow", movieToShow);

	//=================SCROLL TO BOTTOM====================
	useEffect(() => {
		if (movieId !== null) {
			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: "smooth",
			});
		}
	});

	return !movieToShow ? (
		<Loader />
	) : (
		<Link
			to={`/movies/${movieToShow.id}/cast`}
			className={({ isActive }) =>
				isActive ? styles.activeNavLink : styles.navLink
			}
		>
			<h1>Full information about the movie:</h1>
			<div className={styles.MovieItem}>
				<div className={styles.titleAndImage}>
					<h3 className={styles.MovieTitle}>{movieToShow.title}</h3>
					<img
						height="410"
						// width="350"
						className={styles.MovieImage}
						src={`https://www.themoviedb.org/t/p/w440_and_h660_face/${movieToShow.poster_path}`}
						alt=""
					/>
				</div>
				<div className={styles.additionalInfo}>
					<p>
						<span className={styles.infoText}>Genres: </span>
						{movieToShow.genres.map(({ name }) => name).join(", ")}
					</p>
					<p>
						<span className={styles.infoText}>Release date: </span>
						{movieToShow.release_date}
					</p>
					<p>
						<span className={styles.infoText}>Budget: </span>
						{movieToShow.budget}
					</p>
					<p>
						<span className={styles.infoText}>Rating: </span>
						{movieToShow.vote_average}
					</p>
					<p>
						<span className={styles.infoText}>Popularity: </span>
						{movieToShow.popularity}
					</p>
					<p>{movieToShow.overview}</p>
				</div>
			</div>
		</Link>
	);
}
