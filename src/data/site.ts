/**
 * Every business-specific value lives here so copy changes never require
 * touching a template. Anything marked TODO is waiting on an answer from
 * the client — see the "What I need from you" section of docs/plan.html.
 */

export const site = {
  name: 'Freedom Infinity',
  tagline: 'Smart living. Limitless possibilities.',
  /** Used in the header lockup, stacked over two lines */
  wordmark: ['Freedom', 'Infinity'],
  description:
    'Smart switches, motorised curtains, room scenes, climate and voice control — designed room by room and installed in days, not weeks.',

  phone: '+91 92143 14348',
  phoneHref: 'tel:+919214314348',
  whatsapp: '919214314348',
  // TODO: real address once a domain and mailbox exist.
  // The brochure lists freedominfinityautomation.com as the live site.
  // TODO: confirm this mailbox exists before launch.
  email: 'hello@freedominfinityautomation.com',

  // Add a city here only once you will genuinely send a van to it — a thin
  // page per city hurts local search more than it helps.
  cities: ['Jaipur'],
};

/** Pre-fills the WhatsApp message with the page the visitor was reading. */
export function whatsappLink(context?: string) {
  const msg = context
    ? `Hi, I'm looking at ${context} and would like an estimate.`
    : `Hi, I'd like an estimate for home automation.`;
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
}

/**
 * The credibility strip.
 *
 * Deliberately built from COMMITMENTS rather than vanity metrics. "200 homes
 * completed" is the industry convention and it is unverifiable — putting a
 * number we cannot stand behind on a live site is a liability, not a trust
 * signal. Everything below is a promise Freedom Infinity controls and already makes
 * elsewhere on the site, so the two can never contradict each other.
 *
 * When there ARE real numbers — homes finished, years trading — add them to
 * `metrics` and they render alongside. An empty array renders nothing.
 */
export const commitments = [
  { value: '2–4', unit: 'days', label: 'On site for a typical home' },
  { value: '24', unit: 'hours', label: 'On site if the house is not usable' },
  { value: '1', unit: 'year', label: 'Warranty, and we handle the brands' },
  { value: '₹0', unit: '', label: 'Survey before any quote' },
];

/** Real, verifiable counts. Add when you have them; renders only if non-empty. */
export const metrics: { value: string; unit: string; label: string }[] = [];

/**
 * Stage of construction — the single highest-leverage question on the site.
 *
 * Automation sales are gated by construction stage: a lead at "electrical in
 * progress" is worth an order of magnitude more than one at "ready to move",
 * and it is a completely different sales conversation. `qualified` marks the
 * stages where we can still influence the wiring, which is the definition the
 * enquiry KPI should be measured against — not total form fills.
 */
export const stages = [
  { id: 'planning', label: 'Planning or design', qualified: false },
  { id: 'civil', label: 'Civil work underway', qualified: true },
  { id: 'electrical', label: 'Electrical in progress', qualified: true },
  { id: 'interiors', label: 'Interiors in progress', qualified: true },
  { id: 'handover', label: 'Close to handover', qualified: false },
  { id: 'living', label: 'Already living here', qualified: false },
];

export type Package = {
  id: string;
  name: string;
  fits: string;
  price: string;
  blurb: string;
  includes: string[];
};

// Indicative pricing, set against published Indian market benchmarks
// (1BHK ~Rs 80k, 2BHK ~Rs 1.3L, 3BHK ~Rs 1.8L for a core scope). Confirm
// against real job costings before any spend is driven at these pages.
export const packages: Package[] = [
  {
    id: 'essential',
    name: 'Essential',
    fits: '1BHK / 2BHK',
    price: 'from ₹74,000',
    blurb:
      'The core of a smart home without touching a wall. Retrofits into your existing wiring — no chiselling, no repainting.',
    includes: [
      'Smart switches on the main circuits',
      'Alexa and Google voice control',
      'One app for the whole house',
      'Three scenes configured on handover',
    ],
  },
  {
    id: 'comfort',
    name: 'Comfort',
    fits: '2BHK / 3BHK',
    price: 'from ₹1,45,000',
    blurb:
      'Everything in Essential, plus the parts of the house that move and breathe — curtains, climate and the sensors that drive them.',
    includes: [
      'Everything in Essential',
      'Motorised curtains and blinds',
      'Per-room climate and fan control',
      'Temperature, humidity and air quality sensing',
      'Scenes that run themselves on time and conditions',
    ],
  },
  {
    id: 'whole-home',
    name: 'Whole home',
    fits: 'Villa / new build',
    price: 'from ₹3,20,000',
    blurb:
      'Designed alongside your electrical contractor before the walls close, so nothing is a compromise afterwards.',
    includes: [
      'Everything in Comfort',
      'Full-home design with your electrician',
      'Every room scened',
      'Smart locks, cameras and entry',
      'A commissioning session with the family',
    ],
  },
];

export type Scene = {
  id: string;
  label: string;
  voice: string;
  desc: string;
  /** 0–1 artificial light level */
  level: number;
  /** how far the curtains are drawn back: 0% = closed, 100% = fully open */
  curtain: string;
  /** 0–1 daylight outside the window */
  sky: number;
  /** warm-to-cool glow colour */
  glow: string;
  readout: { lights: string; curtains: string; climate: string; status: string };
};

export const scenes: Scene[] = [
  {
    id: 'morning',
    label: 'Morning',
    voice: '"Alexa, good morning"',
    desc: 'Curtains open at 6:40. Lights stay off — there is enough sun.',
    level: 0.12,
    curtain: '86%',
    sky: 1.0,
    glow: '#FFE7B8',
    readout: { lights: 'Off', curtains: 'Open', climate: '26°C', status: 'Home' },
  },
  {
    id: 'evening',
    label: 'Evening',
    voice: '"Alexa, good evening"',
    desc: 'Warm light at sixty percent, curtains half drawn, AC holding twenty-four.',
    level: 0.62,
    curtain: '46%',
    sky: 0.45,
    glow: '#FFC978',
    readout: { lights: '60%', curtains: 'Half', climate: '24°C', status: 'Home' },
  },
  {
    id: 'movie',
    label: 'Movie',
    voice: '"Alexa, movie time"',
    desc: 'Lights to twenty percent, curtains fully closed, AC down a degree.',
    level: 0.2,
    curtain: '4%',
    sky: 0.1,
    glow: '#FF9E5E',
    readout: { lights: '20%', curtains: 'Closed', climate: '23°C', status: 'Do not disturb' },
  },
  {
    id: 'away',
    label: 'Away',
    voice: '"Alexa, I am leaving"',
    desc: 'Every load off, curtains closed, sensors armed. One tap at the door.',
    level: 0.03,
    curtain: '8%',
    sky: 0.18,
    glow: '#7FA6C4',
    readout: { lights: 'Off', curtains: 'Closed', climate: 'Off', status: 'Armed' },
  },
];
