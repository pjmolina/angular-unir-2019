import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlaceDetailComponent } from './places/place-detail/place-detail.component';


export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'places/:id', component: PlaceDetailComponent},
  { path: 'pagar', loadChildren: './checkout/checkout.module#CheckoutModule'},
  { path: '**', component: ErrorComponent }
];

export const Routing = RouterModule.forRoot(routes,
  {} // { enableTracing: true }
);

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
