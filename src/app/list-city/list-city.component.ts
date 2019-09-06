import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { City } from '../domain/city';
import { CityService } from '../services/city.service';

@Component({
  selector: 'app-list-city',
  templateUrl: './list-city.component.html',
  styleUrls: ['./list-city.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListCityComponent implements OnInit {
  cities: City[] = null;

  searchFilter = '';

  constructor(private cityService: CityService, private cd: ChangeDetectorRef) {

  }

  ngOnInit() {
    // this.cities = this.cityService.getAllCities();

    this.cityService.getAllCities().subscribe(
      cities => {

        this.cd.detach();
        this.cities = cities;
        // + 10 ...
        this.cd.detectChanges(); // render
        // + 10 ...

        this.cd.markForCheck();
        this.cd.reattach();  // 1
      },
      error => console.error(error)
    );
  }

}
