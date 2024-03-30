import { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
	render() {
		return (
			<div className={styles.ButtonWrapper}>
				<button
					type="submit"
					className={styles.Button}
					onClick={this.props.onClick}
				>
					<span className="button-label">LoadMore</span>
				</button>
			</div>
		);
	}
}

export default Button;
