import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManagechittiPageRoutingModule } from './managechitti-routing.module';

import { ManagechittiPage } from './managechitti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManagechittiPageRoutingModule
  ],
  declarations: [ManagechittiPage]
})
export class ManagechittiPageModule {}
