function adicionarFilme() {
  var filmeFavorito = document.getElementById("movie").value;
  var nomeFilmeFavorito = document.getElementById("nome").value;
  if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".png")) {
    var nome = nomeFilme();
    var movie = { movie: filmeFavorito, nome: nome };
    listarFilmesEcra(movie);
  } else {
    alert("Endereço de filme inválido.");
  }
  document.getElementById("movie").value = "";
  document.getElementById("nome").value = "";
}

function listarFilmesEcra(movie) {
  var elementFavoriteMovie = "<h3>" + movie.nome + "</h3>";
  elementFavoriteMovie += "<img src=" + movie.movie + ">";
  var elementoListaFilmes = document.getElementById("elementoListaFilmes");
  elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementFavoriteMovie;
}

function nomeFilme(nome) {
  var elementoNomeFilme = document.getElementById("nome").value;
  return elementoNomeFilme;
}
