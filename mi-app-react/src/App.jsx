import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Cards from "./components/Card/Cards";
import Button from "./components/Button/Button";

const App = () => {
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [filtroVista, setFiltroVista] = useState("todas");

  const cambiarEstadoFiltro = (tipo) => {
    setFiltroTipo(tipo);
  };

  const cambiarFiltroVista = (estado) => {
    setFiltroVista(estado);
  };

  return (
    <div className="App">
      <Navbar
        cambiarEstadoFiltro={cambiarEstadoFiltro}
      />

      
      <Cards tipo={filtroTipo} vista={filtroVista} />

      {/* Nuevo: filtro por estado de vista */}
      <Button text="Vistas" onClick={() => cambiarFiltroVista("vistas")} />
      <Button text="No vistas" onClick={() => cambiarFiltroVista("no-vistas")} />

    </div>
  );
};

export default App;
