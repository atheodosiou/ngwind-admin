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
      label: 'Item 1',
      icon: 'fab fa-accusoft',
      expanded: false,
      active: false,
    },
    {
      label: 'Item 2',
      icon: 'fab fa-blogger-b',
      expanded: false,
      active: false,
      items: [
        {
          label: 'Item 2.1',
          icon: 'fas fa-campground',
          expanded: false,
          active: false,
        },
        {
          label: 'Item 2.2',
          icon: 'fab fa-centercode',
          expanded: false,
          active: false,
        },
      ],
    },
    { label: 'Item 3', icon: 'fas fa-bug', expanded: false, active: false },
    {
      label: 'Item 4',
      icon: 'fas fa-calendar-check',
      expanded: false,
      active: false,
    },
    {
      label: 'Item 5',
      icon: 'fab fa-cc-visa',
      expanded: false,
      active: false,
      items: [
        {
          label: 'Item 5.1',
          icon: 'fas fa-chart-bar',
          expanded: false,
          active: false,
          items: [
            {
              label: 'Item 5.1.1',
              icon: 'fas fa-cloud-download-alt',
              expanded: false,
              active: false,
              items: [
                {
                  label: 'Item 5.1.1.1',
                  icon: 'fas fa-cloud-download-alt',
                  expanded: false,
                  active: false,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  setActive(item: MenuItem, active: boolean): void {
    item.active = active;
  }

  ngOnInit() {}
}
