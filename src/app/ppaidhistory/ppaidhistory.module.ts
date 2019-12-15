import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PpaidhistoryPageRoutingModule } from './ppaidhistory-routing.module';

import { PpaidhistoryPage } from './ppaidhistory.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PpaidhistoryPageRoutingModule
  ],
  declarations: [PpaidhistoryPage]
})
export class PpaidhistoryPageModule {}
