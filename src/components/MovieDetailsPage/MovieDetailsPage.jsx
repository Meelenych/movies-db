import styles from "./ImageGalleryItem.module.css";

function ImageGalleryItem({ webformatURL, largeImageURL, tags, onClickProps }) {
	function handleClick(e) {
		onClickProps(largeImageURL, tags);
	}

	return (
		<li className={styles.ImageGalleryItem} onClick={handleClick}>
			<img
				className={styles.ImageGalleryItemImage}
				src={webformatURL}
				alt={tags}
				srcSet={largeImageURL}
			/>
		</li>
	);
}

export default ImageGalleryItem;
