import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-reminder-create-widzard',
  templateUrl: './reminder-create-widzard.component.html',
  styleUrls: ['./reminder-create-widzard.component.css']
})
export class ReminderCreateWidzardComponent implements OnInit {
  @Input()
  answers: any = {
    repeats: {},
    sendTime: {}
  };

  constructor(
    public dialogRef: MatDialogRef<CourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  createReminders() {
    this.dialogRef.close(this.answers);
  }

  updateBoolean(key) {
    this.answers['endDate_yes'] = false;
    this.answers['endDate_more_than_once'] = false;
    this.answers['endDate_no'] = false;
    this.answers[key] = true;
  }

  onCancelClick() {
    this.dialogRef.close();
  }
}
