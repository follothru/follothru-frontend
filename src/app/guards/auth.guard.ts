import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate
} from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import * as fromStore from '../store';
import { AuthService } from '../services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private store: Store<fromStore.StoreState>,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    this.store.dispatch(new fromStore.ResumeSession());
    return this.store.pipe(
      select(fromStore.authErrorSelector),
      map(err => err === null),
      tap(success => {
        if (!success) {
          this.router.navigate(['/', 'login']);
        }
      })
    );
  }
}
