import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bus-details',
  templateUrl: './bus-details.component.html',
  styleUrls: ['./bus-details.component.css']
})
export class BusDetailsComponent implements OnInit {

  constructor(route: ActivatedRoute, private firebase: AngularFire) {
      const list = firebase.database.list('',{
        query: {
          orderByChild: 'busId',
          equalTo: 'A2F001'
        }
      });
      list.forEach(element => {
        console.log(element)
      });
   }

  ngOnInit() {
  }

}
