
import styles from "./index.module.css";

import Link from "next/link";

export default function Index() {
	return (
		<div>
			<div>Apps</div>
			<Link href="/apps/minesweeper"><a>minesweeper</a></Link>
			<Link href="/apps/queue"><a>queue</a></Link>
		</div>
	)
}
