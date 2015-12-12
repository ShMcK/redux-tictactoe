import { player} from "./game";
const colors = require("colors/safe");

colors.setTheme({
  prompt: "grey",
  info: "green",
  warn: "yellow",
  error: "red"
});

function square(board, index) {
  const position = board[index];
  if (typeof position === "number") {
    return colors.prompt(position);
  } else {
    return colors.warn(position);
  }
}

function row(board, start: number) {
  return square(board, start) + "  |  " +
    square(board, start + 1) + "  |  " +
    square(board, start + 2);
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
    console.log(`
                |     |
             ${row(board, 0) }
           _____|_____|_____
                |     |
             ${row(board, 3) }
           _____|_____|_____
                |     |
             ${row(board, 6) }
                |     |
      `);
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
