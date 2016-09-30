import { Component, OnInit } from '@angular/core';
import {BusDataAccessService} from '../shared/bus-data-access.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BusDataAccessService]
})
export class AdminComponent implements OnInit {

  buses: Array<any>;
  constructor(private busDataAccess: BusDataAccessService) 
  {
    this.buses = busDataAccess.getBusData()
  }

  increment(item){
       item.delay += 1;
       item.expectedTimeOfArrival = this.addMinutes(item, 1);
   }

   decrement(item){
     if(item.delay > 0){
     
      item.delay -= 1;
      item.expectedTimeOfArrival = this.deductMinutes(item, 1);
     }
   }

   addMinutes(item, minutes){
     let lTime: Date = new Date(item.expectedTimeOfArrival);
     lTime.setMinutes(lTime.getMinutes() + minutes);
     return lTime;
   }

   deductMinutes(item, minutes){
     let lTime: Date = new Date(item.expectedTimeOfArrival);
     lTime.setMinutes(lTime.getMinutes() - minutes);
     return lTime;
   }

   save(item){
    console.log(item.delayReason);
   }

  ngOnInit() {
  }

}
