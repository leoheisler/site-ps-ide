import React from "react";
import styles from './style.module.css';

export default function ({children, id}) {
    if (!children || !id) {
        alert("O id e o texto precisa ser preenchido nos Subtitles!!")
    }
    const newText = children.toUpperCase();

    return (<h2 id={id} className={styles.title}>{newText}</h2>);
}