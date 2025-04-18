import { Search } from "lucide-react";
import styles from "./Navbar.module.css";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

const Navbar = ({ cambiarEstadoFiltro}) => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        GesThor Mose
      </a>
      <nav className={styles.nav}>
        <Button text="Todos" onClick={() => { cambiarEstadoFiltro("todos"); cambiarFiltroVista("todas"); }} />
        <Button text="Películas" onClick={() => cambiarEstadoFiltro("pelicula")} />
        <Button text="Series" onClick={() => cambiarEstadoFiltro("serie")} />
       
        <form className={styles.searchForm}>
          <Input />
          <Button
            text={<Search className={styles.search} onClick={() => {}} aria-label="Buscar" />}
          />
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
