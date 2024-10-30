import React from 'react'
import styles from './footer.module.css'

export default function Footer() {

    // Pega a data atual e coloca em uma variável
    const data = new Date()

    // Pega a ano atual e coloca em uma variável
    const ano = data.getFullYear()


    return (
        <>
            <div className={styles.container}>
                <div className={styles.contato}>
                    <h1>CONTATO</h1>
                </div>
                <div className={styles.informacoes}>
                    <div className={styles.vendedor}>
                        <div className={styles.imagemvendedor}>
                            <img
                                src="https://promo.basf.com/campaign/Interno/GuiMarcilio.jpg"
                                alt="Vendedor basf"
                            />
                        </div>
                        <div className={styles.textovendedor}>
                            <h2>VENDEDOR</h2>
                            <p className={styles.nomeVendedor}>Guilherme Ribeiro</p>
                            <p className={styles.numeroVendedor}><a href="https://web.whatsapp.com/send?phone=5511915565522" target="_blank" rel='noreferrer'>+55 11 91556-5522</a></p>
                            <p className={styles.numeroVendedor}><a href="mailto: mobilidadesa@basf.com" target="_blank" rel='noreferrer'>mobilidadesa@basf.com</a></p>
                        </div>
                    </div>
                    <div className={styles.shopbasf}>
                        <div className={styles.boxCinzaEscuro}>
                            <h3>shop@<span className={styles.basf}>BASF</span></h3>
                            <p>em outras indústrias:</p>
                            <a href="https://shop.basf.com/br/" target="_blank" rel='noreferrer'>www.shop.basf.com/br</a>

                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copy}>
                <p>Copyright © BASF SA {ano}</p>
                <p><a href="https://shop.basf.com/PrivacyPolicyHome/" target='_blank' rel="noreferrer">Política de Privacidade</a></p>
            </div>
        </>
    )
}
