const containerDiv = document.createElement('div');
const buttonDiv = document.querySelector('#button-div');
const resetButton = document.createElement('button');

containerDiv.classList.add('flex');
resetButton.id = 'button'
resetButton.textContent = 'Reset'

buttonDiv.appendChild(resetButton);
document.body.appendChild(containerDiv);


for (let i = 0; i < 256; i ++) {
  const gridSize = (1 / 16) * 100;
  let div = document.createElement('div');

  div.id = 'hover';
  div.classList.add('square');
  div.style.width = gridSize.toString() + '%';
  div.style.paddingBottom = gridSize.toString() + '%';

  containerDiv.appendChild(div);
}

const resetStage = (size) => {
  containerDiv.innerHTML = '';

  for (let i = 0; i < (size * size); i ++) {
    const newSize = (1 / size) * 100;
    let div = document.createElement('div');

    div.id = 'hover';
    div.classList.add('square');
    div.style.width = newSize.toString() + '%';
    div.style.paddingBottom = newSize.toString() + '%';

    containerDiv.appendChild(div);
  }
}

const generateColor = (square) => {

  let hValue = Math.floor(Math.random() * 360).toString();
  let sValue = Math.floor(Math.random() * 100).toString();
  let lValue = Math.floor(Math.random() * 100).toString();

  return 'hsl(' + hValue + ', ' + sValue + '%, ' + lValue + '%)'
}

document.body.addEventListener('mouseover', (e) => {
  if (e.target.id == 'hover') {
    if (e.target.style.backgroundColor == '') {
      let color = generateColor(e.target);
      e.target.style.backgroundColor = color;
      e.target.style.filter = 'brightness(100%)';
    } else {
      let brightness = e.target.style.filter;
      let currentBrightness = parseInt(brightness.slice(11,14));
      const newBrightness = (currentBrightness - 10).toString();
      
      e.target.style.filter = 'brightness(' + newBrightness + '%)';
    }

  }
})

buttonDiv.addEventListener('click', (e) => {
  if (e.target.id == 'button') {
    let size = prompt('How big?');
    if (size > 100) {
      alert('Chosen size too big!');
    } else {
      resetStage(size);
    }
  }
})