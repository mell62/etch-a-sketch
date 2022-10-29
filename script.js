// Algorithm
// Creating grid
// Input the size of grid


const container = document.querySelector('.container');
let pixel;
let row;
const size = prompt("Enter grid size:");

for (let i=1;i<=size;i++){
    row = document.createElement('div');
    row.classList.toggle('row');
    container.appendChild(row);

    for (let j=1;j<=size;j++){
        pixel = document.createElement('div');
        pixel.classList.toggle('pixel');
        row.appendChild(pixel);
    }
    
}

