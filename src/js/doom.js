const title = document.getElementById('titulo');
const search = document.getElementById('search');
const batman = document.getElementById('batman');
const superman = document.getElementById('superman');
const wonderWoman = document.getElementById('wonder-woman');
const cardMovie = document.getElementById('card-movie');
const exit = document.getElementById('exit');
const name = document.getElementById('name');

window.drawCard = (movies) => {
  cardMovie.innerHTML = '';
  for (let i = 0; i < movies.length; i++) {
    cardMovie.innerHTML +=
      `<div id="card-color" class="card" style="width: 18rem;">
      <img data-toggle="modal" href ="#modal${movies[i].id}" class="card-img-top img-size" src="${movies[i].poster}" alt="${movies[i].title}">
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
                    <p>${movies[i].title}</p>
                    <p>${movies[i].year}</p>
                    <p>${movies[i].type}</p>
                    <img class="img-thumbnail rounded mx-auto d-block" src="${movies[i].poster}" alt="${movies[i].title}">
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

search.addEventListener('click', (event) => {
  filterTitle(title.value);
});

const outUser = () => {
  firebase.auth().signOut();
  location.href = '../login.html';
};
exit.addEventListener('click', outUser);


const observador = () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log(user);
      
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      nameUser(displayName);

      // ...
    } else {
      // User is signed out.
      // ...
    }
  });
};
observador();

window.nameUser = (nameU) => {
  name.innerHTML = nameU;
};