import { Component, OnInit } from '@angular/core';
import { ChittiService } from '../services/ChittiService.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {
  chittiPID: number;
  items:any;
  constructor(private chittiService : ChittiService,
      private route: ActivatedRoute,
      private alertController: AlertController) { 
        this.route.queryParams.subscribe(params => {        
          this.chittiPID = parseInt(params["chittiPID"])});
      }

  ngOnInit() {
    this.chittiService.getChittiSchedule(this.chittiPID).subscribe((results) => {
    this.items = results;
    });
  }
  async moredetail(item){      
      const alert = await this.alertController.create({ 
        header: 'Amount details!',
        message: 'Final Amount :<strong> '+item.amount+'</strong><p>Base Amount : '+item.baseAmount+'</p><p>Auction Amount : '+item.auctionAmount+'</p>',
        buttons: [
          {
            text: 'Close',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              console.log('Confirm Cancel: blah');
            }         
          }
        ]
    });
    await alert.present();
    
  }

}
