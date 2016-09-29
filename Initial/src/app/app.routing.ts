import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component.ts';
import {BusListComponent} from './bus-list/bus-list.component.ts';
import {AdminComponent} from './admin/admin.component.ts';

const appRoutes: Routes = [
  { path: '', component: BusListComponent },
  { path: 'admin', component: AdminComponent }
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
