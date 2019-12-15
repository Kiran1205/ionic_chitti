import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-ppaidhistory',
  templateUrl: './ppaidhistory.page.html',
  styleUrls: ['./ppaidhistory.page.scss'],
})
export class PpaidhistoryPage implements OnInit {

  private colors = [
    'primary',
    'secondary',
    'tertiary',
    'success',
    'warning',
    'danger',
    'medium',
    'dark'
  ];
  public items: Array<{ title: string; note: string;color:string }> = [];
  constructor(private nav:NavController,
    public menuCtrl: MenuController) {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
      });
    }
  }

  ngOnInit() {
  }

}
