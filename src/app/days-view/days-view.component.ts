import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

const EVENT_DATA = {
  "General" : [
    {
        "name": "Kreative 2k23",
        "start": "01-02-2023",
        "end": "09-02-2023",
        "line": "Kreative 2k23 Hackathon"
    },
    {
        "name": "Close the care gap",
        "start": "04-02-2023",
        "end": "04-02-2023",
        "line": "Close the care gapKreative 2k23"
    },
    {
        "name": "IEEE Paper Presentation",
        "start": "08-02-2023",
        "end": "08-02-2023",
        "line": "IEEE Paper Presentation"
    },
    {
        "name": "Second Saturday",
        "start": "11-02-2023",
        "end": "11-02-2023",
        "line": "Second Saturday is observed as working day with saturday timetable"
    },
    {
        "name": "Cloud computing",
        "start": "14-02-2023",
        "end": "16-02-2023",
        "line": "Cloud computing technology for empowering women's workspace"
    },
    {
        "name": "Wifi conectivity",
        "start": "13-02-2023",
        "end": "13-02-2023",
        "line": "password and other information shared in circular"
    },
    {
        "name": "Mahashivarathri",
        "start": "18-02-2023",
        "end": "18-02-2023",
        "line": "Mahashivarathri is observed as holiday"

    },
    {
        "name": "Annual day",
        "start": "22-02-2023",
        "end": "22-02-2023",
        "line": "Annual day celebration on wednesday"
    },
    {
        "name": "UDAAN Finals",
        "start": "21-02-2023",
        "end": "23-02-2023",
        "line": "Udaan finals are conducted on 21 feb"
    },
    {
        "name": "Walk and Charge",
        "start": "15-02-2023",
        "end": "15-02-2023",
        "line": "IEEE event 'Walk and charge'"
    }
],

"UDAAN" : [
    {
        "name": "CSE vs CIV (Cricket)",
        "start": "21-02-2023",
        "end": "21-02-2023",
        "line": "CSE vs CIV Cricket match"
    },
    {
        "name": "ECE vs CSE (Basket ball)",
        "start": "17-02-2023",
        "end": "17-02-2023",
        "line": "ECE vs CSE Womens Basket ball finals"
    },
    {
        "name": "400 mts running race",
        "start": "03-02-2023",
        "end": "03-02-2023",
        "line": "400 mts running race"
    }

],

"StudentClubActivities": [
    {
        "name": "Technical Quiz",
        "start": "08-02-2023",
        "end": "08-02-2023",
        "line": "Technical Quiz organized by coders club"
    },
    {
        "name": "Coding challenge",
        "start": "15-02-2023",
        "end": "15-02-2023",
        "line": "coding challenge organized by coders club"
    }
    
],

"ITCA": [
    {
        "name": "AMCAT exam",
        "start": "01-02-2023",
        "end": "01-02-2023",
        "line": "Model test 1 in examly"
    },
    {
        "name": "AMCAT exam",
        "start": "06-02-2023",
        "end": "06-02-2023",
        "line": "Model test 2 in examly"
    },
    {
        "name": "AMCAT Assessment",
        "start": "13-02-2023",
        "end": "13-02-2023",
        "line": "AMCAT Assessment"
    }
],

"Examination": [
    {
        "name": "Suply Fee",
        "start": "06-02-2023",
        "end": "12-02-2023",
        "line": "Batch 2020 suply fee"
    },
    {
        "name": "III year 2nd sem Exam Fee",
        "start": "20-02-2023",
        "end": "26-02-2023",
        "line": "III year 2nd sem Exam Fee"
    },
    {
        "name": "II Python exam postpone",
        "start": "16-02-2023",
        "end": "16-02-2023",
        "line": "II Python exam postpone"
    }
]
};

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
  events = EVENT_DATA;
  categories = Object.keys(this.events);
  categories_ = Object.values(this.events);

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
