import { useState, useEffect } from "react";
import styles from "./FormEdit.module.css";
import Button from "../Button/Button";

const FormEdit = ({ alGuardarCambios, peliculaSeleccionada }) => {
  const [pelicula, setPelicula] = useState({
    id: null,
    nombre: "",
    img: "",
    anio: "",
    tipo: "",
    director: "",
    calificacion: "",
    generos: [],
    vista: false,
  });

  // Actualizar el estado con la película seleccionada cuando se cambia
  useEffect(() => {
    if (peliculaSeleccionada) {
      setPelicula(peliculaSeleccionada);
    }
  }, [peliculaSeleccionada]); 

  const actualizarCampo = (evento) => {
    const { name, value, type, checked } = evento.target;
    setPelicula((estadoAnterior) => ({
      ...estadoAnterior,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const guardarCambios = (evento) => {
    evento.preventDefault();
    alGuardarCambios(pelicula); // Pasar la película con los cambios al componente padre
  };

  return (
    <form onSubmit={guardarCambios} className={styles.formContainer}>
      <div className={styles.formGroup}>
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          className={styles.input}
          value={pelicula.nombre}
          onChange={actualizarCampo}
          placeholder="Nombre"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="img">URL de imagen</label>
        <input
          id="img"
          name="img"
          className={styles.input}
          value={pelicula.img}
          onChange={actualizarCampo}
          placeholder="URL de imagen"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="anio">Año</label>
        <input
          id="anio"
          name="anio"
          type="number"
          className={styles.input}
          value={pelicula.anio}
          onChange={actualizarCampo}
          placeholder="Año"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="tipo">Tipo</label>
        <input
          id="tipo"
          name="tipo"
          className={styles.input}
          value={pelicula.tipo}
          onChange={actualizarCampo}
          placeholder="Tipo"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="director">Director</label>
        <input
          id="director"
          name="director"
          className={styles.input}
          value={pelicula.director}
          onChange={actualizarCampo}
          placeholder="Director"
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="calificacion">Calificación</label>
        <input
          id="calificacion"
          name="calificacion"
          type="number"
          className={styles.input}
          value={pelicula.calificacion}
          onChange={actualizarCampo}
          placeholder="Calificación"
        />
      </div>

      <div className={styles.formGroup}>
        <label className={styles.checkboxGroup}>
          <span>Vista:</span>
          <input
            name="vista"
            type="checkbox"
            className={styles.checkbox}
            checked={pelicula.vista}
            onChange={actualizarCampo}
          />
        </label>
      </div>

      <button type="submit" className={styles.submitButton}>
        Guardar cambios
      </button>
    </form>
  );
};

export default FormEdit;
