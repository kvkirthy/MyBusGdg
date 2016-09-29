import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit {
  buses: FirebaseListObservable<any[]>;
  constructor(af: AngularFire){
    console.log(af);
    this.buses = af.database.list("/schedule");
  }

  busSelected(bus){
    console.log(bus);
  }

  ngOnInit() {
  }

}
