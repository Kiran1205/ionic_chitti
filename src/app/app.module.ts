import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListPage } from './list/list.page';
import { ChittiPage } from './chitti/chitti.page';
import { PeoplePage } from './people/people.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPage } from './register/register.page';
import { LoginPage } from './login/login.page';
import { HomePage } from './home/home.page';


@NgModule({
  declarations: [AppComponent,
    ListPage,
    ChittiPage,
    PeoplePage,
    LoginPage,
    RegisterPage,
    HomePage
    ],
  entryComponents: [],
  imports: [
    BrowserModule,
    FormsModule, 
    ReactiveFormsModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
