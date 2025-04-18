import styles from "./Input.module.css";

const Input = ({ onChange }) => {
  return (
    <input
      type="search"
      className={styles.searchInput}
      placeholder="Buscar película o serie..."
      onChange={onChange}
    />
  );
};

export default Input;
