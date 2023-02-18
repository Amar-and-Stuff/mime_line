import { Component } from '@angular/core';

@Component({
  selector: 'app-months-view',
  templateUrl: './months-view.component.html',
  styleUrls: ['./months-view.component.css']
})
export class MonthsViewComponent {
  year: number = 2023;
  months: String[] = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  month_days: number[] = [30,30,30,30,30,30,30,30,30,30,30,30]

  counter(n:number) {
    let arr =  [];
    for(let i = 1;i <= n; i++) {
      arr.push(i);
    }
    return arr;
  }
}
