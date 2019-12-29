import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PeoplePage } from './people/people.page';
import { ChittiPage } from './chitti/chitti.page';
import { LoginPage } from './login/login.page';
import { RegisterPage } from './register/register.page';
import { HomePage } from './home/home.page';
import { PpaidhistoryPage } from './ppaidhistory/ppaidhistory.page';
import { ScheduleComponent } from './schedule/schedule.component';
import { NotesPage } from './notes/notes.page';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
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
    path: 'ppaidhistory',component:PpaidhistoryPage
  }, 
  {
    path:'schedule',component:ScheduleComponent
  },
  {
    path: 'payment-taken',
    loadChildren: () => import('./payment-taken/payment-taken.module').then( m => m.PaymentTakenPageModule)
  },
  {
    path: 'notes',component:NotesPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
