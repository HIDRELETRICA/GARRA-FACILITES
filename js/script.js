// Pega o modal
var modal = document.getElementById("meuModal");

// Pega o botão que abre o modal
var btn = document.getElementById("abrirModal");

// Pega o elemento <span> que fecha o modal
var span = document.getElementsByClassName("fechar")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function () {
  modal.style.display = "block";
};

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function () {
  modal.style.display = "none";
};

// Quando o usuário clicar fora do modal, fecha ele
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};



function inicializarMapa() {
  var mapa = new google.maps.Map(document.getElementById("mapa"), {
    center: { lat: -23.55052, lng: -46.633308 }, // Coordenadas de São Paulo como exemplo
    zoom: 15,
  });
} 
