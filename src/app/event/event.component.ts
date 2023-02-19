import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnChanges{
  @ViewChild('barContainer', { static: false }) barContainerRef: ElementRef | undefined;
  name: String = "Name of event";
  @Input() _bgcolor?: String;
  @Input() _marginLeft?: String;
  @Input() _width?: String;
  @Input() _name?: String;
  @Input() _line?: String;

  marginLeft: String = "0px";
  width: String = "0px";
  bgcolor: String = "#000000";
  isDot: Boolean = false;
  line: String = "some info about event";

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
    if(changes['_line'])
    {
      this.line = changes['_line'].currentValue || changes['_line'].previousValue;
    }
    if(changes['_bgcolor'])
    {
      this.name = changes['_name'].currentValue || changes['_name'].previousValue;
    }
  }
}
