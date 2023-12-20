let movieList = document.getElementsByClassName('list-group mt-3')[0];

for (let el of movieList.children) {
  el.remove();
}

let addMovieBtn = document.getElementById('add-movie-btn');
let movieForm = document.getElementById('movieForm');
let cancelBtn = document.getElementById('cancel');
addMovieBtn.addEventListener('click', addClickHandler);
cancelBtn.addEventListener('click', cancelClickHandler);
function addClickHandler() {
  addMovieBtn.classList.add('d-none');
  movieForm.classList.remove('d-none');
}
function cancelClickHandler() {
  addMovieBtn.classList.remove('d-none');
  movieForm.classList.add('d-none');
}
