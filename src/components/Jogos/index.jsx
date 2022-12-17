import React from "react";
import styles from "./jogos.module.css";

export default function Jogos() {
	return (
		<div class={styles.container}>
			<h1 class={styles.title}>Próximos Jogos</h1>

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

			<div class={styles.box}>
				<div class={styles.box_top}>
					<img src="jogos/brasil.png" alt="Time 1" />
					<img class={styles.x_image} src="jogos/x.png" alt="X" />
					<img src="jogos/coreia.png" alt="Time 2" />
				</div>

				<div class={styles.box_bottom}>
					<p>Sexta-feira</p>
					<p>07/11</p>
					<p>08:00</p>
				</div>
			</div>

			<div class={styles.box}>
				<div class={styles.box_top}>
					<img src="jogos/brasil.png" alt="Time 1" />
					<img class={styles.x_image} src="jogos/x.png" alt="X" />
					<img src="jogos/ghana.png" alt="Time 2" />
				</div>

				<div class={styles.box_bottom}>
					<p>Sábado</p>
					<p>11/11</p>
					<p>20:30</p>
				</div>
			</div>
		</div>
	);
}
