/** Actions */
const START_GAME = "START_GAME";
const CHOOSE_POSITION = "CHOOSE_POSITION";
const NEXT_PLAYER = "NEXT_PLAYER";
const WIN_GAME = "WIN_GAME";

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
