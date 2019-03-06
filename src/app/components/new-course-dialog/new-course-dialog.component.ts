import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { CoursesComponent } from '../courses/courses.component';

@Component({
  selector: 'app-new-course-dialog',
  templateUrl: './new-course-dialog.component.html',
  styleUrls: ['./new-course-dialog.component.css']
})
export class NewCourseDialogComponent implements OnInit {
  config: any = {
    planningPrompt:
      'At the beginning of a course it is useful ' +
      'to think about your plans with regard to course ' +
      'completion. Please describe your plans (e.g., when ' +
      'and where do you plan to complete course requirements, ' +
      'what steps might you take to ensure you completed course work etc).'
  };

  constructor(
    public dialogRef: MatDialogRef<CoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onCancelClick() {
    this.dialogRef.close();
  }

  onCreateClick() {
    this.dialogRef.close(this.config);
  }
}
