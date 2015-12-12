interface GameState {
  player: string;
  board: any[];
  gameOver: boolean;
}

interface Action {
  type: string;
  payload?: any;
}

declare module Prompt {}
declare module "prompt" {
  export = Prompt;
}

declare var require: any;
