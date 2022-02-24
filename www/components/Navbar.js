
import styles from "./Navbar.module.css";

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
		return {borderBottom: "none"};
	}
	
	return (
		<nav className={styles.navbar}>
			<div className={styles.left}>
				<span>oysi.tv</span>
			</div>
			<div className={styles.center}>
				<ul>
					<li><Link href="/"><a style={get_style("/")}>Home</a></Link></li>
					<li><Link href="/apps"><a style={get_style("/apps")}>Apps</a></Link></li>
				</ul>
			</div>
			{/* <div className={styles.right}>
				<ul>
					<li>Github</li>
					<li>Twitch</li>
					<li>Youtube</li>
				</ul>
			</div> */}
		</nav>
	)
}
