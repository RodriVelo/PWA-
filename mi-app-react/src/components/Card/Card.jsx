// import React from "react";
import PropTypes from "prop-types";
import style from "./Card.module.css";

const Card = ({ nombre, img}) => {
  return (
    <div className={style.card}>
      <img src={img} alt={nombre} className={style.image} />
      {/* <div className="card-body">
        <h4 className="card-title">{nombre}</h4>
        <p className="card-text">{rating}</p>
      </div> */}
    </div>
  );
};

Card.propTypes = {
  nombre: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Card;
