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

    Create(data : any):Observable<any> {
        return this.post('create',data,this.COMMON_JSON_HEADER_REQUEST);
    }
    getChittis(id : number):Observable<any>    {
        return this.get('GetUserChitti\?userid='+id,this.COMMON_JSON_HEADER_REQUEST);
    }
    GetAdminChitti(id : number)  :Observable<any>    {
        return this.get('GetAdminChitti\?userid='+id,this.COMMON_JSON_HEADER_REQUEST);
    } 
    load(id : number)    :Observable<any>    {
        return this.get(`${id}`,this.COMMON_JSON_HEADER_REQUEST);
    }
    Delete(id : number)    :Observable<any>    {
        return this.delete(`${id}`,this.COMMON_JSON_HEADER_REQUEST);
    }
    Update(data : any):Observable<any> {
        return this.put('update',data,this.COMMON_JSON_HEADER_REQUEST);
    }      
    
}