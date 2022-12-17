import React from "react";
import styles from "./jogosCard.module.css";

export default function JogosCard() {
	return (
		<div class={styles.box}>
			<div class={styles.box_top}>
				<img src="jogos/brasil.png" alt="Time 1" />
				<img class={styles.x_image} src="jogos/x.png" alt="X" />
				<img src="jogos/japao.png" alt="Time 2" />
			</div>

			<div class={styles.box_bottom}>
				<p>Quinta-feira</p>
				<p>02/11</p>
				<p>07:20</p>
			</div>
		</div>
	);
}
