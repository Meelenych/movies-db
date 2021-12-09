import { useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

export default function Modal({ onClose, children }) {
	useEffect(() => {
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	const handleKeyDown = (e) => {
		if (e.code === "Escape") {
			onClose();
		}
	};

	const handleOverlayClick = (e) => {
		if (e.currentTarget === e.target) {
			onClose();
		}
	};

	return createPortal(
		<div className={styles.Overlay} onClick={handleOverlayClick}>
			<div className={styles.Modal}>{children}</div>
		</div>,
		modalRoot
	);
}

Modal.propTypes = {
	onClose: PropTypes.func.isRequired,
	children: PropTypes.node,
};
