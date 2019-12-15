import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public items: Array<{ id:number,name: string; pendinngchitti: number; completedchitti:number }> = [];
  
  constructor(private nav:NavController,
    public menuCtrl: MenuController) {

      for (let i = 1; i < 5; i++) {
        this.items.push({
          name: 'Item ' + i,
          pendinngchitti:i,
          completedchitti:  20-i,
          id : i
        });
      }

}

  ngOnInit() {
  }

  ionViewDidEnter() {    
    this.menuCtrl.enable(true);
  }

  GoToNewChitti(){
    this.nav.navigateForward('chitti');
  }

  ChittiClick(data){
    
    this.nav.navigateForward('people');
  }
  
}
