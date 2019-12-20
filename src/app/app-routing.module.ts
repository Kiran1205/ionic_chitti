import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListPage } from './list/list.page';
import { PeoplePage } from './people/people.page';
import { ChittiPage } from './chitti/chitti.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { HomePage } from './home/home.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'list',component: ListPage
  },
  {
    path: 'people', component : PeoplePage    
  },
  {
    path: 'chitti',component:ChittiPage    
  },
  {
    path: 'login',component:LoginPage
    
  },
  {
    path: 'register',component:RegisterPage
  },
  {
    path: 'home',component:HomePage
  },
  {
    path: 'ppaidhistory',
    loadChildren: () => import('./ppaidhistory/ppaidhistory.module').then( m => m.PpaidhistoryPageModule)
  },
  {
    path: 'managechitti',
    loadChildren: () => import('./managechitti/managechitti.module').then( m => m.ManagechittiPageModule)
  },
  {
    path: 'payment-taken',
    loadChildren: () => import('./payment-taken/payment-taken.module').then( m => m.PaymentTakenPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./notes/notes.module').then( m => m.NotesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
