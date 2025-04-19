import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string, // <- importante agregar esto
};

export default Button;
