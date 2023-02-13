"use strict";
exports.__esModule = true;
exports.player_two = exports.player_one = void 0;
function createPlayer(token, name) {
    return {
        token: token,
        name: name
    };
}
var player_one = createPlayer("X", "Player 1");
exports.player_one = player_one;
var player_two = createPlayer("O", "Player 2");
exports.player_two = player_two;
