import React from 'react';
import styles from './banner.module.css';

const Banner = () => {

  function redirecionamentoParaPagina() {
    window.location.href = 'https://repintura.basf.com.br/';
  }
  
  return (
    <div className={styles.bannerHome} onClick={redirecionamentoParaPagina}>

    </div>
  );
};
  
export default Banner;