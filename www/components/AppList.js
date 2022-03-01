
import fs from "fs";

const apps = [];

fs.readdirSync(`${__dirname}/../../../pages/apps/`)
.map((file) => {
	if (file.includes(".")) return;
	
	const info = JSON.parse(
		fs.readFileSync(
			`${__dirname}/../../../pages/apps/${file}/info.json`,
			"utf8"
		)
	);
	
	if (info.show === false) return;
	
	info.path = `/apps/${file}`;
	
	if (!info.category) {
		info.category = "misc";
	}
	
	apps.push(info);
})

export default apps;
