import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentTakenPage } from './payment-taken.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentTakenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentTakenPageRoutingModule {}
