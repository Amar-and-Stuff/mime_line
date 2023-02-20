import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent {
  dateInput?:String;
  currentMonth: String = "Feb";
  currentYear: number = 2023;
  selectedMonth: String= this.currentMonth;
  selectedYear = this.currentYear;
  numberOfDays: number = 28;


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

  onMonthSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedMonth = inputElement.value;
    if(this.selectedMonth == 'Feb' && this.isLeapYear(this.selectedYear)) this.numberOfDays = 29;
    else this.numberOfDays = this.monthDays[this.months.indexOf(this.selectedMonth)];
    console.log(this.numberOfDays);
  }

  onYearSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedYear = Number(inputElement.value);
    if(this.selectedMonth == 'Feb' && this.isLeapYear(this.selectedYear)) this.numberOfDays = 29;
    else this.numberOfDays = this.monthDays[this.months.indexOf(this.selectedMonth)];
    console.log(this.numberOfDays);

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

  lastTenYears(year: number) {
    let tenYears: number[] = new Array();
    for(let i = 0;i <= 10; i++) {
      tenYears.push(year - i);
    }
    return tenYears;
  }
}
