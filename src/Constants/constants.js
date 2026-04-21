/*
   Copyright (C), 2024-2026, Ariel Berjit
   Author: Ariel Berjit
   FileName: constants.js
   Version: 1.0.0
   Creation: 26/11/2025
   Last modification: 21/04/2026
*/

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faReact, faLinkedin, faFigma } from "@fortawesome/free-brands-svg-icons";

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  gitIcon,
  eslintIcon,
  viteIcon,
  nodeIcon,
  figmaIcon,
  avatar,
  portfolio1,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  gitIcon,
  eslintIcon,
  viteIcon,
  nodeIcon,
  figmaIcon,
  avatar,
  portfolio1,
  portfolio3,
  portfolio4,
  portfolio5,
  portfolio6,
  portfolio7,
  portfolio8,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faLinkedin,
  faEnvelope,
  faFigma,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "I'm Ariel Berjit, a detail-oriented Front-End Developer based in Bacolod City, Philippines, with 10+ years of experience shipping production-ready UI in fast-paced, standards-heavy environments. I align naturally with remote agency work—clear communication, reliable overlap with Australian teams (e.g. AEST business hours), and a client-first mindset while integrating into an existing React-first roadmap rather than reinventing it.",
    "React is my primary competency: I build and maintain modern interfaces with React.js, plus Next.js or Vite.js where the stack calls for it. I translate Figma into pixel-perfect, responsive layouts with obsessive attention to spacing, typography, hierarchy, and motion—using GSAP (and complementary techniques) while keeping Lighthouse performance scores in the 90+ range and Core Web Vitals healthy through bundle discipline, lazy loading, and render optimization.",
    "I'm comfortable supporting WordPress front-end customization and ACF where the ecosystem still matters, while steering toward maintainable, framework-driven patterns and custom or headless CMS approaches over time. I integrate REST APIs daily, follow strict naming and architecture guidelines, document as I go, and treat self-QA as non-negotiable—cross-browser, responsive, accessibility, and performance—before handoff, without leaning on a heavy QA buffer. I use AI tools like Copilot and Claude responsibly to speed delivery while preserving architectural integrity. I hold a B.Sc. in Computer Science from the Singapore Institute of Technology (SIT).",
    "You can download my resume here.",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experience = [
  {
    company: "Apex Fintech Solutions",
    role: "Senior Front-End Developer",
    focus:
      "React.js · Next.js · GSAP · Performance · WordPress",
    period: "Oct 2022 – Feb 2026",
    location: "Remote",
    highlights: [
      "Developed and maintained React.js and Next.js frontends with deployment-ready quality—clean modules, predictable patterns, and documentation that helps the next developer onboard fast.",
      "Translated Figma into pixel-perfect, responsive interfaces with strict spacing, typography, and hierarchy; collaborated tightly with design and backend on contracts and edge cases.",
      "Implemented advanced UI motion with GSAP while monitoring Lighthouse (90+) and Core Web Vitals—bundle size, lazy loading, and render-path tuning as needed.",
      "Integrated REST APIs into dynamic UIs; supported WordPress customization and ACF when CMS workflows required it.",
      "Ran thorough self-QA (cross-browser, responsive, accessibility, performance) before release; used Git with clean commits and structured PRs under disciplined engineering standards.",
    ],
  },
  {
    company: "Endava",
    role: "Front-End Developer",
    focus: "React.js · Next.js · Vite.js · Performance · WordPress",
    period: "Jul 2018 – Aug 2022",
    location: "Singapore",
    highlights: [
      "Built enterprise-grade frontends with React.js, Next.js, and Vite.js for large-scale, performance-sensitive platforms—similar expectations to agency work with enterprise and regulated clients.",
      "Delivered polished UI from design systems: pixel-perfect across breakpoints, with code splitting, lazy loading, and Core Web Vitals improvements.",
      "Shipped GSAP-based animation where visual quality could not compromise speed; integrated REST APIs for data-heavy screens.",
      "Maintained scalable codebases with clear structure and naming; participated in Agile delivery, Git-based workflows, and structured reviews.",
      "Contributed WordPress theme and ACF work for hybrid CMS needs; self-tested and debugged to production bar without depending on a separate QA cycle.",
    ],
  },
  {
    company: "Thoughtworks",
    role: "Front-End Developer",
    focus: "React.js · JavaScript · HTML/CSS · WordPress · UI engineering",
    period: "Sep 2015 – Jul 2018",
    location: "Singapore",
    highlights: [
      "Engineered responsive enterprise interfaces with React.js, JavaScript, HTML5, and CSS3—comfortable integrating into established standards rather than imposing new ones.",
      "Converted design concepts into reusable components and scalable front-end architecture; optimized rendering and asset delivery.",
      "Integrated REST APIs; supported WordPress custom themes and CMS-driven rendering; contributed to code reviews and collaborative workflows.",
    ],
  },
];

const projects = [
  {
    name: "React-first product & marketing surfaces",
    description:
      "Owned React.js features end-to-end—Next.js or Vite.js where the architecture required it—with modular components, clear boundaries, and code that lands deployment-ready after self-QA. Matched Figma specs for spacing, type, and hierarchy across breakpoints for polished, government- and enterprise-grade presentation quality.",
    image: portfolio1,
    demo_link: "https://hulkcars.com/",
  },
  {
    name: "Figma → pixel-perfect responsive UI",
    description:
      "Translated design files into responsive layouts with exceptional attention to detail: grids, component states, and motion intent—working closely with designers so the build reflects the design system, not an approximation.",
    image: portfolio3,
    demo_link: "https://scribbletogether.com/",
  },
  {
    name: "GSAP motion without sacrificing performance",
    description:
      "Implemented advanced interaction and narrative motion with GSAP (and complementary CSS techniques) while guarding Lighthouse scores above 90—profiling frames, avoiding layout thrash, and respecting reduced-motion preferences where appropriate.",
    image: portfolio4,
    demo_link: "https://habitica.com/",
  },
  {
    name: "Bundle size, rendering & Core Web Vitals",
    description:
      "Optimized large bundle builds and render performance: code splitting, lazy loading, image and font strategy, and measurable improvements to LCP, CLS, and INP—so interfaces feel fast on real devices, not just in demos.",
    image: portfolio5,
    demo_link: "https://easyappointments.org/",
  },
  {
    name: "REST API integration in the browser",
    description:
      "Connected React UIs to REST backends with predictable loading and error UX, sensible caching, and tight coordination with backend developers on payloads, pagination, and failure modes—ideal for data-driven agency delivery.",
    image: portfolio6,
    demo_link: "https://plane.so/",
  },
  {
    name: "WordPress, ACF & the path to modern CMS",
    description:
      "Supported WordPress front-end customization and ACF-driven content where clients still rely on classic CMS workflows—clean templates, editor-safe fields, and front ends that stay maintainable while the stack shifts toward React-first and custom or headless CMS solutions.",
    image: portfolio7,
    demo_link: "https://www.kryptomon.co/",
  },
  {
    name: "Vite.js delivery & disciplined Git workflow",
    description:
      "Used Vite.js for fast feedback loops and lean production output; paired with Git-based workflows—clean commits, structured PRs, and naming conventions that pass strict review—mirroring agency expectations under a strong Lead Engineer.",
    image: portfolio8,
    demo_link: "https://alphapuesta.net/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "react",
    title: "React.js (primary)",
    icon: reactIcon,
    description:
      "Strong React competency—components, hooks, and patterns suited to a React-first agency roadmap and the role’s mandatory React requirement.",
  },
  {
    id: "next",
    title: "Next.js",
    icon: reactIcon,
    description:
      "Solid production experience shipping Next.js features—routing, SSR/SSG tradeoffs, image/font optimization, and builds tuned for performance.",
  },
  {
    id: "vite",
    title: "Vite.js",
    icon: viteIcon,
    description:
      "Production experience with Vite.js for fast iteration and optimized bundles—aligned with the role’s Next-or-Vite expectation.",
  },
  {
    id: "html",
    title: "HTML5",
    icon: htmlIcon,
    description:
      "Semantic, robust markup for accessible, SEO-aware interfaces—must-have foundation for enterprise and government-facing sites.",
  },
  {
    id: "css",
    title: "CSS3 & responsive UI",
    icon: cssIcon,
    description:
      "Pixel-perfect responsive layouts: spacing systems, typography, breakpoints, and polish that survive design QA.",
  },
  {
    id: "javascript",
    title: "Modern JavaScript (ES6+)",
    icon: jsIcon,
    description:
      "Strong ES6+ proficiency for readable, maintainable React code—including TypeScript where the codebase adopts it.",
  },
  {
    id: "motion",
    title: "GSAP & advanced UI motion",
    icon: cssIcon,
    description:
      "Hands-on GSAP (and complementary CSS motion) for highly polished interaction—balanced against Lighthouse and frame budgets.",
  },
  {
    id: "perf",
    title: "Performance & Core Web Vitals",
    icon: viteIcon,
    description:
      "Advanced optimization: bundle size, rendering, lazy loading, and measurable Core Web Vitals—targeting Lighthouse scores above 90 as required.",
  },
  {
    id: "figma",
    title: "Figma → production UI",
    icon: figmaIcon,
    description:
      "Translate Figma into deployment-ready front ends with exceptional attention to hierarchy, spacing, typography, and component states.",
  },
  {
    id: "apis",
    title: "REST API integration",
    icon: nodeIcon,
    description:
      "Integrate REST APIs in React apps with clear loading/error UX and close coordination with backend developers.",
  },
  {
    id: "wp",
    title: "WordPress & ACF",
    icon: htmlIcon,
    description:
      "Support front-end customization and ACF when WordPress remains in the stack—while aligning with the long-term shift toward modern frameworks and custom CMS.",
  },
  {
    id: "git",
    title: "Git workflows",
    icon: gitIcon,
    description:
      "Git-based delivery: clean commits, structured PRs, and conventions that pass strict review—no dependency on a separate QA gate.",
  },
  {
    id: "eslint",
    title: "Architecture, docs & self-QA",
    icon: eslintIcon,
    description:
      "Clean, modular, documented code; strict naming and structure; thorough self-QA before submission—cross-browser, responsive, accessibility, and performance.",
  },
  {
    id: "ai",
    title: "AI-assisted development",
    icon: jsIcon,
    description:
      "Use Copilot, Claude, and similar tools responsibly to accelerate delivery while preserving architectural integrity and reviewability.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  experience,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
};
