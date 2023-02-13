"use strict";
exports.__esModule = true;
exports.table = void 0;
function generateCountObject() {
    return {
        "X": 0,
        "O": 0
    };
}
function checkDiagonalWin(board) {
    var count = generateCountObject();
    // Check Left Diagonal
    for (var i = 0; i < board.length; i++) {
        if (board[i][i] === "O") {
            count["O"]++;
        }
        if (board[i][i] === "X") {
            count["X"]++;
        }
    }
    // If either Os or Xs are equal to 3, return true
    if (count["O"] === 3 || count["X"] === 3) {
        return true;
    }
    // Reset count object
    count = generateCountObject();
    // Check the right diagonal
    for (var i = 0; i < board.length; i++) {
        var right = board.length - 1 - i;
        if (board[i][right] === "O") {
            count["O"]++;
        }
        if (board[i][right] === "X") {
            count["X"]++;
        }
    }
    // If O or X have three, return true
    if (count["O"] === 3 || count["X"] === 3) {
        return true;
    }
    return false;
}
;
function checkHorizontalWin(board) {
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        var count = generateCountObject();
        for (var col = 0; col < row.length; col++) {
            if (row[col] === "O") {
                count["O"]++;
            }
            if (row[col] === "X") {
                count["X"]++;
            }
        }
        if (count["O"] === 3)
            return true;
        if (count["X"] === 3)
            return true;
    }
    return false;
}
function checkVerticalWin(board) {
    for (var i = 0; i < board.length; i++) {
        var count = generateCountObject();
        for (var row = 0; row < board.length; row++) {
            if (board[row][i] === "O") {
                count["O"]++;
            }
            if (board[row][i] === "X") {
                count["X"]++;
            }
        }
        if (count["O"] === 3)
            return true;
        if (count["X"] === 3)
            return true;
    }
    return false;
}
function isBoardFull(board) {
    for (var i = 0; i < board.length; i++) {
        var row = board[i];
        for (var j = 0; j < row.length; j++) {
            if (row[j] === null)
                return false;
        }
    }
    return true;
}
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
    console.log(rows.join("\n") + "\n");
}
function drawBoard(board) {
    for (var rowIndex = 0; rowIndex < board.length; rowIndex++) {
        var row = board[rowIndex];
        //  X |  | X 
        // ___  __ __
        //  X |
        var result = "";
        for (var col = 0; col < row.length; col++) {
            var char = board[rowIndex][col];
            if (col !== row.length - 1) {
                char ?
                    result = result.concat(" ", char, " |") : result = result.concat("  ", " |");
            }
            else {
                char ?
                    result = result.concat(" ", char) : result = result.concat(" ");
            }
        }
        console.log(result);
        if (rowIndex !== 2) {
            console.log("-----------");
        }
    }
}
;
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
    setToken: setToken,
    drawBoard: drawBoard
};
exports.table = table;
