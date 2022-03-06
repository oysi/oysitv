
// import React from 'react'
// import ReactMarkdown from 'react-markdown'
import SyntaxHighlighter from 'react-syntax-highlighter'
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
// import {docco} from 'react-syntax-highlighter/dist/esm/styles/hljs'
// import {render} from 'react-dom'
 
// export const renderers = {
//   code: ({language, value}) => {
//     return <SyntaxHighlighter style={docco} language={language} children={value} />
//   }
// }

const markdown = `
local x = 2
print(x + math.pi)
`

export default function Index() {
	return (
		<div>
			<SyntaxHighlighter language={"lua"} children={markdown}/>
		</div>
	)
}
