import React, {useState} from 'react';
import styles from './jogadores.module.css';
import Subtitle from "../Subtitle";

const ATACANTES = "atacantes";
const MEIO_CAMPO = 'meio-campo';
const DEFENSORES = 'defensores';
const GOLEIROS = 'goleiros'

const jogadores = {
    atacantes: [
        {nome: "ATACANTE 1", idade: 27, posicao: "J", img: "./def.png"},
        {nome: "ATACANTE 2", idade: 27, posicao: "J", img: "./def.png"},
        {nome: "ATACANTE 3", idade: 27, posicao: "J", img: "./def.png"},
        {nome: "Pedrinho", idade: 27, posicao: "P", img: "./def.png"}
    ],
    meio_campo: [
        {nome: "MC 1", idade: 21, posicao: "J", img: "./def.png"}
    ],
    defensores: [
        {nome: "DF 1", idade: 34, posicao: "J", img: "./def.png"}
    ],
    goleiros: [
    {nome: "GOALKEEPER 1", idade: 25, posicao: "J", img: "./def.png"}
    ]

}


export default function Jogadores () {
    const [abaAberta, setAbaAberta] = useState(ATACANTES);

    const getJogadoresAba = (aba) => {
        switch (aba) {
            case ATACANTES:
                return jogadores.atacantes;
            case MEIO_CAMPO:
                return jogadores.meio_campo;
            case DEFENSORES:
                return jogadores.defensores;
            case GOLEIROS:
                return jogadores.goleiros;
            default:
                alert(`Aba ${aba} não existe. (Jogadores)`);
        }
    }


    return <div className={styles.jogadoresSection}>
        <Subtitle id="jogadores">Jogadores</Subtitle>

        <div className={styles.abas}>
                <button
                    className={(abaAberta === ATACANTES) ? styles.abaSelecionada : styles.aba}

                    onClick={() => setAbaAberta(ATACANTES)}>
                    Atacantes
                </button>
                <button
                    className={(abaAberta === MEIO_CAMPO) ? styles.abaSelecionada : styles.aba}
                    onClick={() => setAbaAberta(MEIO_CAMPO)}>
                    Meio Campo
                </button>
                <button
                    className={(abaAberta === DEFENSORES) ? styles.abaSelecionada : styles.aba}
                    onClick={() => setAbaAberta(DEFENSORES)}>
                    Defensores
                </button>
                <button
                    className={(abaAberta === GOLEIROS) ? styles.abaSelecionada : styles.aba}
                    onClick={() => setAbaAberta(GOLEIROS)}>
                    Goleiros
                </button>
        </div>

        <ul className={styles.jogadores}>
            {getJogadoresAba(abaAberta).map((jogador, id) => (
                <Jogador id={id} jogador={jogador} />
                ))}
        </ul>

    </div>
}

function Jogador({id, jogador}) {
    return <li className={styles.jogador} key={id}>
        <div className={styles.foto}>
            <span></span>
            <img src={jogador.img} alt="" />
        </div>
        <div className={styles.info}>
            <span className={styles.nomeJogador}>{jogador.nome}</span>
            <span>Idade: {jogador.idade} anos</span>
        </div>
        <div className={styles.posicao}>{jogador.posicao}</div>
    </li>;
}
