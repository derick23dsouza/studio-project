export const mainNavItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Work", href: "/" },
];

export const secondaryNavItems = [
  { label: "Contact", href: "/" },
  { label: "News", href: "/" },
  { label: "Cart", href: "/" },
];

export const socialItems = [
  { label: "Be", href: "/" },
  { label: "X", href: "/" },
  { label: "Dr", href: "/" },
  { label: "Ig", href: "/" },
];

export const mobileNavItems = [
  ...mainNavItems,
  ...secondaryNavItems.slice(0, 2),
];

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/" },
  { label: "Work", href: "/" },
  { label: "News", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Contact", href: "/" },
];
