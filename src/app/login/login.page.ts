import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private nav:NavController,
              public menuCtrl: MenuController) {

    }


  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log("Enter");
    this.menuCtrl.enable(false);
  }
  
  GoToHome(){
    this.nav.navigateForward("home");
  }

}
