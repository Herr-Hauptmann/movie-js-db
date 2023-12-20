let movieList = document.getElementsByClassName('list-group mt-3')[0];

for (let el of movieList.children) {
  el.remove();
}

let addMovieBtn = document.getElementById('add-movie-btn');
let movieForm = document.getElementById('movieForm');
let cancelBtn = document.getElementById('cancel');
let inputField = document.getElementById('movieName');
let addNewMovieButton = document.getElementById('addNewMovieButton');
addNewMovieButton.addEventListener('click', addNewMovie);
addMovieBtn.addEventListener('click', toggleNewMovieForm);
cancelBtn.addEventListener('click', toggleNewMovieForm);
function toggleNewMovieForm() {
  addMovieBtn.classList.toggle('d-none');
  movieForm.classList.toggle('d-none');
}

function addNewMovie() {
  let movieName = inputField.value;
  console.log(movieName);
}
