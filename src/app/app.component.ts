import { animate, style, transition, trigger } from '@angular/animations';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { SLIDE_IN_OUT } from './shared/constants/animations.const';
import {
  ACCOUNT_LINKS,
  NAVIGATION_LINKS,
} from './shared/constants/navigation-links.const';
import { MenuItem } from './shared/models/menu.model';
import { SideBarService } from './shared/services/side-bar.service';
import { ThemeEnum, ThemeService } from './shared/services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: SLIDE_IN_OUT
})
export class AppComponent implements OnDestroy {
  private subscription: Subscription;
  menuLinks: MenuItem[] = NAVIGATION_LINKS;
  accountLinks: MenuItem[] = ACCOUNT_LINKS;

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
