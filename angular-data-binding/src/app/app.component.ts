import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  interpolation = 'Interpolation';
  propertyBinding = 'Property binding';
  eventBinding = 'Event Binding';
  eventCount = 0;
  ngBinding = '';
  nameModel ='';

  onButtonClicked(){
    this.eventBinding = 'New event !!!!!';
    this.eventCount++;
  }  
}
