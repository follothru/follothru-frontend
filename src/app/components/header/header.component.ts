import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<any>;

  constructor(
    private store: Store<fromStore.StoreState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.currentUser$ = this.store.pipe(
      select(fromStore.authEntitiesSelector),
      map(result => result.user)
    );
  }

  onSignOut() {
    this.store.dispatch(new fromStore.SignOut());
    this.router.navigate(['/login']);
  }
}
