import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListPage } from './list/list.page';
import { HomePage } from './home/home.page';
import { ChittiPage } from './chitti/chitti.page';
import { PeoplePage } from './people/people.page';

@NgModule({
  declarations: [AppComponent,
    HomePage,
    ListPage,
    ChittiPage,
    PeoplePage],
  entryComponents: [HomePage,
    ListPage,
    ChittiPage,
    PeoplePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent,HomePage,ListPage]
})
export class AppModule {}
