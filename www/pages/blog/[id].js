
import { useRouter } from "next/router";

export default function Index({ props }) {
	const router = useRouter();
	
	const { id } = router.query;
	
	console.log(props);
	return (
		<div>
			ID: {id}
		</div>
	)
}
