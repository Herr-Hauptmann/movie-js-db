let movieList = document.getElementsByClassName('list-group mt-3')[0];

for (let el of movieList.children) {
  el.remove();
}
