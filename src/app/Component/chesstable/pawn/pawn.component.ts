import {Component, Input, OnInit} from '@angular/core';
import {PawnModel} from '../../../Model/draughts.model';

@Component({
  selector: 'app-pawn',
  templateUrl: './pawn.component.html',
  styleUrls: ['./pawn.component.css']
})
export class PawnComponent implements OnInit {
  @Input() pawn: PawnModel;
  constructor() { }

  ngOnInit() {
  }

}
