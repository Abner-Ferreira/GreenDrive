import React, { useEffect } from 'react'
import styles from './thankyou.module.css'
import { Helmet } from 'react-helmet'
import { useUtag } from '../../context/utag';

export default function ThankYou() {
  
  const utag = useUtag();

  useEffect(() => {
    // Explicitly handle page views
    utag.view({ page_name: "Mobilidade | Thank You", page_language: "pt", page_identifier: "thank you page", page_category: "form completed", });
  }, [utag]);
  return (
    <>
      <Helmet>
        <title>Mobilidade | Thank You</title>
      </Helmet>
      <main className={styles.container}>
        <h1 className={styles.titulo}>Obrigado por se interessar em produtos BASF</h1>
        <p className={styles.subtitulo}>Seu formulário foi recebido com sucesso, em breve um de nossos representantes entrará em contato.</p>
      </main>
    </>
  )
}
