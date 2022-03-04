
import { useRouter } from "next/router";

import { marked } from "marked";

export default function Index() {
	const [year, month, name] = useRouter().query?.slug ?? [];
	return (
		<div>
			<p>{year}</p>
			<p>{month}</p>
			<p>{name}</p>
		</div>
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

export function getStaticPaths() {
	return {
		paths: BlogList.map((item) => item.path),
		fallback: true,
	}
}
