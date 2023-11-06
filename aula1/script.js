console.log(window);
// window é o objeto global do browser
// possui diferentes métodos e propriedades
window.innerHeight; // retorna a altura do browser

window.alert('Você está mexendo no DOM');

const href = window.location.href;
console.log(href);

if (href === 'http://127.0.0.1:5500/index.html') {
  console.log('É esse link mesmo');
} else {
  console.log('Não é esse link');
}

const h1Selecionado = document.querySelector('h1');

console.log(h1Selecionado);