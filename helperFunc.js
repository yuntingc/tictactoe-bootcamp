// ===== HELPER FUNCTIONS =====
const buildBoard = (board) => {
  boardContainer.innerHTML = '';
  //boardElement = document.createElement('div');
  //boardElement.classList.add('board');

  for (let i = 0; i < board.length; i += 1) {
    const row = board[i];
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');

    for (let j = 0; j < row.length; j += 1) {
      const square = document.createElement('div');
      square.classList.add('square');
      square.innerText = board[i][j];
      rowElement.appendChild(square);

      square.addEventListener('click', () => {
        clickedSquareI = i;
        clickedSquareJ = j;
        console.log("clickedSquareI: ", clickedSquareI);
        console.log("clickedSquareJ: ", clickedSquareJ);
        squareClick(i, j);
        
      })
    }
    boardContainer.appendChild(rowElement);
  }
};

const buildMsgBoard = (msg) => {
  gameInfo = document.createElement('div');
  gameInfo.innerText = msg;
  document.body.appendChild(gameInfo);
}

const resetGame = () => {

  board = [];
  buildBoardArray(boardSize);
  currentPlayer = 'X'
  gameInfo.innerText = '';
  boardContainer.innerText = '';

  initGame();
}

const buildBoardArray = (size) => {
  for (let i = 0; i < size; i += 1) {
    let boardRow = [];
    for (let j = 0; j < size; j += 1) {
      boardRow.push("");
    }
    board.push(boardRow);
  }
}


const randomNum = (max) => {
  return Math.floor(Math.random()*max);
}