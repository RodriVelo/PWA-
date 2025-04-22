import Card from "./Card";
import style from "./Card.module.css";

const Cards = ({ tipo, vista, busqueda, datos, genero, editarPelicula , setModal, setPeliculaSeleccionada}) => {
  const peliculasFiltradas = datos.filter((pelicula) => {
    const coincideTipo = tipo === "todos" || pelicula.tipo === tipo;
    const coincideVista =
      vista === "todas" ||
      (vista === "vistas" && pelicula.vista === true) ||
      (vista === "no-vistas" && pelicula.vista === false);
      
    //busca nombre y director
    const textoBusqueda = (busqueda || "").toLowerCase();
    const coincideBusqueda = 
      pelicula.nombre.toLowerCase().includes(textoBusqueda) ||
      pelicula.director.toLowerCase().includes(textoBusqueda);

    const coincideGenero = 
    genero === "todos" || pelicula.generos.includes(parseInt(genero))
    
    return coincideTipo && coincideVista && coincideBusqueda && coincideGenero;
  });
 /* console.log(peliculasFiltradas[1]); */
  return (
    <div className={style.container}>
      <div className={style.row}>
        {peliculasFiltradas.map((pelicula) => (
          <div className={style.cardWrapper} key={pelicula.id}>
            <Card 
              pelicula={pelicula} 
              editarPelicula={editarPelicula} 
              setModal = {setModal} 
              setPeliculaSeleccionada={setPeliculaSeleccionada}
            />
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
