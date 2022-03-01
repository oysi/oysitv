
// import fs from "fs";

// export function get() {
// 	// console.log(Object.keys(fs).join(" "));
// 	console.log("getStaticProps");
// 	console.log("__dirname", __dirname);
	
// 	const apps = [];
	
// 	fs.readdirSync(`${__dirname}/../../../pages/apps/`)
// 	.map((item) => {
// 		if (item.includes(".")) return;
		
// 		console.log(item);
		
// 		const data = fs.readFileSync(`${__dirname}/../../../pages/apps/${item}/info.json`, "utf8");
// 		const json = JSON.parse(data);
		
// 		console.log(json);
// 	})
// 	return {props: {msg: "hello world!"}}
// }
