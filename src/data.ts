export type Product = {
  title: string;
  href: string;
  image: string;
  description: string;
  group: string;
};

export const products: Product[] = [
  {
    title: "Condition monitoring",
    href: "/products/condition-monitoring",
    image: "cond-mon.jpg",
    group: "Measurement & inspection",
    description:
      "Vibration sensors and monitoring devices for industrial maintenance.",
  },
  {
    title: "Maintenance tools",
    href: "/products/maintenance",
    image: "handTorqueWrench.jpg",
    group: "Maintenance",
    description:
      "Hydraulic and pneumatic tools, pullers, torque wrenches and special application tools.",
  },
  {
    title: "Instrumentation products",
    href: "/products/instrumentation",
    image: "temperature.jpg",
    group: "Measurement & control",
    description:
      "Sensors, temperature and pressure instruments, flow meters, level switches, cables and field communication products.",
  },
  {
    title: "Industrial borescopes",
    href: "/products/industrial-borescopes",
    image: "Optical-Inspection.jpg",
    group: "Inspection",
    description:
      "Inspection solutions for hard-to-reach areas and applications.",
  },
  {
    title: "Valves & strainers",
    href: "/products/valves-strainers",
    image: "api-valve.png",
    group: "Flow control",
    description:
      "Flow, control, safety release, API and marine valves, and strainers.",
  },
  {
    title: "Hazardous-area vacuum cleaners",
    href: "/products/vacuum-cleaner",
    image: "IndustrialAirVacuumCleaner.jpg",
    group: "Safe working",
    description:
      "Industrial air vacuum cleaner for electrical hazardous areas.",
  },
  {
    title: "UHP tubes & fittings",
    href: "/products/uhp-pipes-fittings-valves",
    image: "UHP-Fittings-Series.jpg",
    group: "Process systems",
    description: "Ultra high purity tubes, fittings and valves.",
  },
];

export const industries = [
  "Oil & Gas",
  "Pharma",
  "Food Processing",
  "Fertilizer",
  "Petrochemical",
  "Refinery",
  "Telecom",
  "Power",
  "Cement",
  "Sugar",
  "Paper",
  "Beverages",
  "Steel Plants",
  "Packing Industries",
  "Automobile",
  "Auto Ancillary",
  "Component Manufacturing",
  "Aerospace",
  "Nuclear",
  "Defense R&D",
];

export const legacyPages: Record<string, string> = {
  "/about.html": "/about",
  "/contacts.html": "/contact",
  "/contact1.html": "/contact",
  "/clients.html": "/industries",
  "/condition-monitoring-products.html": "/products/condition-monitoring",
  "/maintenance-products.html": "/products/maintenance",
  "/instrumentation-products.html": "/products/instrumentation",
  "/uhp-pipes-fittings-valves.html": "/products/uhp-pipes-fittings-valves",
  "/vacuum-cleaner-catalogue.html": "/products/vacuum-cleaner",
  "/industrial-hydraulic-pullers.html":
    "/products/industrial-hydraulic-pullers",
  "/non-sparking-hand-tools.html": "/products/non-sparking-hand-tools",
  "/air-rivet-bolt-maint.html": "/products/air-rivet-bolt-maint",
  "/flange-spreader-bolt-maint.html": "/products/flange-spreader-bolt-maint",
  "/hammer-tight-bolt-maint.html": "/products/hammer-tight-bolt-maint",
  "/hand-torque-wrench-bolt-maint.html":
    "/products/hand-torque-wrench-bolt-maint",
  "/joint-integrity-software.html": "/products/joint-integrity-software",
  "/magnetic-backup-wrenches.html": "/products/magnetic-backup-wrenches",
  "/nut-splitter.html": "/products/nut-splitter",
  "/slide-sledge-multi-hammer.html": "/products/slide-sledge-multi-hammer",
  "/smart-bolt.html": "/products/smart-bolt",
  "/socket.html": "/products/socket",
  "/api-valves.html": "/products/api-valves",
  "/strainers.html": "/products/strainers",
  "/marine-valves.html": "/products/marine-valves",
  "/knife-valves.html": "/products/knife-valves",
  "/safety-relief.html": "/products/safety-relief",
  "/air-vent-head.html": "/products/air-vent-head",
  "/pipe.html": "/products/pipe",
  "/thankyou.html": "/contact",
};

export const detailSlugs = [
  "air-rivet-bolt-maint",
  "air-vent-head",
  "api-valves",
  "battery-torque-wrench",
  "dynamic-pump",
  "electric-hydraulic-pump",
  "electric-torque-wrench",
  "flange-spreader-bolt-maint",
  "hammer-tight-bolt-maint",
  "hand-torque-wrench-bolt-maint",
  "hydraluic-torque-wrench",
  "hydraulic-cylinder-pump",
  "hydraulic-cylinder",
  "hydraulic-impact-wrench-cap",
  "hydraulic-nut",
  "hyflow-pump",
  "industrial-hydraulic-pullers",
  "joint-integrity-software",
  "knife-valves",
  "magnetic-backup-wrenches",
  "marine-valves",
  "mechanical-nut",
  "non-sparking-hand-tools",
  "nut-splitter",
  "oil-pulse-wrench",
  "pipe",
  "safety-relief",
  "single-stage-tensioner",
  "slide-sledge-multi-hammer",
  "smart-bolt",
  "socket",
  "strainers",
  "tensioner-pump",
  "bt-kp-e220-auto-system",
  "pe55dual-twin-pump",
  "pe55twp-bs-hydraulic-pump",
];

export const company = {
  address: [
    "E 507, Kailash Industrial Complex,",
    "V S Marg, Parksite,",
    "Vikhroli (West),",
    "Mumbai 400079. India",
  ],
  phones: ["+91 9004081351", "+91 9820671114"],
  email: "sales@ogglobe.com",
};
