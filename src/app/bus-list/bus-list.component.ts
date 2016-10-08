import { Component, OnInit } from '@angular/core';
import { BusDataAccessService } from '../shared/bus-data-access.service';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  buses: any;
  constructor(dataService: BusDataAccessService){
    this.buses = dataService.getBusList();
  }

  busSelected(bus){
    console.log(bus);
  }

  ngOnInit() {
  }

}
