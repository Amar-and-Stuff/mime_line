import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursViewComponent } from './hours-view.component';

describe('HoursViewComponent', () => {
  let component: HoursViewComponent;
  let fixture: ComponentFixture<HoursViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoursViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoursViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
