"use strict";
import render from "../view/render";
import * as Action from "./actions";
import { hasWon } from "./win";
import Settings from "../view/settings";

let setup = {
  board: [],
  player: Settings.playerOne,
  gameOver: false,
  move: 0
};

export function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case Action.GRID_SIZE:
      var board = [];
      for (var i = 1; i <= action.payload.size ** 2; i++) {
        board.push(i);
      }
      setup.board = board;
      // fall through
    case Action.START_GAME:
      state = setup;
      render.newGame(state.board, state.player);
      return state;

    case Action.GAME_OVER:
      render.gameOver();
      return state;

    case Action.CHOOSE_POSITION:
      const position: number = action.payload.position - 1;
      // position is open
      if (state.board[position] !== position + 1) {
        render.error.taken(position);
        return state;
      }
      // success
      state.board[position] = state.player;
      state.move++;
      // fall through to NEXT_PLAYER

    case Action.NEXT_PLAYER:
      if (!hasWon(state.player, state.board)) {
        state.player = state.player === Settings.playerOne ? Settings.playerTwo : Settings.playerOne;
        render.board(state.board, state.player);
        return state;
      }
    // fall through to WIN_GAME

    case Action.WIN_GAME:
      render.board(state.board, false);
      render.win(state.player);
      state.gameOver = true;
    // fall through to default

    default:
      return state;
  }
}
