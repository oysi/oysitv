
import styles from "./index.module.css";

import Link from "next/link";
import Image from "next/image";

// import list from "./list.json";

import AppList from "../../components/AppList.js";

export default function Index(props) {
	// console.log(list);
	// console.log(props);
	return (
		<main className={styles.main}>
			<h1>Apps</h1>
			{
				props.apps.map((item) => {
					return (
						<div style={{margin: "5px 0px"}} key={item.key}>
							<Link href={item.path}>
								<a>
									{item.item}
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

import fs from "fs";

export function getStaticProps() {
	// console.log(Object.keys(fs).join(" "));
	// console.log("getStaticProps");
	// console.log("__dirname", __dirname);
	
	const apps = [];
	
	fs.readdirSync(`${__dirname}/../../../pages/apps/`)
	.map((item) => {
		if (item.includes(".")) return;
		
		// console.log(item);
		
		const data = fs.readFileSync(`${__dirname}/../../../pages/apps/${item}/info.json`, "utf8");
		const json = JSON.parse(data);
		
		json.item = item;
		json.key = Math.random();
		json.path = `/apps/${item}`;
		
		apps.push(json);
		
		// console.log(json);
	})
	
	return {
		props: {
			msg: "hello world!",
			apps: apps,
		},
	}
}
