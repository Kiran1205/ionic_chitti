import { Component, OnInit } from '@angular/core';
import { NavController, MenuController, ToastController } from '@ionic/angular';
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
               public toastController: ToastController
               ) {
               
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

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'login failed,please try again.',
      duration: 2000
    });
    toast.present();
  }
  
  GoToHome(){

        if(!this.loginform.valid)
        return;
        
        this.userservice.login(this.loginform.value).subscribe((result : any ) =>{      
          

          localStorage.setItem("UserPID", result.userPID);
          localStorage.setItem("UserName", result.name);

          this.nav.navigateForward("home");
        
      },() => {      
               this.presentToast();
      });

    
  }

  gotoregister(){
    this.nav.navigateForward("register");
  }
}
