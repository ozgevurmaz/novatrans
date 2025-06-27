interface NavItemType {
  name: string;
  href: string;
}

interface NavigationLinkType {
  name: string;
  href: string;
  items?: NavItemType[];
}