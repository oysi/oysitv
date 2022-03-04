
import { useRouter } from "next/router";

import ReactMarkdown from "react-markdown";

import CodeBlock from "../../components/CodeBlock.js";

export default function Index({ list }) {
	const router = useRouter();
	const [year, month, name] = router.query?.slug ?? [];
	const info = list.filter((item) => item.path === router.asPath)[0];
	
	return (
		<div>
			<p>{year}</p>
			<p>{month}</p>
			<p>{name}</p>
			<ReactMarkdown
				components={CodeBlock}
			>
				{info.content}
			</ReactMarkdown>
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
		fallback: false,
	}
}
