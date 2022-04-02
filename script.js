// Please implement exercise logic here


// in progress

const compBlockWin = () => {
  //console.log('enter comp block win')
  if (currentPlayer === "O"){
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board.length; j += 1) {
      
      if (board[i][j] === '') {
        //togglePlayer() // computer
        board[i][j] = 'X'; // to input 'X'
        //togglePlayer(); // player
        //buildBoard(board)
        //console.log(board)
        
        //console.log('the board:' ,board, i, j, board[i][j])
        const isWin = checkWin(squaresToWin, i, j);
        console.log(isWin);
        if (checkWin(squaresToWin, i, j) === true) {
      
          board[i][j] = currentPlayer;
         
          console.log(' player winning next turn!! ', currentPlayer);
        } else {
          console.log('End')
          board[i][j] = "";
        }
      }
    }
    }
  }
   togglePlayer(); // to end turn
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
    console.log('currentPlayer: ', currentPlayer);
    compTurn();
  } 
};

const checkWin = (squaresToWin, i, j) => {
  verticalUp = addAllAbove(count, i, j);
  verticalDown = addAllBelow(count, i, j);
  horizontalLeft = addAllLeft(count, i, j);
  horizontalRight = addAllRight(count, i, j);
  topLeftDiagonal = addTopLeft(count, i, j);
  bottomRightDiagonal = addBottomRight(count, i, j);
  topRightDiagonal = addTopRight(count, i, j);
  bottomLeftDiagonal = addBottomLeft(count, i, j);

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
  } else {
    return false;
  }
    
}

const compTurn = () => {

  compBlockWin();

  /*
  if (playerTurn = "O") { 
    
  compSquareI = randomNum(boardSize);
  compSquareJ = randomNum(boardSize);

  if (board[compSquareI][compSquareJ] === "") {
    board[compSquareI][compSquareJ] = currentPlayer;
    buildBoard(board);
    togglePlayer();
  } else {
    compTurn();
  }} */

}

// ===== GAME INITIALISATION LOGIC =====

const initGame = () => {

  buildMsgBoard("click on any square to start");

  boardContainer = document.createElement('div');
  document.body.appendChild(boardContainer);

  buildBoard(board);
};



