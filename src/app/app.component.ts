import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buses: FirebaseListObservable<any[]>;;
  constructor(af: AngularFire){
    console.log(af);
    this.buses = af.database.list("/");

    //console.log(this.buses);
  }

  title = 'app works!';
}
