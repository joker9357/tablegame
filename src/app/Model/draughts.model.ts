export class SpaceModel {
  playable: boolean;
  draught: DraughtsModel = null;
  jumpable  = false;
  highlight = false;
  eaten = false;
  col: number;
  row: number;

  constructor(playable: boolean, row: number, col: number) {
    this.playable = playable;
    this.row = row;
    this.col = col;
  }

  addPiece(piece: DraughtsModel) {
    this.draught = piece;
  }

  clearPiece() {
    this.draught = null;
  }

}

export class DraughtsModel {
  type = 'piece';
  isRed = true;
  jumpable = false;
  row: number;
  col: number;

  constructor(isRed: string, row: number, col: number) {
    this.row = row;
    this.col = col;
    if (isRed !== 'red') {
      this.isRed = false;
    }
  }
}

export class PawnModel extends DraughtsModel {
  type = 'pawn';
  getRightUp() {
    const col = this.col + 1;
    const row = this.isRed === true ? this.row - 1 : this.row + 1;
    return {row, col};
  }

  getLeftUp() {
    const col = this.col - 1;
    const row = this.isRed === true ? this.row - 1 : this.row + 1;
    return {row, col};
  }

  getDRightUp() {
    const col = this.col + 2;
    const row = this.isRed === true ? this.row - 2 : this.row + 2;
    return {row, col};
  }

  getDLeftUp() {
    const col = this.col - 2;
    const row = this.isRed === true ? this.row - 2 : this.row + 2;
    return {row, col};
  }
}

export class PawnKingModel extends PawnModel {
  type = 'king';
  getRightDown() {
    const col = this.col + 1;
    const row = this.isRed === true ? this.row + 1 : this.row - 1;
    return {row, col};
  }

  getLeftDown() {
    const col = this.col - 1;
    const row = this.isRed === true ? this.row + 1 : this.row - 1;
    return {row, col};
  }

  getDRightDown() {
    const col = this.col + 2;
    const row = this.isRed === true ? this.row + 2 : this.row - 2;
    return {row, col};
  }

  getDLeftDown() {
    const col = this.col - 2;
    const row = this.isRed === true ? this.row + 2 : this.row - 2;
    return {row, col};
  }
}
