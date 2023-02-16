import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent {
  @ViewChild('barContainer', { static: false }) barContainerRef: ElementRef | undefined;
  name: String = "smalllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll";
  nameLength:number=this.name.length;
  oneHourPX:number=100;
  oneCharPX:number=5;
  paddingForEName:number=30;
  duration: number = 2;
  barWidth: String = String(this.duration * 100 )+ "px";
  containerWidth: String = String(Math.max((this.duration * this.oneHourPX),(this.nameLength*this.oneCharPX+this.paddingForEName)) )+ "px";
}
