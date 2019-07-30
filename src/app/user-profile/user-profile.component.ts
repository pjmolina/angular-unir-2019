import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export interface TimeInfo {
  timestamp: number;
  name: string;
  role?: string;
}



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  @Input() name: string;
  @Input() role: string;
  @Output() logout = new EventEmitter<TimeInfo>();
  @Output() countrySelected = new EventEmitter<string>();

  paises: string[] = [
    'Bolivia',
    'España',
    'Mexico',
    'Colombia'
  ];

  paisSeleccionado: string = null;

  selectCountry(pais: string): void {
    console.log('Selecciono:', pais);
    this.countrySelected.emit(pais);
    this.paisSeleccionado = pais;
  }

  ngOnInit() {
    console.log('ngOnInit');

    // this.service.getCities();  // 1 seg 10 seg 30 seg
  }

  clickEnLogout() {
    console.log('el usuario hizo click');

    this.logout.emit({
      timestamp: Date.now(),
      name: this.name,
      role: this.role
    });
  }

}
