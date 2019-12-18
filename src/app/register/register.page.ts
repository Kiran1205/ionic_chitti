import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, ToastController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/UserService.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( public formBuilder: FormBuilder,
    private nav:NavController,
    public menuCtrl: MenuController,
    public userservice : UserService,
    public toastController: ToastController) { 
      
    }

    registerform: FormGroup;

    ngOnInit() {
      this.registerform = this.formBuilder.group({
        Name: ['',Validators.compose([Validators.minLength(5),Validators.required])],
        phonenumber: ['',Validators.compose(
          [Validators.maxLength(10),
            Validators.minLength(10),
            Validators.pattern('[0-9]*'),Validators.required])],
        password : ['',Validators.compose([Validators.minLength(6),Validators.required])]
      });
    }
    
    async presentToast() {
      const toast = await this.toastController.create({
        message: 'Unabe to Process request',
        duration: 2000
      });
      toast.present();
    }

    onRegister(){
      this.userservice.create(this.registerform.value).subscribe((result : any ) =>{       
         localStorage.clear();
         localStorage.setItem("UserPID", result.userPID);
         localStorage.setItem("UserName", result.name);
        this.nav.navigateForward('home');
      },(error : HttpResponse<any>) => {         
            this.presentToast();          
      });
    }

  ionViewDidEnter() { 
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);
  }

}






