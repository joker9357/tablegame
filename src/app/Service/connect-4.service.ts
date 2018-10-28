import { Injectable } from '@angular/core';
import {Connect4dashboardModel} from '../Model/connect4dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class Connect4Service {
  tag = false;
  board = new Connect4dashboardModel()
  constructor() { }

  afterclick() {
    this.tag = !this.tag;
  }

  whoClick() {
    if (this.tag === false) {
      return 'red';
    } else {
      return 'blue';
    }
  }
}
