import styles from "./Navbar.module.css";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        GesThor Mose
      </a>
      <nav className={styles.nav}>
        <a href="#" /* target="_blank" */>
          Peliculas
        </a>
        <a href="#" /* target="_blank" */>
          Series
        </a>
        <a href="#" /* target="_blank" */>
          Vistas
        </a>
        <a href="#" /* target="_blank" */>
          Por ver
        </a>
        <form className={styles.searchForm}>
          <Input />
          <Button text={" *Logo de lupa* "} />
        </form>
      </nav>
    </header>
  );
};
export default Navbar;
