import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CounterComponent } from './counter/counter.component';
import { LoggerService } from './services/logger.service';
import { Logger2Service } from './services/logger2.service';
import { ListCityComponent } from './list-city/list-city.component';
import { CityComponent } from './city/city.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { StartWithPipe } from './pipes/start-with.pipe';
import { ResaltaDirective } from './directives/resalta.directive';
import { UnlessDirective } from './directives/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    CounterComponent,
    ListCityComponent,
    CityComponent,
    CurrencyPipe,
    StartWithPipe,
    ResaltaDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    AppComponent,
    UserProfileComponent
  ],
  providers: [
    LoggerService
    // { provide: LoggerService, useClass: Logger2Service }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
