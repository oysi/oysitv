
import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styles from './index.module.css'

export default function Index() {
	return (
		<div>
			Home
			<div className={styles.container}>
				<div className={styles.left}>
					Leftdasdsadasdasdasdasddasdasddasdasd
				</div>
				<div className={styles.center}>
					<ul style={{
						listStyle: "none",
						display: "flex",
					}}>
						<li>Item 1</li>
						<li>Item 2</li>
						<li>Item 3</li>
					</ul>
				</div>
				<div className={styles.right}>
					Right
				</div>
			</div>
		</div>
	)
}
