import React from 'react';
import style from './jogos.module.css';
import Subtitle from "../Subtitle";

export default function Jogos() {
  return (
    <div className={style.jogosSection}>
      <Subtitle id="jogos">Próximos Jogos</Subtitle>
      <ul className={style.listaJogos}>
        <Jogo
          timeA={{img: "brasil", name: "Brasil"}}
          timeB={{img: "japao", name: "Japão"}}
          hora={"07:20"} data={{dia: 2, mes: 11, d_semana:"Quinta-feira"}}/>

        <Jogo
          timeA={{img: "brasil", name: "Brasil"}}
          timeB={{img: "coreia", name: "Coreia do Sul"}}
          hora={"08:00"} data={{dia: 7, mes: 11, d_semana:"Sexta-feira"}}/>

        <Jogo
          timeA={{img: "brasil", name: "Brasil"}}
          timeB={{img: "ghana", name: "Gana"}}
          hora={"20:30"} data={{dia: 11, mes: 11, d_semana:"Sábado"}}/>
      </ul>
    </div>
  )
}

function Jogo({
                timeA, timeB,
                data,
                hora
              }) {
  return (
    <div className={style.jogo}>
      <div className={style.jogoEnfrentamento}>
        <img src={`./jogos/${timeA.img}.svg`} alt={`Logo do time ${timeA.name}`}/>
        <span>X</span>
        <img src={`./jogos/${timeB.img}.svg`} alt={`Logo do time ${timeB.name}`}/>
      </div>
      <div className={style.jogoDetalhes}>
        <span> <strong>{data.d_semana}</strong></span>
        <span>{data.dia}/{data.mes}</span>
        <span>{hora}</span>
      </div>
    </div>
  )
}