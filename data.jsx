// ===================================================================
// Joanne's Journey — DATA
// Edit this file to change flight history & destination cards.
// (Each destination has its own page in /destinations/ for deeper edits.)
// ===================================================================

// ───────────────────────────────────────────────────────────────────
// FLIGHTS — sourced from Flighty Passport. Currently hidden from the
// public site for privacy; kept so destination pages can reference real
// data and so this list can be re-enabled later.
// ───────────────────────────────────────────────────────────────────
const FLIGHTS = [
  // 2026
  { flt: 'WN 2898', from: 'LAX', to: 'SJC', fromCity: 'Los Angeles', toCity: 'San Jose',     airline: 'Southwest', date: 'May 9, 2026',  year: 2026 },
  { flt: 'JX 2',    from: 'TPE', to: 'LAX', fromCity: 'Taipei',      toCity: 'Los Angeles',  airline: 'Starlux',   date: 'Apr 1, 2026',  year: 2026 },
  { flt: 'TR 897',  from: 'ICN', to: 'TPE', fromCity: 'Seoul',       toCity: 'Taipei',       airline: 'Scoot',     date: 'Mar 28, 2026', year: 2026 },
  { flt: 'TR 896',  from: 'TPE', to: 'ICN', fromCity: 'Taipei',      toCity: 'Seoul',        airline: 'Scoot',     date: 'Mar 23, 2026', year: 2026 },
  { flt: 'MM 859',  from: 'HND', to: 'TPE', fromCity: 'Tokyo',       toCity: 'Taipei',       airline: 'Peach',     date: 'Feb 17, 2026', year: 2026 },
  { flt: 'NH 82',   from: 'CTS', to: 'HND', fromCity: 'Sapporo',     toCity: 'Tokyo',        airline: 'ANA',       date: 'Feb 6, 2026',  year: 2026 },
  { flt: 'MM 272',  from: 'OKA', to: 'CTS', fromCity: 'Okinawa',     toCity: 'Sapporo',      airline: 'Peach',     date: 'Feb 2, 2026',  year: 2026 },
  { flt: 'MM 926',  from: 'TPE', to: 'OKA', fromCity: 'Taipei',      toCity: 'Okinawa',      airline: 'Peach',     date: 'Jan 26, 2026', year: 2026 },
  { flt: 'TR 898',  from: 'SIN', to: 'TPE', fromCity: 'Singapore',   toCity: 'Taipei',       airline: 'Scoot',     date: 'Jan 23, 2026', year: 2026 },
  { flt: 'SL 102',  from: 'HKT', to: 'SIN', fromCity: 'Phuket',      toCity: 'Singapore',    airline: 'Lion Air',  date: 'Jan 22, 2026', year: 2026 },
  { flt: 'SL 762',  from: 'DMK', to: 'HKT', fromCity: 'Bangkok',     toCity: 'Phuket',       airline: 'Lion Air',  date: 'Jan 17, 2026', year: 2026 },
  { flt: 'SL 397',  from: 'TPE', to: 'DMK', fromCity: 'Taipei',      toCity: 'Bangkok',      airline: 'Lion Air',  date: 'Jan 15, 2026', year: 2026 },

  // 2025
  { flt: 'IT 603',  from: 'ICN', to: 'TPE', fromCity: 'Seoul',       toCity: 'Taipei',       airline: 'Tigerair',  date: 'Dec 3, 2025',  year: 2025 },
  { flt: 'TR 896',  from: 'TPE', to: 'ICN', fromCity: 'Taipei',      toCity: 'Seoul',        airline: 'Scoot',     date: 'Oct 22, 2025', year: 2025 },
  { flt: 'BR 17',   from: 'SFO', to: 'TPE', fromCity: 'San Francisco', toCity: 'Taipei',     airline: 'EVA Air',   date: 'Oct 21, 2025', year: 2025 },
  { flt: 'UA 552',  from: 'ORD', to: 'SJC', fromCity: 'Chicago',     toCity: 'San Jose',     airline: 'United',    date: 'Oct 15, 2025', year: 2025 },
  { flt: 'UA 2199', from: 'LGA', to: 'ORD', fromCity: 'New York',    toCity: 'Chicago',      airline: 'United',    date: 'Oct 15, 2025', year: 2025 },
  { flt: 'WN 977',  from: 'DEN', to: 'LGA', fromCity: 'Denver',      toCity: 'New York',     airline: 'Southwest', date: 'Sep 6, 2025',  year: 2025 },
  { flt: 'WN 1402', from: 'BUR', to: 'DEN', fromCity: 'Burbank',     toCity: 'Denver',       airline: 'Southwest', date: 'Sep 5, 2025',  year: 2025 },
];

// Airline brand colors — drives the row chip on the board
const AIRLINE_COLORS = {
  'Scoot':     '#F7D000',
  'Lion Air':  '#E11D2A',
  'Tigerair':  '#FF7900',
  'EVA Air':   '#1A8741',
  'United':    '#1E4FBA',
  'Southwest': '#F6B915',
  'Starlux':   '#A57C45',
  'ANA':       '#1F4DA1',
  'Peach':     '#E62D8B',
};

// ───────────────────────────────────────────────────────────────────
// PASSPORT BY YEAR — high-level aggregates only (no dates, no routes).
// Edit these numbers anytime; they're decoupled from the FLIGHTS array.
// ───────────────────────────────────────────────────────────────────
const YEAR_SUMMARY = [
  { year: 2026, flights: 12, countries: 7, miles: '40K' },
  { year: 2025, flights: 35, countries: 10, miles: '67K' },
  { year: 2024, flights: 38, countries: 6, miles: '28K' },
  { year: 2023, flights: 11, countries: 4, miles: '6K'  },
  { year: 2022, flights: 18, countries: 6, miles: '24K' },
  { year: 2021, flights: 8,  countries: 3, miles: '12K' },
  { year: 2020, flights: 4,  countries: 2, miles: '8K'  },
  { year: 2019, flights: 9,  countries: 3, miles: '14K' },
];

// Per-year country breakdown for the expandable year buttons.
// Order in each list is "most visited first" within that year.
const YEAR_COUNTRIES = {
  2026: [
    { code: 'TW', flag: '🇹🇼', name: 'Taiwan' },
    { code: 'KR', flag: '🇰🇷', name: 'South Korea' },
    { code: 'JP', flag: '🇯🇵', name: 'Japan' },
    { code: 'TH', flag: '🇹🇭', name: 'Thailand' },
    { code: 'SG', flag: '🇸🇬', name: 'Singapore' },
    { code: 'US', flag: '🇺🇸', name: 'United States' },
  ],
  2025: [
    { code: 'TW', flag: '🇹🇼', name: 'Taiwan' },
    { code: 'KR', flag: '🇰🇷', name: 'South Korea' },
    { code: 'JP', flag: '🇯🇵', name: 'Japan' },
    { code: 'US', flag: '🇺🇸', name: 'United States' },
    { code: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
    { code: 'IT', flag: '🇮🇹', name: 'Italy' },
    { code: 'SI', flag: '🇸🇮', name: 'Slovenia' },
    { code: 'NL', flag: '🇳🇱', name: 'Netherlands' },
    { code: 'ES', flag: '🇪🇸', name: 'Spain' },
    { code: 'DE', flag: '🇩🇪', name: 'Germany' },
    { code: 'HK', flag: '🇭🇰', name: 'Hong Kong' },
    { code: 'CN', flag: '🇨🇳', name: 'China' },
    { code: 'MO', flag: '🇲🇴', name: 'Macau' },
  ],
  2024: [
    { code: 'TW', flag: '🇹🇼', name: 'Taiwan' },
    { code: 'KR', flag: '🇰🇷', name: 'South Korea' },
    { code: 'JP', flag: '🇯🇵', name: 'Japan' },
    { code: 'TH', flag: '🇹🇭', name: 'Thailand' },
    { code: 'SG', flag: '🇸🇬', name: 'Singapore' },
    { code: 'VN', flag: '🇻🇳', name: 'Vietnam' },
    { code: 'US', flag: '🇺🇸', name: 'United States' },
    { code: 'NL', flag: '🇳🇱', name: 'Netherlands' },
    { code: 'CN', flag: '🇨🇳', name: 'China' },
  ],
  2023: [
    { code: 'TW', flag: '🇹🇼', name: 'Taiwan' },
    { code: 'KR', flag: '🇰🇷', name: 'South Korea' },
    { code: 'JP', flag: '🇯🇵', name: 'Japan' },
    { code: 'US', flag: '🇺🇸', name: 'United States' },
    { code: 'CA', flag: '🇨🇦', name: 'Canada' },
    { code: 'CN', flag: '🇨🇳', name: 'China' },
    { code: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  ],
  2022: [
    { code: 'US', flag: '🇺🇸', name: 'United States — LA & NYC' },
    { code: 'GB', flag: '🇬🇧', name: 'UK — London' },
    { code: 'FR', flag: '🇫🇷', name: 'France — Paris' },
    { code: 'DE', flag: '🇩🇪', name: 'Germany — Berlin' },
    { code: 'NL', flag: '🇳🇱', name: 'Netherlands — Amsterdam' },
    { code: 'IT', flag: '🇮🇹', name: 'Italy — Milan, Rome' },
  ],
  2021: [
    { code: 'US', flag: '🇺🇸', name: 'United States — Los Angeles' },
    { code: 'CA', flag: '🇨🇦', name: 'Canada — Toronto' },
    { code: 'TW', flag: '🇹🇼', name: 'Taiwan — Taipei, Tainan, Taichung' },
  ],
  2020: [
    { code: 'TW', flag: '🇹🇼', name: 'Taiwan — Taipei' },
    { code: 'US', flag: '🇺🇸', name: 'United States — San Francisco' },
  ],
  2019: [
    { code: 'TW', flag: '🇹🇼', name: 'Taiwan — Taipei' },
    { code: 'US', flag: '🇺🇸', name: 'United States — LA, San Francisco' },
    { code: 'KR', flag: '🇰🇷', name: 'South Korea — Seoul (first solo trip!)' },
  ],
};

// ───────────────────────────────────────────────────────────────────
// DESTINATIONS — ordered by visit count (most visited first)
// ───────────────────────────────────────────────────────────────────
const DESTINATIONS = [
  {
    slug: 'taipei', name: 'Taipei',     country: 'Taiwan',      flag: '🇹🇼',
    code: 'TPE', visits: 22, lastVisit: 'Mar 2026',
    summary: 'Current home base. The night-market homework I\'ve been doing for years.',
    vibe: ['Night markets', 'Bubble tea OG', 'Hot pot', 'Allergy-friendly'],
    color: '#ff7a3d',
  },
  {
    slug: 'seoul', name: 'Seoul',       country: 'South Korea', flag: '🇰🇷',
    code: 'ICN', visits: 18, lastVisit: 'Mar 2026',
    summary: 'KBBQ is a minefield. Here\'s where I actually eat — and what to skip.',
    vibe: ['Cafés', 'KBBQ (carefully)', 'K-beauty', '24/7 city'],
    color: '#7b61ff',
    published: true,
  },
  {
    slug: 'los-angeles', name: 'Los Angeles', country: 'USA',   flag: '🇺🇸',
    code: 'LAX', visits: 11, lastVisit: 'Apr 2026',
    summary: 'Where the allergy menu is normal. Tacos, dim sum, and a lot of driving.',
    vibe: ['Tacos', 'Coffee', 'Hikes', 'Sunset drives'],
    color: '#d6c39f',
  },
  {
    slug: 'tainan', name: 'Tainan',     country: 'Taiwan',      flag: '🇹🇼',
    code: 'TNN', visits: 6, lastVisit: '2025',
    summary: 'The oldest food city in Taiwan. Beef soup at dawn, danzai noodles at noon, milkfish congee at midnight.',
    vibe: ['Beef soup', 'Old town', 'Temples', 'Slow pace'],
    color: '#f4c25a',
  },
  {
    slug: 'san-francisco', name: 'San Francisco', country: 'USA', flag: '🇺🇸',
    code: 'SFO', visits: 7, lastVisit: 'Apr 2026',
    sub: 'incl. Bay Area',
    summary: 'Foggy mornings, dim sum in the Sunset, the Ferry Building, and Bay Area allergy menus that take it seriously.',
    vibe: ['Dim sum', 'Bay Area', 'Coastal hikes', 'Coffee'],
    color: '#ff7a3d',
  },
  {
    slug: 'tokyo', name: 'Tokyo',       country: 'Japan',       flag: '🇯🇵',
    code: 'HND', visits: 8, lastVisit: 'Feb 2026',
    summary: 'A city that secretly wants to feed me — once they understand the allergy card.',
    vibe: ['Allergy cards', 'Standing sushi (no)', 'Tonkatsu', 'Coffee'],
    color: '#e0344c',
  },
  {
    slug: 'keelung', name: 'Keelung',   country: 'Taiwan',      flag: '🇹🇼',
    code: 'KEL', visits: 5, lastVisit: '2025',
    summary: 'Port city north of Taipei. Miaokou night market is my favorite — less seafood than you\'d guess, more pork.',
    vibe: ['Miaokou night market', 'Harbor', 'Day trip', 'Stinky tofu'],
    color: '#6fb0d6',
  },
  {
    slug: 'taichung', name: 'Taichung', country: 'Taiwan',      flag: '🇹🇼',
    code: 'RMQ', visits: 4, lastVisit: '2025',
    summary: 'Where bubble tea was invented. Coffee shops with second-wave-on-purpose energy. Mid-island energy.',
    vibe: ['Bubble tea birthplace', 'Cafés', 'Rainbow village', 'Slow food'],
    color: '#9fe870',
  },
  {
    slug: 'busan', name: 'Busan',       country: 'South Korea', flag: '🇰🇷',
    code: 'PUS', visits: 4, lastVisit: '2024',
    sub: 'incl. Pohang',
    summary: 'Beach Korea. Hot-pink fish markets to avoid, Haeundae beach to live on, jjimjilbangs at midnight. Pohang sunrise as a day trip.',
    vibe: ['Haeundae', 'Beach', 'Workcation', 'Day-trip Pohang'],
    color: '#f08fc4',
  },
  {
    slug: 'london', name: 'London',     country: 'Europe',      flag: '🇬🇧',
    code: 'LGW', visits: 3, lastVisit: 'May 2025',
    summary: 'Hub of the EuroSummer. Allergen labels are mandatory — easiest city on the continent.',
    vibe: ['Allergen-labeled', 'Markets', 'Parks', 'Theatre'],
    color: '#c6a3ff',
  },
  {
    slug: 'osaka', name: 'Osaka',       country: 'Japan',       flag: '🇯🇵',
    code: 'KIX', visits: 3, lastVisit: 'Dec 2024',
    sub: 'incl. Nara',
    summary: 'Takoyaki, okonomiyaki, kushikatsu — Osaka eats louder than Tokyo. Nara as a day trip for the deer + the giant Buddha.',
    vibe: ['Dotonbori', 'Street food', 'Nara deer', 'Late-night'],
    color: '#ff7a3d',
  },
  {
    slug: 'okinawa', name: 'Okinawa',   country: 'Japan',       flag: '🇯🇵',
    code: 'OKA', visits: 2, lastVisit: 'Feb 2026',
    summary: 'Slow island Japan — quieter beaches, taco rice, and shisa lions on every roof.',
    vibe: ['Beach days', 'Taco rice', 'Awamori', 'Snorkeling'],
    color: '#6fb0d6',
  },
  {
    slug: 'bangkok', name: 'Bangkok',   country: 'Thailand',    flag: '🇹🇭',
    code: 'DMK', visits: 2, lastVisit: 'Jan 2026',
    summary: 'A 37-allergy boss fight. Bring printed cards. Bring an EpiPen. Eat well anyway.',
    vibe: ['Street food (careful)', 'Massages', 'Tuk-tuks', 'Markets'],
    color: '#f4c25a',
  },
  {
    slug: 'phuket', name: 'Phuket',     country: 'Thailand',    flag: '🇹🇭',
    code: 'HKT', visits: 2, lastVisit: 'Jan 2026',
    summary: 'Beach time + a surprisingly long list of safe places to eat.',
    vibe: ['Beaches', 'Long-tail boats', 'Sunsets', 'Mango sticky rice'],
    color: '#5fcf80',
  },
  {
    slug: 'singapore', name: 'Singapore', country: 'Singapore', flag: '🇸🇬',
    code: 'SIN', visits: 2, lastVisit: 'Jan 2026',
    summary: 'Strict labeling, English everywhere — easy mode for allergies, almost.',
    vibe: ['Hawker centers', 'Botanic gardens', 'Bookstores', 'Library cafés'],
    color: '#f08fc4',
  },
  {
    slug: 'hualian', name: 'Hualien',   country: 'Taiwan',      flag: '🇹🇼',
    code: 'HUN', visits: 2, lastVisit: '2025',
    summary: 'East coast Taiwan. Taroko Gorge is the headline; the mochi shops are the secret.',
    vibe: ['Taroko Gorge', 'Cliff drives', 'Mochi', 'Hot springs'],
    color: '#5fcf80',
  },
  {
    slug: 'new-york', name: 'New York', country: 'USA',         flag: '🇺🇸',
    code: 'LGA', visits: 2, lastVisit: 'Oct 2025',
    summary: 'Allergy-card heaven — half of NYC menus already have the icons.',
    vibe: ['Bagels (no schmear)', 'Walking', 'Museums', 'Late-night'],
    color: '#c6a3ff',
  },
  {
    slug: 'chicago', name: 'Chicago',   country: 'USA',         flag: '🇺🇸',
    code: 'ORD', visits: 2, lastVisit: 'Oct 2025',
    summary: 'Lakefront laps + a deep-dish I could finally eat.',
    vibe: ['Lakefront', 'Architecture', 'Deep-dish', 'Jazz'],
    color: '#6fb0d6',
  },
  {
    slug: 'ljubljana', name: 'Ljubljana', country: 'Europe',    flag: '🇸🇮',
    code: 'LJU', visits: 2, lastVisit: 'May 2025',
    summary: 'The under-the-radar capital. Riverside cafés, mountains an hour away, almost no tourists.',
    vibe: ['River walks', 'Castle', 'Day trips', 'Quiet'],
    color: '#9fe870',
  },
  {
    slug: 'amsterdam', name: 'Amsterdam', country: 'Europe',    flag: '🇳🇱',
    code: 'AMS', visits: 2, lastVisit: 'May 2025',
    sub: 'incl. Maastricht',
    summary: 'Canals, bike lanes, and chains with EU allergen icons on every menu.',
    vibe: ['Bikes', 'Canals', 'Museums', 'EU labels'],
    color: '#6fb0d6',
  },
  {
    slug: 'rome', name: 'Rome',         country: 'Europe',      flag: '🇮🇹',
    code: 'FCO', visits: 2, lastVisit: 'May 2025',
    summary: 'Cacio e pepe, walkable ruins, the best gelato of my life. Italian kitchens take allergies seriously.',
    vibe: ['Cacio e pepe', 'Walking', 'Ruins', 'Gelato'],
    color: '#ff7a3d',
  },
  {
    slug: 'shanghai', name: 'Shanghai', country: 'China',       flag: '🇨🇳',
    code: 'PVG', visits: 2, lastVisit: 'Jan 2025',
    summary: 'Bund skyline, xiaolongbao at every corner, the most Western-trained kitchens in mainland China.',
    vibe: ['Xiaolongbao', 'Bund walks', 'Coffee', 'Allergy-aware'],
    color: '#ef6464',
  },
  {
    slug: 'kyoto', name: 'Kyoto',       country: 'Japan',       flag: '🇯🇵',
    code: 'UKY', visits: 2, lastVisit: 'Dec 2024',
    summary: 'Temple-walks at sunrise, tea ceremonies, the best matcha-things (which I sadly can\'t eat). The walking-est Japanese city.',
    vibe: ['Temples', 'Bamboo grove', 'Geisha district', 'Slow days'],
    color: '#9fe870',
  },
  {
    slug: 'hokkaido', name: 'Hokkaido', country: 'Japan',       flag: '🇯🇵',
    code: 'CTS', visits: 1, lastVisit: 'Feb 2026',
    sub: 'incl. Sapporo & Otaru',
    summary: 'Powder-snow Japan. Sapporo for soup curry + the snow festival, Otaru for canals and music boxes.',
    vibe: ['Snow', 'Soup curry', 'Onsen', 'Otaru canals'],
    color: '#9fe870',
  },
  {
    slug: 'kanazawa', name: 'Kanazawa', country: 'Japan',       flag: '🇯🇵',
    code: 'KMQ', visits: 1, lastVisit: '2025',
    sub: 'incl. Shirakawa-go',
    summary: 'Edo-period gem on the Sea of Japan. Gold-leaf everything. Side trip to Shirakawa-go thatched-roof village.',
    vibe: ['Kenrokuen', 'Gold leaf', 'Shirakawa-go', 'Sake'],
    color: '#d6c39f',
  },
  {
    slug: 'toronto', name: 'Toronto', country: 'Canada', flag: '🇨🇦',
    code: 'YYZ', visits: 1, lastVisit: 'Jul 2025',
    summary: 'Multi-cultural food capital. Allergen-aware kitchens at most sit-downs. Excellent transit and walkable downtown.',
    vibe: ['Multicultural food', 'Coffee', 'Lake walks', 'Walkable'],
    color: '#c6a3ff',
  },
  {
    slug: 'venice', name: 'Venice',     country: 'Europe',      flag: '🇮🇹',
    code: 'VCE', visits: 1, lastVisit: 'May 2025',
    summary: 'Skip the gondolas, walk every alley, eat cicchetti at the wine bars at 6pm sharp.',
    vibe: ['Cicchetti', 'Wine bars', 'Walking', 'No cars'],
    color: '#6fb0d6',
  },
  {
    slug: 'florence', name: 'Florence', country: 'Europe',      flag: '🇮🇹',
    code: 'FLR', visits: 1, lastVisit: 'May 2025',
    sub: 'incl. Pisa',
    summary: 'Renaissance city, perfect for walking. Florentine steak is the splurge dinner.',
    vibe: ['Renaissance art', 'Bistecca', 'Walking', 'Ponte Vecchio'],
    color: '#f4c25a',
  },
  {
    slug: 'naples', name: 'Naples',     country: 'Europe',      flag: '🇮🇹',
    code: 'NAP', visits: 1, lastVisit: 'May 2025',
    sub: 'incl. Amalfi Coast',
    summary: 'Birthplace of pizza. Loud, chaotic, untranslated — and the most delicious base in Italy.',
    vibe: ['Pizza', 'Chaos', 'Pompeii day trip', 'Espresso'],
    color: '#5fcf80',
  },
  {
    slug: 'fukuoka', name: 'Fukuoka',   country: 'Japan',       flag: '🇯🇵',
    code: 'FUK', visits: 1, lastVisit: 'Mar 2025',
    summary: 'Tonkotsu ramen capital. Yatai (open-air food stalls) along the river at night.',
    vibe: ['Tonkotsu', 'Yatai', 'Hakata', 'Quick stop'],
    color: '#e0344c',
  },
  {
    slug: 'pacific-coast-highway', name: 'Pacific Coast Hwy', country: 'USA', flag: '🌊',
    code: 'PCH', visits: 1, lastVisit: '2024',
    sub: 'CA road trip',
    summary: 'San Francisco to LA via Highway 1. Big Sur, Hearst Castle, Pismo. Not a city — but the road trip every Californian should do once.',
    vibe: ['Road trip', 'Big Sur', 'Sunset cliffs', 'Pull-overs'],
    color: '#6fb0d6',
  },
  {
    slug: 'kenting', name: 'Kenting',   country: 'Taiwan',      flag: '🇹🇼',
    code: 'KTG', visits: 1, lastVisit: '2024',
    summary: 'Southern beach town. Spring Scream, surfing, the warmest water in Taiwan.',
    vibe: ['Beach', 'Surf', 'Music festivals', 'Slow'],
    color: '#f08fc4',
  },
];

// ───────────────────────────────────────────────────────────────────
// STATS — top strip
// ───────────────────────────────────────────────────────────────────
const STATS = [
  { num: '96',      label: 'Flights',          delta: 'Since Jan 2023' },
  { num: '141,703', suffix: 'mi', label: 'Distance flown', delta: '~5.7× equator' },
  { num: '40',      label: 'Airports',         delta: '29 airlines' },
  { num: '14d 13h', label: 'Hours aloft',      delta: '≈ 2 work weeks' },
];

// Countries visited (from the Flighty passport)
const COUNTRIES = [
  { code: 'TW', flag: '🇹🇼', name: 'Taiwan' },
  { code: 'KR', flag: '🇰🇷', name: 'South Korea' },
  { code: 'US', flag: '🇺🇸', name: 'United States' },
  { code: 'JP', flag: '🇯🇵', name: 'Japan' },
  { code: 'CN', flag: '🇨🇳', name: 'China' },
  { code: 'CA', flag: '🇨🇦', name: 'Canada' },
  { code: 'GB', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'TH', flag: '🇹🇭', name: 'Thailand' },
  { code: 'SG', flag: '🇸🇬', name: 'Singapore' },
  { code: 'VN', flag: '🇻🇳', name: 'Vietnam' },
  { code: 'NL', flag: '🇳🇱', name: 'Netherlands' },
  { code: 'SI', flag: '🇸🇮', name: 'Slovenia' },
  { code: 'HK', flag: '🇭🇰', name: 'Hong Kong' },
  { code: 'DE', flag: '🇩🇪', name: 'Germany' },
  { code: 'ES', flag: '🇪🇸', name: 'Spain' },
  { code: 'IT', flag: '🇮🇹', name: 'Italy' },
];

const LOUNGES = [
  { ap: 'SFO', name: 'Centurion Lounge', score: 4.5 },
  { ap: 'TPE', name: 'EVA The Star', score: 4.8 },
  { ap: 'ICN', name: 'Asiana Business', score: 4.0 },
  { ap: 'HND', name: 'ANA Suite', score: 4.7 },
  { ap: 'SIN', name: 'SilverKris', score: 4.6 },
  { ap: 'BKK', name: 'Royal Silk', score: 4.3 },
];

const CARDS = [
  { name: 'Chase Sapphire Reserve', perk: '3× DINING / TRAVEL' },
  { name: 'Amex Platinum', perk: 'CENTURION ACCESS' },
  { name: 'Capital One Venture X', perk: 'PRIORITY PASS' },
  { name: 'Citi Strata Premier', perk: '10× HOTELS' },
];

// ───────────────────────────────────────────────────────────────────
// FINANCE — credit cards, points strategy, money tips
// ───────────────────────────────────────────────────────────────────
const FINANCE_CARDS = [
  {
    name: 'Chase Sapphire Reserve®',
    issuer: 'Chase',
    annualFee: '$795',
    color: '#304CB2',
    badge: 'Travel driver',
    perks: ['3× points on dining', '$300 credit (on anything travel!)', 'Primary insurance (Terms apply)', 'Priority Pass & many other credits'],
    why: 'My go-to for anything travel. Great insurance coverage. I went from Preferred to Reserve before the change in benefits — unfortunately just 1× on other travel, but! still has many good benefits and these cover the annual fee.',
    link: '',
  },
  {
    name: 'Citi Strata Elite℠ Card',
    issuer: 'Citi',
    annualFee: '$595',
    color: '#003B70',
    badge: 'Heavy dining card',
    perks: ['1.5× back on everything', '6× dining (Fri & Sat, 6 PM–6 AM ET)', 'No foreign transaction fees', '$200 Annual Splurge Credit (and more)'],
    why: 'Citi’s premium card. Best for AA flyers and hotel bookers. Strong dining multiplier on weekend nights and works in favor of Asia with full weekend dining as well as no foreign fee!',
    link: '',
  },
  {
    name: 'Southwest Rapid Rewards® Plus Credit Card',
    issuer: 'Chase × Southwest',
    annualFee: '$99',
    color: '#1b3a5e',
    badge: 'Domestic flights',
    perks: ['2× Southwest flights', '3,000 anniversary points', 'Free first checked bag', 'No foreign transaction fees'],
    why: 'I use it for domestic Southwest flights — the sign-up bonus points basically means free flights, Southwest has great perks, and the card gives free bags now that they aren\u2019t free :\u2019)',
    link: '',
  },
  {
    name: 'Chase Freedom Unlimited®',
    issuer: 'Chase',
    annualFee: 'No fee',
    color: '#0070ba',
    badge: 'No annual fee',
    perks: ['1.5× everything', '3× drugstores', 'Pair with Sapphire to transfer points', { text: 'Has foreign transaction fees', neg: true }],
    why: 'My beginner-friendly recommendation. Pair it with a Sapphire later and your points transfer up. I only use this in the states — truthfully I don’t reach for this card often, but it’s nice to have in the beginning.',
    link: '',
  },
];

const FINANCE_TIPS = [
  {
    title: 'Having more than one card',
    short: 'Rotate so spending stays under 30% of each limit.',
    body: 'I have 10 cards total right now and I always rotate between them so my spending is less than 30% of any one card’s limit. Better for your credit score!',
  },
  {
    title: 'Offer to pay with friends',
    short: 'Take the bill, earn the points.',
    body: 'When I’m out at a group dinner, no one wants to pay that big bill. Always offer! 5 min of hassle to split the bill — but many “FREE” points for “FREE” travel :)',
  },
  {
    title: '5/24 rule',
    short: 'Open Chase cards FIRST.',
    body: 'Chase blocks approval if you opened 5 cards (any issuer) in 24 months. Open Chase cards first, then Amex/Citi/Capital One. Order matters.',
  },
];

const FINANCE_LINKS = [
  { label: 'Find my travel / everyday / beginner cards here!', url: 'https://go.nextcard.com/joanne-s-favorite-cards-ko4em4dwebsite', subtitle: 'All my recommended cards in one place — via NextCard' },
  { label: 'Got a card question? DM me.', url: 'https://www.instagram.com/joanneffan/', subtitle: '@joanneffan on Instagram — fastest way to reach me' },
];

const APPS = [
  { name: 'Klook', tag: 'Tours & passes', desc: 'Best for ticket booking, tours, trains and many more. Code ‘JOANNEKLOOK’ for up to 10% off ;)', color: '#FF5A5F', logoUrl: 'https://logo.clearbit.com/klook.com', initials: 'KL', url: 'https://s.klook.com/c/4yV65BOY36' },
  { name: 'Kulli Kulli', tag: 'Food translator', desc: 'Photo-translates restaurant menus + ingredient lists into English. Lifesaver in Japan and Korea for spotting allergens.', color: '#F4A261', logoUrl: 'https://logo.clearbit.com/kullikulli.app', initials: 'KK', url: 'https://kulikuli.app/?lng=en' },
  { name: 'Flighty', tag: 'Flight tracking', desc: 'My passport for the website. Auto-logs every flight from boarding pass scans + live delay predictions.', color: '#0080FF', logoUrl: 'https://logo.clearbit.com/flightyapp.com', initials: 'FL', url: 'https://www.flightyapp.com/' },
  { name: 'NomadHer', tag: 'Solo female travel', desc: 'Where I meet other solo women travelers in every city. Verified-women-only community + tips that actually understand the safety angle.', color: '#0EA5B7', logoUrl: 'https://logo.clearbit.com/nomadher.com', initials: 'NH', url: 'https://www.nomadher.com/' },
  { name: 'Hostelworld', tag: 'Solo-travel stays', desc: 'How I book hostels solo — honest reviews and solo-traveler filters that actually work. It’s how I meet people and find the local spots on every trip.', color: '#FF7A00', logoUrl: 'https://logo.clearbit.com/hostelworld.com', initials: 'HW', url: 'https://prf.hn/l/debmnXq/' },
  { name: 'Agoda', tag: 'Hotel booking', desc: 'Best Asia hotel rates by a wide margin. The deals in Taiwan and Thailand consistently beat Booking and Expedia.', color: '#FF1F4E', logoUrl: 'https://logo.clearbit.com/agoda.com', initials: 'AG', url: 'https://www.agoda.com' },
  { name: 'Skyscanner', tag: 'Flight search', desc: 'I always use this website to check for flights across different airlines and dates — the "whole month" view is a game changer for finding the cheapest window to fly.', color: '#0770E3', logoUrl: 'https://logo.clearbit.com/skyscanner.net', initials: 'SK', url: 'https://skyscanner.pxf.io/AW2ZG7' },
  { name: 'Splitwise', tag: 'Group trip spending', desc: 'Great site/app to help break down spending with friends on trips. Free version covers the basics; paid unlocks more. The way the group dinner math actually gets resolved.', color: '#2EA44F', logoUrl: 'https://logo.clearbit.com/splitwise.com', initials: 'SW', url: 'https://www.splitwise.com/' },
];

// ─────────────────────────────────────────────────────────────────
// CARD OPTIMIZER — what to swipe for which purchase
// ─────────────────────────────────────────────────────────────────
const OPTIMIZER_GROUPS = [
  {
    key: 'flights', label: 'Flights', emoji: '✈️',
    options: [
      { label: 'General flights', pick: 'Chase Sapphire Reserve / Preferred', rate: '4× / 2× points',
        why: 'Chase Sapphire Reserve earns 4× on flights booked directly with airlines. Chase Sapphire Preferred earns 2× on general travel purchases, including flights booked directly with an airline.' },
      { label: 'via Chase Travel portal', pick: 'Chase Sapphire Reserve', rate: 'Up to 8× points',
        why: 'Up to 8× on flights booked through the Chase Travel portal — my highest flight multiplier.' },
      { label: 'via Citi Travel portal', pick: 'Citi Strata Elite', rate: '6× points',
        why: '6× per $1 on air travel booked through the Citi Travel portal.' },
      { label: 'United Airlines', pick: 'United Explorer Card', rate: 'Up to 9× points',
        why: 'Up to 9× total miles on eligible United flights as a MileagePlus member (6× from United + 3× on the entire purchase with the card). Includes free first checked bag, priority boarding, 2 United Club passes/yr, no foreign transaction fees. $0 intro annual fee, then $150.' },
      { label: 'Southwest', pick: 'Southwest Rapid Rewards Plus', rate: '2× points',
        why: 'Earns Rapid Rewards + free first checked bag on the booking.' },
    ],
  },
  {
    key: 'hotels', label: 'Hotels', emoji: '🏨',
    options: [
      { label: 'Booked direct', pick: 'Chase Sapphire Reserve', rate: '4× points',
        why: '4× on direct hotel bookings (non-portal), plus primary travel insurance.' },
      { label: 'via Citi Travel portal', pick: 'Citi Strata Elite', rate: '12× points',
        why: '12× per $1 on hotels, car rentals, and attractions booked through Citi Travel. Best hotel multiplier in my stack.' },
      { label: 'via Chase Travel portal', pick: 'Chase Sapphire Reserve', rate: 'Up to 8× points',
        why: 'Up to 8× on hotels booked through Chase Travel.' },
    ],
  },
  {
    key: 'dining', label: 'Dining', emoji: '🍽️',
    options: [
      { label: 'US (everyday)', pick: 'Chase Sapphire Reserve', rate: '3× points',
        why: '3× points on everyday dining.' },
      { label: 'Fri / Sat night', pick: 'Citi Strata Elite', rate: '6× points',
        why: 'Friday + Saturday night dining (6 PM–6 AM ET) is the highest dining multiplier of any card I carry.' },
      { label: 'Abroad', pick: 'Citi Strata Elite', rate: 'No FX fee',
        why: 'No foreign transaction fees. The 6× weekend dining window (Fri & Sat, 6 PM–6 AM ET) applies abroad too; outside that window it earns the base rate.' },
    ],
  },
  {
    key: 'majority-travel', label: 'Majority travel purchases', emoji: '🧳',
    options: [
      { label: 'My default for most travel', pick: 'Chase Sapphire Reserve', rate: 'Best overall',
        why: 'The insurance and travel points are better. I would also rather stack points on the Chase Points system for better conversion rates.' },
    ],
  },
  {
    key: 'abroad', label: 'Anything abroad', emoji: '🌏',
    options: [
      { label: 'Any other purchases outside of USA', pick: 'Citi Strata Elite', rate: 'No FX fee',
        why: 'Zero foreign transaction fees + still earns category points.' },
    ],
  },
  {
    key: 'everyday', label: 'Everyday spending', emoji: '🛒',
    options: [
      { label: 'Groceries', pick: 'Chase Freedom Unlimited / Southwest Plus', rate: '1.5× / 2×',
        why: 'Chase Freedom Unlimited as the everyday catch-all (1.5×). Southwest Rapid Rewards Plus also earns 2× back on the first $5,000 in combined purchases at gas stations and grocery stores per year + free first checked bag perk. (Note: Freedom has foreign transaction fees; Southwest does not.)' },
      { label: 'Drugstore / pharmacy', pick: 'Chase Freedom Unlimited', rate: '3× points',
        why: 'Drugstore bonus on the Freedom; no annual fee to justify.' },
      { label: 'Everything else', pick: 'Citi Strata Elite', rate: '1.5× back (no FX fee)',
        why: 'Flat 1.5× on uncategorized spending beats my other 1× options — and no foreign transaction fees if you happen to swipe it abroad.' },
    ],
  },
];

window.JJ_DATA = { FLIGHTS, AIRLINE_COLORS, DESTINATIONS, STATS, COUNTRIES, LOUNGES, CARDS, APPS, YEAR_SUMMARY, YEAR_COUNTRIES, FINANCE_CARDS, FINANCE_TIPS, FINANCE_LINKS, OPTIMIZER_GROUPS };
