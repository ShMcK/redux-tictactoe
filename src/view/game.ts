"use strict";
import { store } from "../model/store";
import * as Action from "../model/actions";
import { getAnyMove, getBestMove } from "../model/ai";
const prompt = require("prompt");
import Settings from "./settings";


export function startGame() {
  // setup settings
  gridSize();
  // reset game data
  // store.dispatch(Action.startGame());
}

function maxMoves(board) {
  return board.length > 9 ? 15 : 8;
}

// TODO: validator for 3x3 or 4x4

function promptUser() {
  const state = store.getState();
  // game finished? play again?
  let maxMove = maxMoves(state.board);
  if (state.gameOver || state.move > maxMove) {
    playAgain();
  } else {
    // player move
    prompt.start();
    var property = {
      name: "position",
      message: "Choose a square",
      validator: /^[1-9][0-6]?$/,
      warning: "Must be a number from 1-16"
    };
    prompt.get(property, function(err, result) {
      store.dispatch(Action.choosePosition(result.position));

      if (Settings.computerOpponent && state.player === Settings.playerTwo) {
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
      gridSize();
    } else {
      // play again? no
      store.dispatch(Action.gameOver());
      return;
    }
  });
}

function gridSize() {
  prompt.start();
  var property = {
    name: "gridSize",
    message: "Grid size? (3 or 4)",
    validator: /3|4/,
    warning: "Only 3x3 (3) or 4x4 (4) grid sizes are available",
    default: "3"
  };
  prompt.get(property, function(err, result) {
    if ((/4/).test(result.gridSize)) {
      // play again? yes
      store.dispatch(Action.gridSize(4));
    } else {
      // play again? no
      store.dispatch(Action.gridSize(3));
    }
    promptUser();
  });
}


function computerOpponentMove() {
  let selectedPosition = null;
  if (Settings.difficulty === "easy") {
    selectedPosition = getAnyMove();
  } else if (Settings.difficulty === "hard") {
    selectedPosition = getBestMove();
  }
  store.dispatch(Action.choosePosition(selectedPosition));
}
