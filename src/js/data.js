// alert('hola');
/* funcion que se hizo en caso de un boton de busqueda*/
// window.filterTitle = (title) => {
//   let stringModif = '';
//   for (let i = 0; i < title.length; i++) {
//     let letter = title[i];
//     if (letter === ' ') {
//       letter = '+';
//     } else if (letter === 'ñ') {
//       letter = '%C3%B1';
//     }
//     stringModif += letter;
//   }
//   return getApi(stringModif);
// };

window.getApi = (string) => {
  let urlAkey = 'http://www.omdbapi.com/?apikey=9faaab64&';

  let url = `${urlAkey}s=${string}`;
  fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      let movies = getMovie(data);
      window.drawCard(movies);
    });
};

window.getMovie = (data) => {
  // console.log(data.Search);
  let movie = data.Search;
  let movieArr = [];
  let movieObj = {};
  for (let i = 0; i < movie.length; i++) {
    let title = movie[i].Title;
    let poster = movie[i].Poster;
    let type = movie[i].Type;
    let year = movie[i].Year;
    let id = movie[i].imdbID;

    movieObj = {
      title,
      poster,
      type,
      year,
      id
    };

    movieArr.push(movieObj);
  }; 
  return movieArr;
};


