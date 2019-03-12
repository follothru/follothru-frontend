import { Component, OnInit, Input } from '@angular/core';

import { SubreminderModel } from '../../models';

@Component({
  selector: 'app-sub-reminder',
  templateUrl: './sub-reminder.component.html',
  styleUrls: ['./sub-reminder.component.css']
})
export class SubReminderComponent implements OnInit {
  @Input()
  subreminder: SubreminderModel;

  constructor() {}

  ngOnInit() {}
}
