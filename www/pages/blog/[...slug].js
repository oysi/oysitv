
import { useRouter } from "next/router";

export default function Index() {
	// console.log(props);
	const router = useRouter();
	// const { slug } = router.query;
	const query = router.query;
	const [year, month, name] = query?.slug ?? [];
	
	// console.log("slug", slug);
	
	return (
		<div>
			<p>{year}</p>
			<p>{month}</p>
			<p>{name}</p>
		</div>
	)
}
