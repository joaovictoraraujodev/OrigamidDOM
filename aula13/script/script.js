// Eventos
const img = document.querySelector('img');

img.addEventListener('click', function () {
  console.log('Clicou');
});
// Callback boa prática

const imgs = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

imgs.addEventListener('click', callback);
// acima o melhor jeito de ser feito
imgs.addEventListener('click', callback()); // undefined
imgs.addEventListener('click', function () {
  console.log('Clicou');
});
imgs.addEventListener('click', () => {
  console.log('Clicou');
});

// Event primeiro parametro

function callback(event) {
  console.log(event);
}
imgs.addEventListener('click', callback);

const animaisLista = document.querySelector('.animais-lista');
function executarCallback(event) {
  const currentTarget = event.currentTarget;
  const target = event.target;
  const type = event.type;
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

// event.preventDefault()
const linkExterno = document.querySelector('a[href^="http"]');
function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

// this

const imagem = document.querySelector('img');
function callbackThis(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

imagem.addEventListener('click', callbackThis);

// Diferentes eventos
const h1 = document.querySelector('h1');
function h1Callback(event) {
  console.log(event.type, event);
}
h1.addEventListener('click', h1Callback);
h1.addEventListener('scroll', h1Callback);
h1.addEventListener('mouseenter', h1Callback);
window.addEventListener('resize', h1Callback);
window.addEventListener('keydown', h1Callback);
window.addEventListener('scroll', h1Callback);

// keyboard events

function handleKeyboard(event) {
  if (event.key === 'a') document.body.classList.toggle('azul');
  else if (event.key === 'v') document.body.classList.toggle('vermelho');
}
window.addEventListener('keydown', handleKeyboard)