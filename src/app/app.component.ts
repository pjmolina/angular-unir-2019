import { Component, OnInit } from '@angular/core';
import { TimeInfo } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Unir 0';
  suma = 0;
  valor1 = 5;
  valor2 = 7;

  user = 'Ramon';
  role = 'Gerente';

  ngOnInit() {
    this.calcularSuma();
  }

  onLogout(eventInfo: TimeInfo): void  {
    console.log('El usuario', eventInfo.name, ' hizo logout ', eventInfo.timestamp);
    if (eventInfo.role) {
      console.log('Rol:', eventInfo.role);
    }
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
}
