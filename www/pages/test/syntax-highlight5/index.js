
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as style } from "react-syntax-highlighter/dist/cjs/styles/prism";

const markdown = `
# h1

\`\`\`lua
local x = 2
\`\`\`
`

export default function Index() {
	return (
		<div>
			<h1>Hello</h1>
			
			<SyntaxHighlighter language="lua" style={style}>local x = 2</SyntaxHighlighter>
			<SyntaxHighlighter language="lua" style={style} children={"local x = 2"}/>
			
			<ReactMarkdown
				components={{
					code({ className, children }) {
						if (className) {
							const language = className.replace("language-", "");
							const code = children[0].slice(0, -1);
							return (
								<SyntaxHighlighter
									style={style}
									language={language}
									children={code}
								/>
							);
						} else {
							return <code>{children}</code>;
						}
					},
					pre: ({ children }) => {
						console
						return children;
					}
				}}
			>{markdown}</ReactMarkdown>
		</div>
	)
}
