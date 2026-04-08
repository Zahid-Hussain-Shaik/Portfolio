# Education Timeline + Certifications Section (Dark Theme)

Date: 2026-04-08

## Goal

Update the portfolio site so **Education** is displayed as a centered **timeline** (matching the provided reference screenshot layout), and **Certifications** becomes a **separate section below Education**.

Constraints:
- Keep the existing **dark slate theme** (no light/white background conversion).
- Keep existing navbar unchanged (no new navbar link required).

## Current State

- `src/components/Education.tsx` renders a 2-column grid: left for education list, right for certifications list.
- Navbar links include `#education` already (`src/components/Navbar.tsx`).
- Education + certifications data lives in `src/data/portfolio.ts` as `education` and `certifications`.

## Proposed UX / Layout

### Section 1: Education (`#education`)

Render a vertical timeline with alternating “speech bubble” style cards on desktop:

- Background: keep consistent with site sections (dark slate background).
- Title block:
  - Eyebrow: “Education Details” or “Background” (keep current style; final text may be “Education Details” to match reference).
  - Heading: “Education” with accent gradient span (consistent with other sections).
- Timeline:
  - A **center vertical line** (desktop/tablet) spanning the list.
  - Each education item renders:
    - A circular **node** aligned on the center line, containing a `GraduationCap` icon.
    - A year range label near the center line (e.g. `2021–2026`).
    - A card that alternates left/right by index:
      - Even index: card on left
      - Odd index: card on right
  - Mobile behavior:
    - Timeline becomes single-column stacked.
    - Use a left-side vertical line + node alignment for readability.

Card content:
- Primary title:
  - Derive from `edu.degree`. If it contains `" - "`, split into:
    - Line 1: degree name (e.g., `B.Tech`)
    - Line 2/3: specialization (e.g., `Computer Science and Engineering`)
  - Otherwise show the full `edu.degree` as the title.
- Secondary lines:
  - Institution
  - Location
- Optional small badge for year range (`startDate`–`endDate`) if it improves readability.

### Section 2: Certifications (`#certifications`)

Render a separate section immediately below Education:

- Background: same dark slate as nearby sections (or alternating slate shade consistent with the rest of the page).
- Title block:
  - Eyebrow: “Certifications”
  - Heading: “Certifications”
- Content:
  - Grid of compact cards (1 column on mobile, 2 on md, 3 on lg).
  - Each card shows the certification string from `certifications`.
  - Optional `Award` icon in a small gradient badge to match the existing visual language.

## Implementation Plan (High Level)

Recommended approach (minimal churn):
- Keep `src/components/Education.tsx` as the single component rendered in `src/App.tsx`.
- Update `Education.tsx` to render **two sections**: `#education` timeline + `#certifications` list below.
- Keep `src/components/Navbar.tsx` unchanged.

## Acceptance Criteria

- Education section uses a center-line alternating timeline layout on desktop and stacks cleanly on mobile.
- Certifications is a separate section below Education (not mixed into a 2-column layout).
- Site stays in the existing dark theme.
- `pnpm exec tsc -b` and `pnpm exec eslint` run clean.

