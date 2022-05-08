import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'Client',
    icon: 'person-outline',
    link: '/pages/list-of-client',
  },
  {
    title: 'Collaborateur',
    icon: 'people-outline',
    link: '/pages/list-of-collaborateur',
  },
  {
    title: 'Manager',
    icon: 'person-done',
    link: '/pages/list-of-manager',
  },
  {
    title: 'Mission',
    icon: 'briefcase-outline',
    link: 'list-of-mission',
  },
  {
    title: 'Departement',
    icon: 'home-outline',
    link: '/pages/list-of-departement',
  },
];
