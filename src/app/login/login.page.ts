import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController, AlertController, LoadingController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../services/UserService.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public formBuilder: FormBuilder,
               private nav:NavController,
               public menuCtrl: MenuController,
               public userservice : UserService,
               public toastController: ToastController,
               public alertController: AlertController,
               private loadingController: LoadingController) {
               
    }

  loginform: FormGroup;
  
  ngOnInit() {
    this.loginform = this.formBuilder.group({          
      phonenumber: ['',Validators.compose(
        [Validators.maxLength(10),
          Validators.minLength(10),
          Validators.pattern('[0-9]*'),Validators.required])],
      password : ['',Validators.compose([Validators.minLength(6),Validators.required])]    
    });
  }


  ionViewDidEnter() {  
    localStorage.clear();  
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);
  }

  async presentToast(data) {
    const toast = await this.toastController.create({
      message: data,
      duration: 2000
    });
    toast.present();
  }

  async GoToHome(){
        if(!this.loginform.valid)
        return;
        
        const loader =  await this.loadingController.create({
          message: 'Please wait...',
          spinner: 'circles',
          
        });
        await loader.present().then( () => {
          this.userservice.login(this.loginform.value).subscribe((result : any ) =>{ 
           
            localStorage.setItem("UserPID", result.userPID);
            localStorage.setItem("UserName", result.name);
    
            this.nav.navigateForward("home");     
            loader.dismiss();
          },(error : HttpResponse<any>) => {         
            this.presentAlert(JSON.stringify(error));
                loader.dismiss();   
          });
    
        });
  }
  async presentAlert(error) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: error,     
      buttons: ['OK']
    });
    await alert.present();
  }

  gotoregister(){
    this.nav.navigateForward("register");
  }
}
