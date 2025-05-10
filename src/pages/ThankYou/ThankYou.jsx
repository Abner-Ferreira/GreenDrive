import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './thankyou.module.css';

export default function ThankYou() {
  

  return (
    <>
      <Helmet>
        <title>GreenDrive | Thank You</title>
      </Helmet>
      <main className={styles.container}>
        <h1 className={styles.titulo}>Obrigado por se interessar em produtos da GreenDrive</h1>
        <p className={styles.subtitulo}>Seu formulário foi recebido com sucesso, em breve um de nossos representantes entrará em contato.</p>
      </main>
    </>
  )
}
