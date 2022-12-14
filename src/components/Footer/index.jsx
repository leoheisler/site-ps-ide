import React from 'react';
import style from './footer.module.css';

export default function Footer() {
    return <div className={style.footer}>
        <div className={style.iconSelecao}>
            <img src="./footer/cbf 1.png" alt="Seleção"/>
        </div>
        <div className={style.texto}>
            <p>Confederação Brasileira de Futebol © x IDE © Todos os direitos reservados.</p>
            
            <div>
                <a href='#'>Termos de Uso</a> | <a href='#'>Politica de Privacidade</a> | <a href='#'>Política de Cookies</a>
            </div>
        </div>
        <div className={style.iconIDE}>
            <span>Realização</span>
            <img src="./footer/ide 1.png" alt="IDE"/>
        </div>
    </div>
} 