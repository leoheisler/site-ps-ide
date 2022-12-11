import styles from './style.module.css'
export default function Header(){
    return(
        < div className={styles.container}>
            <ul>
                <li className={styles.itemLista}>HOME</li>
                <li className={styles.itemLista}>SOBRE</li>
                <li className={styles.itemLista}>JOGADORES</li>
                <li className={styles.itemLista}>JOGOS</li>
            </ul>
        </div>
    )
}