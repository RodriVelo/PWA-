import { useState } from "react";
import Card from "./Card";
import style from "./Card.module.css";
import baseDeDatos from "../../assets/baseDeDatos";

const Cards = () => {
  const [filtro, setFiltro] = useState("todos");

  const filtroPelicula = (tipo) => {
    setFiltro(tipo);
  };

  const peliculasFiltradas =
    filtro === "todos"
      ? baseDeDatos.peliculas
      : baseDeDatos.peliculas.filter((pelicula) => pelicula.tipo === filtro);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center gap-3 mb-4">
        {/* <button
          onClick={() => filtroPelicula("todos")}
          className="btn btn-outline-dark"
        >
          Todos
        </button>
        <button
          onClick={() => filtroPelicula("pelicula")}
          className="btn btn-outline-dark"
        >
          Películas
        </button>
        <button
          onClick={() => filtroPelicula("serie")}
          className="btn btn-outline-dark"
        >
          Series
        </button> */}
      </div>

      <div className="row justify-content-center g-4">
        {peliculasFiltradas.map((pelicula) => (
          <div className="col-sm-6 col-md-4 col-lg-2" key={pelicula.id}>
            <Card img={pelicula.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
