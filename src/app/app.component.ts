import { Component } from '@angular/core';
import { TimeInfo } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Unir 0';

  onLogout(eventInfo: TimeInfo): void  {
    console.log('El usuario', eventInfo.name, ' hizo logout ', eventInfo.timestamp);
    if (eventInfo.role) {
      console.log('Rol:', eventInfo.role);
    }
  }
}
