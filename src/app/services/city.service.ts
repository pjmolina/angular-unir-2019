import { Injectable } from '@angular/core';
import { City } from '../domain/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  getAllCities(): City[] {
    return [
      { name: 'Alicante', country: 'España' },
      { name: 'Valencia', country: 'España' },
      { name: 'Cadiz', country: 'España' },
      { name: 'Huelva', country: 'España' }
    ];
  }
}
