// Importaciones
import PropTypes from "prop-types";    // Dependencias externas
import styles from "./Button.module.css";  // Estilos locales

// Componente Button
const Button = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {text}
    </button>
  );
};

// Validación de Propiedades
Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
