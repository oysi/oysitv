
import styles from "./index.module.css";

import Link from "next/link";

export default function Index() {
	return (
		<div className="Index1">
		<div className="Index2">
		<main className={styles.main}>
			<h1>Apps</h1>
			<ul>
				<li><Link href="/minesweeper"><a>oysi.tv/minesweeper</a></Link></li>
				<li><Link href="/queue"><a>oysi.tv/queue</a></Link></li>
			</ul>
		</main>
		</div>
		</div>
	)
}
