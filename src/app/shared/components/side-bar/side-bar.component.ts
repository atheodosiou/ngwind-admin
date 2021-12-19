import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  constructor() {}
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'fab fa-flipboard',
      routerLink: ['/dashboard'],
      active: false,
    },
    {
      label: 'Empty Page',
      icon: 'fab fa-html5',
      routerLink: ['/empty-page'],
    },
    { label: 'Item 3', icon: 'fas fa-bug', expanded: false, active: false },
    {
      label: 'Item 4',
      icon: 'fas fa-calendar-check',
    },
    {
      label: 'Item 5',
      icon: 'fab fa-cc-visa',
    },
  ];

  setActive(item: MenuItem): void {
    item.active = !item.active;
    this.setActiveValue(item, this.menuItems, !item.active);
  }

  private setActiveValue(
    itemToExclude: MenuItem,
    items: MenuItem[],
    value: boolean
  ): void {
    items.forEach((item) => {
      if (itemToExclude !== item) {
        item.active = value;
      }
      if (item.items?.length) {
        this.setActiveValue(item, item.items, value);
      }
    });
  }

  ngOnInit() {}
}
