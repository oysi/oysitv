
import styles from "./index.module.css";

import Link from "next/link";

import { marked } from "marked";

export default function Index(props) {
	return (
		<main className={styles.main}>
			<h1>[NYI] Blog</h1>
			{
				props.list.map((item) => {
					return (
						<div key={item.path}>
							<Link href={item.path}>
								<a>
									{item.name}
								</a>
							</Link>
						</div>
					)
				})
			}
		</main>
	)
}

import BlogList from "../../components/BlogList.js";

export function getStaticProps() {
	return {
		props: {
			list: BlogList,
		},
	}
}
