import {Injectable} from '@angular/core'
import {CookieService} from 'angular2-cookie/services'

@Injectable()
export class CookieManager{

    constructor(private _cookie:CookieService){

    }

    public GetCookie(key:string){
        return this._cookie.get(key);
    }

    public SetCookie(key:string, value:any){
        this._cookie.put(key,value);
        
    }

    public ResetCookies(){
        this._cookie.removeAll();
    }
}