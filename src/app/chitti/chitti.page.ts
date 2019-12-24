import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController, LoadingController, AlertController } from '@ionic/angular';
import { ChittiService } from '../services/ChittiService.service';
import { HttpResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chitti',
  templateUrl: './chitti.page.html',
  styleUrls: ['./chitti.page.scss'],
})
export class ChittiPage implements OnInit {
  chittiPID = 0;
  chitti: any;;

  constructor( public formBuilder: FormBuilder,
    private nav:NavController,
    public menuCtrl: MenuController,
    private loadingController:LoadingController,
    private chittiService : ChittiService,
      private route: ActivatedRoute) { 
       
      this.route.queryParams.subscribe(params => {        
        this.chittiPID = parseInt(params["chittiPID"]);        
        if(isNaN(this.chittiPID))
        {
         this.chittiPID = 0;
        }
     });
    }

  chittiform: FormGroup;



  ngOnInit() {
    this.chittiform = this.formBuilder.group({
      chittiPID:0,
      Name: ['',Validators.required],
      NoOfMonths: ['',Validators.compose(
        [Validators.maxLength(2),
          Validators.minLength(2),
          Validators.pattern('[0-9]*'),Validators.required])],
      Amount :['',Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
      Commission:['',Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
      StartDate:['',Validators.required],
      createdBy : localStorage.getItem("UserPID")
    });
    this.chittiService.load(this.chittiPID).subscribe((result) => {
      this.chitti = result;
      this.LoadData();
      });
    
  }
  
  LoadData(){   
    this.chittiform = this.formBuilder.group({
      chittiPID:this.chitti.chittiPID,
      Name: [this.chitti.name,Validators.required],
      NoOfMonths: [this.chitti.noOfMonths,Validators.compose(
        [Validators.maxLength(2),
          Validators.minLength(2),
          Validators.pattern('[0-9]*'),Validators.required])],
      Amount :[this.chitti.amount,Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
      Commission:[this.chitti.commission,Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
      StartDate:[this.chitti.startDate,Validators.required],
      createdBy : localStorage.getItem("UserPID"),
      CreatedOn : this.chitti.createdOn
    });
   
  }
  

  Save(){
   if(this.chitti.chittiPID > 0){
    this.chittiService.Update(this.chittiform.value).subscribe(() => {      
      this.nav.navigateForward('managechitti');        
    },(error : HttpResponse<any>) => {         
            
    });  
   }
   else{
        this.chittiService.Create(this.chittiform.value).subscribe(() => {      
          this.nav.navigateForward('home');        
        },(error : HttpResponse<any>) => {         
                
        });  
  }
       
       
  }

}
