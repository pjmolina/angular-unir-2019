import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutWizardComponent } from './checkout-wizard/checkout-wizard.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: CheckoutWizardComponent },
  // { path: 'step1', component: CheckoutWizardComponent }
];

@NgModule({
  declarations: [CheckoutWizardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CheckoutModule { }
