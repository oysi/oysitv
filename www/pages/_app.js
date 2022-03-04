
import "./_app.css"

import Head from 'next/head'
import Navbar from "../components/Navbar.js";
import Layout from "../components/Layout.js";

import { useRouter } from "next/router";

// export default function Index({ Component, pageProps, bloglist }) {
export default function Index(props) {
	const Component = props.Component;
	const pageProps = props.pageProps;
	
	const router = useRouter();
	
	// console.log(bloglist);
	
	// console.log(props);
	
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

import BlogList from "../components/BlogList.js";

export function getStaticProps() {
	return {
		props: {
			bloglist: BlogList,
		},
	}
}
