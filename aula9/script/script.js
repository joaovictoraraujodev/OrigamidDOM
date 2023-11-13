const menu = document.querySelector('.menu');
menu.className; //string
menu.classList; //lista de classe
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona;remove a classe
menu.classList.contains('ativo'); // true or false
menu.classList.replace('ativo', 'inativo');

// Atributos
const animais = document.querySelector('.animais');
console.log(animais.attributes);
console.log(animais.attributes[2]);
console.log(animais.attributes['data-texto']);

// get e set Atributte

const img = document.querySelector('img');
console.log(img.getAttribute('src')); // valor do src
console.log(img.setAttribute('alt', 'Texto alternativo')); // muda o alt
console.log(img.hasAttribute('id'));
true / false;
console.log(img.removeAttribute('alt')); //remove o alt

console.log(img.hasAttribute('id')); //true / false se tem algum atributo
// Read Only vs Writable
console.log(animais.className); // string com o nome das classes
console.log((animais.className = 'azul')); /// substitui completamente a string
console.log((animais.className += 'vermelho')); // adiciona vermelho a string

console.log((animais.attributes = 'class="ativo')); // não funciona, read only

//

const carro = {
  portas: 4,
  andar: function (km) {
    console.log(`Andou ${km}`);
  },
};
