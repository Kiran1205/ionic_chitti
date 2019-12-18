import { BaseHttpService } from 'src/BaseHttp.Service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ChittiService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='chitti'
    }  

    login(data : any):Observable<any> {
        return this.post('authenticate',data,this.COMMON_JSON_HEADER_REQUEST);
    }
    getChittis(id : number)    {
        return this.get(`${id}`,this.COMMON_JSON_HEADER_REQUEST);
    }   
    
}