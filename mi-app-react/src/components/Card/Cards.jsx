import Card from "./Card";
import style from "./Card.module.css";
import baseDeDatos from "../../assets/baseDeDatos";

const Cards = ({ tipo, vista }) => {
  const peliculasFiltradas = baseDeDatos.peliculas.filter((pelicula) => {
    const coincideTipo = tipo === "todos" || pelicula.tipo === tipo;
    const coincideVista =
      vista === "todas" ||
      (vista === "vistas" && pelicula.vista === true) ||
      (vista === "no-vistas" && pelicula.vista === false);

    return coincideTipo && coincideVista;
  });

  return (
    <div className={style.container}>
      <div className={style.row}>
        {peliculasFiltradas.map((pelicula) => (
          <div className={style.cardWrapper} key={pelicula.id}>
            <Card img={pelicula.img} nombre={pelicula.nombre} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
