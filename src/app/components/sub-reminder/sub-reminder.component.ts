import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';

import { SubreminderModel } from '../../models';
import { EmailEditorComponent } from '../email-editor/email-editor.component';

@Component({
  selector: 'app-sub-reminder',
  templateUrl: './sub-reminder.component.html',
  styleUrls: ['./sub-reminder.component.css']
})
export class SubReminderComponent implements OnInit {
  @Input()
  subreminder: SubreminderModel;
  type: string;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.type = 'reminder';
  }

  getTime() {
    const dateTime = new Date(this.subreminder.dateTime);
    const m = dateTime.getHours() >= 12 ? 'pm' : 'am';
    let hour = dateTime.getHours() % 12;
    hour = hour !== 0 ? hour : 12;
    return `${this.formatTimeDigit(hour)}:${this.formatTimeDigit(
      dateTime.getMinutes()
    )} ${m}`;
  }

  formatTimeDigit(num): string {
    return num < 10 ? '0' + num : `${num}`;
  }

  editMessage(): void {
    const dialogRef = this.dialog.open(EmailEditorComponent, {
      width: '60vw',
      maxHeight: '96vh',
      data: {}
    });
  }
}
