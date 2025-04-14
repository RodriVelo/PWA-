import styles from "./Button.module.css";
const Button = ({ text, onClick }) => {
  return <button onClick={onClick} className={styles.button}>{text}</button>;
};
export default Button;
