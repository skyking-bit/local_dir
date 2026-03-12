// ╔══════════════════════════════════════════════════════╗
// ║  SKYDASH — pages.js                                  ║
// ║  Edit this file and push to Git to add/remove pages  ║
// ║  Everyone will see changes after you push!           ║
// ╚══════════════════════════════════════════════════════╝

const SKYDASH_PAGES = [
  {
    id: 1,
    name: 'Memory',
    url: 'select/mem.html',
    desc: 'Access memory design modules, BRAM configurations and reference guides.',
    category: 'design',
    icon: '🧠',
    color: '#009999',
    badge: 'pin',
    pinned: true,
    newTab: false,
    tags: ['BRAM', 'RAM', 'Memory'],
    passwordProtected: false   // ← true = visitors need password to open
  },
  {
    id: 2,
    name: 'Trigger',
    url: 'select/trig.html',
    desc: 'Configure and explore trigger logic, signal capture and event detection.',
    category: 'design',
    icon: '⚡',
    color: '#f5a623',
    badge: 'hot',
    pinned: false,
    newTab: false,
    tags: ['Trigger', 'Signal'],
    passwordProtected: false
  },
  {
    id: 3,
    name: 'Veloce',
    url: 'select/vel.html',
    desc: 'High-speed emulation, hardware verification and Veloce platform tools.',
    category: 'tools',
    icon: '🚀',
    color: '#b46fff',
    badge: 'new',
    pinned: false,
    newTab: false,
    tags: ['Emulation', 'FPGA'],
    passwordProtected: false
  },
  {
    id: 4,
    name: 'Digital',
    url: 'select/Digital.html',
    desc: 'Digital interview questions',
    category: 'docs',
    icon: '🔐',
    color: '#e05252',
    badge: 'done',
    pinned: false,
    newTab: false,
    tags: ['Confidential', 'Docs'],
    passwordProtected: true   
    pagePassword: 'coolsky' 
  }
  // ─────────────────────────────────────────────────────
  // ADD MORE PAGES BELOW — push to Git and everyone sees!
  // ─────────────────────────────────────────────────────
];
