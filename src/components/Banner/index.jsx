import React from "react";
import style from './banner.module.css';

export default function Banner(){
    return(
       <div className={style.banner}> 

       <img src="banner/Capa.png" alt="Mascote da Seleção Brasileira com a logo da IDE"/>


       <div className="">
        <h1>Seleção Brasileira de Futebol</h1>
       </div>
        
       </div>
    );
}