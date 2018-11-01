import { Injectable } from '@angular/core';
import {ChessTableModel} from '../Model/chessTable.model';
import {DraughtsModel, PawnModel, SpaceModel} from '../Model/draughts.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraughtsService {
  board = new ChessTableModel().board;
  boardChanged = new Subject<SpaceModel[][]>();
  redTurn = true;
  nowPiece: DraughtsModel;
  eatenPiece = [];
  doubleJump = false;
  constructor() { }

  clickSpace(piece: DraughtsModel) {
    if (this.doubleJump === false && this.nowPiece === piece) {
      this.clearSelection();
      this.nowPiece = null;
    } else if (this.redTurn === piece.isRed) {
      this.clearSelection();
      this.nowPiece = piece;
      // moveto
      this.foundPiece(piece).highlight = true;
    } else if (this.doubleJump && this.nowPiece === piece) {
      this.clearSelection();
      this.nowPiece = piece;
      // moveto
      this.foundPiece(piece).highlight = true;
    }
  }

  checkMoveTo(piece: DraughtsModel) {
    const row = piece.row;
    const col = piece.col;
    const isRed = piece.isRed;
  }

  getDiagSpace(piece: DraughtsModel, left: boolean, back: boolean) {
    if (piece.type === 'pawn') {
      if (left) {
        const neighborRow = (<PawnModel>piece).getLeftUp().row;
        const neighborCol = (<PawnModel>piece).getLeftUp().col;
      } else {

      }
    } else if (back && piece.type === 'king') {

    }
  }

  getDDiagSpace(piece: DraughtsModel, left: boolean, back: boolean) {

  }

  resetBoard() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 8; j++) {
        if ( i % 2 === 0 && j % 2 === 0) {
          this.board[i][j].addPiece(new PawnModel('red', i, j));
        } else if (i % 2 === 1 && j % 2 === 1) {
          this.board[i][j].addPiece(new PawnModel('red', i, j));
        }
      }
    }

    for (let i = 5; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ( i % 2 === 0 && j % 2 === 0) {
          this.board[i][j].addPiece(new PawnModel('black', i, j));
        } else if (i % 2 === 1 && j % 2 === 1) {
          this.board[i][j].addPiece(new PawnModel('black', i, j));
        }
      }
    }

    this.boardChanged.next(this.board);
  }

  foundPiece(piece: DraughtsModel) {
    let res: SpaceModel;
    this.board.forEach( (row) => {
      row.forEach( (space) => {
        if (space.draught === piece) {
          res = space;
        }
      });
    });
    return res;
  }

  clearSelection() {
    this.board.forEach( (row) => {
      row.forEach( (space) => {
        space.jumpable = space.highlight = false;
        this.eatenPiece = [];
      });
    });
  }
}
