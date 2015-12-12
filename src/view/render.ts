import { player as Player} from "./game";
const colors = require("colors/safe");

colors.setTheme({
  prompt: "grey",
  info: "green",
  warn: "yellow",
  error: "red"
});

function square(board, player, index) {
  const position = board[index];
  if (typeof position === "number") {
    return colors.prompt(position); // open square
  } else {
    return position == Player.one ?
    colors.error(position) : colors.warn(position); // ✗, ○
  }
}

function row(board, player, start: number) {
  return square(board, player, start) + "  |  " +
    square(board, player, start + 1) + "  |  " +
    square(board, player, start + 2);
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
             ${row(board, player, 0)}
           _____|_____|_____
                |     |
             ${row(board, player, 3)}
           _____|_____|_____
                |     |
             ${row(board, player, 6)}
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
