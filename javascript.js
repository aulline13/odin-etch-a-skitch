const containerGrid = document.querySelector(".container-grid");
const defaultNumberOfSquares = 16;

function createDivGrid(userInput) {
    let gridSize = userInput * userInput;
    let widthHeight = `${512 / userInput}`;
    for (i = 0; i < gridSize; i++) {
        let newDiv = document.createElement("div");
        newDiv.style.width = `${widthHeight}px`; 
        newDiv.style.height = `${widthHeight}px`;
        containerGrid.appendChild(newDiv).setAttribute("class", "div-grid");
    }
}

createDivGrid(defaultNumberOfSquares);

let divGrid = document.querySelectorAll(".div-grid")

function getRandomRGB() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return `rgb(${r}, ${g}, ${b})`;
}

function changeColorOnHover() {
    divGrid.forEach((div) => {
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = getRandomRGB();
        })
})
}

changeColorOnHover()

const newGridButton = document.querySelector(".new-grid-button")

newGridButton.addEventListener("click", () => {
    let numberOfSquares = prompt("Enter the number of squares (0-100) per side for the new grid:", `${defaultNumberOfSquares}`)
    numberOfSquares = +numberOfSquares;
    if (numberOfSquares > 100 || isNaN(numberOfSquares)) {
        alert("Value entered is greater than 100 or is not a number. Please click the button again to enter a new value.")
    }
    else {
        divGrid.forEach((div) => {
            containerGrid.removeChild(div)
        }) 
        createDivGrid(numberOfSquares);
        divGrid = document.querySelectorAll(".div-grid");
        changeColorOnHover();
    }
})

