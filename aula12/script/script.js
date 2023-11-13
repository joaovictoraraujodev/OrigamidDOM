// Verifique a distância da primeira imagem
// em relação ao topo da página
const distanciaImagem = document.querySelector('img');
console.log(
  `A distancia da primeira imagem para o topo é de ${distanciaImagem.offsetTop}`,
);
// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const larguraImagens = document.querySelectorAll('img');
  let soma = 0;
  larguraImagens.forEach((imagem) => {
    soma = soma + imagem.offsetWidth;
  });
  console.log(`A soma da largura de todas as imagens é ${soma}`);
}
window.onload = function () {
  somaImagens();
};
// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
console.log(links);
links.forEach((link) => {
  const linkWidth = link.offsetWidth
  const linkHeigth = link.offsetHeight
  if(linkWidth >= 48 && linkHeigth >= 48){
    console.log('Possui boa acessibilidade')
  } else {
    console.log('Não possui boa acessibilidade')
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const telaMenor = window.matchMedia('(max-width: 720px)').matches;

if (telaMenor) {
  const menu = document.querySelector('.menu')
  menu.classList.add('menu-mobile')
}
