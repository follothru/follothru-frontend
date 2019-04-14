import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { StudentEnrollStatus } from '../../../store';

import * as fromStore from '../../../store';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  isLoading$: Observable<boolean>;
  enrollStatus$: Observable<StudentEnrollStatus>;

  constructor(
    private store: Store<fromStore.StoreState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const { course, student } = this.activatedRoute.snapshot.queryParams;

    this.isLoading$ = this.store.pipe(
      select(fromStore.studentEnrollIsLoadingSelector)
    );
    this.enrollStatus$ = this.store.pipe(
      select(fromStore.studentEnrollStatusSelector)
    );

    this.store.dispatch(new fromStore.GetEnrollStatus(course, student));
  }
}
