import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Contact, Contacts,ContactName, ContactField  } from '@ionic-native/contacts';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../services/PeopleService.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  items: string[];
  name: any;
  phonenumber: any;
  chittidetails : any;
  userpid :any;
  people = {
    Name: '',
    Phonenumber:0,
    ChittiPID:'',
    CreatedBy :0,
    PeoplePID:0,
  }
  constructor(private nav:NavController,
    private contacts: Contacts,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private peopleService : PeopleService) { 

      this.route.queryParams.subscribe(params => {
       this.chittidetails = params["chitticlk"];
       console.log(this.chittidetails);
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
  }


  getItems(ev) {    
    // set val to the value of the ev target
    var val = ev.target.value;
    
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
  async AddPeople(){
    console.log("entered");
    const alert = await this.alertController.create({ 
      header:'Save Contact', 
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
                this.people.Name = alertData.name;
                this.people.Phonenumber = alertData.phonenumber;
                this.people.ChittiPID = this.chittidetails.chittiPID;
                this.people.CreatedBy = this.userpid;
                console.log(this.people);
                this.peopleService.create(this.people).subscribe((result) => {

                });
              }
          }
      ]
  });
  await alert.present();
  }

  openContacts(){  
    this.contacts.pickContact()
    .then((test : Contact) =>{
        this.name = test.displayName;
        this.phonenumber = test.phoneNumbers[0].value        
        this. presentAlert();
    });

  }
}
