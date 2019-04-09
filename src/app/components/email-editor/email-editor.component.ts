import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CourseComponent } from '../course/course.component';
import { EmailTemplateModel } from '../../models';

import * as fromStore from '../../store';

@Component({
  selector: 'app-email-editor',
  templateUrl: './email-editor.component.html',
  styleUrls: ['./email-editor.component.css']
})
export class EmailEditorComponent implements OnInit {
  emailTemplates$: Observable<EmailTemplateModel[]>;
  isLoading$: Observable<boolean>;

  constructor(
    private store: Store<fromStore.StoreState>,
    public dialogRef: MatDialogRef<CourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.emailTemplates$ = this.store.pipe(
      select(fromStore.emailTemplatesSelector),
      tap(console.log)
    );
    this.isLoading$ = this.store.pipe(
      select(fromStore.emailIsLoadingsSelector)
    );

    this.store.dispatch(new fromStore.GetEmailTemplates());
  }
}
