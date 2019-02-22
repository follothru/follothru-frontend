import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { tap, filter } from 'rxjs/operators';
import { Observable, Unsubscribable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit, OnDestroy {
  private subscription: Unsubscribable;
  private errorSubscription: Unsubscribable;

  success$: Observable<any>;

  email: string;
  password: string;

  constructor(
    private store: Store<fromStore.StoreState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.success$ = this.store.pipe(
      select(fromStore.authIsSuccessSelector),
      filter(success => success),
      tap(() => this.router.navigate(['/']))
    );
    this.subscription = this.success$.subscribe();

    this.errorSubscription = this.store
      .pipe(
        filter(
          (state: fromStore.StoreState) =>
            fromStore.authEntitiesSelector(state).type ===
            fromStore.SIGN_IN_FAILURE
        ),
        select(fromStore.authIsErrorSelector),
        tap(isErr => {
          if (isErr === true) {
            this.store.dispatch(
              new fromStore.RaiseAlert({ message: 'Failed to sign in.' })
            );
          }
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.errorSubscription.unsubscribe();
  }

  onSubmit() {
    const username = this.email;
    const password = this.password;
    this.store.dispatch(new fromStore.SignIn({ username, password }));
  }
}
