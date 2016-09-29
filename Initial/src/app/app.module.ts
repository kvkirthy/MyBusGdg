import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing, appRoutingProviders }  from './app.routing';
import {BusListComponent} from './bus-list/bus-list.component';
import {AdminComponent} from './admin/admin.component.ts';
import { AppComponent } from './app.component';

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
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
