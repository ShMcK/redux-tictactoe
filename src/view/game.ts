import { store } from "../model/store";
import * as Action from "../model/actions";
const prompt = require("prompt");

export const player = {
  one: "✗",
  two: "○"
};

export default function startGame() {
  store.dispatch(Action.startGame());
  promptUser();
}

function promptUser() {
  const state = store.getState();
  if (state.gameOver || state.move > 8) {
    playAgain();
  } else {
    prompt.start();
    var property = {
      name: "position",
      message: "Choose a square",
      validator: /^[1-9]$/,
      warning: "Must be a number from 1-9"
    };
    prompt.get(property, function(err, result) {
      store.dispatch(Action.choosePosition(result.position));
      promptUser();
    });
  }
}

function playAgain() {
  prompt.start();
  var property = {
    name: "playAgain",
    message: "Play again? (y or n)",
    validator: /y[es]*|n[o]?/i,
    warning: "Must respond yes or no",
    default: "y"
  };
  prompt.get(property, function(err, result) {
    if ((/^y[es]?$/i).test(result.playAgain)) {
      startGame();
    } else {
      store.dispatch(Action.gameOver());
      return;
    }
  });
}
