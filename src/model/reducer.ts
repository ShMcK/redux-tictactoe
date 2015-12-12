import render from "../view/render";
import { hasWon } from "./win";
import { player } from "../view/game";

export function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "START_GAME":
      state = {
        board: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        player: player.one,
        gameOver: false,
        move: 0
      };
      render.newGame(state.board, state.player);
      return state;

    case "GAME_OVER":
      render.gameOver();
      return state;

    case "CHOOSE_POSITION":
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

    case "NEXT_PLAYER":
      if (!hasWon(state.player, state.board)) {
        state.player = state.player === player.one ? player.two : player.one;
        render.board(state.board, state.player);
        return state;
      }
    // fall through to WIN_GAME

    case "WIN_GAME":
      render.board(state.board, false);
      render.win(state.player);
      state.gameOver = true;
    // fall through to default

    default:
      return state;
  }
}
