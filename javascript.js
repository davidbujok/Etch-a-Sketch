
const grid = document.querySelector('.grid');
const navTitle = document.querySelector('.navTitle');
const navbar = document.querySelector('.navbar');
const slider = document.getElementById("sketchRange");
const gridSizeOutput = document.querySelector('.gridSize');

gridSizeOutput.innerHTML = slider.value;
slider.oninput = (event) =>  gridSizeOutput.innerHTML = event.target.value;


// window.getComputedStyle(document.documentElement).getPropertyValue('--square-size');

function drawOnClick() {
        square.setAttribute('style', 'background-color: black;');
        };


function gridDraw(numberOfSquares) {
    const squareRoot = Math.sqrt(numberOfSquares);
    document.documentElement.style.setProperty('--square-size', squareRoot );
    let isMouseoverEnabled = false;
    let isSquareClicked = true;
        for (i = 0; i<numberOfSquares; i++) {
            const square = document.createElement('div');
            square.classList.add('squareOutline');
            grid.appendChild(square);
            square.addEventListener('click', function() {
                isSquareClicked = !isSquareClicked;
                if (isSquareClicked) {
                    isMouseoverEnabled = false;
                    // square.setAttribute('style', 'background-color: red;');
                } else {
                    isMouseoverEnabled = true;
                    square.removeAttribute('style');
                }
                console.log(isMouseoverEnabled);
                console.log(isSquareClicked);
            });
    
            square.addEventListener('mouseover', function() {
                if (isMouseoverEnabled && !isSquareClicked) {
                    square.setAttribute('style', 'background-color: black;');
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


gridDraw(2601);
