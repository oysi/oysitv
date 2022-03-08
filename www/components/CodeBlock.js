
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as style } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({ lang, children }) {
	return <SyntaxHighlighter language={lang} style={style}>{children}</SyntaxHighlighter>
}
