
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

import Markdown from "../../../components/Markdown.js";

export default function Index() {
	return (
		<main>
			<Markdown>{markdown}</Markdown>
		</main>
	)
}
