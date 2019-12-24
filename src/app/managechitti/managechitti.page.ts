import { Component, OnInit } from '@angular/core';
import { ChittiService } from '../services/ChittiService.service';
import { ActionSheetController, NavController, AlertController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-managechitti',
  templateUrl: './managechitti.page.html',
  styleUrls: ['./managechitti.page.scss'],
})
export class ManagechittiPage implements OnInit {

  chittilist : any;
  userpid: number;
  constructor(private chittiservice : ChittiService,
    public actionSheetController: ActionSheetController,
    private nav:NavController,
    public alertController: AlertController,) {
      
    this.userpid = parseInt(localStorage.getItem("UserPID"));
   }

  


  LoadData(){
    this.chittiservice.GetAdminChitti( this.userpid).subscribe((result) => {
      this.chittilist = result;
    });
  }
  ngOnInit() {
    
  } 

  ionViewDidEnter() {  
    this.LoadData();
  }

}

  
