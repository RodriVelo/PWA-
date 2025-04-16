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
    },
    {
      id: 3,
      nombre: "The wolf of wall street",
      anio: 2013,
      tipo: "pelicula",
      director: "Martin Scorsese",
      generos: [1],
      calificacion: 9,
      img: "https://pics.filmaffinity.com/El_lobo_de_Wall_Street-597158261-large.jpg",
    },
  ],

  generos: [
    { id: 1, tipo: "Accion" },
    { id: 2, tipo: "Drama" },
  ],
};

export default baseDeDatos;
