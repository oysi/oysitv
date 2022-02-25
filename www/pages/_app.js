
import "./_app.css"

import Head from 'next/head'
import Navbar from "../components/Navbar.js";
import Navbar2 from "../components/Navbar2.js";

export default function Index({ Component, props }) {
	return (
		<div className="App">
			<Head>
				<title>oysi.tv</title>
			</Head>
			{/* <Navbar/> */}
			<Navbar2/>
			<Component {...props} />
		</div>
	)
}
