import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaymentTakenPageRoutingModule } from './payment-taken-routing.module';
import { PaymentTakenPage } from './payment-taken.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PaymentTakenPageRoutingModule
  ],
  declarations: [PaymentTakenPage]
})
export class PaymentTakenPageModule {}
