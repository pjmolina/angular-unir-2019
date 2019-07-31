import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  getTemperature(cityName: string): number {
    switch (cityName) {
      case 'Alicante': return 30;
      case 'Valencia': return 33;
      case 'Cadiz': return 23;
      case 'Huelva': return 25;
      default:
        return 28;
    }
  }
}
