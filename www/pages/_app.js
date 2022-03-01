
import "./_app.css"

import Head from 'next/head'
import Navbar from "../components/Navbar.js";
import Layout from "../components/Layout.js";

export default function Index({ Component, pageProps }) {
	return (
		<div className="App">
			<Head>
				<title>oysi.tv</title>
			</Head>
			{
				!pageProps.ignore_navbar && <Navbar/>
			}
			{
				pageProps.ignore_layout
				? (
					<Component {...pageProps}/>
				)
				: (
					<Layout>
						<Component {...pageProps}/>
					</Layout>
				)
			}
		</div>
	)
}
