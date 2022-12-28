const grid = document.querySelector(".grid");
let currentShooterIndex = 202;
// defining width for the moveSHooter function.
let width = 15;

// for loop creating 225 div squares
for (let i = 0; i < 225; i++) {
  const square = document.createElement("div");
  grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll(".grid div"));

const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];

// over each of aliens array, add class invader
function draw() {
  for (let i = 0; i < alienInvaders.length; i++) {
    squares[alienInvaders[i]].classList.add("invader");
  }
}

draw();

squares[currentShooterIndex].classList.add("shooter");

// moving shooter, passing through event
function moveShooter(e) {
  squares[currentShooterIndex].classList.remove("shooter");
  // switch out the key we are using
  switch (e.key) {
    case "ArrowLeft":
      // as long as no remainder can move our current shooter on to the left
      if (currentShooterIndex % width !== 0) currentShooterIndex -= 1;
      break;
    case "ArrowRight":
      if (currentShooterIndex % width < width - 1) currentShooterIndex += 1;
      break;
  }
  squares[currentShooterIndex].classList.add("shooter");
}

// listening for keydowns
document.addEventListener("keydown", moveShooter);
