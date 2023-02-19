import { Component, ElementRef, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnChanges{
  @ViewChild('barContainer', { static: false }) barContainerRef: ElementRef | undefined;
  name: String = "small";
  @Input() _marginLeft?: String;
  @Input() _width?: String;
  marginLeft: String = "0px";
  width: String = "0px";

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['_width']){
    this.width = changes['_width'].currentValue || changes['_width'].previousValue;
    }
    if(changes['_marginLeft'])
    {
      this.marginLeft = changes['_marginLeft'].currentValue || changes['_marginLeft'].previousValue;
    }
  }
}
