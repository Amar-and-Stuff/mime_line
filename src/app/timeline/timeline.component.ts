import { Component, HostListener, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  private lastScale: number = 1;
  showContent: Boolean = false;
  res: String = "../../assets/saitama.jpg";
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
  dates: number[] = [];
  hours: number[] = [];

  constructor(private elRef: ElementRef) { }

  ngOnInit() {
    // populate dates with dummy data
    for (let i = 31; i >= 1; i--) {
      this.dates.push(i);
    }

    // populate hours with dummy data
    for (let i = 23; i >= 0; i--) {
      this.hours.push(i);
    }
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.lastScale = 1;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (event.touches.length > 1) {
      const distance = Math.hypot(
        event.touches[0].pageX - event.touches[1].pageX,
        event.touches[0].pageY - event.touches[1].pageY
      );
      const scale = distance / (50 * 2);
      this.elRef.nativeElement.scrollLeft *= scale / this.lastScale;
      this.lastScale = scale;
    }
  }

  @HostListener('scroll', ['$event'])
  onScroll(event: Event) {
    const yearsEl = this.elRef.nativeElement.querySelector('.years');
    const monthsEl = this.elRef.nativeElement.querySelector('.months');
    const datesEl = this.elRef.nativeElement.querySelector('.dates');
    const hoursEl = this.elRef.nativeElement.querySelector('.hours');
    const nowEl = this.elRef.nativeElement.querySelector('.now');

    const hoursWidth = hoursEl.offsetWidth;
    const hoursLeft = hoursEl.getBoundingClientRect().left;

    // set position of years and months bars
    const yearsMonthsOffset = yearsEl.offsetWidth - monthsEl.offsetWidth;
    const yearsMonthsLeft = yearsEl.getBoundingClientRect().left - yearsMonthsOffset * this.elRef.nativeElement.scrollLeft / this.elRef.nativeElement.scrollWidth;
    yearsEl.style.left = yearsMonthsLeft + 'px';
    monthsEl.style.left = yearsMonthsLeft + yearsMonthsOffset + 'px';

    // set position of dates and hours bars
    const datesHoursOffset = datesEl.offsetWidth - hoursWidth;
    const datesHoursLeft = datesEl.getBoundingClientRect().left - datesHoursOffset * this.elRef.nativeElement.scrollLeft / this.elRef.nativeElement.scrollWidth;
    datesEl.style.left = datesHoursLeft + 'px';
    hoursEl.style.left = datesHoursLeft + datesHoursOffset + 'px';

    // set position of "now" pointer
    const nowOffset = hoursLeft - this.elRef.nativeElement.scrollLeft;
    nowEl.style.left = nowOffset + 'px';
  }

  onClick() {
    console.log("button clicked");
    if(this.showContent) {
      this.showContent = false;
    } else {
      this.showContent = true;
    }
  }

}
