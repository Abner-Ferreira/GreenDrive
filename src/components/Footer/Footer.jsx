import React from 'react'
import styles from './footer.module.css'

export default function Footer() {

    // Pega a data atual e coloca em uma variável
    const data = new Date()

    // Pega a ano atual e coloca em uma variável
    const ano = data.getFullYear()


    return (
        <>
            <div className={styles.copy}>
                <p>Copyright © {ano}</p>
                <p><a href="#" rel="noreferrer">Política de Privacidade</a></p>
            </div>
        </>
    )
}
