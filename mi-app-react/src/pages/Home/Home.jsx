// 📦 Importaciones
import { useEffect, useState } from "react";
import styles from "./Home.module.css";

// Componentes
import Navbar from "../../components/Navbar/Navbar";
import Cards from "../../components/Card/Cards";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import FormAdd from "../../components/FormAdd/FormAdd";
import Select from "../../components/Select/Select";
import Title from "../../components/Title/Title";
import FormEdit from "../../components/FormEdit/FormEdit";

// Base de datos local
import baseDeDatos from "../../assets/baseDeDatos";

// 📄 Constantes
const arregloGeneros = [
  { id: "todos", tipo: "Todos los generos" },
  ...baseDeDatos.generos,
];

function Home() {
  // 🧠 Estados

  // Películas
  const [datos, setDatos] = useState([]);

  // Filtros
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroVista, setFiltroVista] = useState("todas");
  const [filtroGenero, setFiltroGenero] = useState("todos");
  const [ordenarPor, setOrdenarPor] = useState("fecha");
  const [busqueda, setBusqueda] = useState("");

  // Modales
  const [modalAbierto, setModalAbierto] = useState(false);
  const [modalEliminarAbierto, setModalEliminarAbierto] = useState(false);
  const [modalEditarPelicula, setModalEditarPelicula] = useState(false);

  // Película seleccionada
  const [peliculaSeleccionada, setPeliculaSeleccionada] = useState(null);

  // Contador de películas y series
  const [contadorFiltroActual, setContadorFiltroActual] = useState({
    peliculas: 0,
    series: 0,
    total: 0,
  });

  // 🔁 useEffect

  // Cargar películas desde LocalStorage o base
  useEffect(() => {
    const datosGuardados = localStorage.getItem("peliculas");
    if (datosGuardados) {
      setDatos(JSON.parse(datosGuardados));
    } else {
      setDatos(baseDeDatos.peliculas);
    }
  }, []);

  // Actualizar contador cuando cambian los datos
  useEffect(() => {
    setContadorFiltroActual({
      peliculas: datos.filter((item) => item.tipo === "pelicula").length,
      series: datos.filter((item) => item.tipo === "serie").length,
      total: datos.length,
    });
  }, [datos]);

  // ⚙️ Funciones //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Cambiar filtros
  const cambiarEstadoFiltro = (tipo) => setFiltroTipo(tipo);
  const cambiarFiltroVista = (estado) => setFiltroVista(estado);

  // Actualizar contador según género
  const actualizarContadorGenero = (generoId) => {
    setFiltroGenero(generoId);

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

  // Eliminar película
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
    setModalEditarPelicula(false);
  };

  // Ordenar películas
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

  // 📊 Contadores generales
  const totalItems = datos.length;
  const itemsVistos = datos.filter((item) => item.vista === true).length;
  const itemsPorVer = datos.filter((item) => item.vista === false).length;

  // 🎛️ Películas ordenadas
  const peliculasOrdenadas = ordenarPeliculas(datos, ordenarPor);

  
// 📦 Contador Componente
const Contador = ({ titulo, valor }) => (
  <div className={styles.contadorItem}>
    <span className={styles.contadorNumero}>{valor}</span>
    <span className={styles.contadorTexto}>{titulo}</span>
  </div>
);

// 📦 ListaEliminar Componente
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
              <img src={pelicula.img} alt={pelicula.nombre} className={styles.miniaturaEliminar} />
              <span>{pelicula.nombre}</span>
              {confirmarId === pelicula.id ? (
                <div className={styles.confirmarEliminar}>
                  <span>¿Eliminar?</span>
                  <button className={styles.btnSi} onClick={() => handleEliminar(pelicula.id)}>Sí</button>
                  <button className={styles.btnNo} onClick={() => setConfirmarId(null)}>No</button>
                </div>
              ) : (
                <button className={styles.btnEliminar} onClick={() => setConfirmarId(pelicula.id)}>Eliminar</button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};


  // 📦 Render //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  return (
    <div className={styles.App}>
      <Title text="GesThor Mose" />
      <Navbar cambiarEstadoFiltro={cambiarEstadoFiltro} setBusqueda={setBusqueda} />

      {/* Contadores */}
      <div className={styles.contadorPeliculas}>
        <Contador titulo="Total" valor={totalItems} />
        <Contador titulo="Vistas" valor={itemsVistos} />
        <Contador titulo="Por ver" valor={itemsPorVer} />
        {filtroGenero !== "todos" && (
          <>
            <Contador titulo="Películas" valor={contadorFiltroActual.peliculas} />
            <Contador titulo="Series" valor={contadorFiltroActual.series} />
            <Contador titulo="Total por género" valor={contadorFiltroActual.total} />
          </>
        )}
      </div>

      {/* Filtros */}
      <div className={styles.botonera}>
        <Button text="Todas" onClick={() => cambiarFiltroVista("todas")} />
        <Button text="Vistas" onClick={() => cambiarFiltroVista("vistas")} />
        <Button text="No vistas" onClick={() => cambiarFiltroVista("no-vistas")} />

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

      {/* Tarjetas */}
      <Cards
        datos={peliculasOrdenadas}
        tipo={filtroTipo}
        vista={filtroVista}
        busqueda={busqueda}
        genero={filtroGenero}
        editarPelicula={editarPelicula}
        setModal={setModalEditarPelicula}
        setPeliculaSeleccionada={(pelicula) => setPeliculaSeleccionada(pelicula)}
      />

      {/* Botones flotantes */}
      <div className={styles.floatingButtons}>
        <Button text="+" className={styles.floating} onClick={() => setModalAbierto(true)} />
        <Button text="-" className={`${styles.floating} ${styles.floatingDelete}`} onClick={() => setModalEliminarAbierto(true)} />
      </div>

      {/* Modal agregar */}
      {modalAbierto && (
        <Modal cerrarModal={() => setModalAbierto(false)}>
          <FormAdd onGuardar={agregarPelicula} />
        </Modal>
      )}

      {/* Modal eliminar */}
      {modalEliminarAbierto && (
        <Modal cerrarModal={() => setModalEliminarAbierto(false)}>
          <ListaEliminar
            peliculas={datos}
            onEliminar={eliminarPelicula}
            onClose={() => setModalEliminarAbierto(false)}
          />
        </Modal>
      )}

      {/* Modal editar */}
      {modalEditarPelicula && (
        <Modal cerrarModal={() => setModalEditarPelicula(false)}>
          <FormEdit
            alGuardarCambios={editarPelicula}
            peliculaSeleccionada={peliculaSeleccionada}
          />
        </Modal>
      )}
    </div>
  );
}

export default Home;
