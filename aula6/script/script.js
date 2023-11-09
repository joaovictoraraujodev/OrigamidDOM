// Retorne no console todas as imagens do site
const imagens = document.querySelectorAll('img');
console.log(imagens);
// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="imgs/imagem"]');
console.log(imagensAnimais);
// Selecione todos os links internos (onde o href começa com #)
const LinksInternos = document.querySelectorAll('a[href^="#"]');
console.log(LinksInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroItemH2 = document.querySelector(
  '.animais-descricao h2:first-child',
);
console.log(primeiroItemH2);
const animais = document.querySelector('.animais-descricao');
const h2Animais = animais.querySelector('h2');
console.log(h2Animais);
// Selecione o último p do site
const ultimoItemP = document.querySelector('.copy p');
console.log(ultimoItemP);

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1])