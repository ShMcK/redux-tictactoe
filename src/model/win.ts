const possibleWins = [
  [1, 2, 3], [4, 5, 6], [7, 8, 9], // horizontal
  [1, 4, 7], [2, 5, 8], [3, 6, 9], // vertical
  [1, 5, 9], [3, 5, 7]             // diagonal
];

export function hasWon(player: string, board: any[]): boolean {
  let allPlayerMoves = [];  // collect player moves
  board.forEach((item: any, index: number) => {
    if (item === player) { allPlayerMoves.push(index + 1); }
  });
  if (allPlayerMoves.length < 3) { return false; } // early optimization. can't possibly win
  return possibleWins.some((win: number[]) => { // meets winning condition ?
    return win.every((val: number) => {
      return allPlayerMoves.indexOf(val) > -1;
    });
  });
}
