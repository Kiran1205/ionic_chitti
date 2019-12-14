import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( public formBuilder: FormBuilder,
               private nav:NavController,
               public menuCtrl: MenuController,
               ) {
               
    }

  loginform: FormGroup;
  ngOnInit() {
    this.loginform = this.formBuilder.group({     
      phonenumber: ['8884684500',Validators.required],
      password : ['kiran@1234',Validators.required]
    });
  }


  ionViewDidEnter() {
    console.log("Enter");
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);
  }
  
  GoToHome(){
    this.nav.navigateForward("home");
  }

  gotoregister(){
    this.nav.navigateForward("register");
  }
}
