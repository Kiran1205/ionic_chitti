import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( public formBuilder: FormBuilder,
    private nav:NavController,
    public menuCtrl: MenuController) { 
      
    }

    registerform: FormGroup;

    ngOnInit() {
      this.registerform = this.formBuilder.group({
        Name: ['',Validators.required],
        phonenumber: ['',Validators.required],
        password : ['',Validators.required]
      });
    }


  ionViewDidEnter() {
 
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);
  }

}






