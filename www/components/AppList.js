
import fs from "fs";

const apps = [];

fs.readdirSync(`${__dirname}/../../../pages/apps/`)
.map((item) => {
	if (item.includes(".")) return;
	
	const data = fs.readFileSync(`${__dirname}/../../../pages/apps/${item}/info.json`, "utf8");
	const json = JSON.parse(data);
	
	json.item = item;
	json.key = Math.random();
	json.path = `/apps/${item}`;
	
	if (!json.category) {
		json.category = "misc";
	}
	
	apps.push(json);
})

export default apps;
