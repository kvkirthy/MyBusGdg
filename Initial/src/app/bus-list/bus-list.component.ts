import { Component, OnInit } from '@angular/core';
import {BusDataAccessService} from '../shared/bus-data-access.service'

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css'],
  providers: [BusDataAccessService]
})
export class BusListComponent implements OnInit {

  buses: Array<any>;
  constructor(private busDataAccess: BusDataAccessService) 
  {
    this.buses = busDataAccess.getBusData()
   }

  ngOnInit() {
  }

}
