import { store } from "../model/store";
import * as Action from "../model/actions";
import render from "./render";
const prompt = require("prompt");

export const player = {
  one: "✗",
  two: "○"
};

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
    if (err) { render.error.invalid(err); }
    if ((/^y[es]?$/i).test(result.playAgain)) {
      startGame();
    } else {
      render.gameOver();
      return;
    }
  });
}

function promptUser() {
  if (store.getState().gameOver) {
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
      if (err) { render.error.invalid(err); }
      store.dispatch(Action.choosePosition(result.position));
      promptUser();
    });
  }
}

export default function startGame() {
  store.dispatch(Action.startGame());
  promptUser();
}
