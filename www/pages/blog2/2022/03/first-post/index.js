
import Blog from "../../../../../components/Blog.js";
import info from "./info.json";

export default function Index() {
	return (
		<Blog info={info}>
			First post.
		</Blog>
	)
}
