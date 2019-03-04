import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import * as fromStore from '../../store';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.css']
})
export class UserSettingsComponent implements OnInit {
  currentUser$: Observable<any>;
  userOriginal: any = {};
  userTemp: any = {};
  changed = false;

  constructor(private store: Store<fromStore.StoreState>) {}

  ngOnInit() {
    this.currentUser$ = this.store.pipe(
      select(fromStore.SessionCurrentUserSelector),
      tap(currUser => Object.assign(this.userOriginal, currUser)),
      tap(currUser => Object.assign(this.userTemp, currUser))
    );
  }

  onChange() {
    this.changed =
      this.userTemp.firstname !== this.userOriginal.firstname ||
      this.userTemp.lastname !== this.userOriginal.lastname ||
      this.userTemp.email !== this.userOriginal.email ||
      (this.userTemp.newPassword !== undefined &&
        this.userTemp.newPassword !== '');
  }

  onRecover() {
    Object.assign(this.userTemp, this.userOriginal);
    this.onChange();
  }
}
