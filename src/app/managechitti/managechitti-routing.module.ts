import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagechittiPage } from './managechitti.page';

const routes: Routes = [
  {
    path: '',
    component: ManagechittiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagechittiPageRoutingModule {}
