import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Card/Cards";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal"
import FormAdd from "./components/FormAdd/FormAdd";
import baseDeDatos from "./assets/baseDeDatos"
import "./App.css";



const App = () => {

useEffect(() => {
  setDatos(baseDeDatos.peliculas);
}, []);

  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroVista, setFiltroVista] = useState("todas");
  const [busqueda, setBusqueda] = useState("");
  const [datos, setDatos] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false)
 
  const cambiarEstadoFiltro = (tipo) => setFiltroTipo(tipo);
  const cambiarFiltroVista = (estado) => setFiltroVista(estado);

  const agregarPelicula = (nuevaPeli) => {
    const id = datos.length + 1
    const nuevaConId = {...nuevaPeli, id}
    setDatos([...datos, nuevaConId]);
    setModalAbierto(false)
  }

  
  return (
    <div className="App">
      <Navbar
        cambiarEstadoFiltro={cambiarEstadoFiltro}
        setBusqueda={setBusqueda} 
      />
      <div className="botonera">
        <Button text="Todas" onClick={() => cambiarFiltroVista("todas")} />
        <Button text="Vistas" onClick={() => cambiarFiltroVista("vistas")} />
        <Button
          text="No vistas"
          onClick={() => cambiarFiltroVista("no-vistas")}
        />
      </div>
      <Cards datos={datos} tipo={filtroTipo} vista={filtroVista} busqueda={busqueda} />
      
      <Button text="+" className="floating" onClick={() => setModalAbierto(true)}/>
      {modalAbierto && (
        <Modal cerrarModal={() => setModalAbierto(false)}>
          <FormAdd onGuardar={agregarPelicula} />
        </Modal>
      )}
    </div>
  );
};

export default App;
