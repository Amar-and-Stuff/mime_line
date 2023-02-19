import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnChanges{
  @ViewChild('barContainer', { static: false }) barContainerRef: ElementRef | undefined;
  name: String = "smjbjjb";
  @Input() _bgcolor?: String;
  @Input() _marginLeft?: String;
  @Input() _width?: String;
  marginLeft: String = "0px";
  width: String = "0px";
  bgcolor: String = "#000000";
  isDot: Boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['_width'] && changes['_width'].currentValue != "56px"){
    this.width = changes['_width'].currentValue || changes['_width'].previousValue;
    } else if(changes['_width'] && changes['_width'].currentValue == "56px") {
      this.width = changes['_width'].currentValue || changes['_width'].previousValue;
      this.isDot = true;
    }
    if(changes['_marginLeft'])
    {
      this.marginLeft = changes['_marginLeft'].currentValue || changes['_marginLeft'].previousValue;
    }
    if(changes['_bgcolor'])
    {
      this.bgcolor = changes['_bgcolor'].currentValue || changes['_bgcolor'].previousValue;
    }
  }
}
