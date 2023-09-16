const grid = document.querySelector('#grid');
const gridSise = 16;
const squareSize = 800 / gridSise;

for(let i=0; i < gridSise; i++){
    for(let j=0; j < gridSise; j++){
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = squareSize + 'px';
        square.style.height = squareSize + 'px';
        grid.appendChild(square);
        console.log(j);
    }
    console.log(i);
}