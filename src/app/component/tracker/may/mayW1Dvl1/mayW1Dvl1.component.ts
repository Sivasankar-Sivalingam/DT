import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';


import { TrackerService } from '../../../../services/tracker.service';
import { Tracker } from '../../../../services/tracker';

import { BooleanConversionPipe } from '../../../../pipes/booleanConversion.pipe';
@Component({

    selector: 'app-mayW1Dvl1',
    templateUrl: './MayW1Dvl1.component.html',
    styleUrls: ['./MayW1Dvl1.component.css']
})
export class MayW1Dvl1Component implements OnInit{
     private trackers: Tracker[] = [];
    private errorMessage: any = '';

    constructor(
        private _router: Router,
        private _trackerservice: TrackerService
        ) {

        }
    ngOnInit(){
        this.getTracker();
    }

    getTracker(){
         console.log('into fn');
            this._trackerservice.getTracker().subscribe(
                trackers => this.trackers = trackers,
                error => this.errorMessage = <any>error);
    }
}