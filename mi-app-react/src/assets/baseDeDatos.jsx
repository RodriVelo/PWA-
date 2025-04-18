const baseDeDatos = {
  peliculas: [
    {
      id: 1,
      nombre: "Breaking Bad",
      anio: 1998,
      tipo: "serie",
      director: "Vince Gilligan",
      generos: [1, 2],
      calificacion: 7,
      img: "https://occ-0-8407-92.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABb6h5K7kF5r1_x9RDFQ6lKLPfcAqtIIRDLoLbAj3Cl6_rPPA61zj31Wlq8KGanlfEX_CdBZl_XSh64f3VIDcX7YSI00-RGp4ifur.jpg?r=9ff",
      vista: true
    },
    {
      id: 2,
      nombre: "Better Call Saul",
      anio: 2015,
      tipo: "serie",
      director: "Peter Gould",
      generos: [2],
      calificacion: 5,
      img: "https://www.aceprensa.com/wp-content/uploads/2015/10/60059-1.jpg",
      vista: false
    },
    {
      id: 3,
      nombre: "The Wolf of Wall Street",
      anio: 2013,
      tipo: "pelicula",
      director: "Martin Scorsese",
      generos: [1],
      calificacion: 9,
      img: "https://pics.filmaffinity.com/El_lobo_de_Wall_Street-597158261-large.jpg",
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
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHemrEnvuRKbOpok0RFhdJrvNde_yPFI408A&s",
      vista: false
    },
    {
      id: 5,
      nombre: "Interestelar",
      anio: 2014,
      tipo: "pelicula",
      director: "Christopher Nolan",
      generos: [5],
      calificacion: 9,
      img: "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      vista: true
    },
    {
      id: 6,
      nombre: "La Casa de Papel",
      anio: 2017,
      tipo: "serie",
      director: "Álex Pina",
      generos: [1, 2],
      calificacion: 8,
      img: "https://m.media-amazon.com/images/M/MV5BZDI0Zjk2NjMtOGRhMy00YzkyLWIwMzgtYmNiZDczM2IzOTAzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      vista: true
    },
    {
      id: 7,
      nombre: "Los Increíbles",
      anio: 2004,
      tipo: "pelicula",
      director: "Brad Bird",
      generos: [6, 3],
      calificacion: 9,
      img: "https://images.justwatch.com/poster/77358335/s718/los-increibles.jpg",
      vista: true
    },
    {
      id: 8,
      nombre: "El Secreto de Sus Ojos",
      anio: 2009,
      tipo: "pelicula",
      director: "Juan José Campanella",
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
      img: "https://es.web.img3.acsta.net/pictures/17/02/20/08/59/547853.jpg",
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
      img: "https://es.web.img2.acsta.net/pictures/19/03/26/17/22/0896830.jpg",
      vista: true
    },
  ],

  generos: [
    { id: 1, tipo: "Acción" },
    { id: 2, tipo: "Drama" },
    { id: 3, tipo: "Comedia" },
    { id: 4, tipo: "Terror" },
    { id: 5, tipo: "Ciencia Ficción" },
    { id: 7, tipo: "Fantasía" },
    { id: 6, tipo: "Aventura" },
    { id: 8, tipo: "Romance" }
  ],
};

export default baseDeDatos;
