import {Component, Input, OnInit} from '@angular/core';
import {Connect4Service} from '../../../Service/connect-4.service';

@Component({
  selector: 'app-cross4item',
  templateUrl: './cross4item.component.html',
  styleUrls: ['./cross4item.component.css']
})
export class Cross4itemComponent implements OnInit {
  @Input() length;
  @Input() height;
  cell = 'active';

  constructor(private gameService: Connect4Service) { }

  ngOnInit() {
  }

  clickItem() {
    const result = this.gameService.whoClick();
    if (result === 'red') {
      this.cell = 'red';
    } else {
      this.cell = 'blue';
    }
    this.gameService.afterclick();
  }

}
