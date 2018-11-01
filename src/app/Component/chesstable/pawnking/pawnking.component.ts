import {Component, Input, OnInit} from '@angular/core';
import {PawnKingModel, PawnModel} from '../../../Model/draughts.model';

@Component({
  selector: 'app-pawnking',
  templateUrl: './pawnking.component.html',
  styleUrls: ['./pawnking.component.css']
})
export class PawnkingComponent implements OnInit {
  @Input() pawnKing: PawnKingModel;
  constructor() { }

  ngOnInit() {
  }

}
