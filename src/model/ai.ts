"use strict";
import { store } from "./store";

// return a random empty space as a move
export function getAnyMove(): number {
  let emptySpaces = possibleMoves();
  let index = Math.floor(Math.random() * (emptySpaces.length)) + 1;
  return emptySpaces[index];
}

// select best move using Minimax
export function getBestMove(): number {
  //  early exit condition
  // player win?
  // human? ( return -1 )
  // computer? (return +1 )

  // possible moves
  // no possible moves? ( return 0 )

  // multiple possible moves remaining:
  // array of possible moves
  // add up totals of recursive getBestMove calls on possible moves

  // human?
  // reduce ( return min value )

  // computer?
  // reduce ( return max value )
  return 1;
}

function possibleMoves() {
  let board = store.getState().board;
  return board.filter(function(x) {
    return typeof x == "number";
  });
}
