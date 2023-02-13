import { Token } from "./Player";

type Board = Array<Array<Token | null>>;
type Key = {
  [index: string]: number[];
}

export type Table = {
  generateBoard: () => Board;
  drawBoard: (board: Board) => void;
  checkDiagonalWin: (board: Board) => boolean;
  checkHorizontalWin: (board: Board) => boolean;
  checkVerticalWin: (board: Board) => boolean;
  isBoardFull: (board: Board) => boolean;
  seeAvailableMoves: (board: Board) => void;
  setToken: (board: Board, input: string, token: Token) => void;
};

function generateCountObject() {
  return {
    "X": 0,
    "O": 0
  }
}
function checkDiagonalWin(board: Board) {
  let count = generateCountObject();

  // Check Left Diagonal
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] === "O") {
      count["O"]++
    }

    if (board[i][i] === "X") {
      count["X"]++
    }
  }

  // If either Os or Xs are equal to 3, return true
  if (count["O"] === 3 || count["X"] === 3) {
    return true
  }

  // Reset count object
  count = generateCountObject();

  // Check the right diagonal
  for (let i = 0; i < board.length; i++) {
    const right = board.length - 1 - i;
    if (board[i][right] === "O") {
      count["O"]++
    }

    if (board[i][right] === "X") {
      count["X"]++
    }
  }

  // If O or X have three, return true
  if (count["O"] === 3 || count["X"] === 3) {
    return true
  }

  return false;
};
function checkHorizontalWin(board: Board) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    const count = generateCountObject();

    for (let col = 0; col < row.length; col++) {
      if (row[col] === "O") {
        count["O"]++
      }

      if (row[col] === "X") {
        count["X"]++
      }
    }

    if (count["O"] === 3) return true
    if (count["X"] === 3) return true
  }

  return false
}
function checkVerticalWin(board: Board) {
  for (let i = 0; i < board.length; i++) {
    const count = generateCountObject();

    for (let row = 0; row < board.length; row++) {
      if (board[row][i] === "O") {
        count["O"]++
      }

      if (board[row][i] === "X") {
        count["X"]++
      }
    }

    if (count["O"] === 3) return true
    if (count["X"] === 3) return true
  }

  return false
}
function isBoardFull(board: Board) {
  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === null) return false
    }
  }

  return true;
}
function setToken(board: Board, input: string, token: Token) {
  const key: Key = {
    "0": [0, 0],
    "1": [0, 1],
    "2": [0, 2],
    "3": [1, 0],
    "4": [1, 1],
    "5": [1, 2],
    "6": [2, 0],
    "7": [2, 1],
    "8": [2, 2]
  };

  const selected_spot = key[input];

  const spot = board[selected_spot[0]][selected_spot[1]]

  if (spot === null) {
    board[selected_spot[0]][selected_spot[1]] = token;
  } else throw new Error("Space is already taken")
}
function seeAvailableMoves(board: Board) {
  const rows: string[] = [];
  let summand = 0;

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    let result = "";

    for (let j = 0; j < row.length; j++) {
      if (row[j] === null) {
        result = result + (summand + j).toString() + " "
      } else {
        result = result + " " + " "
      }
    }

    rows.push(result);
    summand += 3;
  }
  console.log(rows.join("\n") + "\n");
}
function drawBoard(board: Board) {
  for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
    const row = board[rowIndex];

    let result = "";
    for (let col = 0; col < row.length; col++) {
      const char = board[rowIndex][col];

      if (col !== row.length - 1) {
        char ?
          result = result.concat(" ", char, " |") : result = result.concat("  ", " |");
      } else {
        char ?
          result = result.concat(" ", char) : result = result.concat(" ");
      }

    }

    console.log(result);
    if (rowIndex !== 2) {
      console.log("-----------");
    }

  }
};



function generateBoard(): Board {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
}

const table: Table = {
  generateBoard,
  checkDiagonalWin,
  checkHorizontalWin,
  checkVerticalWin,
  isBoardFull,
  seeAvailableMoves,
  setToken,
  drawBoard
}

export { table };