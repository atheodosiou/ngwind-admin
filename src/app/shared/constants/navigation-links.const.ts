import { MenuItem } from '../models/menu.model';

export const NAVIGATION_LINKS: MenuItem[] = [
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
  }
];
