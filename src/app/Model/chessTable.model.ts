import {SpaceModel} from './draughts.model';

export class ChessTableModel {
  length = 8;
  height = 8;
  board: SpaceModel[][];

  constructor () {
    this.board = [];
    for (let i = 0; i < this.height; i ++) {
      const tmp = [];
      for (let j = 0; j < this.length; j ++) {
        if ( i % 2 === 0) {
          if ( j % 2 === 0) {
            tmp.push(new SpaceModel(true, i , j));
          } else {
            tmp.push(new SpaceModel(false, i, j));
          }
        } else {
          if ( j % 2 === 0) {
            tmp.push(new SpaceModel(false, i , j));
          } else {
            tmp.push(new SpaceModel(true, i, j));
          }
        }
      }
      this.board.push(tmp);
    }
  }
}
