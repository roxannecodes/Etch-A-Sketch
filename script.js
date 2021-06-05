
let userInput = prompt ("Enter the number of boxes for grid size (ex: 12,16,20...).");

let grid = document.querySelector(".container");



createGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    grid.appendChild(div);
  }
};

updateGrid = (userInput) => {
  grid.innerHTML = "";
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput}, 2fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput}, 2fr)`
  );

  for (let i = 0; i < userInput * userInput; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    grid.appendChild(div);
  }
 
}

//let container = document.querySelector(".container");
grid.addEventListener("mouseover", function(event) {
  event.target.classList.replace("cell", "color");
})

updateGrid (userInput);


let reset = document.querySelector('.reset-btn');
reset.addEventListener('click', function(){
 window.location.reload();
})

  createGrid();
  
