import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReminderCreateWidzardItemComponent } from './reminder-create-widzard-item.component';

describe('ReminderCreateWidzardItemComponent', () => {
  let component: ReminderCreateWidzardItemComponent;
  let fixture: ComponentFixture<ReminderCreateWidzardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReminderCreateWidzardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderCreateWidzardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
