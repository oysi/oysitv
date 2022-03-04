
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const list = [];

fs.readdirSync(path.join("blog"))
.map((year) => {
	fs.readdirSync(path.join("blog", year))
	.map((month) => {
		fs.readdirSync(path.join("blog", year, month))
		.map((name) => {
			const markdown = fs.readFileSync(path.join("blog", year, month, name), "utf8")
			
			// console.log("blog", year, month, name);
			// console.log(markdown)
			
			const info = {};
			
			const {data, content} = matter(markdown);
			
			// info.component = <div dangerouslySetInnerHTML={{__html: marked(content)}}/>
			info.data = data;
			info.content = content;
			info.path = `/blog/${year}/${month}/${name.slice(0, -3)}`
			
			list.push(info);
		})
	})
})

export default list;
