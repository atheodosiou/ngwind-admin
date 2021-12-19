import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideBarService } from './shared/services/side-bar.service';
import { ThemeEnum, ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ width:'0px',opacity: 0 }),
        animate('200ms ease-in', style({ width:'240px', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ width:'240px', opacity: 1 }),
        animate('1000ms ease-out', style({ width:'0px', opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    public sidebarService: SideBarService,
    private themeService: ThemeService
  ) {
    this.subscription = this.themeService.onChange.subscribe((event) => {
      switch (event.theme) {
        case ThemeEnum.LIGHT: {
          this.document.body.classList.remove('dark');
          break;
        }
        case ThemeEnum.DARK: {
          this.document.body.classList.add('dark');
          break;
        }
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
