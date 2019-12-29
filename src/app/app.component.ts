import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  username : any;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },    
    {
      title :'Notes',
      url: '/notes',
      icon: 'clipboard'
    },   
    {
      title: 'Logout',
      url: '/login',
      icon: 'person'
    }
       
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.username = localStorage.getItem('UserName');
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
