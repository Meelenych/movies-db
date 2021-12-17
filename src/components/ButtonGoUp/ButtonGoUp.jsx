import { Component } from "react";
import styles from "./ButtonGoUp.module.css";

class ButtonGoUp extends Component {
	render() {
		return (
			<button
				type="submit"
				className={styles.ButtonUp}
				onClick={this.props.onClick}
			>
				GoUp
			</button>
		);
	}
}

export default ButtonGoUp;
