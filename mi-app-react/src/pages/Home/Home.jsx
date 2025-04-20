import { useEffect, useState } from "react";
import styles from "./Home.module.css";

import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Card/Cards";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import FormAdd from "../../components/FormAdd/FormAdd";
import baseDeDatos from "../../assets/baseDeDatos";


function Home () {
  useEffect(() => {
    const datosGuardados = localStorage.getItem("peliculas");
    if (datosGuardados) {
      setDatos(JSON.parse(datosGuardados));
    } else {
      setDatos(baseDeDatos.peliculas);
    }
  }, []);

  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroVista, setFiltroVista] = useState("todas");
  const [busqueda, setBusqueda] = useState("");
  const [datos, setDatos] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [ordenarPor, setOrdenarPor] = useState("fecha");

  const cambiarEstadoFiltro = (tipo) => setFiltroTipo(tipo);
  const cambiarFiltroVista = (estado) => setFiltroVista(estado);

  const agregarPelicula = (nuevaPeli) => {
    const peliculasConId = datos.filter((p) => p.id !== undefined);

    const ultimoId =
      peliculasConId.length > 0
        ? Math.max(...peliculasConId.map((p) => p.id))
        : 0;
    const nuevaConId = { ...nuevaPeli, id: ultimoId + 1 };

    // console.log("Último ID:", ultimoId);
    // console.log("Nueva película con ID:", nuevaConId);

    const nuevasPeliculas = [...datos, nuevaConId];
    setDatos(nuevasPeliculas);
    localStorage.setItem("peliculas", JSON.stringify(nuevasPeliculas));
    setModalAbierto(false);
  };

  const ordenarPeliculas = (peliculas, criterio) => {
    const [campo, orden] = criterio.split("-");

    return [...peliculas].sort((a, b) => {
      if (campo === "fecha") {
        return orden === "asc" ? a.anio - b.anio : b.anio - a.anio;
      } else if (campo === "rating") {
        return orden === "asc"
          ? a.calificacion - b.calificacion
          : b.calificacion - a.calificacion;
      }
      return 0;
    });
  };

  // contadores
  const totalItems = datos.length;
  const itemsVistos = datos.filter((item) => item.vista === true).length;
  const itemsPorVer = datos.filter((item) => item.vista === false).length;

  const peliculasOrdenadas = ordenarPeliculas(datos, ordenarPor);

  return (
    <div className={styles.App}>
      <Navbar
        cambiarEstadoFiltro={cambiarEstadoFiltro}
        setBusqueda={setBusqueda}
      />

      <div className={styles.contadorPeliculas}>
        <div className={styles.contadorItem}>
          <span className={styles.contadorNumero}>{totalItems}</span>
          <span className={styles.contadorTexto}>Total</span>
        </div>
        <div className={styles.contadorItem}>
          <span className={styles.contadorNumero}>{itemsVistos}</span>
          <span className={styles.contadorTexto}>Vistas</span>
        </div>
        <div className={styles.contadorItem}>
          <span className={styles.contadorNumero}>{itemsPorVer}</span>
          <span className={styles.contadorTexto}>Por ver</span>
        </div>
      </div>

      <div className={styles.botonera}>
        <Button text="Todas" onClick={() => cambiarFiltroVista("todas")} />
        <Button text="Vistas" onClick={() => cambiarFiltroVista("vistas")} />
        <Button
          text="No vistas"
          onClick={() => cambiarFiltroVista("no-vistas")}
        />
        <label htmlFor="ordenar">Ordenar por:</label>

        <select
          className={styles.ordenar}
          id="ordenar"
          onChange={(e) => setOrdenarPor(e.target.value)}
        >
          <option value="fecha-desc">Fecha: más reciente</option>
          <option value="fecha-asc">Fecha: más antigua</option>
          <option value="rating-desc">Rating: mayor a menor</option>
          <option value="rating-asc">Rating: menor a mayor</option>
        </select>
      </div>

      <Cards
        datos={peliculasOrdenadas}
        tipo={filtroTipo}
        vista={filtroVista}
        busqueda={busqueda}
      />

      <Button
        text="+"
        className={styles.floating}
        onClick={() => setModalAbierto(true)}
      />
      {modalAbierto && (
        <Modal cerrarModal={() => setModalAbierto(false)}>
          <FormAdd onGuardar={agregarPelicula} />
        </Modal>
      )}
    </div>
  );
}

export default Home;
