import PropTypes from "prop-types";
import styles from "./Select.module.css";

const Select = ({
  label,
  placeholder,
  arreglo,
  value,
  onChange,
  className = "",
  valorKey,
  textoKey,
}) => {
  return (
    <div className={`${styles.selectContainer} ${className}`}>
      {label && <label>{label}</label>}
      <select
        onChange={onChange}
        value={value}
        className={styles.select}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {arreglo.map((opcion, index) => (
          <option key={index} value={valorKey ? opcion[valorKey] : opcion}>
            {textoKey ? opcion[textoKey] : opcion}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  arreglo: PropTypes.array.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  valorKey: PropTypes.string,
  textoKey: PropTypes.string,
};

export default Select;
