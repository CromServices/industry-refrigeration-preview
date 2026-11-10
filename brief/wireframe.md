# Industry Refrigeration — spec redesign wireframe v1.2

**Status:** wireframe only. Nothing has been built, published, or sent. No contact with the owner.

Pitch piece for Industry Refrigeration & Air Conditioning, Cairns QLD. Prepared 10 Nov 2026 (Australia/Perth). v1.2 keeps the v1.1 theme, type, 5-page scope, A$990 + A$49/mo care and the WordPress pick, and adds the issues list, current page mechanics and a Google reviews block. v1 and v1.1 are unchanged in their folders.

Scope (Nate via Director, 10 Nov): intro build A$990 plus A$49/mo care (standard build A$1,490). This is a 5-page site sized to that intro price. Existing inner-page copy is reused; the intro build does not rebuild every current suburb URL as its own page.

Production digest md5: `c63ff4c8007fdf7f68563e40d74a7000`. Locks read: L-WIREFRAME, L-BUILDMETHOD, L-101, L-NOSQBUB, L-017, L-019, L-032, L-HAND, L-NOIDLE, L-098.

---

## 1. Before and after

| | Current site (10 Nov 2026) | This rebuild |
|---|---|---|
| Desktop Lighthouse | 42 | Target ≥ 90 |
| Mobile Lighthouse | 48 | Target ≥ 80 |
| Desktop LCP | 10.1 s | ≤ 2.5 s |
| Desktop FCP | 8.7 s | ≤ 1.8 s |
| Desktop CLS | 0.258 | ≤ 0.1 |
| Home HTML weight | 244,291 bytes, heavy Elementor + Astra + Elfsight | First load ≤ 300 KB, no page builder |
| Quote form | Present, but buried in a heavy stack | Same offer, form on Home and Contact, light page |
| Schema and NAP | HVACBusiness JSON-LD already exists | Keep and tidy, with published licences |
| Platform | WordPress 7.1.4, Astra + child, Elementor 4.2.3 + Elementor Pro, Yoast, Site Kit, Elfsight, WooCommerce detected | Stay on WordPress. Light block theme. Drop Elementor, Elfsight and unused WooCommerce |

Current-site proofs remain in the parent folder: `../proofs/current-desktop-1440.png`, `../proofs/current-mobile-390.png`. Rebuilt-site proofs for this revision: `proofs/desktop-1440.png`, `proofs/mobile-390.png`.

---

## 2. Taken from the live site

Fetched 10 Nov 2026, 11:43–11:48 AWST, `https://www.industryrefrigeration.com.au/`, plus `/contact-us/` and `/about-cairns-airconditioning/`. Cross-checked against Outbound evidence `industry-refrigeration-cairns.json` (09:49 AWST) and the on-page JSON-LD.

| Fact | Source |
|---|---|
| Trading name | Industry Refrigeration and Air Conditioning (header and schema) |
| Legal name | Industry Refrigeration PTY LTD (schema and footer) |
| Address | 55b/193 Hartley St, Portsmith QLD 4870 |
| Phone (office) | 07 4020 8313 (`+61740208313` in schema) |
| Phone (header mobile) | 0417 500 434 |
| Text number (contact page) | 0480 800 931 (“Press to text”) |
| Email (header and schema) | admin@industryrefrigeration.com.au |
| Email also on contact | info@industryrefrigeration.com.au (emergency/contact block) |
| Hours (contact body and schema — use these) | Mon–Fri 7am–5pm, Saturday 7am–2pm |
| 24/7 emergency | Claimed in the homepage meta description |
| Licences (contact page) | ARC L160138; QBCC 15326213; Restricted Electrical 165019 |
| Services | Air conditioning (install, repairs, servicing); commercial refrigeration; marine air-conditioning and refrigeration; beer / glycol systems; commercial ventilation and exhaust; commercial HVAC maintenance |
| Areas | Cairns, Port Douglas, Innisfail, Atherton Tablelands (schema). Suburb/area URLs also exist for Edmonton, Smithfield, Mareeba, Gordonvale, Palm Cove, Redlynch, Trinity Beach, Atherton, Cairns |
| Team (about page) | Sam, Managing Director, “over 10 years” in one paragraph and “over 15 years” in the team block — see gaps. Natasha manages marketing, branding, administration and accounts, over 10 years in customer service and product |
| Social (schema sameAs) | https://www.facebook.com/industryrefrigeration ; https://www.instagram.com/industryrefrigeration/ |
| Reviews on the homepage | Sandra Posar; Jeffery Barnes; Colin Tonazzi; Tabitha & Ric Grullis — wording as published |
| Claims already on the site | Lifetime workmanship guarantee; stocked service vehicles; free quotes; endeavour to reply next business day |
| Careers | A careers page exists. Not in the 5-page intro build; keep the URL or add a short Contact line if they still hire |

**Current platform:** WordPress, confirmed by `rel=https://api.w.org/`, generator tags (WordPress 7.1.4, Elementor 4.2.3, Site Kit 1.191.0), Astra + Astra child, Yoast SEO 28.7, Elfsight `platform.js`, WooCommerce present in the source. Hosted on LiteSpeed, PHP 8.2.35.

---

## 3. Gaps (visible placeholders or notes)

- No ABN is published. Placeholder only, if they want it on the footer.
- Hours conflict: contact meta description says Mon–Fri 7am–4pm and Saturday 7am–1pm; the contact body and schema say 7am–5pm and 7am–2pm. This wireframe uses the body/schema hours. Confirm with the owner before build.
- Two emails (admin@ and info@) and three numbers (07 4020 8313, 0417 500 434, 0480 800 931). All are published. Do not drop one without the owner’s say. Primary contact in the header stays admin@ and the two voice numbers; the text number stays on Contact and in the emergency bar.
- Sam’s years of experience are written two ways on the about page (over 10, and over 15). Do not pick a number. Use “Sam, Managing Director” and ask which figure to keep.
- A YouTube icon appears in the header; no YouTube URL is in the schema. Do not invent a channel link.
- Job photographs are not invented. Use only images already on the site, with the owner’s OK, recompressed.
- Drew is named in Sandra Posar’s review. Do not invent a staff bio for Drew.

---

## 4. Platform recommendation

**Pick: WordPress, stay on WordPress, rebuild on a light block theme and drop Elementor.**

They are already on WordPress. The problem is weight (Elementor Pro, Elfsight, a 244 KB home document, LCP over 10 s), not the CMS. Keeping WordPress means the owner still edits pages the same way, licences and service copy are not migrated off the platform, and the pick matches Nate’s standing view for trade sites.

**Monthly cost:** WordPress software is free. A one-site Australian LiteSpeed starter plan is **A$12.95 inc GST** (My Australian Host “WP Starter”, checked 10 Nov 2026). Similar starter plans: A$14.99 and A$15. All stay under the A$20/mo cap, so the A$49/mo care plan still has margin.

Their current LiteSpeed host bill is not published. **Confirm it before build.** If that bill is A$20/mo or less and the host can run a light theme without Elementor, stay there. If it is above A$20, move them to a starter plan at A$12.95–15 so care still has margin.

**Flag, do not use:** My Australian Host WP Business A$24.95/mo, Webhoster WP Business A$29.99/mo, ModusOp Basic A$24.95/mo — each would break the care margin. Wix Light A$21/mo and Wix Core A$42/mo are over the cap and would also mean leaving a CMS they already use. WordPress.com paid tiers are over the cap; this pick is self-hosted WordPress only. Drop paid Elfsight widgets; do not add a new paid page-builder subscription.

Squarespace and Bubble are out (L-NOSQBUB).

---

## 5. Theme carried over

v1 used a navy “harbour workshop” palette and IBM Plex, which read as a new brand. This revision follows the live black, magenta and cyan identity, including the snowflake lockup and the wave footer.

Taken from the live homepage CSS and Elementor/Astra tokens at `https://www.industryrefrigeration.com.au/` (fetched again 10 Nov 2026) and from the current-site proofs.

**Colours (exact from the CSS, checked against the proofs):**

| Hex | Role on the current site |
|---|---|
| `#E61080` | Brand pink. Scroll-top, nav, icon chips and pink buttons (Astra). |
| `#E9008B` | Alternate pink token in the homepage CSS. |
| `#00B6F3` | Brand cyan. Primary quote and call buttons, upper wave. |
| `#23BCEE` | Secondary cyan token on the homepage. |
| `#212121` | Header, top bar and footer, as sampled on the current desktop proof. |
| `#000000` | Hero ground. |
| `#FFFFFF` | Cards and body sections. |

Wave footer, sampled from the current desktop proof (and matching `#00B6F3` in the CSS): `#00B6F3`, `#8D56B7`, `#C12DA1`, `#EC008D`.

Elementor also ships unused kit tokens (`#060097`, `#C10FFF`, `#FFCD57`). They do not appear in the visible header, buttons or wave, so they are not used here.

**Logo treatment:** white “Industry” wordmark with “Refrigeration · Air-Conditioning” underneath, plus a snowflake mark in a cyan-to-pink gradient, on a `#212121` header. Pink uppercase nav. Pink circular chips beside the email and office number in the top bar.

**Imagery and motifs:** four white service cards with a cyan rule; cyan primary button and pink secondary button; layered cyan–purple–magenta wave under the footer. Job photographs as labelled slots only. The “We couldn’t verify the security of your connection” panel on the current-site proof is a capture artefact over the hero, not brand art, and is not carried over.

**Type:** Plus Jakarta Sans 400 and 600, self-hosted latin woff2 (~19 KB the pair), SIL Open Font Licence. This is already the heading face on the live site (`Plus Jakarta Sans:600` with Inter 400/600 for body). The rebuild uses this one family only, and drops Inter, Montserrat and Bahnschrift, plus v1’s IBM Plex. No extra display pairing.

Desktop-first, then 390px. Motion: none. No scrolltide, no scrollshaders.

---

## 6. Pages, sections and copy notes

Five pages. Reuse live copy. Do not invent jobs, results or a third years-of-experience figure for Sam.

### 1. Home (`/`)

1. **Emergency bar** — 24/7 emergency (from the live meta). Call 07 4020 8313. Text 0480 800 931.
2. **Header** — wordmark “Industry Refrigeration”. Nav: Services, Areas, About, Contact. Call 0417 500 434. Get a quote.
3. **Hero** — Heading: “Air conditioning, refrigeration, marine and beer systems — Cairns and the Far North.” Lead from the live homepage: locally owned; residential, commercial and marine; Cairns, Port Douglas, Tablelands and surrounding suburbs. CTAs: Get a quote / Call 07 4020 8313. Photo slot only, no invented job shot.
4. **Service pillars** — Air conditioning; Commercial refrigeration; Marine; Beer systems. Secondary line: ventilation and commercial HVAC maintenance. Link to /services.
5. **Areas strip** — Cairns, Port Douglas, Innisfail, Atherton Tablelands. Link to /areas.
6. **Why work with us** — only live claims: industry-wide expertise; lifetime workmanship guarantee; stocked service vehicles; free quotes, reply next business day.
7. **Quote form** — §7.
8. **Reviews** — the four homepage reviews, wording close to the live site. Do not invent ratings except Jeffery Barnes’s “5 Star” phrase, which is already in his review.
9. **Footer** — legal name, Portsmith address, both voice numbers, admin@, hours, ARC / QBCC / restricted electrical numbers, Facebook and Instagram (the published profile URLs only).

SEO title: `Air conditioning & refrigeration, Cairns | Industry Refrigeration`. Meta can stay close to the live one: `Cairns air conditioning, commercial refrigeration, marine cooling and beer systems. Locally owned, 24/7 emergency service. Free quotes — call 07 4020 8313.`

### 2. Services (`/services`)

One page covering the live catalogue, not a rebuild of every current service URL in the intro hours.

1. Header.
2. Short intro from the homepage: comfort, efficiency and peace of mind across residential, commercial and marine work.
3. Sections, from live copy:
   - **Air conditioning** — new units, complete installations and changeovers; install, repairs, servicing.
   - **Commercial refrigeration** — repair, maintenance and installation for Cairns commercial needs (supermarkets, restaurants, bars, as the homepage states).
   - **Marine** — air-conditioning and refrigeration on vessels, including icemakers and snap freezers as the live marine blurb lists.
   - **Beer systems** — keg rooms, wine rooms, glycol tanks and chillers; new installs and ongoing service.
   - **Ventilation and commercial HVAC maintenance** — from the live service list and schema.
4. Quote CTA. Footer with licences.

Existing deeper URLs (`/cairns-airconditioning/installation/` and so on) can redirect to the matching section, or stay as thin aliases later. They are out of the 5-page intro build.

### 3. Areas (`/areas`)

One useful area page, not twelve doorway pages.

1. Header.
2. The schema list: Cairns, Port Douglas, Innisfail, Atherton Tablelands, plus “surrounding suburbs” as the homepage already says.
3. A compact list of the other towns already on the current nav: Edmonton, Smithfield, Mareeba, Gordonvale, Palm Cove, Redlynch, Trinity Beach, Atherton.
4. Portsmith workshop address.
5. Quote CTA. Footer.

Existing suburb URLs can later redirect here, or be kept if the owner wants them in a later pass. They are not in the 12–14 hours.

### 4. About (`/about`)

1. Header.
2. Live about copy: local Cairns team; safety; customer service; Sam as Managing Director; Natasha on marketing, branding, administration and accounts. Do not resolve the 10 vs 15 years conflict in the copy — show a visible note for the owner: “About page currently says both ‘over 10 years’ and ‘over 15 years’ for Sam. Confirm which to keep.”
3. No invented staff photos. Photo slots only.
4. Licences.
5. Footer.

### 5. Contact (`/contact`)

1. Header.
2. NAP: 55b/193 Hartley St, Portsmith QLD 4870; 07 4020 8313; 0417 500 434; admin@industryrefrigeration.com.au.
3. Also published: info@industryrefrigeration.com.au and text 0480 800 931, labelled as they are on the current contact page.
4. Hours: Mon–Fri 7am–5pm, Saturday 7am–2pm, plus the 24/7 emergency claim, with a one-line note that the current meta description lists shorter hours and needs a confirm.
5. Licences: ARC L160138, QBCC 15326213, Restricted Electrical 165019.
6. The quote form.
7. Map embed using the published Portsmith address.
8. Footer, including the two published social profiles.

---

## 7. Quote form

The current site already offers a free quote and says they endeavour to reply next business day. Keep that helper line.

Fields: name, phone, email, location (Cairns / Port Douglas / Innisfail / Tablelands / other), service (AC install / AC repair / AC service / commercial refrigeration / marine / beer systems / ventilation / maintenance / emergency), site type (home / business / vessel), message. Submit: “Request a quote”. Post to admin@industryrefrigeration.com.au (the schema inbox) unless they prefer info@.

---

## 8. Speed and SEO

Targets: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. Performance ≥ 90 desktop, ≥ 80 mobile. Home first load ≤ 300 KB, aim ≤ 250 KB.

Drop Elementor, Elementor Pro, Elfsight `platform.js` and unused WooCommerce. Keep Yoast or switch to core site editor SEO if Yoast is already configured — do not add a second SEO plugin. One self-hosted sans (Plus Jakarta Sans 400 and 600, woff2, latin, ~19 KB). No Google Fonts request. Recompress existing images; width/height set; lazy below the fold. No jQuery on first load if the theme can avoid it.

SEO: keep and tidy the existing HVACBusiness JSON-LD (legal name, Portsmith NAP, hours, areaServed, telephone, email, service catalogue, sameAs). Add the three published licence numbers. Unique titles on the five pages. Existing suburb URLs either redirect to /areas or wait for a later pass. Canonicals and the XML sitemap should list the five pages as the core.

---

## 9. Build-hours estimate

Sized to the A$990 intro build. **Figure: 14 hours** (top of the 10–14 h band). The extra time over a from-scratch 5-page site is for stripping Elementor/Elfsight and moving the existing copy, licences and reviews onto a light theme.

| Part | Hours |
|---|---|
| Inventory, plugin strip plan, light theme on WordPress | 2.5 |
| Home | 2.5 |
| Services page | 2.5 |
| Areas page | 1 |
| About (live copy, years-of-experience note) | 1 |
| Contact, quote form, schema tidy | 2.5 |
| Performance, QA, handover | 2 |
| **Total** | **14** |

---

## 10. Proofs

- `../proofs/current-desktop-1440.png` — live site at 1440 (unchanged from v1)
- `../proofs/current-mobile-390.png` — live site at 390 (unchanged from v1)
- `proofs/desktop-1440.png` — proposed Home at 1440
- `proofs/mobile-390.png` — proposed Home at 390

Visuals carry no sample, demo or template wording, and no mention of bots or AI.

---

## 11. Next step

Nate reviews this v1.2 pack. No build starts until he says so (L-WIREFRAME). Confirm hours (meta vs body) and Sam’s years-of-experience figure before copy is locked.

---

## 12. Issues found

Scores and listed issues are from Outbound evidence `crom-desk/02-working/outbound/tradie-weak-sites-2026-11-10/evidence/industry-refrigeration-cairns.json`, checked 10 Nov 2026 at 09:49 AWST. The file’s performance runs are tagged `lighthouse-local` (mobile) and `lighthouse-local-desktop` (desktop). Accessibility, best practices and SEO category scores are not in that file, so they are not listed.

| | Mobile | Desktop |
|---|---|---|
| Performance | **48** | **42** |
| First Contentful Paint | 2.2 s | 8.7 s |
| Largest Contentful Paint | 11.9 s | 10.1 s |
| Speed Index | 8.9 s | 8.7 s |
| Total Blocking Time | 560 ms | 0 ms |
| Cumulative Layout Shift | 0.091 | 0.258 |
| Time to Interactive | 12.5 s | 10.1 s |

**Faults from that evidence file:** slow mobile (48) and slow desktop (42). The homepage HTML is 244,291 bytes.

**Also confirmed on the live site (10 Nov 2026), and already noted in v1:** WordPress with Astra and an Astra child, Elementor 4.2.3 and Elementor Pro, Yoast, Site Kit, Elfsight `platform.js` (two lazy widgets on Home) and WooCommerce present in the source. Elementor image and testimonial carousels (Swiper) and Motion FX CSS are loaded. The homepage quote offer is a button through to Contact, not a form on the page; the Contact page tells visitors to “fill out the form”, but the HTML fetched this session has no quote form fields, only a search field. Hours in the contact meta description conflict with the contact body and schema. A stack of suburb and service URLs adds weight. Schema, meta description and published licences are already present and should be kept and tidied.

The rebuild stays on WordPress, drops Elementor, Elfsight and unused WooCommerce, targets performance ≥ 90 desktop and ≥ 80 mobile, LCP ≤ 2.5 s and CLS ≤ 0.1, and puts a working quote form on Home and Contact.

---

## 13. Current page mechanics

Fetched again for this revision on 10 Nov 2026 from `https://www.industryrefrigeration.com.au/`, `/contact-us/` and `/about-cairns-airconditioning/`. Inner service and suburb URLs are listed from the live nav, not all re-fetched in full.

The header is the same on the pages checked: a top bar with `admin@`, 07 4020 8313, Instagram, Facebook and a YouTube icon (no YouTube URL in the schema), then About Us, Services, Areas we service, Careers and Contact Us, plus a header search form.

| Page | What it does | Nav | Forms, CTAs, sliders and motion | Rebuild |
|---|---|---|---|---|
| Home (`/`) | Hero claim, four service cards, about teaser, why-us, promise, “trusted by locals”, brand logos and a quote CTA. | Services dropdown: Air Conditioning (with Installation, Repairs, Servicing), Marine, Beer Systems, Commercial Ventilation, Refrigeration, Commercial HVAC Maintenance. Areas dropdown: Cairns, Atherton, Port Douglas, Edmonton, Innisfail, Smithfield, Mareeba, Gordonvale, Palm Cove, Redlynch, Trinity Beach. | An Elfsight widget is lazy-loaded in the hero, under the main heading (`platform.js`, app `a361cd4c-…`). A second Elfsight widget sits under “Trusted by locals” (`e9b53da6-…`). Elementor provides an image carousel and a testimonial carousel (Swiper). Motion FX CSS is loaded. Homepage CTAs are “Learn more”, “Contact us today” and “Get a quote now”, the last of these linking to `/contact-us/`. The only `<form>` on the fetched homepage is the header search. | Keep the four services, the published claims, the four homepage testimonials, NAP and licences. Drop Elementor, Elfsight, the carousels and Motion FX. Put a working quote form on Home. One `/services` page and one `/areas` page. |
| About (`/about-cairns-airconditioning/`) | Local team copy, including Sam and Natasha. | Same header. | Contact and quote CTAs. | Keep the live about copy, with the visible 10-vs-15-years note. No invented staff photos. |
| Contact (`/contact-us/`) | NAP, both emails, three numbers, hours, licences, and copy that says to fill out a form. | Same header. | The heading is “Get a quote from us today” and the body says “Simply fill out the form…”. The HTML fetched this session has no quote form fields — only the header search. | A working quote form on this page, plus the published NAP, both emails, three numbers, body/schema hours, and the three licence numbers. |
| Careers (`/cairns-airconditioning-careers/`) | Hiring page, linked in the header. | Careers in the main nav. | — | Out of the 5-page intro build. Keep the URL or add a short Contact line if they still hire. |
| Service URLs (`/cairns-airconditioning/`, `/installation/`, `/repairs/`, `/servicing/`, `/cairns-marine-airconditioning/`, `/cairns-beer-taps/`, `/cairns-ventilation/`, `/cairns-commercial-refrigeration/`, `/commercial-maintenance/`) | Deeper service catalogue. | Services dropdown. | Learn-more links from Home. | One `/services` page covering the live catalogue. Existing URLs can later redirect, or wait for a later pass. |
| Suburb URLs (`/cairns/`, `/port-douglas/`, `/innisfail/`, `/atherton/`, `/edmonton/`, `/smithfield/`, `/mareeba/`, `/gordonvale/`, `/palm-cove/`, `/redlynch/`, `/trinity-beach/`) | Area doorway pages. | Areas dropdown. | — | One `/areas` page listing the schema towns and the other published suburbs. Existing URLs can later redirect, or wait for a later pass. |

---

## 14. Google reviews

Sought this session (10 Nov 2026) from the Google Business Profile. The Maps place page itself did not return review text or reviewer first names.

Third-party pages that attribute a figure to Google were retrieved, but the counts do not agree and no named quotes came back: `https://www.starworks.com.au/score/220f6d83-479f-4cd6-9329-227b9aa50581` reports **4.9 from 216 Google reviews**; `https://www.homedone.com.au/cairns/air-conditioning/industry-refrigeration-and-air-conditioning-portsmith`, `https://calso.com.au/directory/qld/cairns/hvac/industry-refrigeration-and-air-conditioning-portsmith-8ab4b02` and `https://localaustralia.net/b/industry-refrigeration-and-air-conditioning-portsmith` report **4.9 from 224** reviews. Those pages summarise or omit reviewer names. They are not used as quotes.

**On the new site:** the four testimonials already published on the current homepage stay in “What clients have written” on Home. A separate Google reviews block sits on Home, immediately after that section, before the footer. Because named GBP quotes were not retrieved this session, that block is the placeholder: “Google reviews: not retrieved, add from the GBP with the owner's OK.” Nothing has been invented or paraphrased.

