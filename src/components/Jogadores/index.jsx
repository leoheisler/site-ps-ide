import React, {useState} from 'react';
import styles from './jogadores.module.css';

const ATACANTES = "atacantes";
const MEIO_CAMPO = 'meio-campo';
const DEFENSORES = 'defensores';
const GOLEIROS = 'goleiros'

const jogadores = {
    atacantes: [
        {nome: "ATACANTE 1", idade: 27, numero: "J", img: "./def.png"}
    ],
    meio_campo: [
        {nome: "MC 1", idade: 21, numero: "J", img: "./def.png"}
    ],
    defensores: [
        {nome: "DF 1", idade: 34, numero: "J", img: "./def.png"}
    ],
    goleiros: [
    {nome: "GOALKEEPER 1", idade: 25, numero: "J", img: "./def.png"}
    ]

}


export default function () {
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
        <h2 id="jogadores" className={styles.title}>Jogadores</h2>

        <div className={styles.abas}>
                <button
                    className={(abaAberta === ATACANTES) && styles.abaSelecionada}

                    onClick={() => setAbaAberta(ATACANTES)}>
                    Atacantes
                </button>
                <button
                    className={(abaAberta === MEIO_CAMPO) && styles.abaSelecionada}
                    onClick={() => setAbaAberta(MEIO_CAMPO)}>
                    Meio Campo
                </button>
                <button
                    className={(abaAberta === DEFENSORES) && styles.abaSelecionada}
                    onClick={() => setAbaAberta(DEFENSORES)}>
                    Defensores
                </button>
                <button
                    className={(abaAberta === GOLEIROS) && styles.abaSelecionada}
                    onClick={() => setAbaAberta(GOLEIROS)}>
                    Goleiros
                </button>
        </div>

        <ul>
            {getJogadoresAba(abaAberta).map((jogador, id) => (
                <li className={styles.jogador} key={id}>
                    <div className={styles.foto}>
                        <img src={jogador.img} alt=""/>
                    </div>
                    <div className="info">
                        <span>{jogador.nome}</span>
                        <span>Idade: {jogador.idade} anos</span>
                    </div>
                    <div className="numero">{jogador.numero}</div>
                </li>
                ))}
        </ul>

    </div>
}