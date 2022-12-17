import React, {useState} from 'react';
import styles from './jogadores.module.css';
import Subtitle from "../Subtitle";

const ATACANTES = "atacantes";
const MEIO_CAMPO = 'meio-campo';
const DEFENSORES = 'defensores';
const GOLEIROS = 'goleiros'

const jogadores = {
    atacantes: [
        {nome: "Jogador 1", idade: 27, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 2", idade: 31, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 3", idade: 25, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 4", idade: 34, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 5", idade: 19, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 6", idade: 34, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 7", idade: 25, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 8", idade: 34, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 9", idade: 25, posicao: "J", img: "./jogadores/default.png"},
    ],
    meio_campo: [
        {nome: "Jogador 10", idade: 27, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 11", idade: 31, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 12", idade: 25, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 13", idade: 34, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 14", idade: 19, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 15", idade: 34, posicao: "J", img: "./jogadores/default.png"},
    ],
    defensores: [
        {nome: "Jogador 16", idade: 27, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 17", idade: 31, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 18", idade: 25, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 19", idade: 34, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 20", idade: 19, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 21", idade: 34, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 22", idade: 25, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 23", idade: 34, posicao: "J", img: "./jogadores/default.png"},
    ],
    goleiros: [
        {nome: "Jogador 24", idade: 27, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 25", idade: 31, posicao: "J", img: "./jogadores/default.png"},
        {nome: "Jogador 26", idade: 25, posicao: "J", img: "./jogadores/default.png"},
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
                <Jogador key={id} jogador={jogador} />
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
            <span className={styles.posicaoTextual}>Posição: {jogador.posicao}</span>
        </div>
        <div className={styles.posicao}>{jogador.posicao}</div>
    </li>;
}
