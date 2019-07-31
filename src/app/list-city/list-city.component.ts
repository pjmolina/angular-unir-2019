import { Component, OnInit } from '@angular/core';
import { City } from '../domain/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.scss']
})
export class ListCityComponent implements OnInit {
  cities: City[];

  constructor(private cityService: CityService) {

  }

  ngOnInit() {
    this.cities = this.cityService.getAllCities();
  }

}
