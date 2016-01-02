"use strict";
import { store } from "../model/store";
import * as Action from "../model/actions";
import { getAnyMove, getBestMove } from "../model/ai";
const prompt = require("prompt");

export const player = {
  one: "✗",
  two: "○",
  computerOpponent: true,
  difficulty: "easy"
};

export default function startGame() {
  // reset game data
  store.dispatch(Action.startGame());
  // prompt player 1 to move
  promptUser();
}

function promptUser() {
  const state = store.getState();
  // game finished? play again?
  if (state.gameOver || state.move > 8) {
    playAgain();
  } else {
    // player move
    prompt.start();
    var property = {
      name: "position",
      message: "Choose a square",
      validator: /^[1-9]$/,
      warning: "Must be a number from 1-9"
    };
    prompt.get(property, function(err, result) {
      store.dispatch(Action.choosePosition(result.position));

      if (player.computerOpponent && state.player === player.two) {
        // computer player turn is next
        computerOpponentMove();
      } else {
        // human turn is next
        promptUser();
      }
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
      // play again? yes
      startGame();
    } else {
      // play again? no
      store.dispatch(Action.gameOver());
      return;
    }
  });
}


function computerOpponentMove() {
  let selectedPosition = null;
  if (player.difficulty === "easy") {
    selectedPosition = getAnyMove();
  } else if (player.difficulty === "hard") {
    selectedPosition = getBestMove();
  }
  store.dispatch(Action.choosePosition(selectedPosition));
}
