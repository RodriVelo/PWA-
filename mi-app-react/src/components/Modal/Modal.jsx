import React from 'react';
import style from './Modal.module.css';

const Modal = ({ children, cerrarModal }) => {
  return (
    <div className={style.overlay}>
      <div className={style.modal}>
        <button className={style.closeButton} onClick={cerrarModal}>X</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
