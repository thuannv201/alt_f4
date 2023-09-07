// board 10x10
// 2 players
let board = [
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", ""],
];

let currentPlayer = "X";

function handleClickPlay(e, row, col) {
  //   set the value of the clicked cell to the current player
  e.innerHTML = currentPlayer;

  board[row][col] = currentPlayer;

  console.log(checkWinner());
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function checkWinner() {
  // Check horizontal matches
  for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 6; col++) {
      if (
        board[row][col] !== "" &&
        board[row][col] === board[row][col + 1] &&
        board[row][col] === board[row][col + 2] &&
        board[row][col] === board[row][col + 3] &&
        board[row][col] === board[row][col + 4]
      ) {
        return board[row][col];
      }
    }
  }

  // Check vertical matches
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 10; col++) {
      if (
        board[row][col] !== "" &&
        board[row][col] === board[row + 1][col] &&
        board[row][col] === board[row + 2][col] &&
        board[row][col] === board[row + 3][col] &&
        board[row][col] === board[row + 4][col]
      ) {
        return board[row][col];
      }
    }
  }

  // Check diagonal matches
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 6; col++) {
      if (
        board[row][col] !== "" &&
        board[row][col] === board[row + 1][col + 1] &&
        board[row][col] === board[row + 2][col + 2] &&
        board[row][col] === board[row + 3][col + 3] &&
        board[row][col] === board[row + 4][col + 4]
      ) {
        return board[row][col];
      }
    }
  }
}
