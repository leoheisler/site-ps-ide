import React from 'react';
import Subtitle from "../Subtitle";
import styles from './sobre.module.css';
export default function Sobre() {
    return(
        <section className={styles.secao}>
            <Subtitle id="sobre a seleção">Sobre a Seleção</Subtitle>
            
            <div className={styles.info}>
                <p>A Seleção Brasileira de Futebol representa o Brasil nas competições de futebol da CONMEBOL e FIFA.</p>
                <p>Formada em 1915 e considerada um dos maiores símbolos do país, é chamada de "Seleção", "Seleção Canarinho", "Verde-Amarela", além de outras alcunhas. 
                É a seleção mais bem-sucedida da história do futebol mundial,sendo a recordista em conquistas em Copas do Mundo.</p>
            </div>

            <div className = {styles.info_box}>
                <div className ={styles.info_note}>
                    <p>
                        <em>Tem 5 títulos invictos (1958, 1962, 1970, 1994 e 2002) 
                        e quatro títulos da Copa das Confederações FIFA (1997, 2005, 2009 e 2013).</em>
                    </p>

                </div>
            </div>
            <div className={styles.info}>
                <img src="sobre/estadio.png" alt="estadio" className={styles.img}/>
                <p>
                    MAIS QUE 5 ESTRELAS, 200 MILHÕES DE CORAÇÕES,<br />
                    É taça na raça Brasil
                </p>
            </div>
        </section>
    )
}