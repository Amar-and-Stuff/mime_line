import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  times = this.generateTimes(new Date(), 24);
  
  now: number = (new Date().getHours() * 60 + new Date().getMinutes()) / 1440 * 100;
  events = [
    { name: 'Event 1', starttime: new Date('2023-01-20T09:30:00'), endtime: new Date('2023-01-20T11:00:00'), start: 25, end: 50, top: 20, bottom: 80, color: '#ccc' },
    { name: 'Event 2', starttime: new Date('2023-01-20T12:00:00'), endtime: new Date('2023-01-20T14:00:00'), start: 60, end: 80, top: 50, bottom: 120, color: '#ccc' },
    { name: 'Event 3', starttime: new Date('2023-01-20T16:30:00'), endtime: new Date('2023-01-20T18:00:00'), start: 10, end: 30, top: 90, bottom: 150, color: '#ccc' },
  ];
  
  
  generateTimes(date: Date, count: number) {
    const times = [];
    for (let i = 0; i < count; i++) {
      times.push(new Date(date.getFullYear(), date.getMonth(), date.getDate(), i));
    }
    return times;
  }
}
