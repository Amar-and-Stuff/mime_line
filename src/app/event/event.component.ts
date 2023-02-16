import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  @ViewChild('barContainer', { static: false }) barContainerRef: ElementRef | undefined;
  name: String = "smallllllllllllllllllllllllllllllllllllll";
  slength:number=this.name.length;
  duration: number = 2;
  bar_width: String = String(this.duration * 100 )+ "px";
  container_width: String = String(Math.max((this.duration * 100),(this.slength*5+30)) )+ "px";

}
