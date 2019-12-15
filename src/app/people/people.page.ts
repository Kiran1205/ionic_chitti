import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  items: string[];

  constructor(private nav:NavController) { 
    this.initializeItems() ;
  }
  initializeItems() {
    this.items = [
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
    ];
  }

  ngOnInit() {
  }
  getItems(ev) {    
    // set val to the value of the ev target
    var val = ev.target.value;
    this.initializeItems() ;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  paymenthistory(){
    this.nav.navigateForward('ppaidhistory');
  }
}
