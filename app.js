const grid = document.querySelector(".grid");

// for loop creating 225 div squares
for (let i = 0; i < 225; i++) {
  const square = document.createElement("div");
  grid.appendChuld(square);
}

const squares = Array.from(document.querySelectorAll(".grid div"));

const alienInvaders = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30, 31,
  32, 33, 34, 35, 36, 37, 38, 39,
];

function draw()