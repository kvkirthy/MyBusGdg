import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class BusDataAccessService {

  // observalbe for bus list
  buses: FirebaseListObservable<any>;

  // inject AngularFire service
  constructor(private firebase: AngularFire) {
    // get bus list from schedule node on the Firebase DB.
    this.buses = firebase.database.list("/schedule");
  }

  getBusList(){
    return this.buses;
  }

  saveBusData(id, expectedTimeOfArrival, delay, delayReason){
    this.buses.update(id, {
      expectedTimeOfArrival,
      delay,
      delayReason
    })
  }

}
