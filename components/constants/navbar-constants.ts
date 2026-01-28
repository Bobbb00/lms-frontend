type NavbarMenuType = {
  name: string;
  href: string;
};

export const NAVBAR_MENUS: NavbarMenuType[] = [
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
  {
    name: 'Courses',
    href: '/courses',
  },
  {
    name: 'Login',
    href: '/login',
  },
  {
    name: 'Sign Up',
    href: '/sign-up',
  }
];

export const HREF_MENU_MAINTANCE = {
  maintance: {
    href: '/maintance',
  },
};