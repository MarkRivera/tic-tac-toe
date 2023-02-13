"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var Board_1 = require("./Board");
var Player_1 = require("./Player");
var util_1 = require("./util");
// There's two players, X and O
// Player One will always go first
// Player Two will go after and this will alternate until the end of the game
// Player 1 will place an X, we will check to see if player 1 has won the game
// If true, end the game with a message congratulating player 1
// Vice versa for player two
// If any player, places a key and the board is full and no one has won then draw
// There's a board, if a space is not empty a player cannot play there
// Two players, Board, Two Characters, Two win conditions (Diagonal and Straight Line)
function ticTacToe() {
    return __awaiter(this, void 0, void 0, function () {
        var generateBoard, isBoardFull, setToken, board, is_board_full, is_winner, current_player, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    generateBoard = Board_1.table.generateBoard, isBoardFull = Board_1.table.isBoardFull, setToken = Board_1.table.setToken;
                    board = generateBoard();
                    is_board_full = isBoardFull(board);
                    is_winner = false;
                    current_player = Player_1.player_one;
                    _a.label = 1;
                case 1:
                    if (!(!is_board_full && !is_winner)) return [3 /*break*/, 3];
                    // See available moves
                    Board_1.table.seeAvailableMoves(board);
                    return [4 /*yield*/, (0, util_1.get_player_input)()];
                case 2:
                    response = _a.sent();
                    // If the player's choice isn't correct, then 
                    // Place the Player's Token onto the board and if its not available select another space
                    try {
                        setToken(board, response, current_player.token);
                    }
                    catch (error) {
                        console.log("Cannot take that spot, please select an empty place");
                        return [3 /*break*/, 1];
                    }
                    console.log(board);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
ticTacToe();
