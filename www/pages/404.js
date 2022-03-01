
import { useRouter } from "next/router";

export default function Index() {
	const router = useRouter();
	return (
		<div>
			<h1>404 Not Found</h1>
			<p>{router.asPath}</p>
		</div>
	)
}
