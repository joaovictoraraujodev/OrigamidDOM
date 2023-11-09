const titulo = document.querySelector('.titulo');
const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section');

//console.log(gridSectionHtml);
//console.log(gridSectionNode);

const gridSection = document.querySelectorAll('.grid-section');

gridSection.forEach(function (gridItem, index, array) {
  gridItem.classList.add('azul');
  console.log(index);
  console.log(array);
});

const arrayGrid = Array.from(gridSectionHtml);
arrayGrid.pop();

arrayGrid.forEach(function (item) {
  console.log(item);
});
