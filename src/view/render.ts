const render = {
  newGame: (board, player) => {
    console.log(`
      *************************
      *      TIC TAC TOE      *
      *************************
      `);
      render.player(player);
      render.board(board);
  },
  player: (player: string) => {
    console.log(`
      * Player ${player}, your turn! *
   `);
  },
  board: (b: any[]): void => {
    console.log(`
                |     |
             ${b[0]}  |  ${b[1]}  |  ${b[2]}
           _____|_____|_____
                |     |
             ${b[3]}  |  ${b[4]}  |  ${b[5]}
           _____|_____|_____
                |     |
             ${b[6]}  |  ${b[7]}  |  ${b[8]}
                |     |
      `);
  },
  win: (player: string) => {
    console.log(`
        ********************************
        * Player ${player} wins! *
        ********************************
        `);
  },
  gameOver: () => {
    console.log("Thanks for playing");
  },
  error: {
    taken: (position: number) => {
      console.log(`Sorry, square ${position} is already taken. Try again.`);
    },
    invalid: (input: string) => {
      console.log(`${input} is not a valid choice`);
    }
  }
};
export default render;
