
import ReactMarkdown from "react-markdown";

import CodeBlock from "./CodeBlock.js";

export default function Markdown({ children }) {
	return (
		<ReactMarkdown
			components={{
				pre: ({ children }) => {
					return children;
				},
				code: ({ className, children }) => {
					if (className) {
						const lang = className.replace("language-", "");
						const code = children[0].slice(0, -1);
						return <CodeBlock lang={lang}>{code}</CodeBlock>
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
