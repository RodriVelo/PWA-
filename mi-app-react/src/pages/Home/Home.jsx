// Importaciones de React y hooks
import { useEffect, useState } from "react";

// Estilos
import styles from "./Home.module.css";

// Componentes
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Card/Cards";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import FormAdd from "../../components/FormAdd/FormAdd";
import Select from "../../components/Select/Select";
import Title from "../../components/Title/Title";

// Base de datos local
import baseDeDatos from "../../assets/baseDeDatos";

function Home() {
  // Estado principal de las películas
  const [datos, setDatos] = useState([]);

  // Filtros
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroVista, setFiltroVista] = useState("todas");
  const [filtroGenero, setFiltroGenero] = useState("todos");

  // Búsqueda por nombre
  const [busqueda, setBusqueda] = useState("");

  // Control de modales
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalEliminarAbierto, setModalEliminarAbierto] = useState(false);

  // Ordenamiento
  const [ordenarPor, setOrdenarPor] = useState("fecha");

  // Estado para el contador de películas y series filtradas por género
  const [contadorFiltroActual, setContadorFiltroActual] = useState({
    peliculas: 0,
    series: 0,
    total: 0,
  });

  // Lista de géneros para el select
  const arregloGeneros = [
    { id: "todos", tipo: "Todos los generos" },
    ...baseDeDatos.generos,
  ];

  // Cargar datos desde localStorage o baseDeDatos
  useEffect(() => {
    const datosGuardados = localStorage.getItem("peliculas");
    if (datosGuardados) {
      setDatos(JSON.parse(datosGuardados));
    } else {
      setDatos(baseDeDatos.peliculas);
    }
  }, []);

  // Actualizar contador al cargar datos
  useEffect(() => {
    // Inicializar contador con todos los elementos
    setContadorFiltroActual({
      peliculas: datos.filter((item) => item.tipo === "pelicula").length,
      series: datos.filter((item) => item.tipo === "serie").length,
      total: datos.length,
    });
  }, [datos]);

  // Cambiar filtros
  const cambiarEstadoFiltro = (tipo) => setFiltroTipo(tipo);
  const cambiarFiltroVista = (estado) => setFiltroVista(estado);

  // Función para actualizar el contador cuando cambia el género
  const actualizarContadorGenero = (generoId) => {
    setFiltroGenero(generoId);

    // Contar películas y series del género seleccionado
    if (generoId === "todos") {
      setContadorFiltroActual({
        peliculas: datos.filter((item) => item.tipo === "pelicula").length,
        series: datos.filter((item) => item.tipo === "serie").length,
        total: datos.length,
      });
    } else {
      const filtrados = datos.filter((item) =>
        item.generos.includes(parseInt(generoId))
      );
      setContadorFiltroActual({
        peliculas: filtrados.filter((item) => item.tipo === "pelicula").length,
        series: filtrados.filter((item) => item.tipo === "serie").length,
        total: filtrados.length,
      });
    }
  };

  // Agregar nueva película
  const agregarPelicula = (nuevaPeli) => {
    const peliculasConId = datos.filter((p) => p.id !== undefined);
    const ultimoId =
      peliculasConId.length > 0
        ? Math.max(...peliculasConId.map((p) => p.id))
        : 0;
    const nuevaConId = { ...nuevaPeli, id: ultimoId + 1 };

    const nuevasPeliculas = [...datos, nuevaConId];
    setDatos(nuevasPeliculas);
    localStorage.setItem("peliculas", JSON.stringify(nuevasPeliculas));
    setModalAbierto(false);
  };

  // Eliminar película por ID
  const eliminarPelicula = (id) => {
    const peliculasActualizadas = datos.filter(
      (pelicula) => pelicula.id !== id
    );
    setDatos(peliculasActualizadas);
    localStorage.setItem("peliculas", JSON.stringify(peliculasActualizadas));
  };

  // Editar película
  const editarPelicula = (peliculaEditada) => {
    const peliculasActualizadas = datos.map((pelicula) =>
      pelicula.id === peliculaEditada.id ? peliculaEditada : pelicula
    );
    setDatos(peliculasActualizadas);
    localStorage.setItem("peliculas", JSON.stringify(peliculasActualizadas));
  };

  // Ordenar películas por fecha o rating
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

  // Contadores
  const totalItems = datos.length;
  const itemsVistos = datos.filter((item) => item.vista === true).length;
  const itemsPorVer = datos.filter((item) => item.vista === false).length;

  // Ordenar películas según el criterio actual
  const peliculasOrdenadas = ordenarPeliculas(datos, ordenarPor);

  return (
    <div className={styles.App}>
      <Title text="GesThor Mose" />
      <Navbar
        cambiarEstadoFiltro={cambiarEstadoFiltro}
        setBusqueda={setBusqueda}
      />

      {/* Contadores de películas */}
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
        {filtroGenero !== "todos" && (
          <>
            <div className={styles.contadorItem}>
              <span className={styles.contadorNumero}>
                {contadorFiltroActual.peliculas}
              </span>
              <span className={styles.contadorTexto}>Películas</span>
            </div>
            <div className={styles.contadorItem}>
              <span className={styles.contadorNumero}>
                {contadorFiltroActual.series}
              </span>
              <span className={styles.contadorTexto}>Series</span>
            </div>
            <div className={styles.contadorItem}>
              <span className={styles.contadorNumero}>
                {contadorFiltroActual.total}
              </span>
              <span className={styles.contadorTexto}>Total por género</span>
            </div>
          </>
        )}
      </div>

      {/* Filtros y ordenamientos */}
      <div className={styles.botonera}>
        <Button text="Todas" onClick={() => cambiarFiltroVista("todas")} />
        <Button text="Vistas" onClick={() => cambiarFiltroVista("vistas")} />
        <Button
          text="No vistas"
          onClick={() => cambiarFiltroVista("no-vistas")}
        />

        <Select
          label="Ordenar por"
          className={styles.ordenar}
          arreglo={[
            { value: "fecha-desc", text: "Fecha: más reciente" },
            { value: "fecha-asc", text: "Fecha: más antigua" },
            { value: "rating-desc", text: "Rating: mayor a menor" },
            { value: "rating-asc", text: "Rating: menor a mayor" },
          ]}
          value={ordenarPor}
          onChange={(e) => setOrdenarPor(e.target.value)}
          valorKey="value"
          textoKey="text"
        />

        <Select
          label="Género"
          arreglo={arregloGeneros}
          value={filtroGenero}
          onChange={(e) => actualizarContadorGenero(e.target.value)}
          className={styles.ordenar}
          valorKey="id"
          textoKey="tipo"
        />
      </div>

      {/* Renderizado de tarjetas */}
      <Cards
        datos={peliculasOrdenadas}
        tipo={filtroTipo}
        vista={filtroVista}
        busqueda={busqueda}
        genero={filtroGenero} // Asegurate de usar esto en Cards si querés filtrar por género
        editarPelicula={editarPelicula}
      />

      {/* Botones flotantes */}
      <div className={styles.floatingButtons}>
        <Button
          text="+"
          className={styles.floating}
          onClick={() => setModalAbierto(true)}
        />
        <Button
          text="-"
          className={`${styles.floating} ${styles.floatingDelete}`}
          onClick={() => setModalEliminarAbierto(true)}
        />
      </div>

      {/* Modal para agregar */}
      {modalAbierto && (
        <Modal cerrarModal={() => setModalAbierto(false)}>
          <FormAdd onGuardar={agregarPelicula} />
        </Modal>
      )}

      {/* Modal para eliminar */}
      {modalEliminarAbierto && (
        <Modal cerrarModal={() => setModalEliminarAbierto(false)}>
          <ListaEliminar
            peliculas={datos}
            onEliminar={eliminarPelicula}
            onClose={() => setModalEliminarAbierto(false)}
          />
        </Modal>
      )}
    </div>
  );
}

// Componente para seleccionar y eliminar una película
const ListaEliminar = ({ peliculas, onEliminar, onClose }) => {
  const [confirmarId, setConfirmarId] = useState(null);

  const handleEliminar = (id) => {
    onEliminar(id);
    setConfirmarId(null);
  };

  return (
    <div className={styles.listaEliminar}>
      <h3>Seleccione una película para eliminar</h3>
      <ul>
        {peliculas.map((pelicula) => (
          <li key={pelicula.id}>
            <div className={styles.itemPelicula}>
              <img
                src={pelicula.img}
                alt={pelicula.nombre}
                className={styles.miniaturaEliminar}
              />
              <span>{pelicula.nombre}</span>

              {confirmarId === pelicula.id ? (
                <div className={styles.confirmarEliminar}>
                  <span>¿Eliminar?</span>
                  <button
                    className={styles.btnSi}
                    onClick={() => handleEliminar(pelicula.id)}
                  >
                    Sí
                  </button>
                  <button
                    className={styles.btnNo}
                    onClick={() => setConfirmarId(null)}
                  >
                    No
                  </button>
                </div>
              ) : (
                <button
                  className={styles.btnEliminar}
                  onClick={() => setConfirmarId(pelicula.id)}
                >
                  Eliminar
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
