const containerGrid = document.querySelector(".container-grid");

function divGrid() {
    for (i = 0; i < 256; i++)
        containerGrid.appendChild(document.createElement("div"));
}

divGrid();