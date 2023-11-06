function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

const clickedButton = document.querySelector('.click-button');
clickedButton.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

const hoveredButton = document.querySelector('.hover-button');
hoveredButton.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

const doubleClicked = document.querySelector('.double-click-button');
doubleClicked.addEventListener('dblclick', handleDoubleClick);
