import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRemindersComponent } from './course-reminders.component';

describe('CourseRemindersComponent', () => {
  let component: CourseRemindersComponent;
  let fixture: ComponentFixture<CourseRemindersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CourseRemindersComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
