const title = document.querySelector('h1');

console.log(title.innerText);
console.log(title.classList[1]);
console.log(title.id);
console.log(title.offsetHeight);


// Essas são as duas formas de fazer, que é mostrada no curso por enquanto.

title.addEventListener('click', function () {
  console.log('Você clicou em', title.innerText);
});

function callbackH1() {
  console.log('Você clicou novamente em', title.innerText);
}

title.addEventListener('click', callbackH1);
