import { store } from "../model/store";
import * as Action from "../model/actions";
import render from "./render";
const prompt = require("prompt");

const willContinue = /^(Y|YES)$/i;

function playAgain() {
  console.log("Press 'Y'");
  prompt.start();
  prompt.get(["playAgain"], function(err, result) {
    if (err) { render.error.invalid(err); }
    if (willContinue.test(result.playAgain)) {
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
    prompt.get(["position"], function(err, result) {
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
