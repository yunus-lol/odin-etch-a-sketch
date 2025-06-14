let color = "black"

function fillContainer(size) {
  let container = document.querySelector("#container");
  let boxes = container.querySelectorAll("div");
  boxes.forEach((div) => div.remove());
  container.style.display = "inline-grid";
  container.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  container.style.gridTemplateRows = `repeat(${size} , 1fr)`;
  
  let amount = size*size
  for (let i = 0; i < amount; i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);
    box.addEventListener("mouseover", hoverEffect);
    container.insertAdjacentElement("beforeend", box);
  }
}
fillContainer(16)

function hoverEffect() {
  this.style.backgroundColor = color;
}

function changeColor(choice) {
  color = choice;
}

function clearBoard() {
  let container = document.querySelector("#container");
  let boxes = container.querySelectorAll("div");
  boxes.forEach((div) => div.style.backgroundColor = "white");
}

function changeSize(input) {
  if (input >= 2 && input <= 100) {fillContainer(input)}
}