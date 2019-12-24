import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ChittiService } from '../services/ChittiService.service';
import { HttpResponse } from '@angular/common/http';
import { CommonToast } from '../commonToastfile';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  
})
export class HomePage implements OnInit {

  public items: Array<{ id:number,name: string;  completedchitti:number }> = [];
  username : any;
  UserPID : any;
  chittisdetail : any;
  bgcolor : "#ffffff";
  constructor(private nav:NavController,
    private menuCtrl: MenuController,
    private loadingController: LoadingController,
    private chittiService : ChittiService,
    private commonToast : CommonToast,
    public alertController: AlertController
    ) {

      this.UserPID = localStorage.getItem("UserPID");
      this.username = localStorage.getItem("UserName");

    }

  ngOnInit() {
    console.log("enter");
    
  }
  onHold(){
    console.log("Holded");
  }
   async chittihomepageloading(){   
    // const loader =  await this.loadingController.create({
    //   message: 'Please wait...',
    //   spinner: 'circles',
      
    // });
    // await loader.present().then( () => {
      this.chittiService.getChittis(this.UserPID).subscribe((result) => {
        this.chittisdetail = result;       
        //loader.dismiss();
      },(error : HttpResponse<any>) => {         
            this.commonToast.presentToast(error.statusText);
            //loader.dismiss();   
      });

   // });

   }
   ionViewWillEnter(){
    this.chittihomepageloading().then();    
   }

   ionViewDidEnter() {       
    this.menuCtrl.enable(true);    
  }

  GoToNewChitti(){
    this.nav.navigateForward('chitti');
  }

  ChittiClick(item){    
    
    let navigationExtras: NavigationExtras = {
      queryParams: {          
          chitticlk: item
      } };
  
    this.nav.navigateForward('people',navigationExtras);
  }

  async presentAlert(data) {
    const alert = await this.alertController.create({
      header: data.name ,
      subHeader: 'Delete Confirmation?',
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
            handler: () => {
              this.chittiService.Delete( data.chittiPID).subscribe((result) => {
                this.chittihomepageloading();
              });
            }
        }
    ]
    });

    await alert.present();
  }
  
  unread(data){
console.log(data);
  }

  CallEdit(data: any) {
    let navigationExtras: NavigationExtras = {
      queryParams: {  
          chittiPID: data.chittiPID         
      } };
    this.nav.navigateForward('chitti',navigationExtras);
  }

 
}
