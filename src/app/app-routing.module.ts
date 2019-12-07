import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { ListPage } from './list/list.page';
import { PeoplePage } from './people/people.page';
import { ChittiPage } from './chitti/chitti.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',component:HomePage
  },
  {
    path: 'list',component: ListPage
  },
  {
    path: 'people', component : PeoplePage    
  },
  {
    path: 'chitti',component:ChittiPage    
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
