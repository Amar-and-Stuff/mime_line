import { Component } from '@angular/core';

@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css']
})
export class EventContainerComponent {
  events: number[][] = [
    [1, 10],
    [12, 18],
    [16, 23],
    [4, 9],
    [7, 12],
    [13, 15],
    [24, 28],
    [22, 25],
    [5, 8],
  ];

  orderedNumberEvent: number[][] = new Array();
  orderedEvents: String[][][] = new Array();

  constructor() {
    this.adjustEventEnds();
    this.getOrderedEvents();
  }

  adjustEventEnds() {
    for(let i = 0; i < this.events.length; i++) {
      this.events[i][1] += 1;
    }
    console.log(this.events)
  }

  getOrderedEvents() {
    this.getOrderedNumberEvents();
    let firstLine: String[][] = new Array();
    let c = 1;
    for(let i = 0;i < this.orderedNumberEvent.length; i++) {
      let k = 0;
      if(c <= this.orderedNumberEvent[i][0]) {
        k = this.orderedNumberEvent[i][0] - c;
        c = this.orderedNumberEvent[i][1];
        let fval = String((k) * 55)+"px";
        let sval = String(((this.orderedNumberEvent[i][1] - this.orderedNumberEvent[i][0])) * 55)+"px";
        firstLine.push([fval, sval]);
      } else {
        c = 1;
        this.orderedEvents.push(firstLine);
        firstLine = new Array();
        i--;
      }
    }
    if(firstLine.length != 0) {
      this.orderedEvents.push(firstLine);
      firstLine = new Array();
    }
  }

  getOrderedNumberEvents() {
    let tap: number[] = new Array(this.events.length);
    let stop = false;
    let base = 0;
    while(!stop) {
      let recentMaxIndex = -1;
      for(let k = 0; k < tap.length; k++) {
        if(tap[k] != 1 && this.events[k][0] > base) {
            recentMaxIndex = k;
            break;
        } 
      }
      if(recentMaxIndex == -1) {
        if(base == 0)break;
        base = 0;
        continue;
      }
      let maxIndex = recentMaxIndex;
      for(let i = 0; i < this.events.length; i++) {
        if(tap[i] != 1) {
          if(this.events[maxIndex][0] > this.events[i][0] && this.events[i][0] >= base) {
            recentMaxIndex = maxIndex;
            maxIndex = i;
          } else if(this.events[maxIndex][0] == this.events[i][0] && this.events[i][0] >= base && this.events[maxIndex][1] > this.events[i][1]) {
            recentMaxIndex = maxIndex;
            maxIndex = i;
          }
        }
      }
      this.orderedNumberEvent.push(this.events[maxIndex]);
      base = this.events[maxIndex][1]
      tap[maxIndex] = 1;
    }
  }

}
