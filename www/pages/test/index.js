
import Link from "next/link";

import styles from "./index.module.css";

export default function Index() {
	return (
		<div className={styles.index}>
		<div className={styles.left}>
			Left
		</div>
		<main className={styles.main}>
			<h1>Welcome to oysi.tv</h1>
			<h2>Paragraph 1</h2>
			<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Euismod nisi porta lorem mollis aliquam ut porttitor. Pharetra et ultrices neque ornare. Potenti nullam ac tortor vitae. Eget arcu dictum varius duis at consectetur. Ac tortor vitae purus faucibus ornare. Dui sapien eget mi proin sed libero enim sed. Placerat orci nulla pellentesque dignissim enim sit amet. Quam elementum pulvinar etiam non quam lacus. Et malesuada fames ac turpis egestas integer eget aliquet. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit.
			</p>
			<h2>Paragraph 2</h2>
			<p>
			Eget nunc scelerisque viverra mauris in. Elit eget gravida cum sociis natoque penatibus et magnis. Sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Ut placerat orci nulla pellentesque dignissim. Sit amet aliquam id diam. Tristique senectus et netus et malesuada. Fringilla urna porttitor rhoncus dolor purus. Elementum curabitur vitae nunc sed velit dignissim. Ut venenatis tellus in metus vulputate eu. Platea dictumst quisque sagittis purus sit amet.
			</p>
		</main>
		<div className={styles.right}>
			Right
		</div>
		</div>
	)
}
