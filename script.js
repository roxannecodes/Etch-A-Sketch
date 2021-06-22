
let grid = document.querySelector(".container");

//create and display a default grid upon loading page

function createGrid (){
grid.innerHTML = ""; 
  grid.style.setProperty(
    "grid-template-columns",
    "repeat(16, 1fr)"
  );
  grid.style.setProperty(
    "grid-template-rows",
    "repeat(16, 1fr)"
  );
  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    grid.appendChild(div); 
  }

// Add event listener to parent CONTAINER (grid) 
grid.addEventListener("mouseover", function(event) {
   event.target.classList.replace("cell", "color");
 })
 }



//refresh button
let reset = document.querySelector('.reset-btn');

//Get user input for grid size
reset.addEventListener ("click", function (){
  updateGrid ();
})


function updateGrid () {
   userInput = prompt("Input the number of boxes for grid size (ex:16)",16);
  grid.innerHTML = ""; //set container to empty (blank grid)
  grid.style.setProperty(
    "grid-template-columns",
    `repeat(${userInput}, 1fr)`
  );
  grid.style.setProperty(
    "grid-template-rows",
    `repeat(${userInput}, 1fr)`
  );
  for (let i = 0; i < userInput * userInput; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    grid.appendChild(div); // specify where the new divs are going
  
}
grid.addEventListener("mouseover", function(event) {
  event.target.classList.replace("cell", "color");

})
}

createGrid();





