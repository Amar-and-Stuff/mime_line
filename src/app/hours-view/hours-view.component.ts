import { Component } from '@angular/core';

@Component({
  selector: 'app-hours-view',
  templateUrl: './hours-view.component.html',
  styleUrls: ['./hours-view.component.css']
})
export class HoursViewComponent {
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
