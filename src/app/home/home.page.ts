import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private nav:NavController,
    public menuCtrl: MenuController) {

}

  ngOnInit() {
  }

  ionViewDidEnter() {
    
    this.menuCtrl.enable(true);
  }
  
}
