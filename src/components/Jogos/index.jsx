import React from "react";
import styles from "./jogos.module.css";

export default function Jogos() {
	return (
		<div className={styles.container} id="proximos_jogos">
			<h1 className={styles.title}>Próximos Jogos</h1>

			<JogosCard
				time1="jogos/brasil.png"
				time2="jogos/japao.png"
				dia="Quinta-feira"
				data="02/11"
				hora="07:20"
			/>
			<JogosCard
				time1="jogos/brasil.png"
				time2="jogos/coreia.png"
				dia="Sexta-feira"
				data="07/11"
				hora="08:00"
			/>
			<JogosCard
				time1="jogos/brasil.png"
				time2="jogos/ghana.png"
				dia="Sábado"
				data="11/11"
				hora="20:30"
			/>
		</div>
	);
}

function JogosCard({ id, time1, time2, dia, data, hora }) {
	return (
		<div className={styles.box} key={id}>
			<div className={styles.box_top}>
				<img src={time1} alt="Time 1" />
				<img className={styles.x_image} src="jogos/x.png" alt="X" />
				<img src={time2} alt="Time 2" />
			</div>

			<div className={styles.box_bottom}>
				<p>{dia}</p>
				<p>{data}</p>
				<p>{hora}</p>
			</div>
		</div>
	);
}
