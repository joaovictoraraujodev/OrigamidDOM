// Dimensões e distâncias
const animaisLista = document.querySelector('.animais');
console.log(animaisLista.clientHeight);
console.log(animaisLista.offsetHeight);
console.log(animaisLista.scrollHeight);
console.log(animaisLista.clientWidth);

// offsetTop e offsetLeft
console.log(animaisLista.offsetTop);
console.log(animaisLista.offsetLeft);

const primeiroH2 = document.querySelector('h2');
console.log(primeiroH2.offsetLeft);
console.log(primeiroH2.offsetTop);

// getBoudingClientRect()

const h2rect = primeiroH2.getBoundingClientRect();
console.log(h2rect.top);
if (h2rect.top < 0) {
  console.log('passou do elemento');
} else {
  console.log('não passou do elemento');
}

// Window
console.log(
  window.innerHeight,
  window.innerWidth,
  window.outerHeight,
  window.outerWidth,
  window.pag,
);

if (window.innerWidth < 600) {
  console.log('tela menor que 600px');
} else {
  console.log('tela maior que 600px');
}

// matchMedia()

const small = window.matchMedia('(max-width: 600px)');

if (small.matches){
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}