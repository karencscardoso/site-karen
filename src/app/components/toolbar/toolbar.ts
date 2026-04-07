import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ActivationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  imports: [
    MatToolbarModule,
    RouterLink,
    RouterLinkActive
],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss',
})
export class Toolbar {

  private router = inject(Router);

  title = toSignal(
  this.router.events.pipe(
    filter((event): event is ActivationEnd => event instanceof ActivationEnd),
    map((event) => {
      return event.snapshot.data['toolbarTitle'] || 'Home';
    })
  ),
  { initialValue: 'Home' }
);

currentPath = toSignal(
    this.router.events.pipe(
      filter((event): event is ActivationEnd => event instanceof ActivationEnd && !event.snapshot.firstChild),
      map((event) => event.snapshot.routeConfig?.path || 'filmografy')
    ),
    { initialValue: 'filmografy' }
  );
}