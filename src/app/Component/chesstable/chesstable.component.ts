import { Component, OnInit } from '@angular/core';
import {DraughtsService} from '../../Service/draughts.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-chesstable',
  templateUrl: './chesstable.component.html',
  styleUrls: ['./chesstable.component.css']
})
export class ChesstableComponent implements OnInit {
  board: any;
  boardState: Subscription;
  constructor(private gameService: DraughtsService) { }

  ngOnInit() {
    this.boardState = this.gameService.boardChanged.subscribe(
      (board) => {
        this.board = board;
        console.log(this.board);
      });
    this.gameService.resetBoard();
  }

}
