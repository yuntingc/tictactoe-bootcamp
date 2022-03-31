// Please implement exercise logic here


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


// for variable win
// j , k ==> row, col

// for vertical rows above
const addAllAbove = (count, i, j) => {
  //console.log("addAllAbove count: ", count); 
  if (i < 0) {
    return count;
  } else if (board[i][j] === '') {
    return count;
  } else if (board[i][j] !== currentPlayer) {
    return count;
  } else {
    return addAllAbove(count + 1, i-1, j);
  }
}

// for all vertical rows below
const addAllBelow = (count, i, j) => {
  //console.log("addAllBelow count: ", count);
  if ( i >= board.length) {
    return count;
  } else if (board[i][j] === '') {
    return count;
  } else if (board[i][j] !== currentPlayer) {
    return count;
  } else  {
    return addAllBelow(count + 1, i + 1, j);
  }
}

// for all horizonal rows to the left
const addAllLeft = (count, i, j) => {
  if (j < 0) {
    return count;
  } else if (board[i][j] === '') {
    return count;
  } else if (board[i][j] !== currentPlayer) {
    return count;
  } else {
    return addAllLeft(count + 1, i, j+1)
  }
}

// for all horizonal rows to the right
const addAllRight = (count, i, j) => {
  if (j >= board.length) {
    return count;
  } else if (board[i][j] === '') {
    return count;
  } else if (board[i][j] !== currentPlayer) {
    return count;
  } else {
    return addAllRight(count + 1, i, j-1)
  }
}

// for top left diagonals
const addTopLeft = (count, i, j) => {
  if (i < 0 || j < 0) {
    return count;
  } else if (board[i][j] === '') {
    return count;
  } else if (board[i][j] !== currentPlayer) {
    return count;
  } else {
    return addTopLeft(count + 1, i-1, j-1)
  }
}

// for bottom right diagonals
const addBottomRight = (count, i, j) => {
  if (i >= board.length || j >= board.length) {
    return count;
  } else if (board[i][j] === '') {
    return count;
  } else if (board[i][j] !== currentPlayer) {
    return count;
  } else {
    return addBottomRight(count + 1, i+1, j+1);
  }
}

// for top right diagonals
const addTopRight = (count, i, j) => {
  if (i < 0 || j >= board.length) {
    return count;
  } else if (board[i][j] === '') {
    return count;
  } else if (board[i][j] !== currentPlayer) {
    return count;
  } else {
    return addTopRight(count + 1, i-1, j+1);
  }
}

// for bottom left diagonals
const addBottomLeft = (count, i, j) => {
  if (i >= board.length || j < 0) {
    return count;
  } else if (board[i][j] === '') {
    return count;
  } else if (board[i][j] !== currentPlayer) {
    return count;
  } else {
    return addBottomLeft(count + 1, i+1, j-1);
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
    

    if (checkWin(squaresToWin, clickedSquareI, clickedSquareJ) === true) {
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

const checkWin = (squaresToWin, clickedSquareI, clickedSquareJ) => {
  verticalUp = addAllAbove(count, clickedSquareI, clickedSquareJ);
  verticalDown = addAllBelow(count, clickedSquareI, clickedSquareJ);
  horizontalLeft = addAllLeft(count, clickedSquareI, clickedSquareJ);
  horizontalRight = addAllRight(count, clickedSquareI, clickedSquareJ);
  topLeftDiagonal = addTopLeft(count, clickedSquareI, clickedSquareJ);
  bottomRightDiagonal = addBottomRight(count, clickedSquareI, clickedSquareJ);
  topRightDiagonal = addTopRight(count, clickedSquareI, clickedSquareJ);
  bottomLeftDiagonal = addBottomLeft(count, clickedSquareI, clickedSquareJ);

  //console.log('verticalUp: ', verticalUp)
  //console.log('verticalDown: ', verticalDown)
  //console.log('vertical:', verticalUp + verticalDown + 1);

  //console.log('horizontalLeft: ', horizontalLeft)
  //console.log('horizontalRight: ', horizontalRight)
  //console.log('horizontal', horizontalLeft + horizontalRight + 1);

  //console.log('TopLeft: ', topLeftDiagonal)
  //console.log('BottomRight: ', bottomRightDiagonal)
  //console.log('Diagonal1', topLeftDiagonal+bottomRightDiagonal + 1);

  //console.log('TopRight: ', topRightDiagonal)
  //console.log('BottomLeft: ', bottomLeftDiagonal)
  //console.log('Diagonal2', topRightDiagonal + bottomLeftDiagonal + 1);

  if ( (1 + verticalUp + verticalDown >= squaresToWin) || 
  (1 + horizontalLeft + horizontalRight >= squaresToWin) ||
  (1 + topLeftDiagonal + bottomRightDiagonal >= squaresToWin) ||
  (1 + topRightDiagonal + bottomLeftDiagonal >= squaresToWin) ) {
    return true;
  }
    
}


// ===== GAME INITIALISATION LOGIC =====

const initGame = () => {

  buildMsgBoard("click on any square to start");

  boardContainer = document.createElement('div');
  document.body.appendChild(boardContainer);

  buildBoard(board);
};





