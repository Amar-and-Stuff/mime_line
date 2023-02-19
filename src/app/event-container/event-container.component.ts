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
    [23,23],
    [24, 28],
    [22, 25],
    [5, 8],
  ];

  colors: String[] = [
      '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF',
      '#00FFFF', '#800000', '#008000', '#000080', '#FFA500',
      '#FFC0CB', '#FF69B4', '#8B008B', '#9370DB', '#00FF7F',
      '#1E90FF', '#ADFF2F', '#00BFFF', '#9400D3', '#F0E68C',
      '#FF6347', '#7FFFD4', '#2F4F4F', '#D2B48C', '#808080'
    ]


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
        let fval = String((k) * 56)+"px";
        let sval = String(((this.orderedNumberEvent[i][1] - this.orderedNumberEvent[i][0])) * 56)+"px";
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

  getRandomInt(): number {
    return Math.floor(Math.random() * this.colors.length);
  }

}
