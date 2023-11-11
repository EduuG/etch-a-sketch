const container = document.createElement("div");
container.style.display = "flex";
container.style.width = "600px";
container.style.heigth = "600px";
container.style.flexWrap = "wrap";
container.style.gap = "2px";


const div = document.createElement("div");
div.style.width = "30px";
div.style.height = "30px";
div.style.flexGrow = "1";
div.style.flexShrink = "1";
div.classList.add("square");

for(let i = 0; i < 956; i++) {
  container.appendChild(div.cloneNode(true)); 
}

const body = document.querySelector("body");
body.appendChild(container);

const square = document.querySelectorAll(".square");

square.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.style.background = "red";
  })
})
