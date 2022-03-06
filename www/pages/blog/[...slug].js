
import styles from "./index.module.css";

import { useRouter } from "next/router";

import Markdown from "../../components/Markdown.js";

const get_date = (str) => {
	const result = str.match(/^(....)\.(..)\.(..)$/)
	const date = new Date(result[1], result[2] - 1, result[3]).toString();
	
	const m = date.slice(4, 7);
	const d = date.slice(8, 10);
	const y = date.slice(11, 15);
	
	console.log("HEllo");
	
	return `${m} ${Number(d)}, ${y}`;
	
	console.log("m", m);
	console.log("d", d);         
	console.log("y", y);
	
	return date.slice(4, 15);
}

export default function Index({ list }) {
	const router = useRouter();
	const [year, month, name] = router.query?.slug ?? [];
	
	const info = list.filter((item) => item.path === router.asPath)[0];
	
	return (
		// <div className={styles.index1}>
		// <div className={styles.index2}>
		<main className={styles.main}>
			<h1>{info.title}</h1>
			<p>
				<span>{get_date(info.created_at)}</span>
				{
					info.updated_at !== info.created_at && <span
						style={{
							// color: "rgb(100, 100, 100)",
						}}
					> (updated {get_date(info.updated_at)})</span>
				}
			</p>
			<Markdown>{info.content}</Markdown>
		</main>
		// </div>
		// </div>
	)
}

import BlogList from "../../components/BlogList.js";

export function getStaticProps() {
	return {
		props: {
			list: BlogList,
			layout_width: "800px",
		},
	}
}

export function getStaticPaths() {
	return {
		paths: BlogList.map((item) => item.path),
		fallback: false,
	}
}
