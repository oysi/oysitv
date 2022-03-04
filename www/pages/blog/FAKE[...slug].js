
import { useRouter } from "next/router";

// import { marked } from "marked";

// import MarkdownIt from "markdown-it";

import ReactMarkdown from "react-markdown";

// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

// import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

// import prism from "react-syntax-highlighter/dist/esm/styles/prism/prism";

// SyntaxHighlighter.registerLanguage("jsx", jsx);

export default function Index({ list }) {
	const router = useRouter();
	const [year, month, name] = router.query?.slug ?? [];
	const info = list.filter((item) => item.path === router.asPath)[0];
	return (
		<div>
			<p>{year}</p>
			<p>{month}</p>
			<p>{name}</p>
			<div>
				<div dangerouslySetInnerHTML={{__html: marked(info.content)}}/>
			</div>
			<div>
				<div dangerouslySetInnerHTML={{__html: new MarkdownIt().render(info.content)}}/>
			</div>
			<div>
				{(() => {
					const codeString = '(num) => num + 1';
					return (
						<SyntaxHighlighter language="javascript">
							{codeString}
						</SyntaxHighlighter>
					);
				})()}
			</div>
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
