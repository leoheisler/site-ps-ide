import styles from './style.module.css'
import React from 'react'
export default function Header(){
    return(
        <div className={styles.container}>
            <ul>
                <li className={styles.itemLista}><a href="">HOME</a></li>
                <li className={styles.itemLista}><a href="#sobre a seleção">SOBRE</a></li>
                <li className={styles.itemLista}><a href="#jogadores">JOGADORES</a></li>
                <li className={styles.itemLista}><a href="">JOGOS</a></li>
            </ul>
        </div>
    )
}