// ===== GLOBAL VARIABLES =====
let board = [];
let boardSize = 0; 

let boardContainer;
let boardElement; 

let currentPlayer = 'X';

let gameInfo;

let squaresToWin = 0;

const userInput = document.createElement('input');
userInput.placeholder = "Enter board size"
document.body.appendChild(userInput);

const submitButton = document.createElement('button')
submitButton.innerText = 'Submit';
document.body.appendChild(submitButton);

submitButton.addEventListener('click', () => {
  boardSize = userInput.value;
  buildBoardArray(boardSize);
  //initGame();
})

const squaresToWinInput = document.createElement('input');
squaresToWinInput.placeholder = "Enter number of consecutive squares to win"
document.body.appendChild(squaresToWinInput);

const submitButton2 = document.createElement('button')
submitButton2.innerText = 'Submit';
document.body.appendChild(submitButton2);

submitButton2.addEventListener('click', () => {
  squaresToWin = squaresToWinInput.value;
  //buildBoardArray(boardSize);
  initGame();
})


let clickedSquareI;
let clickedSquareJ;


// for variable win length
let count = -1;
let verticalUp = 0;
let verticalDown = 0;
let horizontalLeft = 0;
let horizontalRight = 0;
let topLeftDiagonal = 0
let bottomRightDiagonal = 0;
let topRightDiagonal = 0;
let bottomLeftDiagonal = 0;
