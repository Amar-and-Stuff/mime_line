import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  name: String = "longeeeeeeeeeeeest event name";
  barlength = this.name.length;

  getBarConatinerStyle() {
    const barWidthPercent = this.barlength*10;
    return {
      'bar-container': true,
      'bar-container-width': true,
      'bar-container-width-dynamic': true,
      ['bar-container-width-dynamic--'+barWidthPercent]: true
    };
  }
}
