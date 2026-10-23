// Single source of truth for business facts.
// Values are carried over verbatim from hugo.toml / Hugo content.
// NOTE: the phone number and email are flagged in docs/notes.md as
// placeholder-like values that must be confirmed before production.
export const SITE = {
  name: 'Radiant Home Solutions',
  tagline: 'Small Job Specialists - No Job Too Small!',
  url: 'https://radianthomesolutions.com/',
  phoneDisplay: '(555) 123-4567',
  phoneHref: 'tel:+15551234567',
  email: 'info@radianthomesolutions.com',
  emailHref: 'mailto:info@radianthomesolutions.com',
  description:
    'Professional handyman specializing in small jobs and quick repairs in Horseheads, Corning, and Elmira NY. Same-day service for minor home fixes, installations, and maintenance. No job too small!',
} as const;

// Mirrors the [menu] section of hugo.toml (names and weights).
// "Service Areas" now points at /service-areas/ per the Astro rebuild;
// the legacy /areas-served/ URL redirects there (see astro.config.mjs).
export const NAV = [
  { name: 'Services', url: '/services/', weight: 1 },
  { name: 'Small Jobs', url: '/small-jobs/', weight: 2 },
  { name: 'Service Areas', url: '/service-areas/', weight: 3 },
  { name: 'About', url: '/about/', weight: 4 },
  { name: 'Contact', url: '/contact/', weight: 5 },
] as const;

export const SERVICE_AREAS = {
  primary: [
    { town: 'Horseheads, NY', note: 'Downtown, Horseheads North, Catherine Creek area', response: '1-3 hours' },
    { town: 'Corning, NY', note: 'Historic Gaffer District, Corning Heights, Riverside', response: '1-3 hours' },
    { town: 'Elmira, NY', note: 'Downtown, Elmira Heights, West Elmira, Elmira College area', response: '1-3 hours' },
    { town: 'Big Flats, NY', note: 'Same-day service', response: '2-4 hours' },
    { town: 'Painted Post, NY', note: 'Same-day service', response: '2-4 hours' },
    { town: 'Southport, NY', note: 'Same-day service', response: '2-4 hours' },
  ],
  extended: [
    'Watkins Glen',
    'Bath',
    'Montour Falls',
    'Penn Yan',
    'Wellsburg',
    'Millport',
    'Pine City',
    'Lowman',
    'Breesport',
    'Erin',
  ],
} as const;

export const HOURS = [
  { days: 'Monday - Friday', hours: '7:00 AM - 6:00 PM', note: 'Office and field services' },
  { days: 'Saturday', hours: '8:00 AM - 4:00 PM', note: 'Estimates and emergency repairs' },
  { days: 'Sunday', hours: 'Emergency only', note: 'Urgent repairs and consultations' },
] as const;
