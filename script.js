const container = document.querySelector('.container');
let pixel;
let row;

const size = prompt("Enter grid size:");

for (let i=1;i<=size;i++){
    if (size>60){
        alert("Max size is 60!");
        break;
    }
    row = document.createElement('div');
    row.classList.toggle('row');
    container.appendChild(row);

    for (let j=1;j<=size;j++){
        pixel = document.createElement('div');
        pixel.classList.toggle('pixel');
        row.appendChild(pixel);
    }

}

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel)=>{

    pixel.ondragstart = function() {
        return false;
      };

    pixel.addEventListener("mousedown", () => {
        
        let done = false;
        pixel.classList.add('black');
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
