import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SideBarService } from '../../services/side-bar.service';
import { ThemeEnum, ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {

  toggleProfileDropdown: boolean = false;
  isDarkMode: boolean = false;

  private subscription: Subscription;

  constructor(public sidebarService: SideBarService, public themeService: ThemeService) {
    this.subscription = this.themeService.onChange.subscribe(event => {
      switch (event.theme) {
        case ThemeEnum.LIGHT: {
          this.isDarkMode = false;
          break;
        }
        case ThemeEnum.DARK: {
          this.isDarkMode = true;
          break;
        }
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
