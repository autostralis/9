# Buzzrent Website Blueprint

## Overview

This document outlines the structure, design, and features of the Buzzrent website. The website is initially designed as a single-page application with anchor links for navigation, with a scalable structure to accommodate future growth into a multi-page site.

## Project Outline

This section will document all style, design, and features implemented in the application.

### Sitemap and URL Structure

- / - Home (hero, value prop)
- /services/pollination - Mobile Bee Hotels (what’s included, SLAs)
- /how-it-works - Plan → Deploy → Pollinate → Harvest
- /crops - Crops we serve (density, timing per crop)
- /pricing - Per-hive / Per-acre / Per-truck
- /impact - Bee welfare, transparency, safety & insurance
- /case-studies - Pilots & farmer stories
- /faq - Common questions
- /about - Company, team, partners
- /contact - Form + WhatsApp/phone
- /blog - Articles (pollination science, best practices)
- /legal/privacy - Privacy Policy
- /legal/terms - Terms of Service
- /admin - (private) leads dashboard

### Home Page Section Layout (Anchor IDs)

- #hero - Headline, subhead, primary CTA (Book a Pilot), secondary CTA (WhatsApp)
- #why - 6 feature cards (Yield, Dual revenue, Welfare, Logistics, Risk, Data)
- #how - 4 steps with icons
- #crops - Grid of crop chips + pilot regions
- #pricing - 3 pricing cards + note
- #impact - Bee welfare, transparency, safety
- #stories - 3 short testimonials
- #faq - Accordions
- #contact - Lead form (name, mobile, email, state, crop, notes), address, WhatsApp

### File and Folder Structure

buzzrent/
├─ index.html                 # Home (current single-page)
├─ pages/
│  ├─ services-pollination.html
│  ├─ how-it-works.html
│  ├─ crops.html
│  ├─ pricing.html
│  ├─ impact.html
│  ├─ case-studies.html
│  ├─ faq.html
│  ├─ about.html
│  ├─ contact.html
│  ├─ blog.html
│  └─ legal/
│     ├─ privacy.html
│     └─ terms.html
├─ assets/
│  ├─ css/
│  │  ├─ base.css            # resets, variables, typography
│  │  ├─ layout.css          # grid, containers, sections
│  │  └─ components.css      # cards, buttons, nav, accordions
│  ├─ js/
│  │  ├─ main.js             # nav, animations, counters
│  │  ├─ contact.js          # form validation + Firebase write
│  │  └─ firebase-init.js    # config, analytics, app-check, firestore
│  ├─ img/
│  │  ├─ logo.svg
│  │  ├─ hero-illustration.svg
│  │  ├─ crops/              # crop icons/photos
│  │  └─ case-studies/
│  ├─ icons/                 # favicons, mask, apple-touch
│  └─ fonts/                 # optional self-hosted Inter
├─ admin/                    # private dashboard (optional)
│  ├─ index.html             # sign-in + leads table
│  └─ admin.js
├─ sitemap.xml
├─ robots.txt
└─ firebase.json             # if hosting on Firebase

### Reusable Components

- components/nav.html — header + mobile menu
- components/footer.html — footer + back-to-top
- components/card.html — feature/pricing/testimonial card partial
- components/cta.html — site-wide CTA strip

### Data (JSON or CMS later)

- data/crops.json — name, bloom window, hive density/acre, regions
- data/pricing.json — plan name, price range, bullets, badge
- data/faqs.json — q/a list
- data/testimonials.json — quote, name, location/crop

### SEO & Meta Defaults

- Title pattern: {{pageTitle}} | Buzzrent — Mobile Bee Hotels for Pollination
- Description: 150–160 chars per page (unique)
- Open Graph: og:title, og:description, og:image, og:url
- JSON-LD (Home): Organization + LocalBusiness (phone, WhatsApp link), and WebSite SearchAction (optional)

### Primary CTAs & Tracking

- Header CTA: “Book a Pilot” → /contact#form
- Secondary CTA: WhatsApp chat link
- Event names: lead_submitted, cta_click, whatsapp_click, nav_jump

### Performance & Accessibility

- Use loading="lazy" for images, rel="preload" for hero font
- Color contrast ≥ 4.5:1
- Keyboard focus styles on buttons/links
- Minify CSS/JS on deploy; long-cache static assets

### Content Checklist per Key Page

- /services/pollination
    - What’s included (truck, hives, inspections)
    - SLAs (hive density, placement, visit cadence)
    - Safety & no-spray protocol (downloadable PDF)
- /crops
    - Cards per crop: bloom window, hives/acre range, expected uplift, states
- /pricing
    - Three packages with inclusions, “Request quote” CTA
- /impact
    - Bee welfare policy, colony-days delivered metric, insurance note
- /case-studies
    - 3–6 short pilots with before/after photos, metrics, quotes
- /contact
    - Form + map (pilot hubs), WhatsApp deep link, phone, email

## Plan for Current Request

- Populate empty files with real content and reusable components. Suggested order:
    1. /buzzrent/index.html: Add hero section (Buzzrent tagline, CTA buttons), Sections: Why, How It Works, Crops, Pricing, Impact, Contact, Navbar + Footer.
    2. /buzzrent/assets/css/base.css: Define colors (--honey, --green, --dark), typography, spacing scale.
    3. /buzzrent/components: Navbar (/buzzrent/components/nav.html) and Footer (/buzzrent/components/footer.html), Card templates for crops, pricing, features.
    4. /buzzrent/pages/contact.html: Place Firebase-enabled form (name, mobile, email, state, crop, message), Hook into Firestore.
    5. /buzzrent/admin/index.html: Add Firebase Auth (email/password login), Firestore read of last 50 leads.
    6. /buzzrent/firebase.json: Configure rewrites + caching for hosting.

### Content Checklist for Population

- Add placeholder content and structure for each section on `/buzzrent/index.html`.
- Implement basic CSS variables and typography in `/buzzrent/assets/css/base.css`.
- Create basic HTML structures for the navbar and footer in `/buzzrent/components/nav.html` and `/buzzrent/components/footer.html`.

Generate page stubs (HTML files with shared header/footer and section scaffolding) based on the provided structure.