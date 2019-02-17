import { Component, OnInit, Input } from '@angular/core';
import { tap } from 'rxjs/operators';

import { ReminderService } from '../../services';

@Component({
  selector: 'app-reminder-create-widzard',
  templateUrl: './reminder-create-widzard.component.html',
  styleUrls: ['./reminder-create-widzard.component.css']
})
export class ReminderCreateWidzardComponent implements OnInit {
  @Input()
  courseId: string;

  answers: any = {
    repeat: {},
    sendTime: {}
  };

  constructor(private reminderService: ReminderService) {}

  ngOnInit() {}
  createReminders() {
    this.answers.courseId = this.courseId;
    console.log(this.answers);
    this.reminderService
      .createReminders(this.answers)
      .pipe(tap(console.log))
      .subscribe();
  }

  updateBoolean(key) {
    this.answers['end_date_yes'] = false;
    this.answers['end_date_more_than_once'] = false;
    this.answers['end_date_no'] = false;
    this.answers[key] = true;
  }
}
