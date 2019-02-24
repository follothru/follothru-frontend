import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Observable, Unsubscribable } from 'rxjs';

import * as fromStore from '../../store';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  private subscription: Unsubscribable;

  email: string;
  password: string;

  constructor(
    private store: Store<fromStore.StoreState>,
    private actions$: Actions,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.actions$
      .pipe(
        ofType(fromStore.SIGN_IN_SUCCESS),
        tap(() => this.router.navigate(['/overview']))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const username = this.email.slice();
    const password = this.password.slice();
    this.store.dispatch(new fromStore.SignIn({ username, password }));
  }
}
