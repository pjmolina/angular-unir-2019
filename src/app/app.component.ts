import { Component, OnInit } from '@angular/core';
import { TimeInfo } from './user-profile/user-profile.component';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    // LoggerService   //   LoggerService  --->  LoggerService
    { provide: LoggerService, useClass: Logger2Service }  //   LoggerService  --->  Logger2Service
  ]
})
export class AppComponent implements OnInit {
  title = 'Unir 0';
  suma = 0;
  valor1 = 5;
  valor2 = 7;

  m1 = 2.71;
  m2 = 1.16;
  m3 = 42.0;

  user = 'Ramon';
  role = 'Gerente';


  constructor(private logger: LoggerService) {
  }

  ngOnInit() {
    this.calcularSuma();
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
