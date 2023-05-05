
const grid = document.querySelector('.grid');
const navTitle = document.querySelector('.navTitle');
const navbar = document.querySelector('.navbar');
const slider = document.getElementById("sketchRange");
const gridSizeOutput = document.querySelector('.gridSize');
const rgb = document.querySelector('.rgb');
const black = document.querySelector('.black');
const text = document.querySelector('.text');
const clear = document.querySelector('.clear');



gridSizeOutput.innerHTML = "2601";
slider.oninput = function() {
    let howManySquares = slider.value * slider.value;
    gridSizeOutput.innerHTML = howManySquares;
}

text.textContent = `That's how many "pixels" you have on the canvas!`


// window.getComputedStyle(document.documentElement).getPropertyValue('--square-size');

function rgbPencil() {
        const rgbRange = [];
        const rgbColour = [];
        for (i = 0; i <= 255; i++) { // Creating an array with numbers from 0 to 255
            rgbRange.push(i);
        }
        for (i = 0; i < 3; i++) {
            let rgbValue = Math.floor(Math.random() * rgbRange.length); // getting Random value from an array rgbRange
            rgbColour.push(rgbValue)
        }
        return rgbColour;
        }; // Creating an array with three random RGB values range 0-255


function gridDraw(numberOfSquares) {
    const squareRoot = Math.sqrt(numberOfSquares);
    document.documentElement.style.setProperty('--square-size', squareRoot );
    let isMouseoverEnabled = false;
    let isSquareClicked = true;
    let isRGBClicked = false; 
    let isStyleRemoved = false;
    rgb.addEventListener('click', function() {
        isRGBClicked = true;
        isSquareClicked = true;
        isMouseoverEnabled = false;
    })
    black.addEventListener('click', function() {
        isRGBClicked = false;
        isSquareClicked = false;
        isMouseoverEnabled = true;

    })
    clear.addEventListener('click', function() {
        location.reload();
    })
        for (i = 0; i<numberOfSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('squareOutline');
            grid.appendChild(square);
            square.addEventListener('click', function() {
                isStyleRemoved = !isStyleRemoved; 
                console.log(isStyleRemoved);
                if (!isStyleRemoved) {
                    square.removeAttribute('style');
                }
            });
    
            square.addEventListener('mouseover', function() {
                if (isMouseoverEnabled && !isSquareClicked && !isRGBClicked && isStyleRemoved) {
                    square.setAttribute('style', 'background-color: black;');
                } else if (isSquareClicked && isRGBClicked && !isMouseoverEnabled && isStyleRemoved) {
                    let rgbColour = rgbPencil();
                        let r = rgbColour[0];
                        let g = rgbColour[1];
                        let b = rgbColour[2];
                        let rgb = `rgb(${r},${g},${b})`;
                    square.style.setProperty('--square-color', rgb);
                }
            });

        }
    }
            

slider.addEventListener('input', function(e) {
    if (slider.value) {
        let b = slider.value * slider.value;
        grid.innerHTML = '';
        gridDraw(b);   
    }
})

// rgb.addEventListener('click', function() {
//     let rgbColour = rgbPencil();
//     let r = rgbColour[0];
//     let g = rgbColour[1];
//     let b = rgbColour[2];
//     let rgb = `rgb(${r},${g},${b})`;
//     console.log(r,g,b);
//     square.addEventListener('mouseover', function() {
//         square.style.setProperty('--square-color', rgb);
//     })
// })


gridDraw(2601);
