import styles from './style.module.css'
export default function Header(){
    return(
        < div className={styles.container}>
            <ul>
                <li className={styles.itemLista}>HOME</li>
                <li className={styles.itemLista}>PRODUTOS</li>
                <li className={styles.itemLista}>SOBRE</li>
            </ul>
        </div>
    )
}