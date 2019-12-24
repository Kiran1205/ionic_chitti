import { BaseHttpService } from 'src/BaseHttp.Service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class PeopleService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='people'
    }
    Delete(id : number)    :Observable<any>    {
        return this.delete(`${id}`,this.COMMON_JSON_HEADER_REQUEST);
    }
    create(data : any):Observable<any>{
        return this.post('create',data,this.COMMON_JSON_HEADER_REQUEST);
    }

    GetPeople(data : any):Observable<any> {
        return this.post('getPeople',data,this.COMMON_JSON_HEADER_REQUEST);
    }
    GetPaidHist(id : number):Observable<any> {
        return this.get('getpaidhistory\?peoplepid='+id,this.COMMON_JSON_HEADER_REQUEST);
    }
    SavePayment(data:any){
        return this.post('paymentpaid',data,this.COMMON_JSON_HEADER_REQUEST);
    }

    getPeopleList(id : number):Observable<any> {
        return this.get('getPeopleList\?chittiPID='+id,this.COMMON_JSON_HEADER_REQUEST);
    }
    
    
}