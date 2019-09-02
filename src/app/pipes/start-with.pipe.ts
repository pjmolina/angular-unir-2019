import { Pipe, PipeTransform } from '@angular/core';
import { City } from '../domain/city';

@Pipe({
  name: 'startWith'
})
export class StartWithPipe implements PipeTransform {

  transform(cities: City[], ...args: any[]): City[] {
    if (!cities) {
      return [];
    }
    const prefix = args && args.length > 0 ? args[0] : null;

    if (!prefix) {
      return cities;
    }

    return cities.filter(c => c.name.startsWith(prefix));
  }

}
