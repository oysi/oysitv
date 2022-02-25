
import styles from "./index.module.css";

import Link from "next/link";

export default function Index() {
	return (
		<main className={styles.main}>
			<h1>Apps</h1>
			<ul>
				<li><Link href="/apps/minesweeper"><a>oysi.tv/minesweeper</a></Link></li>
				<li><Link href="/apps/queue"><a>oysi.tv/queue</a></Link></li>
			</ul>
		</main>
	)
}
