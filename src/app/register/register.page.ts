import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
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
    public userservice : UserService) { 
      
    }

    registerform: FormGroup;

    ngOnInit() {
      this.registerform = this.formBuilder.group({
        Name: ['',Validators.required],
        phonenumber: ['',Validators.required],
        password : ['',Validators.required]
      });
    }

    onRegister(){
      this.userservice.create(this.registerform.value).subscribe((result : any ) =>{       
        alert("Please  login to access your account");        
        
      },(error : HttpResponse<any>) => {         
            console.log("Unabe to Process request");          
      });
    }

  ionViewDidEnter() {
 
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeGesture(false);
  }

}






