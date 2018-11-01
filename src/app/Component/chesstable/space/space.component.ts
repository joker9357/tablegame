import {Component, Input, OnInit} from '@angular/core';
import {SpaceModel} from '../../../Model/draughts.model';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.css']
})
export class SpaceComponent implements OnInit {
  @Input()
  space: SpaceModel;
  constructor() { }

  ngOnInit() {
  }

}
