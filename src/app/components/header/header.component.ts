import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<any>;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.currentUser$ = this.store.pipe(
      select(fromStore.SessionCurrentUserSelector)
    );
  }

  onSignOut() {
    this.store.dispatch(new fromStore.SignOut());
  }
}
