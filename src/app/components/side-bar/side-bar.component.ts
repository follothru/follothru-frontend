import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ResolveStart } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import { Unsubscribable } from 'rxjs';

import * as fromStore from '../../store';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {
  private subscription: Unsubscribable;
  private userGroupsSub: Unsubscribable;

  currentTab: string;
  userGroups: string[] = [];

  constructor(
    private router: Router,
    private store: Store<fromStore.StoreState>
  ) {}

  ngOnInit() {
    this.currentTab = this.router.url.split('/')[1];
    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof ResolveStart),
        map((event: ResolveStart) =>
          event.urlAfterRedirects ? event.urlAfterRedirects.split('/')[1] : ''
        ),
        tap(str => (this.currentTab = str))
      )
      .subscribe();
    this.userGroupsSub = this.store
      .pipe(
        select(fromStore.SessionCurrentUserGroupsSelector),
        map(groups => (this.userGroups = groups ? groups : []))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.userGroupsSub.unsubscribe();
  }

  restrict(groups: string[]): boolean {
    return this.userGroups.some(u => groups.includes(u));
  }
}
