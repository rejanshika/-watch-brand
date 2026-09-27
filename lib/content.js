// ─────────────────────────────────────────────────────────────
// Single source of truth for all copy + asset paths (IST 1947).
// Content is the brand's real content (ist1947.com + provided data).
// Edit any text / swap any asset right here.
// ─────────────────────────────────────────────────────────────

export const brand = {
  name: "IST 1947",
  tagline: "Watches Inspired by the Way India Lives Time",
};

export const nav = {
  links: [
    { label: "Collections", href: "/collections", index: "1.0" },
    { label: "Our Story", href: "/story", index: "2.0" },
    { label: "Contact", href: "/contact", index: "3.0" },
  ],
  cta: { label: "Shop All", href: "/collections" },
};

export const hero = {
  headline: "IST 1947",
  tagline: brand.tagline,
  corners: ["Inspired by India", "Individually Numbered", "Made to Keep"],
  image: "/frames/frame_120.jpg", // cinematic angled watch still (no video)
};

// Scroll-scrubbed exploded view — the watch separates into its parts as you scroll.
export const sequence = {
  eyebrow: "The Watch",
  title: "Taken apart, piece by piece",
  subtitle: "Scroll to disassemble the calibre.",
  totalFrames: 150,
  framePath: (i) => `/explode/frame_${String(i).padStart(3, "0")}.jpg`,
  mobileVideo: "/explode.mp4", // autoplay clip for phones
  annotations: [
    { key: "A", title: "Sapphire Crystal", body: "A domed, anti-reflective sapphire that protects the dial." },
    { key: "B", title: "Guilloché Dial", body: "Sunray copper dial with a blue Ashoka-chakra small-seconds." },
    { key: "C", title: "Automatic Movement", body: "A self-winding calibre with a visible gear train." },
    { key: "D", title: "Steel Case", body: "Polished case back and mid-case, individually numbered." },
    { key: "E", title: "Leather Strap", body: "Hand-finished genuine leather with contrast stitching." },
  ],
};

// The three collections, shown as alternating dark/light story panels.
export const collections = [
  {
    id: "arka",
    theme: "dark",
    name: "Arka",
    eyebrow: "Inspired by the Konark Sun Temple",
    launch: "Launching 30 September",
    body: "Arka reimagines India's ancient relationship with time through five watches shaped by light, shadow and the changing moods of the day.",
    video: "/arka-motion.mp4",
    poster: "/images/golden-hour_1.jpg",
  },
  {
    id: "vanya",
    theme: "light",
    name: "Vanya",
    eyebrow: "An Ode to India's Wild Heart",
    launch: "Launching 15 October",
    body: "Vanya captures the landscapes and iconic wildlife of Ranthambore, Gir, Jawai and Kaziranga in a bold, adventure-ready collection.",
    video: "/vanya-motion.mp4",
    poster: "/images/ranthambore-bagh_1.jpg",
  },
  {
    id: "vijay",
    theme: "dark",
    name: "Vijay",
    eyebrow: "Five Times, Time Stopped",
    launch: "Launching 30 October",
    body: "Built around five unforgettable nights in Indian cricket, Vijay turns landmark victories into limited-edition watches made to carry the memory forward.",
    video: "/vijay-motion.mp4",
    poster: "/images/2026_1.jpg",
  },
];

// "The IST Difference" — four brand differentiators.
export const difference = {
  eyebrow: "The IST Difference",
  title: "Why an IST 1947",
  items: [
    { n: "01", title: "Inspired by India", body: "Every collection celebrates a story rooted in India's culture, history and landscapes." },
    { n: "02", title: "Individually Numbered", body: "Each watch carries its own serial number." },
    { n: "03", title: "2-Year Digital Warranty", body: "Covered against manufacturing defects for two years." },
    { n: "04", title: "Insured Nationwide Shipping", body: "Complimentary, fully insured shipping across India." },
  ],
};

// Bestsellers grid — real products (local images).
export const products = {
  eyebrow: "Bestsellers",
  title: "Pieces people reach for",
  items: [
    { name: "Golden Hour", collection: "Arka", price: "₹9,999", image: "/images/golden-hour_1.jpg" },
    { name: "Cloud Nine", collection: "Arka", price: "₹9,999", image: "/images/cloud-nine_1.jpg" },
    { name: "After Hours", collection: "Arka", price: "₹9,999", image: "/images/after-hours_1.jpg" },
    { name: "Ranthambore Bagh", collection: "Vanya", price: "₹9,999", image: "/images/ranthambore-bagh_1.jpg" },
    { name: "Gir Sinh", collection: "Vanya", price: "₹9,999", image: "/images/gir-sinh_1.jpg" },
    { name: "2026", collection: "Vijay", price: "₹19,470", image: "/images/2026_1.jpg" },
  ],
};

// Full catalogue for the /collections page — all 14 pieces, grouped.
export const catalog = {
  intro:
    "Three collections, each rooted in a story India already knows by heart. Every piece is automatic, individually numbered, and covered by a 2-year warranty.",
  groups: [
    {
      name: "Arka",
      tagline: "Inspired by the Konark Sun Temple — the moods of the day.",
      launch: "Launching 30 September",
      price: "₹9,999",
      items: [
        { name: "Golden Hour", image: "/images/golden-hour_1.jpg" },
        { name: "Cloud Nine", image: "/images/cloud-nine_1.jpg" },
        { name: "After Hours", image: "/images/after-hours_1.jpg" },
        { name: "White Noise", image: "/images/white-noise_1.jpg" },
        { name: "Rain Check", image: "/images/rain-check_1.jpg" },
      ],
    },
    {
      name: "Vanya",
      tagline: "An ode to India's wild heart — Ranthambore, Gir, Jawai, Kaziranga.",
      launch: "Launching 15 October",
      price: "₹9,999",
      items: [
        { name: "Ranthambore Bagh", image: "/images/ranthambore-bagh_1.jpg" },
        { name: "Gir Sinh", image: "/images/gir-sinh_1.jpg" },
        { name: "Jawai Tendua", image: "/images/jawai-tendua_1.jpg" },
        { name: "Kaziranga Gorh", image: "/images/kaziranga-gorh_1.jpg" },
      ],
    },
    {
      name: "Vijay",
      tagline: "Five landmark nights in Indian cricket, kept forever.",
      launch: "Launching 30 October",
      price: "₹19,470",
      items: [
        { name: "1983", image: "/images/1983_1.jpg" },
        { name: "2007", image: "/images/2007_1.jpg" },
        { name: "2011", image: "/images/2011_1.jpg" },
        { name: "2024", image: "/images/2024_1.jpg" },
        { name: "2026", image: "/images/2026_1.jpg" },
      ],
    },
  ],
};

export const contact = {
  intro: "Questions, press, or partnerships — we'd love to hear from you.",
  email: "hello@ist1947.com", // placeholder — swap for the real inbox
  socials: [
    { label: "Instagram", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "WhatsApp", href: "#" },
  ],
};

export const story = {
  eyebrow: "Who We Are",
  title: "The India we know, made worth keeping.",
  body: "IST 1947 turns India's places, rituals, victories and everyday obsessions into watches — the way India lives time.",
  video: "/IST1947_watch_film_1.mp4", // real brand film
  // Vijay collection — five landmark nights in Indian cricket.
  timeline: [
    { year: "1983", title: "The night we first learnt to believe", body: "Drawn from the deep navy and crisp whites of India's earliest victorious era." },
    { year: "2007", title: "A new kind of swagger", body: "Light blue and bold yellow — a moment that felt young and unexpected." },
    { year: "2011", title: "The night the wait finally ended", body: "Blue and orange, carrying the weight of a victory a generation had waited for." },
    { year: "2024", title: "The night India exhaled", body: "The blue and orange of modern Indian cricket — a release that felt urgent." },
    { year: "2026", title: "The night victory became legacy", body: "Deep navy and fresh blue from the most recent campaign." },
  ],
};

export const specs = [
  {
    name: "Movement",
    image: "/images/2026_2.jpg",
    rows: [
      ["Type", "Automatic"],
      ["Complication", "Small Seconds"],
      ["Warranty", "2 Years"],
    ],
  },
  {
    name: "Dial",
    image: "/images/golden-hour_2.jpg",
    rows: [
      ["Finish", "Sunray / Carbon"],
      ["Script", "Devanagari"],
      ["Indices", "Applied"],
    ],
  },
  {
    name: "Build",
    image: "/images/ranthambore-bagh_2.jpg",
    rows: [
      ["Serial", "Individually Numbered"],
      ["Strap", "Genuine Leather"],
      ["Shipping", "Insured, Nationwide"],
    ],
  },
];

export const enquire = {
  eyebrow: "Register Your Interest",
  title: "Be first when we launch",
  steps: [
    {
      id: 1,
      name: "Contact Details",
      fields: [
        { name: "name", label: "Full Name", type: "text", placeholder: "Your name", required: true },
        { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: true },
        { name: "phone", label: "Phone", type: "tel", placeholder: "+91 00000 00000", required: true },
      ],
    },
    {
      id: 2,
      name: "Preference",
      fields: [
        { name: "collection", label: "Collection", type: "text", placeholder: "Arka / Vanya / Vijay" },
        { name: "model", label: "Model of Interest", type: "text", placeholder: "e.g. Golden Hour" },
      ],
    },
    {
      id: 3,
      name: "Delivery",
      fields: [
        { name: "city", label: "City", type: "text", placeholder: "Mumbai" },
        { name: "country", label: "Country", type: "text", placeholder: "India", required: true },
      ],
    },
  ],
};

export const footer = {
  wordmark: "IST 1947",
  tagline: brand.tagline,
  columns: [
    { heading: "Collections", items: ["Arka", "Vanya", "Vijay"] },
    { heading: "Quick Links", items: ["User Manual", "Warranty", "FAQs", "About", "Contact"] },
    { heading: "Legal", items: ["Privacy", "Shipping", "Refund", "Terms"] },
    { heading: "Follow", items: ["Instagram", "YouTube", "WhatsApp"] },
  ],
  note: "© " + new Date().getFullYear() + " IST 1947. Watches inspired by the way India lives time.",
};
