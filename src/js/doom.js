const title = document.getElementById('titulo');
const batman = document.getElementById('batman');
const superman = document.getElementById('superman');
const wonderWoman = document.getElementById('wonder-woman');
const cardMovie = document.getElementById('card-movie');
const exit = document.getElementById('exit');

window.drawCard = (movies) => {
  cardMovie.innerHTML = '';
  for (let i = 0; i < movies.length; i++) {
    cardMovie.innerHTML +=
      `<div class="card col-3 offset-1" style="width: 18rem;">
      <img data-toggle="modal" href ="#modal${movies[i].id}" class="card-img-top" src="${movies[i].poster}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${movies[i].title}</h5>
      </div>
    </div>
    <!--modal-->
    <div class="modal fade" id="modal${movies[i].id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">${movies[i].title}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <img class="img-thumbnail rounded mx-auto d-block" src="${movies[i].poster}" alt="Card image cap">
                    <p>${movies[i].title}</p>
                    <p>${movies[i].year}</p>
                    <p>${movies[i].type}</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>
    `;
  }
};
// const imgInfo = document.getElementsByTagName('');

// window.modal = () => {
//   alert('hola');
// };


batman.addEventListener('click', (event) => {
  let string = 'batman';
  getApi(string);
});
superman.addEventListener('click', (event) => {
  let string = 'superman';
  getApi(string);
});
wonderWoman.addEventListener('click', (event) => {
  let string = 'wonder+woman ';
  getApi(string);
});

// imgInfo.addEventListener('click', (event) => alert('hola'));

const outUser = () => {
  firebase.auth().signOut();
  location.href = 'login.html';
};

exit.addEventListener('click', outUser);