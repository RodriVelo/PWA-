/* import { Search } from "lucide-react"; */
import styles from "./Navbar.module.css";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button.jsx";

const Navbar = ({ cambiarEstadoFiltro, setBusqueda }) => {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.logo}>
        GesThor Mose
      </a>
      <nav className={styles.nav}>
        <Button
          text="Todos"
          onClick={() => {
            cambiarEstadoFiltro("todos"); /* creo que no la esta usando */
            /* cambiarFiltroVista("todas"); */
          }}
        />
        <Button
          text="Películas"
          onClick={() => cambiarEstadoFiltro("pelicula")}
        />
        <Button text="Series" onClick={() => cambiarEstadoFiltro("serie")} />

        <form
          className={styles.searchForm}
          onSubmit={(e) => e.preventDefault()}
        >
          <Input onChange={(e) => setBusqueda(e.target.value)} />
        </form>
      </nav>
    </header>
  );
};

export default Navbar;
