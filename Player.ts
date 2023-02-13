export type Token = "X" | "O";
export type PlayerName = "Player 1" | "Player 2";

const choices = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
export type PlayerChoice = typeof choices[number];

export type Player = {
  token: Token;
  name: PlayerName
}

function isPlayerChoice(input: string): input is PlayerChoice {
  return choices.includes(input)
}

function createPlayer(token: Token, name: PlayerName): Player {
  return {
    token,
    name
  }
}

const player_one = createPlayer("X", "Player 1");
const player_two = createPlayer("O", "Player 2");

export {
  player_one,
  player_two,
  isPlayerChoice
};