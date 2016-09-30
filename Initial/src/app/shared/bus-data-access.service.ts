import { Injectable } from '@angular/core';

@Injectable()
export class BusDataAccessService {

  constructor() { }

  getBusData(){
    return  [
        {
            "from": "Hyderabad",
            "to": "Bengaluru",
            "expectedTimeOfArrival": "10/02/2016  10:00",
            "scheduledTimeOfArrival": "10/02/2016  10:00",
            "delay": 0,
            "delayReason": "N/A"
        },
         {
            "from": "Hyderabad",
            "to": "Pune",
            "expectedTimeOfArrival": "10/02/2016  12:00",
            "scheduledTimeOfArrival": "10/02/2016  14:00",
            "delayInMinutes": 120,
            "delayReason": "Late start due to heavy rain"
        },
         {
            "from": "Chennai",
            "to": "Bengaluru",
            "expectedTimeOfArrival": "10/02/2016  07:00",
            "scheduledTimeOfArrival": "10/02/2016  08:00",
            "delay": 60,
            "delayReason": "Security check heldup"
        },
         {
            "from": "Pune",
            "to": "Chennai",
            "expectedTimeOfArrival": "10/02/2016  12:00",
            "scheduledTimeOfArrival": "10/02/2016  17:00",
            "delay": 300,
            "delayReason": "Heavy traffic on national highway"
        },
         {
            "from": "Hyderabad",
            "to": "Bengaluru",
            "expectedTimeOfArrival": "10/02/2016  15:00",
            "scheduledTimeOfArrival": "10/02/2016  15:00",
            "delay": 0,
            "delayReason": "N/A"
        },
         {
            "from": "Hyderabad",
            "to": "Bengaluru",
            "expectedTimeOfArrival": "10/02/2016  16:00",
            "scheduledTimeOfArrival": "10/02/2016  16:00",
            "delay": 0,
            "delayReason": "N/A"
        }];
  }

}
