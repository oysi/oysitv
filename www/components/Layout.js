
import styles from "./Layout.module.css";

// export default function Index({ children }) {
export default function Index(props) {
	return (
		<div className={styles.index1}>
			{/* <div className={styles.index2} style={{width: props.layout_width}}> */}
			<div className={styles.index2}>
				{ props.children }
			</div>
		</div>
	)
}
