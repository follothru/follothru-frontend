import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { ValidationService } from '../../../services';
import * as fromStore from '../../../store';

export function studentEmailValidator(
  courseId: string,
  validationService: ValidationService
): ValidatorFn {
  return (
    control: AbstractControl
  ): Observable<ValidationErrors | null> | null => {
    const email = control.value;

    return validationService.studentEnrollValidation(courseId, email).pipe(
      debounceTime(1000),
      map(response => {
        if (!response || response.result) {
          return {};
        }
        if (response.code === 'EMAIL_NOT_VERIFIED') {
          return { duplicateNotVerified: true };
        }
        return { duplicate: true };
      })
    );
  };
}

@Component({
  selector: 'app-student-enroll',
  templateUrl: './student-enroll.component.html',
  styleUrls: ['./student-enroll.component.css']
})
export class StudentEnrollComponent implements OnInit {
  form: FormGroup;
  isLoading$: Observable<boolean>;
  courseInfo$: Observable<any>;
  courseId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<fromStore.StoreState>,
    private formBuilder: FormBuilder,
    private validationService: ValidationService
  ) {}

  ngOnInit() {
    this.initData();
    this.initFormGroup();
  }

  initData() {
    this.courseId = this.activatedRoute.snapshot.queryParams.course;

    this.isLoading$ = this.store.pipe(
      select(fromStore.studentEnrollIsLoadingSelector)
    );

    this.courseInfo$ = this.store.pipe(
      select(fromStore.courseEnrollInfoSelector)
    );

    this.store.dispatch(new fromStore.GetCourseEnrollInfo(this.courseId));
  }

  initFormGroup() {
    this.form = this.formBuilder.group({
      prefName: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email],
        [studentEmailValidator(this.courseId, this.validationService)]
      ],
      planning: ['']
    });
  }

  onSubmit() {
    this.store.dispatch(
      new fromStore.StudentEnroll(this.courseId, {
        prefName: this.prefName.value,
        email: this.email.value,
        planning: this.planning.value
      })
    );
  }

  get prefName() {
    return this.form.get('prefName');
  }

  get email() {
    return this.form.get('email');
  }

  get planning() {
    return this.form.get('planning');
  }
}
