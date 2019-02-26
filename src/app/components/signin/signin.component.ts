import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent implements OnInit {
  isLoading$: Observable<boolean>;

  email: string;
  password: string;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.isLoading$ = this.store.pipe(select(fromStore.authIsLoadingSelector));
  }

  onSubmit() {
    const username = this.email;
    const password = this.password;
    this.store.dispatch(new fromStore.SignIn({ username, password }));
  }
}
