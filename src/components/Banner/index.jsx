import React from "react";
import style from './banner.module.css';

export default function Banner(){
    return(
       <div className={style.banner}> 


        <picture>
          <source type="image/webp" srcSet="banner/Capa.webp" />
          <source type="image/png" srcSet="banner/Capa.png" />
          <img src="banner/Capa.png" alt="Mascote da Seleção Brasileira com a logo da IDE"/>
        </picture>

       <div>
        <h1> <span></span> Seleção Brasileira de Futebol</h1>
       </div>
        
       </div>
    );
}