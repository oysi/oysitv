
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";

// import Board from "./Board.js";

// import "./Minesweeper2.css";

import styles from "./index.module.css";

const bomb_colors = {
	1: "blue",
	2: "green",
	3: "red",
	4: "purple",
	5: "maroon",
	6: "turqoise",
	7: "black",
	8: "gray",
}

export default function Index() {
	const grid_w = 24;
	const grid_h = 24;
	
	const block_w = 24;
	const block_h = 24;
	
	const block_pad = 2;
	
	const canvas_w = grid_w*block_w + grid_w*block_pad;
	const canvas_h = grid_h*block_h + grid_h*block_pad;
	
	const reset_block = (block) => {
		block.cleared = false;
		block.is_bomb = false;
		block.is_flag = false;
		block.is_question = false;
		block.bombs = 0;
	}
	
	const new_block = (x, y) => {
		const block = {
			x: x,
			y: y,
		};
		reset_block(block);
		return block;
	}
	
	const get_block = (grid, x, y) => {
		if (grid[x]) {
			return grid[x][y];
		}
	}
	
	const calc_bombs = (grid) => {
		for (let x = 0; x < grid_w; x++) {
			for (let y = 0; y < grid_h; y++) {
				const block = grid[x][y];
				block.bombs = 0;
				for (let ox = -1; ox <= 1; ox++) {
					for (let oy = -1; oy <= 1; oy++) {
						const oblock = get_block(grid, x + ox, y + oy);
						if (oblock && oblock != block && oblock.is_bomb) {
							block.bombs += 1;
						}
					}
				}
			}
		}
	}
	
	const [bomb_start, set_bomb_start] = useState(100);
	
	const gen_bombs = (grid, avoid_x, avoid_y) => {
		let max = Number(bomb_start);
		if (!max) {
			max = 100;
		}
		max = Math.min(max, grid_w*grid_h - 9)
		for (let bomb_index = 0; bomb_index < max; bomb_index++) {
			while (true) {
				let x = Math.floor(Math.random()*grid_w)
				let y = Math.floor(Math.random()*grid_h)
				if (!(Math.abs(x - avoid_x) <= 1 && Math.abs(y - avoid_y) <= 1)) {
					const block = get_block(grid, x, y);
					if (block && !block.is_bomb) {
						block.is_bomb = true;
						break;
					}
				}
			}
		}
		calc_bombs(grid);
	}
	
	const new_grid = () => {
		const grid = [];
		for (let x = 0; x < grid_w; x++) {
			grid[x] = [];
			for (let y = 0; y < grid_h; y++) {
				grid[x][y] = new_block(x, y);
			}
		}
		// calc_bombs(grid);
		return grid;
	}
	
	/*
		STATES
	*/
	const [grid, set_grid] = useState(new_grid());
	const [show_bombs, set_show_bombs] = useState(false);
	
	const on_contextmenu = (e) => {
		e.preventDefault();
		e.stopPropagation();
	}
	
	const clear_block = (block) => {
		if (block.cleared) return;
		block.cleared = true;
		block.is_flag = false;
		block.is_question = false;
		if (block.bombs > 0 || block.is_bomb) return;
		for (let ox = -1; ox <= 1; ox++) {
			for (let oy = -1; oy <= 1; oy++) {
				const oblock = get_block(grid, block.x + ox, block.y + oy);
				if (oblock && oblock != block) {
					clear_block(oblock);
				}
			}
		}
	}
	
	const is_grid_started = (grid) => {
		for (let x = 0; x < grid_w; x++) {
			for (let y = 0; y < grid_h; y++) {
				const block = grid[x][y];
				if (block.cleared) {
					return true;
				}
			}
		}
		return false;
	}
	
	const get_board_state = () => {
		const board_state = {
			cleared: 0,
			bombs_cleared: 0,
			remaining: 0,
			game_over: false,
			won: false,
		};
		for (let x = 0; x < grid_w; x++) {
			for (let y = 0; y < grid_h; y++) {
				const block = grid[x][y];
				if (block.cleared) {
					board_state.cleared += 1;
					if (block.is_bomb) {
						board_state.bombs_cleared += 1;
					}
				}
				// remaining
				if (!block.is_bomb) {
					board_state.remaining += 1;
					if (block.cleared) {
						board_state.remaining -= 1;
					}
				}
			}
		}
		if (board_state.bombs_cleared > 0) {
			board_state.game_over = true;
		}
		if (board_state.remaining === 0) {
			board_state.game_over = true;
			board_state.won = true;
		}
		return board_state;
	}
	
	// useLayoutEffect(() => {
	// 	// console.log("useLayoutEffect []");
		
	// 	// const canvas = document.getElementById("Minesweeper2-canvas");
		
	// 	// canvas.removeEventListener("contextmenu", on_contextmenu);
	// 	// canvas.addEventListener("contextmenu", on_contextmenu);
		
	// 	// canvas.removeEventListener("mousedown", on_mousedown);
	// 	// canvas.addEventListener("mousedown", on_mousedown);
	// }, [])
	
	const draw_text = (ctx, text, x, y, w) => {
		ctx.strokeStyle = "black";
		ctx.lineWidth = w;
		ctx.strokeText(text, x, y);
		ctx.strokeStyle = ctx.fillStyle;
		ctx.lineWidth = 2;
		ctx.strokeText(text, x, y);
	}
	
	useLayoutEffect(() => {
		// console.log("useLayoutEffect");
		const board_state = get_board_state();
		
		const canvas = document.getElementById("Minesweeper2-canvas");
		const ctx = canvas.getContext("2d");
		
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		
		for (let x = 0; x < grid_w; x++) {
			for (let y = 0; y < grid_h; y++) {
				const block = grid[x][y];
				if (block.cleared) {
					ctx.fillStyle = "rgb(100, 100, 100)";
				} else {
					ctx.fillStyle = "rgb(140, 140, 140)";
				}
				
				ctx.fillRect(x*(block_w + block_pad) + block_pad/2, y*(block_h + block_pad) + block_pad/2, block_w, block_h)
				if (block.cleared || block.is_flag || block.is_question || (block.is_bomb && (show_bombs || board_state.game_over))) {
					ctx.font = "20px sans-serif";
					let text = "";
					if (block.is_flag) {
						text = "*";
						ctx.fillStyle = "red";
					} else if (block.is_question) {
						text = "?";
						ctx.fillStyle = "black";
					} else if (block.is_bomb) {
						text = "*";
						ctx.fillStyle = "black";
					} else {
						if (block.bombs > 0) {
							text = block.bombs;
						}
						ctx.fillStyle = bomb_colors[block.bombs];
					}
					if (board_state.game_over) {
						if (block.is_bomb && block.is_flag) {
							
						} else if (!block.is_bomb && block.is_flag) {
							ctx.fillStyle = "green";
						}
					}
					let posx = x*(block_w + block_pad) + block_pad/2 + block_w/2 - 6
					let posy = y*(block_h + block_pad) + block_pad/2 + block_h/2 + 6
					if (text === "*") {
						posx += 2;
						posy += 5;
					}
					draw_text(
						ctx,
						text,
						posx,
						posy,
						4
					)
				}
			}
		}
		
		// if (board_state.game_over) {
		// 	ctx.fillStyle = "red";
		// 	ctx.font = "80px sans-serif";
			
		// 	draw_text(
		// 		ctx,
		// 		"GAME OVER",
		// 		80,
		// 		200,
		// 		8
		// 	)
		// }
	})
	
	const new_game = () => {
		for (let x = 0; x < grid_w; x++) {
			for (let y = 0; y < grid_h; y++) {
				const block = grid[x][y];
				reset_block(block);
			}
		}
		calc_bombs(grid);
		set_grid([...grid]);
	}
	
	const onMouseDown = (e) => {
		// console.log(e);
		// console.log("event", e.layerX, e.target.offsetWidth);
		// console.log(e);
		// console.log(e);
		// console.log(e.view.innerWidth);
		const board_state = get_board_state();
		
		// console.log(board_state);
		
		if (board_state.game_over) {
			return;
		}
		
		// fix for scaling
		const pos_x = e.nativeEvent.layerX/e.target.offsetWidth * grid_w;
		const pos_y = e.nativeEvent.layerY/e.target.offsetHeight * grid_h;
		// console.log(pos_x, pos_y);
		// const pos_x = e.layerX / (block_w + block_pad);
		// const pos_y = e.layerY / (block_h + block_pad);
		const block_x = Math.floor(pos_x);
		const block_y = Math.floor(pos_y);
		const block = get_block(grid, block_x, block_y)
		// console.log("canvas", e.layerX, e.target.offsetWidth);
		if (block) {
			// console.log("click", block_x, block_y);
			if (e.button === 0) {
				// left
				if (block.is_flag) return;
				if (!is_grid_started(grid)) {
					gen_bombs(grid, block_x, block_y);
				}
				clear_block(block);
				if (block.is_bomb) {
					console.log("GAME OVER");
				} else {
				}
			} else if (e.button === 2) {
				// right
				if (!block.cleared) {
					if (block.is_flag) {
						block.is_flag = false;
						block.is_question = true;
					} else if (block.is_question) {
						block.is_question = false;
						block.is_flag = false;
						// block.is_flag = !block.is_flag;
					} else {
						block.is_flag = true;
					}
				}
			} else if (e.button === 1) {
				if (!block.cleared) {
					return;
				}
				// middle
				let nearby_flags = 0;
				for (let ox = -1; ox <= 1; ox++) {
					for (let oy = -1; oy <= 1; oy++) {
						const oblock = get_block(grid, block.x + ox, block.y + oy);
						if (oblock && oblock != block && oblock.is_flag) {
							nearby_flags += 1;
						}
					}
				}
				if (nearby_flags >= block.bombs) {
					for (let ox = -1; ox <= 1; ox++) {
						for (let oy = -1; oy <= 1; oy++) {
							const oblock = get_block(grid, block.x + ox, block.y + oy);
							if (oblock && oblock != block && !oblock.is_flag) {
								clear_block(oblock);
							}
						}
					}
				}
			}
			set_grid([...grid]);
		}
	}
	
	const onContextMenu = (e) => {
		e.preventDefault();
		e.stopPropagation();
	}
	
	return (
		<main className={styles.Minesweeper2}>
			<div style={{height: "20px"}}/>
			<div>
				<div>
					<button onClick={new_game}>New Game</button>
				</div>
				<div>
					<label>
						<input type="checkbox" checked={show_bombs} onChange={() => set_show_bombs(!show_bombs)}/>
						Show bombs
					</label>
				</div>
				<div>
					<label>
						Bombs: {(() => {
							let bombs = 0;
							for (let x = 0; x < grid_w; x++) {
								for (let y = 0; y < grid_h; y++) {
									const block = grid[x][y];
									if (block.is_bomb) {
										bombs += 1;
									}
									if (block.is_flag || (block.is_bomb && block.cleared)) {
										bombs -= 1;
									}
								}
							}
							return bombs;
						})()}
					</label>
				</div>
				<div>
					{(() => {
						const board_state = get_board_state();
						if (board_state.game_over) {
							if (board_state.won) {
								return "You won!";
							} else {
								return "Game Over";
							}
						} else {
							return "Game in progress";
						}
					})()}
				</div>
				<div>
					Bombs:<input
						onChange={(e) => {
							set_bomb_start(e.target.value);
						}}
					/>
				</div>
			</div>
			<div style={{height: "20px"}}/>
			<canvas
				id="Minesweeper2-canvas"
				width={canvas_w}
				height={canvas_h}
				onMouseDown={onMouseDown}
				onContextMenu={onContextMenu}
			>
				Your browser does not support canvas.
			</canvas>
		</main>
	)
}
