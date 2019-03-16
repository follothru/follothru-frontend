import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarMarkerComponent } from './calendar-marker.component';

describe('CalendarMarkerComponent', () => {
  let component: CalendarMarkerComponent;
  let fixture: ComponentFixture<CalendarMarkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarMarkerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarMarkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
