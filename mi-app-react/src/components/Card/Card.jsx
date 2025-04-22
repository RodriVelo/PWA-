import PropTypes from "prop-types"; // Dependencias externas
import style from "./Card.module.css"; 
import Button from "../Button/Button";

// Componente Card
const Card = ({ pelicula, editarPelicula , setModal , setPeliculaSeleccionada }) => {
  // Función para cambiar el estado vista/no vista
  const cambiarEstadoVista = () => {
    editarPelicula({ ...pelicula, vista: !pelicula.vista });
  };

  return (
    <div className={style.card}>
      <div className={style.cardWrapper}>
        <img src={pelicula.img} alt={pelicula.nombre} className={style.image} />
        <h5 className={style.cardTitle}>{pelicula.nombre}</h5>
        <p>Año:{pelicula.anio}</p>
        <p>Tipo:{pelicula.tipo}</p>
        <p>Director:{pelicula.director}</p>
        <p>Calificación:{pelicula.calificacion}/10</p>
        <p>Estado:{pelicula.vista ? "✅ Vista" : "❌ No vista"}</p>

        <div className={style.cardButtons}>
          <Button
            text="Editar"
            onClick={() => {
              setModal(true);
              setPeliculaSeleccionada(pelicula);

            }}
          />
          <Button
            text={pelicula.vista ? "Marcar como no vista" : "Marcar como vista"}
            onClick={cambiarEstadoVista}
            className={pelicula.vista ? style.btnNoVista : style.btnVista}
          />
        </div>
      </div>
    </div>
  );
};

// Validación de Propiedades
Card.propTypes = {
  pelicula: PropTypes.shape({
    id: PropTypes.number,
    nombre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    anio: PropTypes.number,
    tipo: PropTypes.string,
    director: PropTypes.string,
    calificacion: PropTypes.number,
    generos: PropTypes.arrayOf(PropTypes.number),
    vista: PropTypes.bool,
  }).isRequired,
  editarPelicula: PropTypes.func.isRequired,
};
export default Card;
