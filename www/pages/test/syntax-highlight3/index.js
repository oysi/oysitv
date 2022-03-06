
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as style } from 'react-syntax-highlighter/dist/cjs/styles/prism';

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

const code = `
local x = 2
print(x + math.pi)
`

export default function Index() {
	return (
		<main>
			{/* <h1>Code</h1> */}
			<div>
				<SyntaxHighlighter
					language="lua"
					style={style}
					customStyle={{fontFamily: ""}}
					children={code}
					showLineNumbers={true}
				/>
			</div>
			{/* <h1>ReactMarkdown:</h1>
			<div>
				<ReactMarkdown children={markdown}/>
			</div> */}
			{/* <h1>ReactMarkdown:</h1> */}
			<div>
				<ReactMarkdown
					children={markdown}
					components={{
						code({className, children}) {
							const language = className.replace("language-", "");
							const code = children[0].slice(0, -1);
							return (
								<SyntaxHighlighter
									style={style}
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
