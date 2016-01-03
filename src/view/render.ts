"use strict";
import Settings from "./settings";
const colors = require("colors/safe");

colors.setTheme({
  prompt: "grey",
  info: "green",
  warn: "yellow",
  error: "red"
});

// styling a single square
function square(board, player, index) {
  const position = board[index];
  if (typeof position === "number") {
    return colors.prompt(position); // open square
  } else {
    return position == Settings.playerOne ?
      colors.error(position) : colors.warn(position); // ✗, ○
  }
}

// styling a row
function row(board, player, start: number) {
  let line = square(board, player, start) + adjust(start) +
    square(board, player, start + 1) + adjust(start + 1) +
    square(board, player, start + 2);
  if (board.length > 9) {
    line += adjust(start + 2) + square(board, player, start + 3);
  }
  return line;
}

function adjust(n: number): string {
  return n <= 8 ? "  |  " : " |  ";
}

const render = {
  newGame: (board, player) => {
    console.log(colors.info(`
             TIC TAC TOE
   `));
    render.board(board, player);
  },
  board: (board: any[], player): void => {
    if (player) {
      console.log(colors.info(`
          Player ${player}, your turn!
      `));
    }
    if (board.length > 9) {
      console.log(`
                  |     |     |
               ${row(board, player, 0) }
             _____|_____|_____|_____
                  |     |     |
               ${row(board, player, 4) }
             _____|_____|_____|_____
                  |     |     |
               ${row(board, player, 8) }
             _____|_____|_____|_____
                  |     |     |
               ${row(board, player, 12) }
                  |     |     |
        `);
    } else {
      console.log(`
                  |     |
               ${row(board, player, 0) }
             _____|_____|_____
                  |     |
               ${row(board, player, 3) }
             _____|_____|_____
                  |     |
               ${row(board, player, 6) }
                  |     |
        `);
    }
  },
  win: (player: string) => {
    console.log(colors.info(`
             Player ${player} wins!
`));
  },
  gameOver: () => {
    console.log("Game over. Thanks for playing");
  },
  error: {
    taken: (position: number) => {
      console.log(colors.warn(`Sorry, square ${position} is already taken. Try again.`));
    },
    invalid: (input: string) => {
      console.log(colors.warn(`${input} is not a valid choice`));
    }
  }
};
export default render;
