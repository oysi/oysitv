
import styles from "./index.module.css";

import Link from "next/link";
import Image from "next/image";

export default function Index(props) {
	return (
		<main className={styles.main}>
			<h1>Apps</h1>
			{
				props.list.map((item) => {
					return (
						<div style={{margin: "5px 0px"}} key={item.path}>
							<Link href={item.path}>
								<a>
									{item.name}
								</a>
							</Link>
						</div>
					)
				})
			}
			<br/>
			<br/>
			<br/>
			<h1>Apps</h1>
			<ul>
				<li><Link href="/apps/queue"><a>queue</a></Link></li>
				<li><Link href="/apps/minesweeper"><a>minesweeper</a></Link></li>
				<li><Link href="/apps/paint"><a>paint</a></Link></li>
			</ul>
			<h1>Apps</h1>
			<div className={styles.container}>
				<div>
					<Link href="/apps/minesweeper"><a>
						<h2>Minesweeper</h2>
						<Image width="200" height="200" alt="thumbnail" src="/static/apps/minesweeper/thumbnail.png"/>
					</a></Link>
				</div>
				<div>
					<Link href="/apps/minesweeper"><a>
						<h2>Minesweeper</h2>
						<Image width="200" height="200" alt="thumbnail" src="/static/apps/minesweeper/thumbnail.png"/>
					</a></Link>
				</div>
			</div>
		</main>
	)
}

import AppList from "../../components/AppList.js";

export function getStaticProps() {
	return {
		props: {
			list: AppList,
		},
	}
}
