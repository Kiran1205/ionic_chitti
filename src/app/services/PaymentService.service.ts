import { BaseHttpService } from 'src/BaseHttp.Service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class PaymentService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='payment'
    }

    GetPaidHist(id : number):Observable<any> {
        return this.get('getpaidhistory\?peoplepid='+id,this.COMMON_JSON_HEADER_REQUEST);
    }
    SavePayment(data:any){
        return this.post('paymentpaid',data,this.COMMON_JSON_HEADER_REQUEST);
    }
    GetPaymentTaken(id : number):Observable<any> {
        return this.get('getpaymenttaken\?chittiPID='+id,this.COMMON_JSON_HEADER_REQUEST);
    }   
    SavePaymentTaken(data:any){
        return this.post('savepaymenttaken',data,this.COMMON_JSON_HEADER_REQUEST);
    } 
    
}