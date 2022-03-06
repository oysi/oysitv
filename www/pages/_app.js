
import "./_app.css"

import Head from 'next/head'
import Navbar from "../components/Navbar.js";
import Navbar2 from "../components/Navbar2.js";
import Layout from "../components/Layout.js";

export default function Index({ Component, pageProps, bloglist }) {
	return (
		<div className="App">
			<Head>
				<title>oysi.tv</title>
			</Head>
			{
				!pageProps.ignore_navbar && <Navbar/>
			}
			{/* {
				!pageProps.ignore_navbar && <Navbar2/>
			} */}
			<br/>
			{
				pageProps.ignore_layout
				? (
					<Component {...pageProps}/>
				)
				: (
					<Layout {...pageProps}>
						<Component {...pageProps}/>
					</Layout>
				)
			}
		</div>
	)
}
