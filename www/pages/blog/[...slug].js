
import { useRouter } from "next/router";

export default function Index(props) {
	console.log(props);
	const router = useRouter();
	const { slug } = router.query;
	
	console.log("slug", slug);
	
	return (
		<div>
			{slug.join(" ")}
		</div>
	)
}
