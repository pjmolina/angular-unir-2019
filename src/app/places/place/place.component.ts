import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/domain/place';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.scss']
})
export class PlaceComponent implements OnInit {
  @Input() place: Place;

  constructor() { }

  ngOnInit() {
  }

}
