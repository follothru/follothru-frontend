import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { UserModel } from '../../models';
import * as fromStore from '../../store';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users$: Observable<UserModel[]>;
  isLoading$: Observable<boolean>;
  privileged$: Observable<boolean>;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.users$ = this.store.pipe(select(fromStore.usersSelector));
    this.isLoading$ = this.store.pipe(select(fromStore.usersIsLoadingSelector));
    this.privileged$ = this.store.pipe(
      select(fromStore.SessionCurrentUserGroupsSelector),
      map((groups: string[]) => groups && groups.includes('SUPER_ADMIN'))
    );

    this.store.dispatch(new fromStore.GetUsers());
  }

  onRemoveUser(userId: string): void {
    this.store.dispatch(new fromStore.RemoveUser(userId));
  }

  onAssignAdmin(userId: string): void {
    this.store.dispatch(new fromStore.AssignAdmin(userId));
  }

  onRemoveAdmin(userId: string): void {
    this.store.dispatch(new fromStore.RemoveAdmin(userId));
  }
}
