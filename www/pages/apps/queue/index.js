
import styles from "./index.module.css";

import { useState, useEffect, useLayoutEffect, useRef } from "react";

export default function Index({ props }) {
	
	const [list, _set_list] = useState([]);
	const [error, set_error] = useState();
	const [timer_text, set_timer_text] = useState("N/A");
	
	const set_list = (new_list) => {
		console.log("set_list", new_list);
		_set_list(new_list);
		localStorage.setItem("queue_list", JSON.stringify(new_list));
	}
	
	useEffect(() => {
		try {
			const data = JSON.parse(localStorage.getItem("queue_list"));
			if (data) {
				set_list(data);
			}
		} catch (e) {
			console.log("error", e);
		}
		const interval = setInterval(() => {
			console.log("interval");
			set_timer_text(Math.random());
		}, 1000)
		return () => {
			clearInterval(interval);
		}
	}, [])
	
	
	
	const get_val = (e) => {
		if (e.target.value === "") return [null, ""];
		const result = e.target.value.match(/^(\d+)$/)
		if (!result) return [null, "position must be a number"];
		const val = Number(result[1]);
		if (!val) return [null, "position must be a number"];
		if (val < 0) return [null, "position must be greater than 0"];
		if (list.length > 0) {
			const latest = list[list.length - 1];
			if (val >= latest.pos) {
				return [null, "position must be less than previous"];
			}
		}
		return [val, ""]
	}
	
	const validate = (e) => {
		const [val, err] = get_val(e);
		if (!val) {
			set_error(err);
			return;
		}
		set_error(null);
	}
	
	const add_to_list = (e) => {
		const [val] = get_val(e);
		if (!val) return;
		const new_list = [...list];
		new_list.push({
			pos: val,
			time: Date.now() / 1000,
		})
		set_list(new_list);
		validate(e);
		e.target.value = "";
	}
	
	const get_count_towards = () => {
		if (list.length <= 1) {
			return 0;
		}
		const index = list.length - 1;
		
		const item1 = list[Math.max(index - 5, 0)];
		const item2 = list[index];
		
		const pos_per_sec = (item1.pos - item2.pos)/(item2.time - item1.time);
		
		const time_remaining = item2.pos/pos_per_sec;
		
		const count_towards = item2.time + time_remaining;
		
		return count_towards;
	}
	
	const calc_estimate = (index) => {
		if (index === 0) {
			return [];
		}
		
		const item1 = list[Math.max(index - 5, 0)];
		const item2 = list[index];
		
		const pos_per_sec = (item1.pos - item2.pos)/(item2.time - item1.time);
		
		const time_remaining = item2.pos/pos_per_sec;
		
		const date = new Date((item2.time + time_remaining)*1000);
		// const est = date.toISOString().slice(-13, -8);
		const est = date.toTimeString().slice(0, 5)
		
		const h = Math.floor(time_remaining/3600);
		const m = Math.floor(time_remaining/60%60);
		
		return [
			Math.floor(pos_per_sec*60),
			est,
			h + "h " + m + "m",
		];
	}
	
	return (
		<main className={styles.main}>
			<h1>Queue estimator</h1>
			<br/>
			<h1>{(() => {
				const dif = Math.ceil(Math.max(get_count_towards() - Date.now()/1000, 0));
				const h = Math.floor(dif/3600);
				const m = Math.floor(dif/60%60);
				const s = Math.floor(dif%60);
				return h + "h " + ("0" + m).slice(-2) + "m " + ("0" + s).slice(-2) + "s";
				// return dif;
			})()}</h1>
			<br/>
			<table>
				<tbody>
					<tr>
						<th>
							<button
								style={{padding: "0px 5px"}}
								onClick={(e) => {
									const new_list = [];
									set_list(new_list);
								}}
							>Clear</button>
						</th>
						<th>Pos</th>
						<th>Time</th>
						<th>Pos/min</th>
						<th>Remaining</th>
						<th>ETA</th>
					</tr>
					{(() => {
						if (!list) {
							return <div>SOMETHING WENT WRONG</div>
						}
						return list.map((item, index) => {
							const date = new Date(item.time*1000);
							// const time = date.toISOString().slice(-13, -8);
							const time = date.toTimeString().slice(0, 5);
							const [min, est, eta] = calc_estimate(index);
							return (
								<tr key={item.pos}>
									<td>
										<button
											style={{padding: "0px 5px"}}
											onClick={(e) => {
												const new_list = list.filter((item2, index2) => {
													return index2 !== index
												})
												set_list(new_list);
											}}
										>X</button>
									</td>
									<td>
										{item.pos}
									</td>
									<td>
										{time}
									</td>
									<td>
										{index === 0 ? "" : min}
									</td>
									<td>
										{index === 0 ? "" : eta}
									</td>
									<td>
										{index === 0 ? "" : est}
									</td>
								</tr>
							)
						})
					})()}
				</tbody>
			</table>
			<br/>
			<div>New entry (position)</div>
			<input
				onChange={validate}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						add_to_list(e);
					}
				}}
			></input>
			<span style={{paddingLeft: "10px"}}>{error}</span><br/>
			<br/>
			<h2>Information</h2>
			<p>Hello</p>
			<p>Note: You must have 2 entries for it to work. More entries are even better.</p>
			<p>Note: The most recent estimate should be the most accurate.</p>
		</main>
	)
}
