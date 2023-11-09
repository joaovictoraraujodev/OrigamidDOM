const imgs = document.querySelectorAll('img');
imgs.forEach(function (item, index, array) {
  console.log(item); // o item atual no loop
  console.log(index); // o número do index, posição do index na array
  console.log(array); // o array completo
});

//transformando em array quando não é nodelist
const titulos = document.getElementsByClassName('titulo');
const tituloArray = Array.from(titulos);
tituloArray.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// Arrow function
const img = document.querySelectorAll('img');
img.forEach((item, index, array) => {
  console.log(item, index, array);
});

// Argumentos e parenteses
const imagem = document.querySelectorAll('img');

//argumento único
imagem.forEach((item) => {
  console.log(item);
});

// multiplos argumentos
imagem.forEach((item, index, array) => {
  console.log(item, index, array);
});

// sem argumentos
let i = 0;
imagem.forEach(() => {
  console.log(i++);
});

// exemplo de como podemos fazer o código em uma linha

imagem.forEach((item) => console.log(i++));
