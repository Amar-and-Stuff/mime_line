import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-days-view',
  templateUrl: './days-view.component.html',
  styleUrls: ['./days-view.component.css']
})
export class DaysViewComponent implements OnChanges{
  @Input() _currentMonth?: String;
  @Input() _year?: number;
  @Input() _numberOfDays?: number;
  
  currentMonth: String = "Jan";
  year: number = 2023;
  numberOfDays: number = 31;

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['_currentMonth']) this.currentMonth = changes['_currentMonth'].currentValue || changes['_currentMonth'].previousValue;
    if(changes['_year']) this.year = changes['_year'].currentValue || changes['_year'].previousValue;
    if(changes['_numberOfDays']) this.numberOfDays = changes['_numberOfDays'].currentValue || changes['_numberOfDays'].previousValue;
  }

  counter(n:number) {
    let arr =  [];
    for(let i = 1;i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }

}
