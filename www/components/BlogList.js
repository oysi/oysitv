
import fs from "fs";

const list = [];

fs.readdirSync(`${__dirname}/../../../pages/blog/`)
.map((year) => {
	if (year.includes(".")) return;
	fs.readdirSync(`${__dirname}/../../../pages/blog/${year}/`)
	.map((month) => {
		fs.readdirSync(`${__dirname}/../../../pages/blog/${year}/${month}/`)
		.map((file) => {
			const info = JSON.parse(
				fs.readFileSync(
					`${__dirname}/../../../pages/blog/${year}/${month}/${file}/info.json`,
					"utf8"
				)
			);
			
			if (info.show === false) return;
			
			info.path = `/blog/${year}/${month}/${file}`;
			
			if (!info.category) {
				info.category = "misc";
			}
			
			list.push(info);
		})
	})
})

export default list;
