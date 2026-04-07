# Design Refresh Spec

Visual reskin of terranceli.com — modernize the look with an earthy editorial aesthetic while keeping the existing React + SCSS stack and page structure.

## Design Principles

- Earthy editorial: warm, typographic, magazine-like
- Blue (#527aff) is the signature accent color — used for links, accent rules, and interactive elements
- Photography pages are dark-first; everything else is light/warm
- Single-screen homepage on desktop, graceful scroll on mobile
- Consistent navigation pattern across all pages (back links, title + accent rule)

## Color Palette

| Role       | Value     | Usage                                    |
|------------|-----------|------------------------------------------|
| Background | `#faf8f5` | All light pages (home, blog, JMT)        |
| Dark BG    | `#1a1d21` | Photography pages (albums, individual)   |
| Text       | `#1a1a1a` | Headings, primary body text              |
| Body       | `#555`    | Secondary body text                      |
| Muted      | `#8a7e72` | Dates, captions, subtle metadata         |
| Accent     | `#527aff` | Links, accent rules, interactive elements|
| Border     | `#e0dbd4` | Dividers, separators on light pages      |
| Light text | `#f0ece6` | Headings on dark photography pages       |
| Dark muted | `#8a8078` | Dates/metadata on dark pages             |
| Terminal   | `#333`    | Code blocks in blog articles             |

## Typography

- **Primary font:** Lora (Google Fonts) — all weights (400, 600, italic)
- **Code font:** Fira Code (already bundled) — for terminal/code blocks in blog
- **Replaces:** Grantipo (custom font, removed)

### Type Scale

| Element          | Size  | Weight | Color     |
|------------------|-------|--------|-----------|
| Page title       | 32px  | 400    | `#1a1a1a` |
| Homepage name    | 36px  | 400    | `#1a1a1a` |
| Article title    | 20px  | 600    | `#1a1a1a` |
| Section heading  | 20px  | 600    | `#1a1a1a` |
| Body text        | 15px  | 400    | `#333`    |
| Links            | 14px  | 400    | `#527aff` |
| Date labels      | 12px  | 400    | `#8a7e72` |
| Copyright        | 11px  | 400    | `#8a7e72` |

Date labels use uppercase with `letter-spacing: 1px`.

## Pages

### Homepage

**Desktop (single-screen, vertically centered):**
- Split editorial layout: text left, photo right
- Left side: name (36px Lora), blue accent rule (40px wide, 2px), identity lines, work mention, vertically stacked arrow links
- Right side: portrait photo in 3:4 ratio with subtle shadow and 6px border-radius
- Identity copy: "Engineer by trade. Photographer, backpacker, adventurer & gamer at heart."
- Work mention: "Building data infra at Applied Intuition" in muted gray, company name linked in blue
- Links: linkedin, github, ssh, blog, photography — styled as "label →", stacked vertically

**Mobile (< 850px, scrollable):**
- Photo moves to top as circular crop (120px), centered
- All text centered below photo
- Same content, stacked vertically
- Copyright at bottom with divider

**Removed elements:**
- Bouncing down-arrow indicator
- Horizontal links bar at page bottom
- Frame 2 about section (content merged into single-screen layout)
- "hey there" greeting
- "I design and build software" tagline
- Work history list (Scale AI, Salesforce) — just current role mentioned

### Blog Listing

- Warm cream background throughout (no blue banner)
- "← home" back link at top left
- "Blog" title + blue accent rule
- Articles listed vertically:
  - Uppercase date label
  - Bold title (dark color, not blue)
  - Description paragraph
  - Separated by `#e0dbd4` bottom borders
- Max-width: 700px, centered

### Blog Article

- "← blog" back link at top left
- Uppercase date label, article title (32px), blue accent rule
- Body text: 15px Lora, `line-height: 1.9`, max-width 700px
- Code blocks: dark background (#333), Fira Code, subtle shadow
- Images: 6px border-radius, subtle shadow, optional caption in muted text below
- Section headings: 20px Lora semibold

### Albums Page

- Dark background (#1a1d21)
- "← home" back link in blue
- "Photography" title + blue accent rule (light text #f0ece6)
- Grid of album tiles: `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`
- Each tile: square aspect ratio, cover image with dark overlay, title + date centered
- Hover: overlay darkens further (existing behavior)
- Album title/date in Lora (replaces current font)
- Tiles get 4px border-radius

### Individual Album (Photos Page)

- Dark background (#1a1d21)
- "← albums" back link in blue
- Album title + date + blue accent rule
- Photo grid: keeps existing react-grid-gallery with lightbox
- Mobile: single-column layout (existing behavior)

### JMT Pages

- Apply same visual refresh (Lora font, warm cream palette for light sections)
- No new links added from other pages
- Existing structure preserved

## Navigation Pattern

All pages follow a consistent pattern:
- Top-left back link in blue ("← home", "← blog", "← albums")
- Replaces the current floating "terrance li" header
- No persistent nav bar — each page has contextual back navigation
- The Header/BackLink component accepts props for: destination URL, label text
- Blue link color (#527aff) works on both light and dark backgrounds — no variant needed

## Responsive Breakpoint

- Single breakpoint at 850px (matches current)
- Below 850px: layouts stack vertically, text centers where appropriate

## Files Changed

### Modified
- `src/fonts.scss` — replace Grantipo with Lora (via Google Fonts), update type scale
- `src/colors.scss` — update color variables
- `src/common.scss` — update global resets, add background color
- `src/components/Header.js` — replace with back-link navigation component
- `src/components/Header.scss` — restyle for back links
- `src/pages/HomePage.js` — rebuild to split editorial layout
- `src/pages/HomePage.scss` — complete restyle
- `src/pages/BlogPage.js` — remove blue banner, add back link, restyle article list
- `src/pages/BlogPage.scss` — complete restyle
- `src/pages/BlogArticlePage.js` — add back link (if not already present)
- `src/pages/AlbumsPage.js` — update to use back link, update font references
- `src/pages/AlbumsPage.scss` — update colors, typography, border-radius
- `src/pages/PhotosPage.js` — update to use back link
- `src/pages/PhotosPage.scss` — update colors, typography
- `src/components/Copyright.js` — restyle
- `src/components/Copyright.scss` — restyle
- `public/index.html` — add Google Fonts link for Lora

### Possibly modified
- `src/pages/jmt/JMTPage.scss` — apply Lora + palette if styles exist
- `src/pages/jmt/JMTDayPage` (if separate styles exist)

### Removed
- `fonts/GrantipoBeta001-Regular.ttf` — no longer needed
- `fonts/GrantipoBeta001-Bold.ttf` — no longer needed

### Kept
- `fonts/FiraCode-Medium.ttf` — still used for code blocks
- All blog article content files — unchanged
- `src/index.js` — routing unchanged
- `package.json` — no new dependencies

## Out of Scope

- Stack migration (CRA → Vite, React 17 → 18)
- New pages or features
- Adding links to JMT from other pages
- SEO / meta tag changes
- Image optimization or CDN changes
