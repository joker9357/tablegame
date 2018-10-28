import config from '../Config/connect4.config';

export class Connect4dashboardModel {
  board: number[][];

  constructor() {
    this.board = [];
    for (let i = 0; i < config.height; i++) {
      const tmp = [];
      for (let j = 0; j < config.length; j++){
        tmp.push(0);
      }
      this.board.push(tmp);
    }
  }
}
