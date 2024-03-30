import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {fetchApiReviews} from "../../service/api";
import Loader from "../Loader/Loader";
import styles from "./Reviews.module.css";
import dummyAvatar from "../../images/dummyAvatar.png";

export default function MovieDetailsCast() {
  const [reviewsToShow, setReviewsToShow] = useState();
  const {movieId} = useParams();

  useEffect(() => {
    reviewsToShow && <Loader />;
    fetchApiReviews(movieId).then((data) => {
      setReviewsToShow(data.results);
    });
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [movieId]);

  console.log("reviewsToShow", reviewsToShow);

  return (
    <>
      <h1>Reviews</h1>
      {reviewsToShow === undefined || reviewsToShow.length === 0 ? (
        <p className={styles.reviewNothing}>Oops, no reviews available.</p>
      ) : (
        <ul className={styles.reviewList}>
          {reviewsToShow.map((review) => (
            <li key={review.id}>
              <div className={styles.reviewCard}>
                <img
                  className={styles.reviewImage}
                  src={
                    review.author_details.avatar_path === null
                      ? dummyAvatar
                      : review.author_details.avatar_path.slice(1) ||
                      `https://www.themoviedb.org/t/p/w440_and_h660_face${review.profile_path}`
                  }
                  alt=""
                />
                <p className={styles.reviewAuthor}>{review.author}</p>
                <p className={styles.reviewContent}>{review.content}</p>
                <p className={styles.reviewDate}>
                  {review.created_at === null
                    ? ""
                    : review.created_at.slice(0, 10)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
