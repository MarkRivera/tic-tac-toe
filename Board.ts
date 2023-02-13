import { Token } from "./Player";

type Board = Array<Array<Token | null>>;
type Key = {
  [index: string]: number[];
}

export type Table = {
  generateBoard: () => Board;
  checkDiagonalWin: (board: Board) => boolean;
  checkHorizontalWin: (board: Board) => boolean;
  checkVerticalWin: (board: Board) => boolean;
  isBoardFull: (board: Board) => boolean;
  seeAvailableMoves: (board: Board) => void;
  setToken: (board: Board, input: string, token: Token) => void;
};

function checkDiagonalWin(board: Board) { return true }
function checkHorizontalWin(board: Board) { return true }
function checkVerticalWin(board: Board) { return true }
function isBoardFull(board: Board) { return false }
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
  console.log(rows.join("\n"));
}


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
  setToken
}

export { table };