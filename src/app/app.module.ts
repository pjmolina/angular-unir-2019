import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routing } from './app-routing.module';
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
import { HttpClientModule } from '@angular/common/http';
import { PlaceComponent } from './places/place/place.component';
import { PlaceListComponent } from './places/place-list/place-list.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';
import { CheckoutModule } from './checkout/checkout.module';

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
    UnlessDirective,
    PlaceComponent,
    PlaceListComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    ErrorComponent,
    WelcomeComponent,
    PlaceDetailComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    Routing
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
