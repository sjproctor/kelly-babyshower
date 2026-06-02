# Ciao Bambino 🍋 — Kelly's Baby Shower

A single-purpose invitation and RSVP website for Kelly's baby shower (Saturday, June 13th). Guests can view the event details, browse the registry, and RSVP — including declining with regrets. Submissions are stored in Airtable.

Built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, and TypeScript. Deployed on Vercel.

---

## Tech Stack

| Concern        | Choice                                                        |
| -------------- | ------------------------------------------------------------- |
| Framework      | [Next.js 16](https://nextjs.org) (App Router, React Compiler) |
| UI library     | React 19                                                      |
| Styling        | Tailwind CSS v4 (CSS-first config in `app/globals.css`)       |
| Language       | TypeScript 5                                                  |
| Icons          | `react-icons`                                                 |
| Data store     | [Airtable](https://airtable.com) (via REST API)               |
| Analytics      | `@vercel/analytics`                                           |
| Testing        | Playwright + `@axe-core/playwright` (accessibility)           |
| Package manager| Yarn (Yarn 1 / Classic)                                       |

---

## Requirements

- **Node.js ≥ 20.9.0** (Next.js 16 requirement). If you use `nvm`: `nvm install 20 && nvm use 20`.
- **Yarn** (Classic / v1).

---

## Getting Started

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Create a `.env.local` file in the project root (see [Environment Variables](#environment-variables) below).

3. Run the development server:

   ```bash
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

The RSVP API route ([`app/api/rsvp/route.ts`](app/api/rsvp/route.ts)) writes submissions to Airtable and requires the following variables in `.env.local`:

| Variable              | Description                                                       |
| --------------------- | ----------------------------------------------------------------- |
| `AIRTABLE_TOKEN`      | Airtable personal access token with write access to the base.     |
| `AIRTABLE_BASE_ID`    | The ID of the Airtable base (e.g. `appXXXXXXXXXXXXXX`).            |
| `AIRTABLE_TABLE_NAME` | The name of the table that stores RSVPs.                          |

The Airtable table is expected to have these fields: **Name**, **Number of Guests**, **Email**, and **Message**.

```bash
# .env.local
AIRTABLE_TOKEN=your_personal_access_token
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_TABLE_NAME=RSVPs
```

> `.env.local` is git-ignored. Never commit credentials.

---

## Scripts

| Command            | What it does                                                   |
| ------------------ | -------------------------------------------------------------- |
| `yarn dev`         | Start the development server at `localhost:3000`.              |
| `yarn build`       | Create a production build.                                     |
| `yarn start`       | Serve the production build.                                    |
| `yarn lint`        | Run ESLint (`eslint-config-next`).                             |
| `yarn test:a11y`   | Run the Playwright accessibility suite (`tests/a11y.spec.ts`). |

---

## Project Structure

```
app/
  layout.tsx          Root layout: fonts, metadata/OpenGraph, skip-link, Footer, Analytics
  page.tsx            Home / invitation page
  not-found.tsx       Custom 404 page
  globals.css         Tailwind import + theme (CSS variables for colors & fonts)
  favicon.ico
  rsvp/
    layout.tsx        RSVP-specific metadata
    page.tsx          RSVP form (client component) with validation + "declining with regrets"
  api/
    rsvp/route.ts     POST handler that forwards submissions to Airtable
components/
  Footer.tsx          Site-wide footer
public/                 Images and design assets (hero, frames, garlands, etc.)
tests/
  a11y.spec.ts        WCAG 2.1 AA checks + RSVP form error behavior
  example.spec.ts     Playwright starter example
```

### Routes

| Route   | File                | Description                                  |
| ------- | ------------------- | -------------------------------------------- |
| `/`     | `app/page.tsx`      | Invitation home page with event details.     |
| `/rsvp` | `app/rsvp/page.tsx` | RSVP form + venue map.                        |
| `*`     | `app/not-found.tsx` | Custom 404.                                   |
| `POST /api/rsvp` | `app/api/rsvp/route.ts` | Receives RSVP JSON and writes to Airtable. |

### Path alias

`@/*` maps to the project root (configured in `tsconfig.json`), so `@/components/Footer` resolves to `components/Footer.tsx`.

---

## RSVP Form

The RSVP form ([`app/rsvp/page.tsx`](app/rsvp/page.tsx)) is a client component with client-side validation:

- **Fields:** name(s) _(required)_, number in party _(required)_, email _(required, format-validated)_, and an optional message.
- **Declining with regrets:** checking this box hides the party-size field, skips the guest-count validation, and submits `0` guests. The confirmation screen shows a tailored regrets message.
- **Validation & accessibility:** field-level errors set `aria-invalid`, render `aria-describedby` error text, and focus the first invalid field on submit.

On success, the form `POST`s the data as JSON to `/api/rsvp`, which forwards it to Airtable.

---

## Styling & Theming

Tailwind CSS v4 is configured CSS-first in [`app/globals.css`](app/globals.css). Brand colors and fonts are defined as CSS variables and exposed to Tailwind via the `@theme inline` block, so you can use utilities like `bg-background`, `text-gray-blue`, or `font-heading`.

### Color palette

| Variable / Utility | Hex                  |
| ------------------ | -------------------- |
| `background`       | `#fffdf2`            |
| `foreground`       | `#171717`            |
| `azzurro`          | `#87b0cc`            |
| `cypress`          | `#424f33`            |
| `dark-azure`       | `#004582`            |
| `gray-blue`        | `#7487b8`            |
| `lemon`            | `#e6c55b`            |
| `orange`           | `#e66b24`            |
| `sage`             | `#9fad8a`            |
| `sky`              | `#bad0de`            |

### Fonts

Loaded via `next/font/google` in `app/layout.tsx` and mapped to font utilities:

| Utility       | Font               |
| ------------- | ------------------ |
| `font-body`   | Cormorant Garamond |
| `font-heading`| Italiana           |
| `font-block`  | Anton              |
| `font-script` | Corinthia          |
| `font-cursive`| Dancing Script     |
| `font-mono`   | Montserrat         |

### Breakpoints

| Breakpoint         | Prefix | Min width | Media query                 |
| ------------------ | ------ | --------- | --------------------------- |
| Small              | sm     | 640px     | @media (min-width: 640px)   |
| Medium             | md     | 768px     | @media (min-width: 768px)   |
| Large              | lg     | 1024px    | @media (min-width: 1024px)  |
| Extra Large        | xl     | 1280px    | @media (min-width: 1280px)  |
| Double Extra Large | 2xl    | 1536px    | @media (min-width: 1536px)  |

---

## Testing

Accessibility is verified with Playwright + axe-core. The suite checks the home and RSVP pages for WCAG 2.1 AA violations and confirms the RSVP form surfaces field-level errors on empty submit.

```bash
yarn test:a11y
```

Playwright is configured ([`playwright.config.ts`](playwright.config.ts)) to run against Chromium, Firefox, and WebKit. It automatically starts the dev server on port **3001** (`baseURL: http://localhost:3001`) and reuses an existing server when one is running locally.

To run the full Playwright suite (including the example test):

```bash
npx playwright test
```

---

## Deployment

The site is built for [Vercel](https://vercel.com). Add the Airtable environment variables in the Vercel project settings, then deploy. Vercel Analytics is wired up via `@vercel/analytics` in the root layout.
