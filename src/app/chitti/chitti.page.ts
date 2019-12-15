import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-chitti',
  templateUrl: './chitti.page.html',
  styleUrls: ['./chitti.page.scss'],
})
export class ChittiPage implements OnInit {

  constructor( public formBuilder: FormBuilder,
    private nav:NavController,
    public menuCtrl: MenuController) { 
      
    }

  chittiform: FormGroup;



  ngOnInit() {
    this.chittiform = this.formBuilder.group({
      Name: ['',Validators.required],
      NoOfMonths: ['',Validators.required],
      Amount : ['',Validators.required],
      Commision:['',Validators.required],
      StartDate:['',Validators.required]
    });
  }

  ionViewWillEnter() {
    this.menuCtrl.enable(true);
}

}
