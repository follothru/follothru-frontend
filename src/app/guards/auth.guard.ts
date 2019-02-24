import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivate
} from '@angular/router';
import { Store } from '@ngrx/store';

import { AuthService } from '../services';

import * as fromStore from '../store';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private store: Store<fromStore.StoreState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const signedIn = this.authService.isSignedIn();
    if (!signedIn) {
      this.router.navigate(['/login']);
      return false;
    }
    this.store.dispatch(new fromStore.ResumeSession());
    return true;
  }
}
