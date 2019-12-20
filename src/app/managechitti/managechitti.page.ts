import { Component, OnInit } from '@angular/core';
import { ChittiService } from '../services/ChittiService.service';

@Component({
  selector: 'app-managechitti',
  templateUrl: './managechitti.page.html',
  styleUrls: ['./managechitti.page.scss'],
})
export class ManagechittiPage implements OnInit {

  chittilist : any;
  userpid: number;
  constructor(private chittiservice : ChittiService) {
    this.userpid = parseInt(localStorage.getItem("UserPID"));
   }

  ngOnInit() {
    this.chittiservice.GetAdminChitti( this.userpid).subscribe((result) => {
      this.chittilist = result;
    });
  }

  getEndDate(data,number){    
    console.log(data);
  }

}
