
import styles from "./Navbar2.module.css";

import Link from "next/link";

import { useRouter } from "next/router";

export default function Index() {
	const router = useRouter();
	
	const get_style = (path) => {
		if (path === "/") {
			if (router.pathname === path) {
				return {};
			}
		} else {
			if (router.pathname == path || router.pathname.startsWith(path + "/")) {
				return {};
			}
		}
		return {boxShadow: "none"};
	}
	
	return (
		<nav className={styles.index}>
			<div className={styles.left}>
				<div>
					<Link href="/"><a>oysi.tv</a></Link>
				</div>
			</div>
			<div className={styles.center}>
				<ul>
					<li><Link href="/"><a style={get_style("/")}>Home</a></Link></li>
					<li><Link href="/apps"><a style={get_style("/apps")}>Apps</a></Link></li>
					<li><Link href="/blog"><a style={get_style("/blog")}>Blog</a></Link></li>
				</ul>
			</div>
			<div className={styles.right}>
				<div>
					right
				</div>
			</div>
		</nav>
	)
}
