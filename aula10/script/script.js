// Adicione a classe ativo a todos os itens do menu
const menuItems = document.querySelectorAll('.menu a');
menuItems.forEach((item) => {
  item.classList.add('ativo');
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuItems.forEach((item) => {
  item.classList.remove('ativo');
});
menuItems[0].classList.add('ativo');
// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll('img');
img.forEach((imgs) => {
  const possuiAtributo = imgs.hasAttribute('alt');
  console.log(img, possuiAtributo);
});
// Modifique o href do link externo no menu
const href = document.querySelector('a[href^="https://"]');
href.setAttribute(
  'href',
  'https://www.linkedin.com/in/jo%C3%A3o-victor-ara%C3%BAjo-25511b263/',
);
console.log(href);
