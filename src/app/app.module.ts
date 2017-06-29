import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Cookie Service
import { CookieService } from 'angular2-cookie/services'


//infra
import { AppComponent } from './app.component';
import { routing } from './routes/app.routes';
import { CookieManager } from './services/cookie.service';
import { TrackerService } from './services/tracker.service';

// PageNotFound and header and footer components
import { PageNotFoundComponent} from './component/pageNotFound/pageNotFound.component';
import { HeaderComponent} from './component/header/header.component';
import { FooterComponent} from './component/footer/footer.component';

// login component
import { LoginComponent } from './component/login/login.component';
import { TrackerComponent } from './component/tracker/tracker.component';


//tracker dates
import { JanComponent } from './component/tracker/jan/jan.component'
import { FebComponent } from './component/tracker/feb/feb.component'
import { MarComponent } from './component/tracker/mar/mar.component'
import { AprComponent } from './component/tracker/apr/apr.component'
import { MayComponent } from './component/tracker/may/may.component'

// tracker tables

import { MayW1Dvl1Component } from './component/tracker/may/mayW1Dvl1/mayW1Dvl1.component'
import { MayW1Dvl2Component } from './component/tracker/may/mayW1Dvl2/mayW1Dvl2.component'
// pipes
import { BooleanConversionPipe } from './pipes/booleanConversion.pipe';




@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent, HeaderComponent, FooterComponent,
    LoginComponent, TrackerComponent, 
    JanComponent, FebComponent, MarComponent, AprComponent, MayComponent,
    MayW1Dvl1Component, MayW1Dvl2Component,
    BooleanConversionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routing
  ],
  providers: [TrackerService, CookieService, CookieManager],
  bootstrap: [AppComponent],
})
export class AppModule { }
