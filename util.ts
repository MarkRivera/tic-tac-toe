import { createInterface } from "readline";

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout
})

export function get_player_input() {
  return new Promise<string>(resolve => rl.question("Where would you like to play? ", resolve));
}