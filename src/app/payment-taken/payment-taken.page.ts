import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeopleService } from '../services/PeopleService.service';
import { removeSummaryDuplicates } from '@angular/compiler';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../services/PaymentService.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-taken',
  templateUrl: './payment-taken.page.html',
  styleUrls: ['./payment-taken.page.scss'],
})
export class PaymentTakenPage implements OnInit {
  chittiPID: any;
  peoplelist:any;
  paymentTaken : any;
  paymentTakenform: FormGroup;
  totalpeople : any;
  constructor(private nav:NavController,
      private route: ActivatedRoute,
      private peopleService : PeopleService,
      public formBuilder: FormBuilder,
      private paymentservice : PaymentService) {
      
      this.route.queryParams.subscribe(params => {
        this.chittiPID = parseInt(params["chittiPID"]);       
     });

     }

  ngOnInit() {
    this.peopleService.getPeopleList(this.chittiPID).subscribe((result) => {
    this.peoplelist = result;
    });
    this.paymentservice.GetPaymentTaken(this.chittiPID).subscribe((result) => {
      this.paymentTaken = result;
      this.loadData();
      });
      this.paymentTakenform = this.formBuilder.group({
        peoplePID: [,Validators.required],
        chittiPID: [this.chittiPID],
        monthDate:[,Validators.required],
        amount:[,Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
        amountByPeople:[,Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
        auctionAmount:[],
        basicAmount:[,Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
        monthNumber:[],
        commissionAmount:[],
        createdBy : parseInt(localStorage.getItem("UserPID"))
      });   
  }
  loadData() {
  this.totalpeople = (this.paymentTaken.amount+this.paymentTaken.commissionAmount)/this.paymentTaken.amountByPeople; 
  this.paymentTakenform = this.formBuilder.group({
    peoplePID: [,Validators.required],
    chittiPID: [this.chittiPID],
    monthDate:[this.paymentTaken.monthDate,Validators.required],
    amount:[this.paymentTaken.amount,Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
    amountByPeople:[this.paymentTaken.amountByPeople,Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
    auctionAmount:[0],
    basicAmount:[this.paymentTaken.basicAmount,Validators.compose([Validators.pattern('[0-9]*'),Validators.required])],
    monthNumber:[this.paymentTaken.monthNumber],
    commissionAmount :[this.paymentTaken.commissionAmount],
    createdBy : parseInt(localStorage.getItem("UserPID"))
  });
}
onChangeAmount(data){
  console.log(data);
  this.paymentTakenform.patchValue({amount: this.paymentTaken.amount - data,
    amountByPeople: (this.paymentTaken.amount + this.paymentTaken.commissionAmount- data)/this.totalpeople}); 
}
Save(){
  console.log(this.paymentTakenform.value);
  this.paymentservice.SavePaymentTaken(this.paymentTakenform.value).subscribe(() => {
    this.nav.navigateBack('home');
  });
}

   Currentmonth(): number {
		return this.paymentTakenform.value['monthNumber'];
	}

}
