import { Component, OnInit, Input } from '@angular/core';
import { City } from '../domain/city';
import { WeatherService } from '../services/weather.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
  animations: [
    trigger('temperatureAnimation', [
      state('hot', style({
        backgroundColor: '#cc0000', transform: 'scale(1.2)'
      })),
      state('ok', style({
        backgroundColor: '#ffffff', transform: 'scale(1)'
      })),
      state('cold', style({
        backgroundColor: '#0000aa', transform: 'scale(.8)'
      })),
      transition('hot => ok', animate('500ms linear')),
      transition('ok => cold', animate('500ms ease-in-out')),
      transition('ok => hot', animate('500ms linear')),
      transition('hot => cold', animate('500ms ease-in-out')),
      transition('cold => hot', animate('500ms ease-in-out')),
      transition('cold => ok', animate('2000ms ease-in-out'))
    ])
  ]
})
export class CityComponent implements OnInit {
  @Input() city: City;
  temperature: number = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.temperature = this.weatherService.getTemperature(this.city.name);
  }
  up() {
    this.temperature++;
  }
  down() {
    this.temperature--;
  }

  get state(): string {
    if (this.temperature > 30) {
      return 'hot';
    }
    if (this.temperature < 15) {
      return 'cold';
    }
    return 'ok';  // 15 - 30
  }

}
