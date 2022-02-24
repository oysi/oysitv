
import "./_app.css"

import Head from 'next/head'
import Navbar from "../components/Navbar.js";

export default function({ Component, props }) {
	return (
		<div className="App">
			<Head>
				<title>oysi.tv</title>
			</Head>
			<Navbar/>
			<Component {...props} />
		</div>
	)
}
