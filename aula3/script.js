// Retorne o url da página atual utilizando o objeto window
const href = window.location.href;
console.log(href);
if (href === 'http://127.0.0.1:5501/') {
  console.log('Você está na página correta');
} else {
  console.log('Você está na página errada');
}
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const classFirstElement = document.querySelector('.ativo');

function classFirst() {
  console.log('Você clicou no', classFirstElement.innerText);
  if (classFirstElement.style.backgroundColor === 'red') {
    classFirstElement.style.backgroundColor = '';
  } else {
    classFirstElement.style.backgroundColor = 'red';
  }
}

classFirstElement.addEventListener('click', classFirst);

// Retorne a linguagem do navegador
console.log(window.navigator.language);
// Retorne a largura da janela
console.log(window.innerWidth);
