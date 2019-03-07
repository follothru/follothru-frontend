import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubReminderComponent } from './sub-reminder.component';

describe('SubReminderComponent', () => {
  let component: SubReminderComponent;
  let fixture: ComponentFixture<SubReminderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubReminderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
