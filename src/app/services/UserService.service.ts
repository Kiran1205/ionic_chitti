import { BaseHttpService } from 'src/BaseHttp.Service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService extends BaseHttpService{

    constructor(private httpClient : HttpClient){
        super(httpClient);
        this.baseRoute ='user'
    }

    create(data : any):Observable<any>    {
        return this.post('create',data,this.COMMON_JSON_HEADER_REQUEST);
    }
    
    
}