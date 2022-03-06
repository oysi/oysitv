
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { vscDarkPlus as style } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const markdown = `
hello
world

# This is an h1

## This is an h2

\`\`\`js
let x = 2;
console.log(x + Math.pi);
\`\`\`

Separator text

\`\`\`lua
local x = 2
print(x + math.pi)
\`\`\`
`

export default function Index() {
	return (
		<main>
			<h1>Code</h1>
			<div>
				<SyntaxHighlighter language="lua" style={dark}>
					local x = 2
					print(x + math.pi)
				</SyntaxHighlighter>
			</div>
			<h1>ReactMarkdown:</h1>
			<div>
				<ReactMarkdown children={markdown}/>
			</div>
			<h1>ReactMarkdown:</h1>
			<div>
				<ReactMarkdown
					children={markdown}
					components={{
						code({className, children}) {
							const language = className.replace("language-", "");
							const code = children[0].slice(0, -1);
							return (
								<SyntaxHighlighter
									style={dark}
									language={language}
									children={code}
								/>
							)
						}
					}}
				/>
			</div>
		</main>
	)
}
