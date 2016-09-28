import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

  // Initialize Firebase
  export const config = {
    apiKey: "AIzaSyDR8pSPQpt15VulnWwqkww8G3UBmDkSiLY",
    authDomain: "gdg-bustracker.firebaseapp.com",
    databaseURL: "https://gdg-bustracker.firebaseio.com",
    storageBucket: "gdg-bustracker.appspot.com"
  };

  // ,
  //   messagingSenderId: "161634435204"
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
