import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ResolveStart } from '@angular/router';
import { tap, filter, map } from 'rxjs/operators';
import { Unsubscribable } from 'rxjs';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit, OnDestroy {
  private subscription: Unsubscribable;
  currentTab: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.subscription = this.router.events
      .pipe(
        filter(event => event instanceof ResolveStart),
        map((event: ResolveStart) =>
          event.urlAfterRedirects ? event.urlAfterRedirects.split('/')[1] : ''
        ),
        tap(str => (this.currentTab = str))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
