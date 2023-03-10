import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EventComponent } from './event/event.component';
import { MonthsViewComponent } from './months-view/months-view.component';
import { DaysViewComponent } from './days-view/days-view.component';
import { HoursViewComponent } from './hours-view/hours-view.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EventContainerComponent } from './event-container/event-container.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    EventComponent,
    MonthsViewComponent,
    DaysViewComponent,
    HoursViewComponent,
    EventContainerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
