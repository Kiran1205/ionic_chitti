import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PpaidhistoryPage } from './ppaidhistory.page';

const routes: Routes = [
  {
    path: '',
    component: PpaidhistoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PpaidhistoryPageRoutingModule {}
