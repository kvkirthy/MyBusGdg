import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BusListComponent} from './bus-list/bus-list.component.ts';
import {BusDetailsComponent} from './bus-details/bus-details.component.ts';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', component: BusListComponent },
  { path: 'bus-details/:id', component: BusDetailsComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
