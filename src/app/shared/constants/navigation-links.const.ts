import { MenuItem } from '../models/menu.model';

export const NAVIGATION_LINKS: MenuItem[] = [
  {
    label: 'Dashboard',
    icon: 'fab fa-flipboard',
    routerLink: ['/dashboard']
  },
  {
    label: 'Empty Page',
    icon: 'fab fa-html5',
    routerLink: ['/empty-page'],
  }
];

export const ACCOUNT_LINKS:MenuItem[]=[
  {
    label: 'Your Profile',
    icon:'fas fa-user-cog',
    routerLink: ['/profile']
  },
  {
    label: 'Sign Out',
    icon:'fas fa-sign-out-alt'
  }
];