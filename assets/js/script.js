const body = document.querySelector("body");
const container = document.querySelector(".container");
const grid = document.createElement("div");

const titleBar = document.querySelector(".titleBar");
const titleBarText = document.querySelector(".titleBarText");

const rangeSlide = document.createElement("input");
rangeSlide.type = "range";
rangeSlide.min = "1";
rangeSlide.max = "100";
rangeSlide.value = "50";
rangeSlide.classList.add("slider");

titleBar.appendChild(rangeSlide);

container.appendChild(grid);
body.appendChild(container);

let gridSize = rangeSlide.value;

rangeSlide.addEventListener("change", () => {
  gridSize = rangeSlide.value;
  console.log("a");
})

grid.style.display = "grid";
grid.style.width = "800px";
grid.style.height = "800px";
grid.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
grid.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
grid.style.gap = "2px";
grid.classList.add("grid");

const div = document.createElement("div");
div.style.width = "100%";
div.style.height = "100%";
div.classList.add("square");

for(let i = 0; i < gridSize * gridSize; i++) {
  grid.appendChild(div.cloneNode(true)); 
}


const square = document.querySelectorAll(".square");

square.forEach(item => {
  item.addEventListener("mouseover", (e) => {
    if (e.buttons === 1 || e.buttons === 3) {
      item.style.background = "red";
    }
  })
})
