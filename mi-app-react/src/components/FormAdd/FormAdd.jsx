import { useState } from 'react';
import baseDeDatos from '../../assets/baseDeDatos';
import styles from './FormAdd.module.css';

const FormAdd = ({ onGuardar }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    anio: '',
    tipo: 'pelicula',
    director: '',
    generos: [],
    calificacion: 1,
    img: '',
    vista: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox' && name === 'vista') {
      setFormData({ ...formData, [name]: checked });
    } else if (name === 'generos') {
      const valores = [...formData.generos];
      const idGenero = parseInt(value);
      if (valores.includes(idGenero)) {
        setFormData({ ...formData, generos: valores.filter(g => g !== idGenero) });
      } else {
        setFormData({ ...formData, generos: [...valores, idGenero] });
      }
    } else if (name === 'vista') {
      setFormData({ ...formData, vista: value === 'true' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaPeli = {
      ...formData,
      id: Date.now(),
      anio: parseInt(formData.anio),
      calificacion: parseInt(formData.calificacion)
    };
    onGuardar(nuevaPeli);
    setFormData({
      nombre: '',
      anio: '',
      tipo: 'pelicula',
      director: '',
      generos: [],
      calificacion: 1,
      img: '',
      vista: false,
    });
  };

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Nombre:</label>
        <input className={styles.input} type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre" />
      </div>

      <div className={styles.formGroup}>
        <label>Año:</label>
        <input className={styles.input} type="number" name="anio" value={formData.anio} onChange={handleChange} placeholder="Año de lanzamiento" />
      </div>

      <div className={styles.formGroup}>
        <label>Tipo:</label>
        <select className={styles.select} name="tipo" value={formData.tipo} onChange={handleChange}>
          <option value="pelicula">Película</option>
          <option value="serie">Serie</option>
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Director:</label>
        <input className={styles.input} type="text" name="director" value={formData.director} onChange={handleChange} placeholder="Nombre del director" />
      </div>

      <div className={styles.formGroup}>
        <label>Géneros:</label>
        <div className={styles.checkboxGroup}>
          {baseDeDatos.generos.map((genero) => (
            <label key={genero.id}>
              <input
                className={styles.checkbox}
                type="checkbox"
                name="generos"
                value={genero.id}
                onChange={handleChange}
                checked={formData.generos.includes(genero.id)}
              />
              {genero.tipo}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Calificación (1-10):</label>
        <input className={styles.input} type="number" name="calificacion" value={formData.calificacion} onChange={handleChange} min="1" max="10" />
      </div>

      <div className={styles.formGroup}>
        <label>Imagen:</label>
        <input className={styles.input} type="text" name="img" value={formData.img} onChange={handleChange} placeholder="URL de la imagen" />
      </div>

      <div className={styles.formGroup}>
        <label>Vista:</label>
        <select className={styles.select} name="vista" value={formData.vista} onChange={handleChange}>
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>
      </div>

      <button className={styles.submitButton} type="submit">Agregar Película</button>
    </form>
  );
};

export default FormAdd;
