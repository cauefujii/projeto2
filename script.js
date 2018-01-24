let titulo = document.querySelector('h1');
let texto = document.querySelector('p');
let tudo = document.querySelector('body');
let teste = document.querySelector('.fotos');
let b1 = document.querySelector('.banner');

function mudarTitulo() {
  titulo.innerHTML = 'Sua cidade';
}

function mudarTexto() {
  texto.style.color = 'red';
}

function apagarLuz(){
  tudo.style.backgroundColor = "#1b1c1c";
}

function inverterFotos(){
  teste.style.flexDirection = "column";
}

function criarBorda(){
  b1.style.border = "thick solid #0000FF";
  teste.style.border = "thick solid orange";
}
