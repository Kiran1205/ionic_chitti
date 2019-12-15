import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Contact, Contacts,ContactName, ContactField  } from '@ionic-native/contacts';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {
  items: string[];
  name: any;
  phonenumber: any;

  constructor(private nav:NavController,
    private contacts: Contacts,
    public alertController: AlertController) { 
    this.initializeItems() ;
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
  openContacts(){
    console.log("test");
    this.contacts.pickContact()
    .then((test : Contact) =>{
        this.name = test.displayName;
        this.phonenumber = test.phoneNumbers[0].value        
       this. presentAlert();
    });

  }
}
