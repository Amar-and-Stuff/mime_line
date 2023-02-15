import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EventComponent } from './event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    EventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
