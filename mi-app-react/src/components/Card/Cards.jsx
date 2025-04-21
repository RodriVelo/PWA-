import Card from "./Card";
import style from "./Card.module.css";
// import baseDeDatos from "../../assets/baseDeDatos";

const Cards = ({ tipo, vista, busqueda, datos }) => {
  const peliculasFiltradas = datos.filter((pelicula) => {
    const coincideTipo = tipo === "todos" || pelicula.tipo === tipo;
    const coincideVista =
      vista === "todas" ||
      (vista === "vistas" && pelicula.vista === true) ||
      (vista === "no-vistas" && pelicula.vista === false);
    const coincideBusqueda = pelicula.nombre
      .toLowerCase()
      .includes((busqueda || "").toLowerCase());
    
   /*  console.log(datos); */
    return coincideTipo && coincideVista && coincideBusqueda;
  });
 /* console.log(peliculasFiltradas[1]); */
  return (
    <div className={style.container}>
      <div className={style.row}>
        {peliculasFiltradas.map((pelicula) => (
          <div className={style.cardWrapper} key={pelicula.id}>
            <Card img={pelicula.img} nombre={pelicula.nombre} />
          </div>
        ))}
        {peliculasFiltradas.length === 0 && (
          <div className={style.noResults}>No se encontraron resultados</div>
        )}
        {/* {console.log(peliculasFiltradas.length)} */}
      </div>
    </div>
  );
};

export default Cards;
