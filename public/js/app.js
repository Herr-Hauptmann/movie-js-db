let movieList = document.getElementsByClassName('list-group mt-3')[0];

for (let el of movieList.children) {
  el.remove();
}

let addMovieBtn = document.getElementById("add-movie-btn");
let movieForm = document.getElementById("movieForm");
addMovieBtn.addEventListener("click", addClickHandler);

function addClickHandler(){
  addMovieBtn.classList.add("d-none");
  movieForm.classList.remove("d-none");
}