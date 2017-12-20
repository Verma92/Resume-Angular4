import {Component, DoCheck, Input, OnChanges, SimpleChange} from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})

export class AppComponent {
  onSearchChange(eve: Event ) {
    eve.preventDefault();
    console.log(eve.target.value);
  }
}

