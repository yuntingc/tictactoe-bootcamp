// Please implement exercise logic here


// ===== GLOBAL VARIABLES =====
let board = [];
let boardSize = 0; 

let boardContainer;
let boardElement; 

let currentPlayer = 'X';

let gameInfo;

const userInput = document.createElement('input');
userInput.placeholder = "Enter board size"
document.body.appendChild(userInput);

const submitButton = document.createElement('button')
submitButton.innerText = 'Submit';
document.body.appendChild(submitButton);

submitButton.addEventListener('click', () => {
  boardSize = userInput.value;
  buildBoardArray(boardSize);
  initGame();
})


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
  board = [ 
    ['', '', ''], 
    ['', '', ''], 
    ['', '', '']
  ];
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


// GAME PLAY LOGIC

const togglePlayer = () => {
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
};

const squareClick = (column, row) => {
  if (board[column][row] === '') {
    board[column][row] = currentPlayer;
    console.log('board: ', board);

    // to draw board with latest array
    buildBoard(board);
    gameInfo.innerText = "";
    
    if (checkWin(board) === true) {
      gameInfo.innerText = currentPlayer + " wins"
      setTimeout( () => {
        resetGame();
      }, 1000)

    }
    console.log('currentPlayer: ', currentPlayer);
    // to change players
    togglePlayer();
  } 
};


const checkWin = (board) => {

  // check every position for all possibilities of winning combinations

 
  for (let i = 0; i < board.length-2; i += 1) {

    for (let j = 0; j < board.length-2; j += 1) {

      // for horizontal rows
      if (board[i][j] === board[i][j+1] && board[i][j+1] === board[i][j+2] && board[i][j] !== '') {
        return true;
      }

      // for vertical rows
      if (board[i][j] === board[i+1][j] && board[i+1][j] === board[i+2][j] && board[i][j] !== '') {
        return true;
      }

      // for diagonals from top left to bottom right
      if (board[i][j] === board[i+1][j+1] && board[i+1][j+1] === board[i+2][j+2] && board[i][j] !== '') {
        console.log('top left diagonal');
        return true;
    }

      // for diagonals from top right to bottom left
      if (board[i][j+2] === board[i+1][j+1] && board[i+1][j+1] === board[i+2][j] && board[i][j+2] !== '') {
        console.log('top right diagonal');
        return true;
    }

    }


  }



  /*

  for (let i = 0; i < board.length-2; i += 1) {
    
    // for all horizontal rows
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
      console.log('horizontal');
      return true;
    }

    // for all vertical columns
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '') {
      console.log('vertical');
      return true;
    }

    // for diagonals from top left to bottom right
    if (board[i][i] === board[i+1][i+1] && board [i+2][i+2] && board[i][i] !== '') {
      console.log('i: ', i);
      console.log('top left diagonal');
      return true;
    }

    // for diagonals from top right to bottom left
    if (board[i][board.length-1] === board[i+1][board.length-2] && board[i+1][board.length-2] === board[board.length-1][i] && board[i][board.length-1] !== '') {
      console.log('top right diagonal');
      return true;
    }

  }*/

  /*
  // for all horizontal rows
  for (let i = 0; i < 3; i += 1) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') {
      console.log('horizontal');
      return true;
    }
  }

  // for all vertical columns
  for (let j = 0; j < 3; j += 1) {
    if (board[0][j] === board[1][j] && board[1][j] === board[2][j] && board[0][j] !== '') {
      console.log('vertical');
      return true;
    }
  }

  // for diagonals
  if ( (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') || (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '') ) {
    console.log('diagonal');
    return true;
  }
  */

}


// ===== GAME INITIALISATION LOGIC =====

const initGame = () => {

  buildMsgBoard("click on any square to start");

  boardContainer = document.createElement('div');
  document.body.appendChild(boardContainer);

  buildBoard(board);
};



