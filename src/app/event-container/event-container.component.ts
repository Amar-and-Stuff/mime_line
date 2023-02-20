import { Component, Input, SimpleChanges } from '@angular/core';

interface UserEvent {
  name: String;
  start: String;
  end: string;
  line: String;
}


@Component({
  selector: 'app-event-container',
  templateUrl: './event-container.component.html',
  styleUrls: ['./event-container.component.css']
})
export class EventContainerComponent {

  @Input() _eventsDetails?:UserEvent[];
  eventDays: any[][] = new Array();
  eventNames: String[] = new Array();
  colors: String[] = [
      '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF',
      '#00FFFF', '#800000', '#008000', '#000080', '#FFA500',
      '#FFC0CB', '#FF69B4', '#8B008B', '#9370DB', '#00FF7F',
      '#1E90FF', '#ADFF2F', '#00BFFF', '#9400D3', '#F0E68C',
      '#FF6347', '#7FFFD4', '#2F4F4F', '#D2B48C', '#808080'
  ];
  shades_of_yellow_green = [
    "#9ACD32",   // Yellow Green
    "#7FFF00",   // Chartreuse
    "#ADFF2F",   // Green Yellow
    "#556B2F",   // Dark Olive Green
    "#9ACD32",   // Yellow Green
    "#EEE8AA",   // Pale Goldenrod
    "#DAA520",   // Goldenrod
    "#BDB76B",   // Dark Khaki
    "#808000",   // Olive
    "#556B2F",   // Dark Olive Green
    "#6B8E23",   // Olive Drab
    "#C0C000",   // Olive Green
    "#9ACD32",   // Yellow Green
    "#8FBC8F",   // Dark Sea Green
    "#32CD32",   // Lime Green
    "#00FF7F",   // Spring Green
    "#00FA9A",   // Medium Spring Green
    "#7CFC00",   // Lawn Green
    "#98FB98",   // Pale Green
    "#90EE90",   // Light Green
    "#00FF00",   // Green
    "#32CD32",   // Lime Green
    "#ADFF2F",   // Green Yellow
    "#9ACD32",   // Yellow Green
    "#7FFF00",   // Chartreuse
  ];
  smooth_red_colors = [
    "#FFC3B3",   // Apricot
    "#FFA07A",   // Light Salmon
    "#FF7F50",   // Coral
    "#FF6347",   // Tomato
    "#E9967A",   // Dark Salmon
  ];
  
  eventsDetails:UserEvent[] = [{"name":"eventName","start":"01-02-2023","end":"05-02-2023","line":"A line about event"}];
  orderedNumberEvent: number[][] = new Array();
  orderedEvents: any[][][] = new Array();
  eventLines: String[] = new Array();

  /*constructor() {
    this.adjustEventEnds();
    this.getOrderedEvents();
    this.buildEventsDaysArray();
  }*/

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['_eventsDetails']) this.eventsDetails = changes['_eventsDetails'].currentValue || changes['_eventsDetails'].previousValue;
    this.buildEventsDaysArray();
    this.adjustEventEnds();
    this.getOrderedEvents();
  }

  buildEventsDaysArray() {
    for(let i= 0;i < this.eventsDetails.length; i++) {
      this.eventDays.push([Number(this.eventsDetails[i].start.split("-")[0]),Number(this.eventsDetails[i].end.split("-")[0]),this.eventsDetails[i].name, this.eventsDetails[i].line]);
      this.eventNames.push(this.eventsDetails[i].name);
      this.eventLines.push(this.eventsDetails[i].line)
    }
  }

  adjustEventEnds() {
    for(let i = 0; i < this.eventDays.length; i++) {
      this.eventDays[i][1] += 1;
    }
  }

  getOrderedEvents() {
    this.getOrderedNumberEvents();
    let firstLine: any[][] = new Array();
    let c = 1;
    for(let i = 0;i < this.orderedNumberEvent.length; i++) {
      let k = 0;
      if(c <= this.orderedNumberEvent[i][0]) {
        k = this.orderedNumberEvent[i][0] - c;
        c = this.orderedNumberEvent[i][1];
        let fval = String((k) * 56)+"px";
        let sval = String(((this.orderedNumberEvent[i][1] - this.orderedNumberEvent[i][0])) * 56)+"px";
        firstLine.push([fval, sval,this.orderedNumberEvent[i][2],this.orderedNumberEvent[i][3]]);
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
    console.log(this.orderedEvents);

  }

  getOrderedNumberEvents() {
    let tap: number[] = new Array(this.eventDays.length);
    let stop = false;
    let base = 0;
    while(!stop) {
      let recentMaxIndex = -1;
      for(let k = 0; k < tap.length; k++) {
        if(tap[k] != 1 && this.eventDays[k][0] > base) {
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
      for(let i = 0; i < this. eventDays.length; i++) {
        if(tap[i] != 1) {
          if(this. eventDays[maxIndex][0] > this. eventDays[i][0] && this. eventDays[i][0] >= base) {
            recentMaxIndex = maxIndex;
            maxIndex = i;
          } else if(this. eventDays[maxIndex][0] == this. eventDays[i][0] && this. eventDays[i][0] >= base && this. eventDays[maxIndex][1] > this. eventDays[i][1]) {
            recentMaxIndex = maxIndex;
            maxIndex = i;
          }
        }
      }
      this.orderedNumberEvent.push(this. eventDays[maxIndex]);
      base = this. eventDays[maxIndex][1]
      tap[maxIndex] = 1;
    }
  }

  getRandomInt(): number {
    return Math.floor(Math.random() * this.smooth_red_colors.length);
  }

}
