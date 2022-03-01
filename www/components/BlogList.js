
import fs from "fs";

const list = [];

fs.readdirSync(`${__dirname}/../../../pages/blog/`)
.map((year) => {
	if (year.includes(".")) return;
	fs.readdirSync(`${__dirname}/../../../pages/blog/${year}/`)
	.map((month) => {
		fs.readdirSync(`${__dirname}/../../../pages/blog/${year}/${month}/`)
		.map((day) => {
			fs.readdirSync(`${__dirname}/../../../pages/blog/${year}/${month}/${day}/`)
			.map((file) => {
				const info = JSON.parse(
					fs.readFileSync(
						`${__dirname}/../../../pages/blog/${year}/${month}/${day}/${file}/info.json`,
						"utf8"
					)
				);
				
				info.path = `/blog/${year}/${month}/${day}/${file}`;
				
				if (!info.category) {
					info.category = "misc";
				}
				
				list.push(info);
			})
		})
	})
})

export default list;
