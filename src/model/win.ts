"use strict";
const possible3x3Wins = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // horizontal
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // vertical
  [1, 5, 9], [3, 5, 7]             // diagonal
];

const possible4x4Wins = [
  [1, 2, 3], [2, 3, 4], [5, 6, 7], [6, 7, 8], [9, 10, 11], [10, 11, 12], [13, 14, 15], [14, 15, 16], // horizontal
  [1, 5, 9], [5, 9, 13], [2, 6, 10], [6, 10, 14], [3, 7, 11], [7, 11, 15], [4, 8, 12], [8, 12, 16] // vertical
  [1, 6, 11], [2, 7, 12], [5, 10, 15], [6, 11, 16], [3, 6, 9], [4, 7, 10], [7, 10, 13], [8, 11, 14] // diagonal
];

export function hasWon(player: string, board: any[]): boolean {
  // collect player moves
  let allPlayerMoves = [];
  board.forEach((item: any, index: number) => {
    if (item === player) { allPlayerMoves.push(index + 1); }
  });
  // early optimization.
  // not enough moves. can't possibly win
  if (allPlayerMoves.length < 5) { return false; }

  let possibleWins = board.length > 9 ? possible4x4Wins : possible3x3Wins;

  return possibleWins.some((win: number[]): boolean => {
    return win.every((val: number): boolean => {
      return allPlayerMoves.indexOf(val) > -1;
    });
  });
}
