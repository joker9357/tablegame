import { Component, OnInit } from '@angular/core';
import {ArrayBuffer} from '@angular/http/src/static_request';

@Component({
  selector: 'app-cross4table',
  templateUrl: './cross4table.component.html',
  styleUrls: ['./cross4table.component.css']
})
export class Cross4tableComponent implements OnInit {

  constructor() {

  }
  private height = 6;
  private length = 7;
  ngOnInit() {
  }

  arrayOne (x: number) {
    const arr = [];
    for (let i = 0; i < x; i++) {
      arr.push(1);
    }
    return arr;
  }

}
