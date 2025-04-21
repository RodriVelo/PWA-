const baseDeDatos = {
  peliculas: [
    {
      id: 1,
      nombre: "Breaking Bad",
      anio: 1998,
      tipo: "serie",
      director: "Vince Gilligan",
      generos: [1, 2],
      calificacion: 10,
      img: "https://i.pinimg.com/1200x/37/62/75/37627587496965efcc0ae42ac9dff525.jpg",
      vista: true
    },
    {
      id: 2,
      nombre: "Better Call Saul",
      anio: 2015,
      tipo: "serie",
      director: "Peter Gould",
      generos: [2],
      calificacion: 10,
      img: "https://www.aceprensa.com/wp-content/uploads/2015/10/60059-1.jpg",
      vista: false
    },
    {
      id: 3,
      nombre: "El lobo de Wall Street",
      anio: 2013,
      tipo: "pelicula",
      director: "Martin Scorsese",
      generos: [1],
      calificacion: 9,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYg6UhwLckSkt_yv55KqaRUEebVuNyHzS-A&s",
      vista: false
    },
    {
      id: 4,
      nombre: "Transformers: El lado oscuro de la luna",
      anio: 2011,
      tipo: "pelicula",
      director: "Michael Bay",
      generos: [1],
      calificacion: 10,
      img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/28YlCLrFhONteYSs9hKjD1Km0Cj.jpg",
      vista: false
    },
    {
      id: 5,
      nombre: "Interestellar",
      anio: 2014,
      tipo: "pelicula",
      director: "Christopher Nolan",
      generos: [5],
      calificacion: 9,
      img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      vista: true
    },
    {
      id: 6,
      nombre: "La Casa de Papel",
      anio: 2017,
      tipo: "serie",
      director: "Alex Pina",
      generos: [1, 2],
      calificacion: 2,
      img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
      vista: true
    },
    {
      id: 7,
      nombre: "Los Increibles",
      anio: 2004,
      tipo: "pelicula",
      director: "Brad Bird",
      generos: [6, 3],
      calificacion: 9,
      img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
      vista: true
    },
    {
      id: 8,
      nombre: "El Secreto de Sus Ojos",
      anio: 2009,
      tipo: "pelicula",
      director: "Juan Jose Campanella",
      generos: [2, 1],
      calificacion: 10,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBLo0rS2LhzeIS73YeMPtx3zOG8ApRo7cpdA&s",
      vista: true
    },
    {
      id: 9,
      nombre: "Coco",
      anio: 2017,
      tipo: "pelicula",
      director: "Lee Unkrich",
      generos: [3, 7],
      calificacion: 8,
      img: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg",
      vista: false
    },
    {
      id: 10,
      nombre: "El Marginal",
      anio: 2016,
      tipo: "serie",
      director: "Luis Ortega",
      generos: [1, 2],
      calificacion: 9,
      img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/p1GFsUK5nCVHYNtjRxoGyfGdD9C.jpg",
      vista: true
    },
    {
      id: 11,
      nombre: "Avengers: Endgame",
      anio: 2019,
      tipo: "pelicula",
      director: "Anthony y Joe Russo",
      generos: [1, 7],
      calificacion: 9,
      img: "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      vista: true
    },
  ],

  generos: [
    { id: 1, tipo: "Accion" },
    { id: 2, tipo: "Drama" },
    { id: 3, tipo: "Comedia" },
    { id: 4, tipo: "Terror" },
    { id: 5, tipo: "Ciencia Ficcion" },
    { id: 7, tipo: "Fantasia" },
    { id: 6, tipo: "Aventura" },
    { id: 8, tipo: "Romance" }
  ],
};

export default baseDeDatos;
