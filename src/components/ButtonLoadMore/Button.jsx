import { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
	render() {
		return (
			<button
				type="submit"
				className={styles.Button}
				onClick={this.props.onClick}
			>
				<span className="button-label">LoadMore</span>
			</button>
		);
	}
}

export default Button;
