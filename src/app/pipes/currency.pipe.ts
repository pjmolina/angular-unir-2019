import { Pipe, PipeTransform } from '@angular/core';


/*
    123 EUR  ->   123,00 €
    345.3 USD ->  $ 345.30
*/

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, ...args: any[]): any {
    const currency = (args && args.length > 0)
      ? args[0].toString().toUpperCase()
      : 'EUR';

    if (value == null) {
      return '-';
    }

    switch (currency) {
      case 'USD':
        return '$ ' + value.toFixed(2);
      case 'YEN':
          return 'YEN ' + value.toFixed(2);
      case 'EUR':
      default:
        return value.toFixed(2).replace('.', ',') + ' €';
    }
  }

}
