/**
 * Case studies.
 *
 * Every entry is currently marked `sample: true` — the work described is
 * representative of what Infinita installs, but no entry is a specific
 * customer, and none carries an invented quote or testimonial. Pages render a
 * visible "Sample project" note while that flag is set, so nothing here can be
 * mistaken for a real reference.
 *
 * To publish a real one: replace the content, set `sample: false`, and the
 * note disappears by itself.
 *
 * What to capture on each finished job: the brief, the kit installed, the
 * timeline, and the actual spend. One honest project page with a real number
 * on it beats twenty stock photographs.
 */

export type Project = {
  slug: string;
  /** True until this is a real, named install with real photography. */
  sample: boolean;
  name: string;
  homeType: string;
  area: string;
  spend: string;
  duration: string;
  brief: string;
  installed: string[];
  scenes: { name: string; what: string }[];
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: 'two-bed-retrofit',
    sample: true,
    name: 'Two-bed retrofit',
    homeType: '2 BHK apartment',
    area: 'Mansarovar, Jaipur',
    spend: '₹82,000',
    duration: '2 days',
    brief:
      'A family already living in the flat, with no appetite for chiselled walls or repainting. Everything had to go in behind the existing switch plates over a weekend, and the switches had to keep working the way the grandparents were used to.',
    installed: [
      'Retrofit switch modules on all lighting and fan circuits',
      'A rated module for the bedroom air conditioner',
      'Voice control in the living room and main bedroom',
      'One app replacing the three that came with the devices',
    ],
    scenes: [
      { name: 'Good morning', what: 'Bedroom lights off, living room on, fan to low' },
      { name: 'Evening', what: 'Warm lighting at 60%, balcony light on at sunset' },
      { name: 'Leaving', what: 'Every load in the flat off from the front door' },
    ],
    outcome:
      'The scene that mattered most was not a lighting one. In a flat where somebody always wondered whether the geyser had been left on, one tap at the door settled it — worth more day to day than anything else in the install.',
  },
  {
    slug: 'three-bed-curtains-and-climate',
    sample: true,
    name: 'Three-bed, curtains and climate',
    homeType: '3 BHK apartment',
    area: 'Jagatpura, Jaipur',
    spend: '₹1,96,000',
    duration: '4 days',
    brief:
      'The owners wanted the curtains and the air conditioning to run themselves through a Jaipur summer. Bedrooms needed quiet motors — the tracks run directly above the beds, and anything audible at 6am would have been a mistake nobody could live with.',
    installed: [
      'Motorised tracks on seven windows, quiet motors in all three bedrooms',
      'Smart switches throughout',
      'Per-room climate control with temperature and humidity sensing',
      'Voice control in every room',
    ],
    scenes: [
      { name: 'Wake', what: 'Curtains open at 6:40, lights stay off' },
      { name: 'Afternoon', what: 'West-facing curtains close as the sun comes round' },
      { name: 'Movie', what: 'Lights to 20%, all curtains closed, AC down a degree' },
      { name: 'Away', what: 'Everything off, curtains closed, sensors armed' },
    ],
    outcome:
      'The afternoon curtain rule does the quiet work here. Closing the west-facing windows before the sun reaches them keeps the living room cooler through May and June, so the AC starts later and runs shorter — a saving that never needs anyone to remember anything.',
  },
  {
    slug: 'villa-new-build',
    sample: true,
    name: 'Villa, designed before the walls closed',
    homeType: 'Villa, new build',
    area: 'Vaishali Nagar, Jaipur',
    spend: '₹4,40,000',
    duration: '9 days across two site visits',
    brief:
      'Specified alongside the electrical contractor at the conduit stage, which meant deeper back boxes, a proper network rack, and power where the curtain motors would eventually go — so nothing had to be compromised after the fact.',
    installed: [
      'Full touch-panel switching across every room',
      'Motorised curtains and blinds throughout',
      'Whole-home climate and environment sensing',
      'Smart locks, video door phone and cameras',
      'A commissioning session with the whole family',
    ],
    scenes: [
      { name: 'Welcome', what: 'Door unlocks, entrance and hall lights on' },
      { name: 'Entertaining', what: 'Ground floor lit, curtains open, music zones on' },
      { name: 'Good night', what: 'Whole house down, bedrooms dimmed, entry armed' },
      { name: 'Away', what: 'Everything off, cameras on, one tap at the door' },
    ],
    outcome:
      'Specifying at first fix is what made this straightforward. The back boxes were already deep enough for panels, the curtain pockets already had power in them, and nothing needed opening up twice — which is the whole argument for talking to us before the plastering rather than after.',
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
