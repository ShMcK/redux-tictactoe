"use strict";
const possibleWins = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // horizontal
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // vertical
  [1, 5, 9], [3, 5, 7]             // diagonal
];

export function hasWon(player: string, board: any[]): boolean {
  // collect player moves
  let allPlayerMoves = [];
  board.forEach((item: any, index: number) => {
    if (item === player) { allPlayerMoves.push(index + 1); }
  });
  // early optimization.
  // not enough moves. can't possibly win
  if (allPlayerMoves.length < 3) { return false; }
  // player moves match a win
  return possibleWins.some((win: number[]): boolean => {
    return win.every((val: number): boolean => {
      return allPlayerMoves.indexOf(val) > -1;
    });
  });
}
