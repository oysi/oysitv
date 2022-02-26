
import styles from "./Layout.module.css";

export default function Index({ children, props }) {
	return (
		<div className={styles.index1}>
			<div className={styles.index2}>
				{ children }
			</div>
		</div>
	)
}
