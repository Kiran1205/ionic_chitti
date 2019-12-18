import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController } from '@ionic/angular';
import { ChittiService } from '../services/ChittiService.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-chitti',
  templateUrl: './chitti.page.html',
  styleUrls: ['./chitti.page.scss'],
})
export class ChittiPage implements OnInit {

  constructor( public formBuilder: FormBuilder,
    private nav:NavController,
    public menuCtrl: MenuController,
    private loadingController:LoadingController,
    private chittiService : ChittiService) { 
      
    }

  chittiform: FormGroup;



  ngOnInit() {
    this.chittiform = this.formBuilder.group({
      Name: ['',Validators.required],
      NoOfMonths: ['',Validators.compose(
        [Validators.maxLength(2),
          Validators.minLength(2),
          Validators.pattern('[0-9]*'),Validators.required])],
      Amount : ['',Validators.required],
      Commision:['',Validators.required],
      StartDate:['',Validators.required],
      createdBy : localStorage.getItem("UserPID")
    });
  }  


  Save(){
    this.chittiService.Create(this.chittiform.value).subscribe(() => {      
      this.nav.navigateForward('home');        
    },(error : HttpResponse<any>) => {         
            
    });   
       
  }

}
