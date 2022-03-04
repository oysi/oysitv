
import Blog from "../../../../../components/Blog.js";
import info from "./info.json";

export default function Index() {
	console.log(info);
	return (
		<Blog info={info}>
			First post.
		</Blog>
	)
}
