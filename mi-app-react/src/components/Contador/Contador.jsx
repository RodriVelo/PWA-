import React from 'react';
import styles from './Contador.module.css';

const Contador = ({ titulo, valor }) => (
  <div className={styles.contadorItem}>
    <span className={styles.contadorNumero}>{valor}</span>
    <span className={styles.contadorTexto}>{titulo}</span>
  </div>
);

export default Contador;