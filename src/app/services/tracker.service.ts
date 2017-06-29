import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Router } from '@angular/router'
import { Tracker }   from './tracker';


@Injectable()
export class TrackerService {
    constructor(private http: Http, private _router: Router) {}
    
    private trackerUrl = 'http://localhost:3000/deploymenttracks';
 
    /*getTracker() : Observable<Tracker[]> {

         // ...using get request
         return this.http.get(this.trackerUrl)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }*/

     getTracker() : Observable<Tracker[]> {
         return this.http.get(this.trackerUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
    private extractData(res:Response) {
        let body = res.json();
        return body || [];
    }

    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}