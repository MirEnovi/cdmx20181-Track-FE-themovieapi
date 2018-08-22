// alert('hola');
const title = document.getElementById('titulo');
const batman = document.getElementById('batman');
const superman = document.getElementById('superman');
const wonderWoman = document.getElementById('wonder-woman');

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
    });
};
// search.addEventListener('click', (event) => {
//   filterTitle(title.value);
// });
batman.addEventListener('click', (event) => {
  getApi('batman');
});
superman.addEventListener('click', (event) => {
  getApi('superman');
});

window.getMovie = (data) => {
};
