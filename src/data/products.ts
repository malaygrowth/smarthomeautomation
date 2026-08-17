/**
 * The actual product range, taken from the company brochure.
 *
 * This replaces guesswork. Until now the site described six generic services
 * invented from market research; this is what Infinita genuinely sells, in the
 * brochure's own order, with the brochure's own feature claims.
 *
 * Three things the brochure taught us that the site did not know:
 *   1. The range is nine products, not six services — IR blasters, step
 *      lighting, presence sensors and PDLC smart film were all missing.
 *   2. The business sells into HOMES, HOTELS and HOSPITALS. The site was
 *      written for homeowners only, which leaves two revenue lines invisible.
 *   3. Accessibility is a real selling point — remote-control switching aimed
 *      at elderly and patient use. No competitor site leads with this.
 *
 * `lane` follows the design document's colour rule: comfort products carry the
 * warm accent, control products the cool one. Never mixed in one component.
 */

export type Product = {
  slug: string;
  /** Brochure number, preserved so the range stays orderable against print */
  n: number;
  name: string;
  /** The protocol or type qualifier the brochure prints under the name */
  qualifier?: string;
  lane: 'comfort' | 'control';
  /** One line in our voice, not the brochure's */
  line: string;
  features: string[];
  /** Which of Homes / Hotels / Hospitals the brochure flags it for */
  sectors: string[];
  /** Related service page, where one exists */
  service?: string;
};

export const products: Product[] = [
  {
    slug: 'smart-switches-wifi',
    n: 1,
    name: 'Smart switches',
    qualifier: 'IoT · Wi-Fi',
    lane: 'comfort',
    line: 'The whole house on app and voice, with the wall switch still working.',
    features: [
      'Touch and remote control',
      'Mobile app control',
      'Voice control',
      'Timer and schedule',
      'Energy monitoring',
      'Safe and reliable',
    ],
    sectors: ['Homes', 'Hotels', 'Hospitals'],
    service: 'smart-switches',
  },
  {
    slug: 'touch-panel-zigbee',
    n: 2,
    name: 'Touch panels',
    qualifier: 'IoT · ZigBee',
    lane: 'comfort',
    line: 'Glass on the wall, scenes under your thumb, on a mesh that stays up.',
    features: [
      'Premium touch panels',
      'ZigBee technology',
      'Scene control',
      'Multi-device control',
      'Elegant design',
      'Secure and stable',
    ],
    sectors: ['Homes', 'Hotels'],
    service: 'smart-switches',
  },
  {
    slug: 'remote-control-switches',
    n: 3,
    name: 'Remote control light & fan switches',
    qualifier: 'For hotels and elderly care',
    lane: 'comfort',
    line: 'For anyone who should not have to cross a dark room to reach a switch.',
    features: [
      'Easy remote operation',
      'Elderly and patient friendly',
      'Long range',
      'Compact and stylish',
      'Plug and play',
    ],
    sectors: ['Hotels', 'Hospitals', 'Homes'],
  },
  {
    slug: 'ir-blaster',
    n: 4,
    name: 'IR blaster',
    qualifier: 'Universal remote',
    lane: 'comfort',
    line: 'Every remote in the house, gone — including the ones nobody can find.',
    features: [
      'Controls TV, AC and set top box',
      'Works with all brands',
      'Mobile app and voice control',
      'Wide IR coverage',
      'Easy installation',
    ],
    sectors: ['Homes', 'Hotels'],
    service: 'voice-and-app',
  },
  {
    slug: 'curtain-motors',
    n: 5,
    name: 'Curtain motors & custom track',
    lane: 'comfort',
    line: 'Quiet enough for a bedroom at 6am, which is the only test that matters.',
    features: [
      'Quiet and powerful motors',
      'Customised track systems',
      'App and remote control',
      'Manual override',
      'Suited to homes, hotels and hospitals',
    ],
    sectors: ['Homes', 'Hotels', 'Hospitals'],
    service: 'smart-curtains',
  },
  {
    slug: 'curtain-wall-switch',
    n: 6,
    name: 'Curtain wall switch',
    qualifier: 'Wi-Fi and voice',
    lane: 'comfort',
    line: 'Open, close, or stop halfway — from the wall, the app, or out loud.',
    features: [
      'Open and close via app',
      'Voice command support',
      'Schedule and timer',
      'Smooth and reliable',
    ],
    sectors: ['Homes', 'Hotels'],
    service: 'smart-curtains',
  },
  {
    slug: 'step-and-running-lights',
    n: 7,
    name: 'Stair step & running lights',
    lane: 'comfort',
    line: 'The stairs light themselves, ahead of you, at whatever hour.',
    features: [
      'Step lighting for safety',
      'Motion activated',
      'Energy efficient',
      'Stylish design',
      'Suited to homes, hotels and hospitals',
    ],
    sectors: ['Homes', 'Hotels', 'Hospitals'],
    service: 'room-scenes',
  },
  {
    slug: 'presence-sensors',
    n: 8,
    name: 'Presence & motion sensors',
    qualifier: 'PIR · IR · microwave',
    lane: 'control',
    line: 'A room that knows the difference between empty and still.',
    features: [
      'PIR motion sensors',
      'IR sensors',
      'Microwave sensors',
      'Real presence sensors',
      'High accuracy',
      'Energy saving',
    ],
    sectors: ['Homes', 'Hotels', 'Hospitals'],
    service: 'climate-and-environment',
  },
  {
    slug: 'pdlc-smart-film',
    n: 9,
    name: 'PDLC smart film',
    qualifier: 'Switchable glass',
    lane: 'control',
    line: 'Clear glass to opaque in a blink. Privacy without a curtain.',
    features: [
      'Instant privacy, on and off',
      'Switchable transparent to opaque',
      'UV protection',
      'Energy saving',
      'Suited to homes, hotels and offices',
    ],
    sectors: ['Homes', 'Hotels', 'Hospitals'],
  },
];

export const productBySlug = (slug: string) => products.find((p) => p.slug === slug);

/**
 * The three markets the brochure sells into. The site previously addressed
 * only the first, which left two revenue lines invisible.
 */
export type Sector = {
  slug: string;
  name: string;
  line: string;
  body: string;
  points: string[];
};

export const sectors: Sector[] = [
  {
    slug: 'homes',
    name: 'Homes',
    line: 'Smart, comfortable and secure living',
    body: 'Apartments and villas across Jaipur, retrofit or specified at first fix. Scenes designed room by room, and the wall switches keep working.',
    points: [
      'Retrofit without chiselling or repainting',
      'Scenes for morning, evening, film and away',
      'Curtains, climate and lighting on one instruction',
      'Manual override on every circuit',
    ],
  },
  {
    slug: 'hotels',
    name: 'Hotels',
    line: 'Better guest experience, lower running cost',
    body: 'Rooms that greet a guest correctly and cost nothing while empty. Presence sensing, welcome scenes, curtain control and switchable privacy glass.',
    points: [
      'Welcome scene on check-in',
      'Presence sensing so empty rooms stop drawing power',
      'Remote and bedside control for every guest',
      'PDLC privacy glass for bathrooms and suites',
    ],
  },
  {
    slug: 'hospitals',
    name: 'Hospitals',
    line: 'Hygiene, safety and energy management',
    body: 'Touchless and remote operation where reaching a switch is difficult or unhygienic, plus step lighting on every corridor and stair.',
    points: [
      'Remote switching for patients and elderly residents',
      'Motion-activated corridor and stair lighting',
      'Presence sensing to cut consumption in empty wards',
      'Touchless operation where hygiene matters',
    ],
  },
];
