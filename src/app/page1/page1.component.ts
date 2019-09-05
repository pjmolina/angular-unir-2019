import { Component, OnInit } from '@angular/core';
import { TimeInfo } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  valor1 = 5;
  valor2 = 7;

  m1 = 2.71;
  m2 = 1.16;
  m3 = 42.0;

  user = 'Ramon';
  role = 'Gerente';

  suma = 0;

  constructor() { }

  ngOnInit() {
  }


  valorCambio1(value: number): void {
    // this.valor1 = value;
    this.calcularSuma();
  }
  valorCambio2(value: number): void {
    // this.valor2 = value;
    this.calcularSuma();
  }
  calcularSuma() {
    this.suma = this.valor1 + this.valor2;
  }


  onLogout(eventInfo: TimeInfo): void {
    // this.logger.log('El usuario' + eventInfo.name + ' hizo logout ' + eventInfo.timestamp);
    if (eventInfo.role) {
      // this.logger.log('Rol:' + eventInfo.role);
    }
  }

}
