import { Component, OnInit, Input } from '@angular/core';
import { City } from '../domain/city';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @Input() city: City;
  temperature: number = null;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.temperature = this.weatherService.getTemperature(this.city.name);
  }

}
