import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubReminderListComponent } from './sub-reminder-list.component';

describe('SubReminderListComponent', () => {
  let component: SubReminderListComponent;
  let fixture: ComponentFixture<SubReminderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SubReminderListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubReminderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
