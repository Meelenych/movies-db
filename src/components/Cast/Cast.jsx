import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchApiCredits } from "../../service/api";
import Loader from "../Loader/Loader";
import dummyMan from "../../images/dummyMan.jpg";
import dummyWoman from "../../images/dummyWoman.jpg";
import dummyZero from "../../images/dummyZero.jpg";
import styles from "./Cast.module.css";

export default function MovieDetailsCast() {
	const [castToShow, setCastToShow] = useState();
	const { movieId } = useParams();
	// const params = useParams();
	// console.log("params", params);
	// console.log("movieId", movieId);

	useEffect(() => {
		castToShow && <Loader />;
		fetchApiCredits(movieId).then((data) => {
			// console.log("data", data);
			setCastToShow(data.cast);
		});
		/* eslint-disable react-hooks/exhaustive-deps */
	}, [movieId]);

	console.log("castToShow", castToShow);

	return (
		<>
			<h1>Cast</h1>
			{castToShow === undefined || castToShow.length === 0 ? (
				<p className={styles.castNothing}>Oops, no cast available.</p>
			) : (
				<ul className={styles.castList}>
					{castToShow.map((actor) => (
						<li key={actor.id} className={styles.castLine}>
							<div className={styles.castCard}>
								<img
									className={styles.castImage}
									src={
										actor.profile_path
											? `https://image.tmdb.org/t/p/w342/${actor.profile_path}`
											: `${
													(actor.gender === 2 && dummyMan) ||
													(actor.gender === 1 && dummyWoman) ||
													(actor.gender === 0 && dummyZero)
											  }`
									}
									alt={actor.name}
								/>
								<p className={styles.castName}>{actor.name}</p>
							</div>
						</li>
					))}
				</ul>
			)}
		</>
	);
}
