// Please implement exercise logic here


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
    console.log('currentPlayer: ', currentPlayer);
    compTurn();
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

const compTurn = () => {

  compSquareI = randomNum(boardSize);
  compSquareJ = randomNum(boardSize);

  if (board[compSquareI][compSquareJ] === "") {
    board[compSquareI][compSquareJ] = currentPlayer;
    buildBoard(board);
    togglePlayer();
  } else {
    return compTurn();
  }

}

// ===== GAME INITIALISATION LOGIC =====

const initGame = () => {

  buildMsgBoard("click on any square to start");

  boardContainer = document.createElement('div');
  document.body.appendChild(boardContainer);

  buildBoard(board);
};





