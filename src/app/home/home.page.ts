import { Component } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private nav:NavController) {}

  gotochitti(){
    this.nav.navigateForward('chitti');
    
  }
  GotoPeople(){
    this.nav.navigateForward('people');
  }

}
