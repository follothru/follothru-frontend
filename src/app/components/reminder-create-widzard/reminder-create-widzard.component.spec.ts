import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderCreateWidzardComponent } from './reminder-create-widzard.component';

describe('ReminderCreateWidzardComponent', () => {
  let component: ReminderCreateWidzardComponent;
  let fixture: ComponentFixture<ReminderCreateWidzardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReminderCreateWidzardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderCreateWidzardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
