import { table } from "./Board";
import { Player, PlayerName, player_one, player_two } from "./Player";
import { get_player_input } from "./util";
// There's two players, X and O
// Player One will always go first
// Player Two will go after and this will alternate until the end of the game
// Player 1 will place an X, we will check to see if player 1 has won the game
// If true, end the game with a message congratulating player 1
// Vice versa for player two
// If any player, places a key and the board is full and no one has won then draw
// There's a board, if a space is not empty a player cannot play there

// Two players, Board, Two Characters, Two win conditions (Diagonal and Straight Line)

async function ticTacToe() {
  // Ask player 1 for a move, player selects a space, if that space is taken, re-ask player.
  // Ask player 2 for move, player selects a space, if that space is taken re-ask player.
  // Continue until all spaces are taken or winner is determined
  const { generateBoard, isBoardFull, setToken } = table;

  const board = generateBoard();
  let is_board_full = isBoardFull(board);

  let is_winner = false;
  let current_player: Player = player_one;
  // const selected = await get_player_input(table);
  // console.log(selected)

  while (!is_board_full && !is_winner) {
    // See available moves
    table.seeAvailableMoves(board)

    // Get Player Choice
    const response = await get_player_input();

    // If the player's choice isn't valid, then restart the loop

    // Place the Player's Token onto the board and if its not available select another space
    try {
      setToken(board, response, current_player.token);
    } catch (error) {
      console.log("Cannot take that spot, please select an empty place")
      continue;
    }

    console.log(board);
    break;
  }

}

ticTacToe();