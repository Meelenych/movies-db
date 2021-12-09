import { Component } from "react";
import LoaderSpin from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./Loader.module.css";

class Loader extends Component {
	render() {
		return (
			<div className={styles.Loader}>
				<LoaderSpin
					type="Circles"
					color="#3f51b5"
					height={150}
					width={150}
					timeout={3000} //3 secs
				/>
			</div>
		);
	}
}

export default Loader;
