// Importaciones
import PropTypes from "prop-types"; // Dependencias externas
import style from "./Card.module.css"; // Estilos locales

// Componente Card
const Card = ({ nombre, img }) => {
  return (
    <div className={style.card}>
      <div className={style.cardWrapper}>
        <img src={img} alt={nombre} className={style.image} />
        <h6 className={style.cardTitle}>{nombre}</h6>
      </div>
    </div>
  );
};

// Validación de Propiedades
Card.propTypes = {
  nombre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
