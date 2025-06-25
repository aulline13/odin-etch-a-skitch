const containerGrid = document.querySelector(".container-grid");


function createDivGrid() {
    for (i = 0; i < 256; i++)
        containerGrid.appendChild(document.createElement("div")).setAttribute("class", "div-grid");
}

createDivGrid();

const divGrid = document.querySelectorAll(".div-grid")

function getRandomRGB() {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return `rgb(${r}, ${g}, ${b})`;
}

divGrid.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = getRandomRGB();
    })
})
