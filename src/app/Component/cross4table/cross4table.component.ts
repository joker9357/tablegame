import { Component, OnInit } from '@angular/core';
import {Connect4Service} from '../../Service/connect-4.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-cross4table',
  templateUrl: './cross4table.component.html',
  styleUrls: ['./cross4table.component.css']
})
export class Cross4tableComponent implements OnInit {
  winOrNot: Subscription;
  constructor(private gameService: Connect4Service) {

  }
  tag = false;
  win = false;
  private height = this.gameService.getBoard().length;
  private length = this.gameService.getBoard()[0].length;
  ngOnInit() {
    this.winOrNot = this.gameService.win.subscribe(
      (tag: String) => {
        if (tag === 'false') {
          this.win = true;
          this.tag = false;
        } else if (tag === 'true') {
          this.win = true;
          this.tag = true;
        } else {
          this.win = false;
        }
      });
  }

  arrayOne (x: number) {
    const arr = [];
    for (let i = 0; i < x; i++) {
      arr.push(1);
    }
    return arr;
  }

  reset() {
    this.gameService.resest();
  }
}
