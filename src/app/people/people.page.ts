import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Contact, Contacts,ContactName, ContactField  } from '@ionic-native/contacts';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { PeopleService } from '../services/PeopleService.service';
import { HttpResponse } from '@angular/common/http';
import { CommonToast } from '../commonToastfile';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  peoplelist: any;
  name: any;
  phonenumber: any;
  chittidetails : any;
  userpid :any;
  people = {
    name: '',
    phonenumber:0,
    chittiPID:'',
    createdBy :0,
    peoplePID:0,
  }
  items: any;
  constructor(private nav:NavController,
    private contacts: Contacts,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private peopleService : PeopleService,
    private commonToast : CommonToast ){ 

      this.route.queryParams.subscribe(params => {
       this.chittidetails = params["chitticlk"]; 
            
    });
    this.userpid =  localStorage.getItem("UserPID");
    
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: this.name,
      message: this.phonenumber,
      buttons: ['OK']
    });

    await alert.present();
  } 

  ngOnInit() {
    this.getPeopleList();       
  }


   getItems(ev) {    
  // set val to the value of the ev target
    var val = ev.target.value;
    this.items = this.peoplelist;
  // if the value is an empty string don't filter the items
   if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
    })
    }
   }

  paymenthistory(peoplePID){   
    let navigationExtras: NavigationExtras = {
      queryParams: {          
          PeoplePID: peoplePID,
          chittiPID: this.chittidetails.chittiPID,
          rolePID : this.chittidetails.rolePid
      } };
    this.nav.navigateForward('ppaidhistory',navigationExtras);
  }

  async AddPeople(){    
    const alert = await this.alertController.create({ 
      header:'Add People', 
      inputs: [
          {
              name: 'name',
              type: 'text',
              placeholder: 'Name'
          },
          {
            name: 'phonenumber',
            type: 'number',
            placeholder: 'Phone number'
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
                this.people.name = alertData.name;
                this.people.phonenumber = alertData.phonenumber;
                this.people.chittiPID = this.chittidetails.chittiPID;
                this.people.createdBy = this.userpid;
              
                this.peopleService.create(this.people).subscribe((result) => {
                  this.getPeopleList();
                },(error : HttpResponse<any>) => {         
                  this.commonToast.presentToast(error.statusText);          
            });
              }
          }
      ]
  });
  await alert.present();
  }

  gotoPaymenttaken(){
    let navigationExtras: NavigationExtras = {
      queryParams: {  
          chittiPID: this.chittidetails.chittiPID,
          rolePID : this.chittidetails.rolePid
      } };
    this.nav.navigateForward('payment-taken',navigationExtras);
  }

  getPeopleList(){
    this.peopleService.GetPeople(this.chittidetails).subscribe((result) =>{      
      this.peoplelist = result;
      this.items = this.peoplelist; 
    },(error : HttpResponse<any>) => {         
      this.commonToast.presentToast(error.statusText);          
      });
  }

  openContacts(){  
    this.contacts.pickContact()
    .then((test : Contact) =>{
        this.name = test.displayName;
        let phone = test.phoneNumbers[0].value;
        if(phone.slice(0,1)=='+' || phone.slice(0,1)=='0'){
          this.phonenumber=phone.replace(/[^a-zA-Z0-9+]/g, "");
      }
      else {
          this.phonenumber=phone.replace(/[^a-zA-Z0-9]/g, "");         
      }        
        this. presentAlert();
    });
  }
}
