// Importaciones
import PropTypes from "prop-types";  // Dependencias externas
import style from "./Card.module.css";  // Estilos locales

// Componente Card
const Card = ({ nombre, img }) => {
  return (
    <div className={style.card}>
      <img src={img} alt={nombre} className={style.image} />
      {/* Si deseas agregar más contenido a la Card, descomenta la siguiente sección */}
      {/* <div className="card-body">
        <h4 className="card-title">{nombre}</h4>
        <p className="card-text">{rating}</p>
      </div> */}
    </div>
  );
};

// Validación de Propiedades
Card.propTypes = {
  nombre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
