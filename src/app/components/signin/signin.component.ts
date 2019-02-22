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

  success$: Observable<any>;
  error$: Observable<boolean>;

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

    this.error$ = this.store.pipe(select(fromStore.authIsErrorSelector));
    this.subscription = this.success$.subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    const username = this.email;
    const password = this.password;
    this.store.dispatch(new fromStore.SignIn({ username, password }));
  }
}
