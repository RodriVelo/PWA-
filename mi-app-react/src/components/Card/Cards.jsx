import Card from "./Card";
import style from "./Card.module.css";
// import baseDeDatos from "../../assets/baseDeDatos";

const Cards = ({ tipo, vista, busqueda, datos , editarPelicula }) => {
  const peliculasFiltradas = datos.filter((pelicula) => {
    const coincideTipo = tipo === "todos" || pelicula.tipo === tipo;
    const coincideVista =
      vista === "todas" ||
      (vista === "vistas" && pelicula.vista === true) ||
      (vista === "no-vistas" && pelicula.vista === false);
    const coincideBusqueda = pelicula.nombre
      .toLowerCase()
      .includes((busqueda || "").toLowerCase());

    return coincideTipo && coincideVista && coincideBusqueda;
  });

  return (
    <div className={style.container}>
      <div className={style.row}>
        {peliculasFiltradas.map((pelicula) => (
          <div className={style.cardWrapper} key={pelicula.id}>
            <Card pelicula={pelicula} editarPelicula={editarPelicula} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
