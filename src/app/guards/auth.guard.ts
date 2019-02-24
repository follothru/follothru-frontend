import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as fromStore from '../store';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private store: Store<fromStore.StoreState>) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.store.pipe(
      select(fromStore.SessionCurrentSessionSelector),
      map(session => session !== null),
      tap(result => {
        if (result) {
          this.store.dispatch(new fromStore.ResumeSession());
          return;
        }
        this.store.dispatch(new fromStore.SignOut());
      })
    );
  }
}
