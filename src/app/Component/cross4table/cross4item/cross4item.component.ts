import {Component, Input, OnInit} from '@angular/core';
import {Connect4Service} from '../../../Service/connect-4.service';
import {Subscription} from 'rxjs';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
  selector: 'app-cross4item',
  templateUrl: './cross4item.component.html',
  styleUrls: ['./cross4item.component.css']
})
export class Cross4itemComponent implements OnInit {
  @Input() length;
  @Input() height;
  cell = 'inactive';
  boardlisten: Subscription;
  winOrNot: Subscription;
  board: number[][];
  constructor(private gameService: Connect4Service) { }

  ngOnInit() {
    this.boardlisten = this.gameService.boardChanged.subscribe(
      (board: number[][]) => {
        this.board = board;
        // console.log(this.board);
        this.checkCell();
      }
    );
    this.winOrNot = this.gameService.win.subscribe(
      (tag: String) => {
        if (tag === 'null'){
          this.checkCell();
        } else if (this.board[this.length][this.height] === 0) {
         this.cell = 'inactive';
       }
      });
    this.board = this.gameService.getBoard();
    this.checkCell();
  }

  clickItem() {
    this.gameService.itemClick(this.length, this.height);
    this.checkCell();
    this.gameService.afterclick();
  }

  checkCell() {
    if (this.board[this.length][this.height] === 1) {
      this.cell = 'red';
    } else if (this.board[this.length][this.height] === -1) {
      this.cell = 'blue';
    } else if (this.length === this.board.length - 1 || this.board[this.length + 1][this.height] !== 0) {
      this.cell = 'active';
    } else {
      this.cell = 'inactive';
    }
  }

}
