"use strict";
/** Actions */
export const START_GAME = "START_GAME";
export const CHOOSE_POSITION = "CHOOSE_POSITION";
export const NEXT_PLAYER = "NEXT_PLAYER";
export const WIN_GAME = "WIN_GAME";
export const GAME_OVER = "GAME_OVER";
export const GRID_SIZE = "GRID_SIZE";

/** Action Creators */
export function startGame(): Action {
  return { type: START_GAME };
}
export function choosePosition(position: number): Action {
  return { type: CHOOSE_POSITION, payload: { position } };
}
export function nextPlayer(): Action {
  return { type: NEXT_PLAYER };
}
export function winGame(): Action {
  return { type: WIN_GAME };
}
export function gameOver(): Action {
  return { type: GAME_OVER };
}
export function gridSize(size: number): Action {
  return { type: GRID_SIZE , payload: { size } };
}
