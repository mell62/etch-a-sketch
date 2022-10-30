const container = document.querySelector('.container');
const sizeBtn = document.querySelector('.size-btn');
const firstSize = document.querySelector('.size-1');
const secondSize = document.querySelector('.size-2');
const sketchBtn = document.querySelector('.sketch-btn');
const clearBtn = document.querySelector('.clear-btn');
const eraserBtn = document.querySelector('.eraser-btn');
let pixel;
let row;

sizeBtn.addEventListener("click", () => {
    const size = prompt("Enter grid size:");
    if(!size){
        firstSize.textContent = secondSize.textContent = firstSize.textContent;
    }
    else if(size>60) {
        alert("Max size is 60!");
        firstSize.textContent = secondSize.textContent = firstSize.textContent;
    }
    else {
        firstSize.textContent = secondSize.textContent = size;
    }
});

sizeBtn.addEventListener("click", removeGrid);
sizeBtn.addEventListener("click", makeGrid);
sizeBtn.addEventListener("click", sketch);
sketchBtn.addEventListener("click", sketch);
clearBtn.addEventListener("click", clearPixels);
eraserBtn.addEventListener("click", eraser);

function makeGrid(){
    for (let i=1;i<=firstSize.textContent;i++){
        row = document.createElement('div');
        row.classList.toggle('row');
        container.appendChild(row);

        for (let j=1;j<=firstSize.textContent;j++){
            pixel = document.createElement('div');
            pixel.classList.toggle('pixel');
            row.appendChild(pixel);
        }

    }
    rows = document.querySelectorAll('.row');
}

function removeGrid(){
    rows.forEach((row) => {
        container.removeChild(row);
    });
}

function sketch(){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {       
        pixel.ondragstart = function() {
            return false;
        };
        pixel.addEventListener("mousedown", () => {
            let done = false;
            pixel.addEventListener("mouseup", () => {
                done = true;
            })
            if(!done){
                pixel.classList.add('black');
            }
            pixels.forEach((pixel)=>{                          // for click n drag
                pixel.addEventListener("mouseover", () => {
                    window.addEventListener("mouseup", () => {
                        done=true;
                    });
                    if(!done){
                        pixel.classList.add('black');
                    }

                });
            });
        });
    });
}

function clearPixels(){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel) => {
        pixel.classList.remove('black');
    });
}

function eraser(){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel)=>{
        pixel.ondragstart = function() {
            return false;
        };
        pixel.addEventListener("mousedown", () => {  
            let done = false;
            pixel.addEventListener("mouseup", () => {
                done = true;
            })
            if(!done){
                pixel.classList.remove('black');
            }
            pixels.forEach((pixel)=>{
                pixel.addEventListener("mouseover", () => {
                    window.addEventListener("mouseup", () => {
                        done=true;
                    });
                    if(!done){
                        pixel.classList.remove('black');
                    }

                });
            });
        });
    });
}

// default grid
for (let i=1;i<=firstSize.textContent;i++){
    row = document.createElement('div');
    row.classList.toggle('row');
    container.appendChild(row);
    for (let j=1;j<=firstSize.textContent;j++){
        pixel = document.createElement('div');
        pixel.classList.toggle('pixel');
        row.appendChild(pixel);
    }
}

let rows = document.querySelectorAll('.row');

let pixels = document.querySelectorAll('.pixel');
pixels.forEach((pixel)=>{
    pixel.ondragstart = function() {
        return false;
      };
    pixel.addEventListener("mousedown", () => {  
        let done = false;
        pixel.addEventListener("mouseup", () => {
            done = true;
        })
        if(!done){
            pixel.classList.add('black');
        }
        pixels.forEach((pixel)=>{
            pixel.addEventListener("mouseover", () => {
                window.addEventListener("mouseup", () => {
                    done=true;
                });
                if(!done){
                    pixel.classList.add('black');
                }

            });
        });
    });
});
