
import styles from "./index.module.css";

import { useRef, useState, useEffect, useLayoutEffect } from "react";

export default function Index() {
	const canvas = useRef(null);
	const context = useRef(null);
	
	const [is_drawing, set_is_drawing] = useState(false);
	
	useEffect(() => {
		context.current = canvas.current.getContext("2d");
		
		context.current.lineCap = "round";
		context.current.strokeStyle = "white";
		context.current.lineWidth = 5;
		
		canvas.current.width = window.innerWidth;
		canvas.current.height = window.innerHeight - 60;
		// context.current.scale(0.2, 0.2);
	}, [])
	
	const onMouseDown = (e) => {
		context.current.beginPath();
		context.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
		set_is_drawing(true);
	}
	
	const onMouseUp = (e) => {
		context.current.closePath();
		set_is_drawing(false);
	}
	
	const onMouseMove = (e) => {
		if (is_drawing) {
			console.log(canvas.current.width, canvas.current.height);
			context.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
			context.current.stroke();
		}
	}
	
	const onContextMenu = (e) => {
		e.preventDefault();
		e.stopPropagation();
	}
	
	return (
		<canvas
			className={styles.canvas}
			onMouseDown={onMouseDown}
			onMouseUp={onMouseUp}
			onMouseMove={onMouseMove}
			onContextMenu={onContextMenu}
			ref={canvas}
		>
			canvas
		</canvas>
	)
}
