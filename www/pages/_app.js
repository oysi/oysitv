
import "./_app.css"

import Head from 'next/head'
import Navbar from "../components/Navbar.js";
import Layout from "../components/Layout.js";

export default function Index({ Component, props }) {
	return (
		<div className="App">
			<Head>
				<title>oysi.tv</title>
			</Head>
			<Navbar/>
			<Layout>
				<Component {...props} />
			</Layout>
		</div>
	)
}
