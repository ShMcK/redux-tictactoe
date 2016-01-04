interface GameState {
  player: string;
  board: any[];
  gameOver: boolean;
  move: number;
}

interface GameSettings {
  playerOne: string;
  playerTwo: string;
  computerOpponent: boolean;
  difficulty: string;
}

interface Action {
  type: string;
  payload?: any;
}

declare module Prompt { }
declare module "prompt" {
  export = Prompt;
}

declare var require: any;
