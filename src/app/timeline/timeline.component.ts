import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent {
  dateInput?:String;
  selectedMonth: String= "Jan";
  selectedYear = 2023;
  numberOfDays: number = 31;


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

  monthDays: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  onDateSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.dateInput = inputElement.value;
    let splitDate = this.dateInput.split('-');
    this.selectedYear = Number(splitDate[0]);
    let monthIndex = Number(splitDate[1]) - 1;
    if(monthIndex == 1 && this.isLeapYear(this.selectedYear)) this.numberOfDays = 29;
    else this.numberOfDays = this.monthDays[monthIndex];
    this.selectedMonth = this.months[monthIndex];
  }

  isLeapYear(year: number): boolean {
    if (year % 4 !== 0) {
      return false;
    } else if (year % 100 !== 0) {
      return true;
    } else if (year % 400 !== 0) {
      return false;
    } else {
      return true;
    }
  }
}
