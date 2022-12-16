import styles from './style.module.css'
import React from 'react'
export default function Header(){
    return(
        <div className={styles.container} id="topo">

            <ul>
                <li className={styles.itemLista}><a href="#topo">HOME</a></li>
                <li className={styles.itemLista}><a href="#sobre a seleção">SOBRE</a></li>
                <li className={styles.itemLista}><a href="#jogadores">JOGADORES</a></li>
                <li className={styles.itemLista}><a href="#jogos">JOGOS</a></li>
            </ul>

        </div>
    )
}