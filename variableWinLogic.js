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

