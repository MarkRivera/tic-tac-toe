"use strict";
exports.__esModule = true;
exports.table = void 0;
function checkDiagonalWin(board) { return true; }
function checkHorizontalWin(board) { return true; }
function checkVerticalWin(board) { return true; }
function isBoardFull(board) { return false; }
function setToken(board, input, token) {
    var key = {
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
    var selected_spot = key[input];
    var spot = board[selected_spot[0]][selected_spot[1]];
    if (spot === null) {
        board[selected_spot[0]][selected_spot[1]] = token;
    }
    else
        throw new Error("Space is already taken");
}
function seeAvailableMoves(board) {
    var rows = [];
    var summand = 0;
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        var result = "";
        for (var j = 0; j < row.length; j++) {
            if (row[j] === null) {
                result = result + (summand + j).toString() + " ";
            }
            else {
                result = result + " " + " ";
            }
        }
        rows.push(result);
        summand += 3;
    }
    console.log(rows.join("\n"));
}
function generateBoard() {
    return [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
}
var table = {
    generateBoard: generateBoard,
    checkDiagonalWin: checkDiagonalWin,
    checkHorizontalWin: checkHorizontalWin,
    checkVerticalWin: checkVerticalWin,
    isBoardFull: isBoardFull,
    seeAvailableMoves: seeAvailableMoves,
    setToken: setToken
};
exports.table = table;
