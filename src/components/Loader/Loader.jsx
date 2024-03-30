import { Component } from 'react';
// import LoaderSpin from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './Loader.module.css';

class Loader extends Component {
	render() {
		return (
			<div className={styles.Loader}>
				{/* <LoaderSpin
					type="Bars"
					color="#57e080"
					height={100}
					width={100}
					timeout={2000} //2 secs
				/> */}
				Loading...
			</div>
		);
	}
}

export default Loader;
