import { Injectable } from '@angular/core';
import {Connect4dashboardModel} from '../Model/connect4dashboard.model';
import {Subject, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Connect4Service {
  tag = false;
  board = (new Connect4dashboardModel()).board;
  boardChanged = new Subject<number[][]>();
  win = new Subject<String>();
  constructor() { }

  afterclick() {
    this.tag = !this.tag;
  }

  itemClick(x, y ) {
    // console.log('' + x + ', ' + y);
    this.board[x][y] = this.tag === false ? 1 : -1;
    this.boardChanged.next(this.board);
    if (this.winOrNot()) {
      this.win.next(this.tag.toString());
    }
  }

  resest() {
    this.board = (new Connect4dashboardModel()).board;
    // console.log(this.board);
    this.boardChanged.next(this.board);
    this.win.next('null');
  }

  getBoard() {
    return this.board;
  }

  winOrNot() {
    return this.isHorizon() || this.isVertical();
  }

  isHorizon() {
    const row = this.board.length;
    const col = this.board[0].length;
    for (let i = 0; i < row; i++) {
      let found = 0;
      let last = 0;
      for (let j = 0; j < col; j++) {
        if (this.board[i][j] === 1) {
          if (last === 1) {
            found ++;
          } else {
            found = 1;
            last = 1;
          }
        } else if (this.board[i][j] === -1) {
          if (last === -1) {
            found ++;
          } else {
            found = 1;
            last = -1;
          }
        } else {
          found = 0;
          last = 0;
        }
        if (found >= 4) {
          return true;
        }
      }
    }
    return false;
  }

  isVertical() {
    const row = this.board.length;
    const col = this.board[0].length;
    for (let i = 0; i < col; i++) {
      let found = 0;
      let last = 0;
      for (let j = 0; j < row; j++) {
        if (this.board[j][i] === 1) {
          if (last === 1) {
            found ++;
          } else {
            found = 1;
            last = 1;
          }
        } else if (this.board[j][i] === -1) {
          if (last === -1) {
            found ++;
          } else {
            found = 1;
            last = -1;
          }
        } else {
          found = 0;
          last = 0;
        }
        if (found >= 4) {
          return true;
        }
      }
    }
    return false;
  }

  isDiagonal() {
    const row = this.board.length;
    const col = this.board[0].length;

    //bottomleft
    for (let i = row - 1; i >= 0; i --) {
      let found = 0;
      let last = 0;
      for (let j = i, k = 0; j < row; j ++, k++) {
        if (this.board[j][k] === 1) {
          if (last === 1) {
            found++;
          } else {
            found = 1;
            last = 1;
          }
        } else if (this.board[j][k] === -1) {
          if (last === -1) {
            found++;
          } else {
            found = 1;
            last = -1;
          }
        } else {
          found = 0;
          last = 0;
        }
      }
      if (found >= 4) {
        return true;
      }
    }

    for (let i = 1; i < col; i++){
      let found = 0;
      let last = 0;
      for (let j = 0, k = i; k < col; j ++, k++) {
        if (this.board[j][k] === 1) {
          if (last === 1) {
            found++;
          } else {
            found = 1;
            last = 1;
          }
        } else if (this.board[j][k] === -1) {
          if (last === -1) {
            found++;
          } else {
            found = 1;
            last = -1;
          }
        } else {
          found = 0;
          last = 0;
        }
      }
      if (found >= 4) {
        return true;
      }
    }

    //topleft

  }
}
