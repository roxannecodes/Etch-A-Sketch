
let grid = document.querySelector(".container");

//create and display a default grid upon loading page

function createGrid (){
grid.innerHTML = ""; //set container to empty (blank grid)
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
    grid.appendChild(div); // specify where the new divs are going
  }

// Add event listener to parent CONTAINER (grid) for when user "hovers" over cells and program the event
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
   userInput = prompt("Input the number of boxes for grid size (ex:16)");
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







//Get user input for grid size
let userInput = prompt ("Enter the number of boxes for grid size (Ex: 16).", 16);


let grid = document.querySelector(".container");
  

function createGrid (userInput) {
  grid.innerHTML = ""; //set container to empty
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
}

// Add event listener to parent CONTAINER (grid) for when user "hovers" over cells and program the event
grid.addEventListener("mouseover", function(event) {
  event.target.classList.replace("cell", "color");
})

createGrid (userInput);

//refresh button
let reset = document.querySelector('.reset-btn');
reset.addEventListener('click', function(){
 window.location.reload();
})

createGrid(userInput);
  
