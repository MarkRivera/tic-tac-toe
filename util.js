"use strict";
exports.__esModule = true;
exports.get_player_input = void 0;
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
function get_player_input() {
    return new Promise(function (resolve) { return rl.question("Where would you like to play? ", resolve); });
}
exports.get_player_input = get_player_input;
