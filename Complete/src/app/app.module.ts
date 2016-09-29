import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import {routing, appRoutingProviders} from './app.routes.ts';
import { BusListComponent } from './bus-list/bus-list.component';
import { AdminComponent } from './admin/admin.component';

//Todo: move to configuration file.
  // Initialize Firebase
  export const config = {
    apiKey: "AIzaSyDR8pSPQpt15VulnWwqkww8G3UBmDkSiLY",
    authDomain: "gdg-bustracker.firebaseapp.com",
    databaseURL: "https://gdg-bustracker.firebaseio.com",
    storageBucket: "gdg-bustracker.appspot.com"
  };
 
@NgModule({
  declarations: [
    AppComponent,
    BusListComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config),
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
