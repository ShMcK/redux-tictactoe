"use strict";
import { store } from "../model/store";
import * as Action from "../model/actions";
const prompt = require("prompt");

export let settings = {
  playerOne: "✗",
  playerTwo: "○",
  computerOpponent: false,
  difficulty: "easy"
};

export function gridSize() {
  return new Promise(function(resolve, reject) {
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
      resolve();
    });
  });
}

export function computerOpponent() {
  return new Promise(function(resolve, reject) {
    prompt.start();
    var property = {
      name: "computerOpponent",
      message: "Computer opponent? (y or n)",
      validator: /y[es]*|n[o]?/i,
      warning: "Must respond yes or no",
      default: "y"
    };
    prompt.get(property, function(err, result) {
      if ((/^y[es]?$/i).test(result.computerOpponent)) {
        store.dispatch(Action.computerOpponent(true));
      } else {
        store.dispatch(Action.computerOpponent(false));
      }
      resolve();
    });
  });
}
