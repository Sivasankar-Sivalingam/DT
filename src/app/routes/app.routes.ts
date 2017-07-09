import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Common Modules
import { PageNotFoundComponent} from '../component/pageNotFound/pageNotFound.component';
import { LoginComponent } from '../component/login/login.component';
import { TrackerComponent } from '../component/tracker/tracker.component';

// login-auth
import { LoginAuthGuard } from '../login-auth.guard';

// tracker dates
import { JanComponent } from '../component/tracker/jan/jan.component';
import { FebComponent } from '../component/tracker/feb/feb.component';
import { MarComponent } from '../component/tracker/mar/mar.component';
import { AprComponent } from '../component/tracker/apr/apr.component';
import { MayComponent } from '../component/tracker/may/may.component';

// tracker tables

import { MayW1Dvl1Component } from '../component/tracker/may/mayW1Dvl1/mayW1Dvl1.component';
import { MayW1Dvl2Component } from '../component/tracker/may/mayW1Dvl2/mayW1Dvl2.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'Login', component: LoginComponent },
    { path: 'Tracker',
      canActivate:[LoginAuthGuard],
      component: TrackerComponent,
      children: [
        {
            path: 'May', component: MayComponent, 
            children: [
            { path: 'W1Dvl1', component: MayW1Dvl1Component },
            { path: 'W1Dvl2', component: MayW1Dvl2Component }
            ]
        },
        { path: 'January', component: JanComponent },
        { path: 'February', component: FebComponent },
        { path: 'March', component: MarComponent },
        { path: 'April', component: AprComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
