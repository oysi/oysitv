
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as style } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function Markdown({ children }) {
	return (
		<ReactMarkdown
			components={{
				pre: ({ children }) => {
					return children;
				},
				code: ({ className, children }) => {
					if (className) {
						const language = className.replace("language-", "");
						const code = children[0].slice(0, -1);
						return (
							<SyntaxHighlighter
								style={style}
								language={language}
							>
								{code}
							</SyntaxHighlighter>
						)
					} else {
						return <code className="code-inline">{children}</code>
					}
				},
			}}
		>
			{children}
		</ReactMarkdown>
	)
}
