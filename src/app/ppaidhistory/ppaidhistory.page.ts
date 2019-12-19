import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, AlertController } from '@ionic/angular';
import { PeopleService } from '../services/PeopleService.service';
import { ActivatedRoute } from '@angular/router';
import { PaymentPaid } from './PaymentPaid';

@Component({
  selector: 'app-ppaidhistory',
  templateUrl: './ppaidhistory.page.html',
  styleUrls: ['./ppaidhistory.page.scss'],
})
export class PpaidhistoryPage implements OnInit {

  peoplePID : any;
  userpid: number;
  paidhistory: any;
  chittiPID: any;
  rolePID: any;
  
  constructor(private nav:NavController,
    public menuCtrl: MenuController,
    private peopleservice : PeopleService,
    private route: ActivatedRoute,
    private alertController: AlertController) {

      this.route.queryParams.subscribe(params => {
       
        this.peoplePID = parseInt (params["PeoplePID"]);  
        this.chittiPID =parseInt ( params["chittiPID"]); 
        this.rolePID  = parseInt (params["rolePID"]);  
     });
     this.userpid =  parseInt (localStorage.getItem("UserPID"));
    
  }
  async AddPayment(){    
    const alert = await this.alertController.create({ 
      header:'Payement Details', 
      inputs: [
          {
              name: 'Amount',
              type: 'number',
              placeholder: 'Amount'
          },
          {
            name: 'Comments',
            type: 'text',
            placeholder: 'comment'
          },
          {
            name: 'Date',
            type: 'date',
            placeholder: 'Payment Date'
          }
      ],
      buttons: [
          {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                  console.log('Confirm Cancel');
              }
          }, {
              text: 'Ok',
              handler: (alertData) => {
               console.log(alertData);
               const paymentpaid = new PaymentPaid();
                paymentpaid.Comments = alertData.Comments;
                paymentpaid.PaidAmount = alertData.Amount;
                paymentpaid.PeoplePID =  this.peoplePID;
                paymentpaid.PaidDate = alertData.Date;
                paymentpaid.ChittiPID = this.chittiPID;
               paymentpaid.CreatedBy = this.userpid;
                paymentpaid.NotificationTypePID = this.rolePID  ==1 ? 1:2; 
                this.peopleservice.SavePayment(paymentpaid).subscribe( () => {
                  this.peopleservice.GetPaidHist(this.peoplePID).subscribe((result) => {
                    this.paidhistory = result;
                  });
                });
              }
          }
      ]
  });
  await alert.present();
  }

  ngOnInit() {
    this.peopleservice.GetPaidHist(this.peoplePID).subscribe((result) => {
      this.paidhistory = result;
    });
  }

}
