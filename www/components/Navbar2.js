
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
			if (router.pathname.startsWith(path)) {
				return {};
			}
		}
		return {boxShadow: "none"};
	}
	
	return (
		<div>
		<div className={styles.index}>
			<nav className={styles.navbar}>
				<div className={styles.left}>
					<Link href="/"><a>oysi.tv</a></Link>
				</div>
				<div className={styles.center}>
					<ul>
						<li><Link href="/"><a style={get_style("/")}>Home</a></Link></li>
						<li><Link href="/apps"><a style={get_style("/apps")}>Apps</a></Link></li>
						<li><Link href="/test"><a style={get_style("/test")}>Test</a></Link></li>
					</ul>
				</div>
				<div className={styles.right}>
					<div>Right</div>
				</div>
			</nav>
		</div>
		<div style={{height: "60px"}}/>
		</div>
	)
}
