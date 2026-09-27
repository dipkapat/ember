# Habit Counter Tracker — Design Specification

**Document Type:** Product UI/UX Design Specification  
**Product:** Habit Counter Tracker  
**Design System:** Ember Warm Modern  
**Scope:** Web application UI/UX, responsive behavior, interaction design, visual system, accessibility, and screen-level specifications  
**Related Documents:** Product Requirements Document (PRD), Technical Requirements Document (TRD)  
**Primary Goal:** Define a consistent, implementation-ready visual and interaction system for the Habit Counter Tracker.

---

## 1. Design Direction

Habit Counter Tracker is a focused habit-tracking product built around a simple visual metaphor: **each day is a tangible square in a continuous progress matrix**.

The interface combines:

- **Tactile Warmth** — paper-like surfaces, warm neutrals, restrained shadows, and earthy accents.
- **Data-Forward Modernism** — precise grids, compact status cells, strong information hierarchy, and predictable interaction patterns.
- **Quiet Discipline** — the interface should encourage consistency without becoming motivationally noisy.
- **Visual Continuity** — users should immediately understand where a habit started, where it is today, and how much remains.

The product should feel more like a **personal tracking instrument** than a conventional productivity SaaS dashboard.

The visual system supplied in `DESIGN.md` is the source of truth for colors, typography, spacing, radii, status colors, and core component styling. fileciteturn0file0L138-L168

---

# 2. Design Principles

## 2.1 Progress Must Be Immediately Understandable

A user should be able to answer these questions within seconds:

1. What habit am I tracking?
2. When did tracking start?
3. When does it end?
4. How many days have I completed?
5. How many days remain?
6. What is today's state?
7. Which days were completed, skipped, pending, or upcoming?

Avoid hiding core progress information behind secondary interactions.

---

## 2.2 The Day Cell Is the Core Interaction

The Tracking Day is the fundamental visual unit.

Every day should have:

- A distinct square/cell.
- A clearly recognizable status.
- A date/day reference.
- A predictable interaction target.
- Accessible text or tooltip information where necessary.

The visual state must never depend exclusively on color.

---

## 2.3 Status Colors Must Remain Independent from Brand Colors

Brand interaction uses terracotta.

Tracking status uses independent semantic colors:

| Status    | Token     | Visual Meaning                    |
| --------- | --------- | --------------------------------- |
| Completed | `#3A7D44` | Day completed                     |
| Pending   | `#E3A008` | Current/open day requiring action |
| Skipped   | `#C1443B` | Day deliberately skipped          |
| Upcoming  | `#D8D4CC` | Future/uncommitted day            |

These status tokens are explicitly separated from interactive/brand tokens in the source design system. fileciteturn0file0L148-L159

---

## 2.4 Reduce Cognitive Load

The application should prioritize:

- One primary action per context.
- Short labels.
- Strong visual grouping.
- Consistent navigation.
- Minimal decorative UI.
- Predictable state transitions.
- No unnecessary dashboards or analytics that do not support the core tracking task.

---

# 3. Information Architecture

```text
Habit Counter Tracker
│
├── Authentication
│   ├── Login
│   └── OTP Verification
│
├── Dashboard
│   ├── Habit Summary
│   ├── Mini Progress Matrix
│   ├── Completion Statistics
│   └── Quick Actions
│
├── Habit Tracker
│   ├── Tracker Header
│   ├── Progress Summary
│   ├── Full Day Matrix
│   ├── Day Details
│   └── Tracking Actions
│
├── Create Habit
│   ├── Habit Title
│   ├── Tracking Duration
│   ├── Start Date
│   ├── Reminder
│   └── Confirmation
│
├── Edit Habit
│   ├── Habit Details
│   ├── Tracking Settings
│   └── Reminder Settings
│
└── Settings
    ├── Reminder Preferences
    ├── Account
    └── Application Preferences
```

---

# 4. Screen Inventory

| Screen           | Route                    | Primary Purpose                  |
| ---------------- | ------------------------ | -------------------------------- |
| Login            | `/login`                 | Enter email/phone                |
| OTP Verification | `/verify`                | Verify authentication            |
| Dashboard        | `/dashboard`             | View all active habit counters   |
| Create Habit     | `/habits/new`            | Create a counter                 |
| Habit Tracker    | `/habits/[habitId]`      | Track individual days            |
| Edit Habit       | `/habits/[habitId]/edit` | Modify habit configuration       |
| Settings         | `/settings`              | Manage reminders and preferences |

---

# 5. Global Application Shell

## Desktop

The desktop application should use a restrained content wrapper with a maximum width of approximately `1200px`.

Recommended structure:

```text
┌──────────────────────────────────────────────────────────┐
│ Brand                         Settings / Account          │
├──────────────────────────────────────────────────────────┤
│                                                          │
│ Page Title                         Primary Action         │
│ Supporting metadata                                       │
│                                                          │
│ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐ │
│ │ Habit Card     │ │ Habit Card     │ │ Habit Card     │ │
│ │                │ │                │ │                │ │
│ │ Progress Grid  │ │ Progress Grid  │ │ Progress Grid  │ │
│ └────────────────┘ └────────────────┘ └────────────────┘ │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

The supplied design system specifies a desktop three-column habit-card arrangement inside a `1200px` maximum wrapper. fileciteturn0file0L170-L179

## Mobile

Use a single-column flow:

```text
┌──────────────────────────┐
│ Brand          Menu      │
├──────────────────────────┤
│ Page Title               │
│ Supporting metadata     │
│                          │
│ ┌──────────────────────┐ │
│ │ Habit Card           │ │
│ │ Progress             │ │
│ │ Grid                 │ │
│ └──────────────────────┘ │
│                          │
│ ┌──────────────────────┐ │
│ │ Habit Card           │ │
│ └──────────────────────┘ │
│                          │
│ [ + Create Counter ]     │
└──────────────────────────┘
```

Mobile touch targets must remain at least `44px × 44px`. fileciteturn0file0L174-L177

---

# 6. Authentication Design

## 6.1 Login Screen

### Purpose

Allow the user to authenticate using:

- Email address
- Phone number

### Layout

```text
┌─────────────────────────────────┐
│                                 │
│         Habit Counter           │
│                                 │
│   Build consistency, one day    │
│            at a time.           │
│                                 │
│   Email or Phone Number          │
│   ┌───────────────────────────┐ │
│   │                           │ │
│   └───────────────────────────┘ │
│                                 │
│   [ Continue ]                  │
│                                 │
│   Secure OTP verification       │
│                                 │
└─────────────────────────────────┘
```

### Design Requirements

- Keep the authentication surface visually isolated.
- Use the deep ink canvas as the surrounding environment.
- Use a light tactile panel for the authentication form.
- Primary CTA uses terracotta.
- Avoid excessive illustration.
- Validation should be inline.
- Focus state must use the primary accent.

---

## 6.2 OTP Verification

Display:

- Masked email/phone.
- OTP input.
- Countdown/resend state.
- Verify action.
- Change email/phone action.

OTP entry should support:

- Keyboard navigation.
- Paste.
- Automatic focus movement.
- Clear error messaging.
- Disabled verify state when incomplete.

---

# 7. Dashboard Design

## 7.1 Dashboard Header

The header should communicate the overall purpose immediately.

```text
Habit Dashboard
Track your commitments and keep your daily rhythm.

[ + New Counter ]
```

Optional supporting information:

- Number of active counters.
- Today's pending counters.
- Overall completion summary.

Avoid turning the dashboard into an analytics-heavy reporting page.

---

# 8. Habit Card

Each habit card represents one independent counter.

## Card Structure

```text
┌─────────────────────────────────────┐
│ Habit Title                  •••    │
│                                     │
│ Jan 01 — Mar 31                     │
│ 72 days remaining                   │
│                                     │
│ █ █ ░ █ █ ░ ░ █ █ █ ░ ░            │
│ █ █ █ █ ░ ░ █ █ █ █ ░ ░            │
│ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░ ░            │
│                                     │
│ 42 / 90 days completed              │
│                                     │
│ [ Open Tracker ]                    │
└─────────────────────────────────────┘
```

### Required Information

- Habit title.
- Start date.
- End date.
- Days remaining.
- Days completed / total tracking days.
- Mini progress matrix.
- Current status indication.
- Open tracker action.
- Overflow/edit action.

---

# 9. Mini Progress Matrix

The dashboard uses a compact GitHub-inspired contribution matrix.

The supplied design specifies `16px–20px` cells, `4px` radius, and compact gutters for rolling four-to-six-week visualization. fileciteturn0file0L209-L216

## Cell Rules

- Completed → solid green.
- Pending today → amber.
- Skipped → muted red.
- Upcoming → outlined neutral square.

The matrix should not visually compete with the habit title or completion statistic.

---

# 10. Full Habit Tracker Screen

This is the primary working screen of the application.

## Header

```text
← Back to Dashboard

Morning Reading
Jan 01, 2026 — Mar 31, 2026

42 / 90 completed
48 days remaining

[ Edit Counter ]
```

---

# 11. Full Counter Matrix

The full tracker should provide a large, touch-friendly grid.

The design source defines a seven-column day layout and `40px–60px` square targets for mobile. fileciteturn0file0L209-L216

Recommended structure:

```text
          SUN  MON  TUE  WED  THU  FRI  SAT

Week 1     ○    ✓    ✓    —    ✓    ✕    ○
Week 2     ✓    ✓    ✓    ✓    ✕    ✓    ○
Week 3     ✓    —    ✓    ✓    ✓    ✓    ○
Week 4     ○    ○    ○    ○    ○    ○    ○
```

Actual UI should use square cells rather than textual symbols.

---

# 12. Tracker Cell States

## Completed

Visual:

- Solid `#3A7D44`.
- High-contrast accessible label/icon when needed.
- Subtle hover elevation on desktop.

Interaction:

- Hover reveals date/status.
- Click/tap opens or changes the day state according to the product rules.
- Completed state should feel definitive but not visually aggressive.

---

## Pending

Visual:

- Solid amber `#E3A008`.
- Subtle breathing/focus border for today's actionable cell.

Meaning:

- Current day has not yet been completed.
- This is the primary actionable state.

---

## Skipped

Visual:

- Solid `#C1443B`.
- Optional accessible skip indicator/icon.

Meaning:

- The user intentionally marked the day as skipped.

---

## Upcoming

Visual:

- Transparent interior.
- `1.5px` neutral border.
- No filled status color.

Meaning:

- Future date.
- Not yet actionable.

---

# 13. Day Interaction

The core interaction should be intentionally simple.

## Primary Flow

```text
Upcoming
   │
   │ current date arrives
   ▼
Pending
   │
   ├── Complete ──► Completed
   │
   └── Skip ──────► Skipped
```

A future day must not accidentally appear completed or skipped.

## Interaction Feedback

When a day changes:

1. Cell changes state immediately.
2. Micro-animation confirms the transition.
3. Completion totals update.
4. Remaining-day count updates if applicable.
5. Any dashboard summary remains synchronized.

Use motion sparingly. The interface should feel deliberate rather than playful.

---

# 14. Day Detail / Confirmation

A day interaction may use either:

- Inline action controls.
- Popover.
- Bottom sheet on mobile.
- Small modal when confirmation is genuinely required.

Recommended content:

```text
Wednesday, March 18

Status
● Pending

[ Mark Complete ]
[ Skip Day ]
[ Cancel ]
```

For already completed or skipped dates, show the current state and available permitted actions.

---

# 15. Progress Summary

The tracker header should provide three primary metrics:

### Completed

```text
42
completed
```

### Total

```text
90
tracking days
```

### Remaining

```text
48
days remaining
```

Primary representation:

```text
42 / 90 completed
```

The progress summary should remain visible near the tracker matrix.

---

# 16. Create Habit Screen

## Form Structure

```text
Create Counter

Habit Title
[ Morning Reading                    ]

Tracking Duration
[ 90 ] days

Start Date
[ Jan 01, 2026                     ]

Reminder
[ 08:00 AM                         ]

Reminder
[ ON ]

                    [ Create Counter ]
```

## Required Fields

- Title.
- Number of tracking days.
- Start date.

## Optional Fields

- Reminder.
- Reminder time.

The form should clearly explain what will happen after creation:

> Your counter will create one tracking day for every day in the selected tracking period.

---

# 17. Habit Creation Interaction

Recommended sequence:

```text
Enter title
     ↓
Set duration
     ↓
Choose start date
     ↓
Configure reminder
     ↓
Review
     ↓
Create Counter
     ↓
Dashboard
```

After successful creation:

- Show a lightweight success confirmation.
- Navigate to the new habit tracker or dashboard according to the implementation flow.
- Ensure the first day is correctly classified based on the selected start date and current date.

---

# 18. Edit Habit

The edit screen should reuse the create form pattern.

Editable:

- Habit title.
- Duration where technically permitted.
- Reminder settings.
- Reminder time.
- Other user-facing configuration supported by the PRD/TRD.

Potentially destructive actions should be visually separated:

```text
Danger Zone

Delete Counter

This permanently removes the counter and its tracking history.

[ Delete Counter ]
```

Use the destructive color only for destructive actions.

---

# 19. Settings

Settings should remain intentionally compact.

## Sections

### Reminder

- Enable/disable reminders.
- Preferred reminder time.
- Notification permission state.

### Account

- Email/phone.
- Sign out.

### Preferences

- Theme behavior if supported.
- Accessibility preferences if supported.

Settings should not become a second dashboard.

---

# 20. Reminder UI

The reminder configuration should use a simple control pattern.

```text
Daily Reminder                         ON
Receive a reminder to complete today's habit.

Reminder Time
[ 08:00 AM ]
```

When browser/device notification permission is required:

```text
Notifications are disabled.

[ Enable Notifications ]
```

Permission messaging should explain the consequence before requesting browser permission.

---

# 21. Responsive Design

## Mobile — < 768px

- Single-column layout.
- `16px` outer gutter.
- Full-width primary actions.
- Minimum `44px × 44px` touch targets.
- Full tracker remains horizontally manageable.
- Prefer horizontal scrolling for wide matrices rather than shrinking cells below usable touch size.
- Bottom sheets are preferred over large desktop-style dialogs.

## Tablet — 768px–1024px

- Two-column dashboard grid.
- Larger tracker cells.
- More generous spacing.
- Touch interaction remains primary.

## Desktop — > 1024px

- Three-column dashboard habit cards.
- Hover states enabled.
- Larger content wrapper.
- More information can appear inline.
- Precision interactions available for tracker cells.

These breakpoints and layout principles follow the supplied design system. fileciteturn0file0L170-L179

---

# 22. Color System

## Core Surfaces

| Role             | Token     |
| ---------------- | --------- |
| Main background  | `#121318` |
| Lowest surface   | `#0d0e13` |
| Low surface      | `#1a1b20` |
| Standard surface | `#1e1f25` |
| High surface     | `#292a2f` |
| Highest surface  | `#34343a` |
| Primary text     | `#e3e1e9` |
| Secondary text   | `#ddc0b7` |
| Outline          | `#a58b83` |

## Brand

| Role              | Token     |
| ----------------- | --------- |
| Primary           | `#ffb59b` |
| Primary container | `#e07147` |
| On primary        | `#5b1a00` |

## Semantic

| Role      | Token     |
| --------- | --------- |
| Completed | `#3A7D44` |
| Pending   | `#E3A008` |
| Skipped   | `#C1443B` |
| Upcoming  | `#D8D4CC` |
| Error     | `#ffb4ab` |

The complete supplied palette should remain available as design tokens rather than being replaced with ad-hoc colors. fileciteturn0file0L2-L56

---

# 23. Typography

## Font Families

### Space Grotesk

Use for:

- Page titles.
- Section headings.
- Numbers.
- Buttons.
- Labels.
- Tracker-related system information.

### Inter

Use for:

- Body copy.
- Supporting descriptions.
- Metadata.
- Form helper text.
- Dense content.

The source design system explicitly assigns Space Grotesk to analytical/display content and Inter to narrative and dense content. fileciteturn0file0L57-L117

## Primary Scale

| Style           | Size | Weight | Line Height |
| --------------- | ----:| ------:| -----------:|
| Display         | 32px | 700    | 38px        |
| Display Mobile  | 28px | 700    | 34px        |
| Headline Large  | 24px | 700    | 32px        |
| Headline Medium | 20px | 600    | 28px        |
| Headline Small  | 18px | 600    | 24px        |
| Body Large      | 16px | 600    | 24px        |
| Body Medium     | 16px | 400    | 24px        |
| Body Small      | 14px | 400    | 20px        |
| Label Medium    | 14px | 600    | 18px        |
| Label Small     | 12px | 500    | 16px        |
| Caption         | 12px | 400    | 16px        |

---

# 24. Spacing System

Use an 8px base rhythm.

Primary spacing tokens:

```text
4px   xs
8px   sm
16px  md
24px  lg
32px  xl
```

Page gutters:

```text
Mobile:   16px
Tablet:   24px
Desktop:  24px+
```

The supplied design system defines these spacing tokens and page margins explicitly. fileciteturn0file0L125-L135

---

# 25. Shape System

## Containers

Use `8px` radius for:

- Cards.
- Forms.
- Dialogs.
- Input fields.
- Structural containers.

## Tracker Cells

Use `4px` radius.

## Buttons

Use approximately `6px` radius.

## Pills

Use `9999px` for:

- Status badges.
- User indicators.
- Compact metadata tags.

These shape rules come directly from the uploaded design specification. fileciteturn0file0L191-L197

---

# 26. Buttons

## Primary

Characteristics:

- Terracotta background.
- Warm light text.
- 6px radius.
- Space Grotesk.
- Strong but restrained contrast.

Examples:

- Create Counter.
- Continue.
- Verify OTP.
- Mark Complete.

## Secondary

Use outlined/ghost styling.

Examples:

- Cancel.
- Back.
- Edit.
- Change phone/email.

## Destructive

Use muted red only when the action is destructive.

Examples:

- Delete Counter.
- Delete account, if supported.

The source design specifies terracotta primary actions and restrained destructive treatment. fileciteturn0file0L199-L204

---

# 27. Cards

Cards should feel like warm paper surfaces placed on the dark canvas.

Recommended characteristics:

- Warm light background.
- 8px radius.
- 16–24px internal padding.
- Minimal ambient shadow.
- Strong internal information hierarchy.
- No heavy borders unless required for accessibility.

The design source defines this paper-like card treatment and restrained elevation model. fileciteturn0file0L181-L189

---

# 28. Elevation

Avoid:

- Neon glow.
- Large decorative shadows.
- Excessive glassmorphism.
- Heavy floating effects.

Use:

### Card

`0 2px 8px rgba(0, 0, 0, 0.08)`

### Hover

`0 4px 12px rgba(0, 0, 0, 0.12)`

with approximately `1px` upward translation.

### Modal

`0 8px 24px rgba(0, 0, 0, 0.24)`

with a 60% ink scrim.

These elevation rules are defined in the supplied design source. fileciteturn0file0L181-L189

---

# 29. Motion Design

Motion should communicate state rather than decorate the interface.

## Recommended Motion

### Cell Completion

- Small scale transition.
- Fill transition.
- Optional subtle confirmation pulse.

### Card Hover

- `1px` vertical lift.
- Shadow transition.

### Dialog

- Fade + small vertical/scale transition.

### Segmented Control

- Active surface slides between options.

## Avoid

- Continuous animation.
- Large bouncing effects.
- Excessive parallax.
- Decorative background animation.
- Long transitions.

Recommended transition range:

```text
Micro interaction: 120–180ms
Standard transition: 180–240ms
Modal transition: 200–280ms
```

Respect `prefers-reduced-motion`.

---

# 30. Form Design

Inputs should visually belong to their containing card.

## Default

- Light cream/white surface.
- `1px` neutral border.
- `8px` radius.
- Dark text.

## Focus

- `1.5px` terracotta outline.
- No fuzzy glow.

## Error

- `1.5px` muted red border.
- Inline error text.

## Numeric Duration Input

Use:

```text
[ − ]   90   [ + ]
```

The source design specifically defines split numeric stepper controls around a centered Space Grotesk numeric value. fileciteturn0file0L218-L221

---

# 31. Empty States

## No Habits

```text
No counters yet.

Start with one habit and give yourself a
clear number of days to work toward.

[ Create Your First Counter ]
```

Keep the illustration optional and secondary.

---

# 32. Loading States

Loading should preserve layout dimensions.

Use:

- Skeleton card surfaces.
- Skeleton text blocks.
- Skeleton tracker cells.

Avoid full-page spinners unless authentication or an application-level blocking operation requires them.

---

# 33. Error States

Errors should be specific and actionable.

Example:

```text
We couldn't update this day.

Your progress was not changed.

[ Try Again ]
```

Do not display generic technical messages such as:

> Something went wrong.

without actionable context.

---

# 34. Notification Permission State

Represent notification states explicitly:

```text
Not requested
     ↓
Permission requested
     ↓
Enabled
     │
     └── Disabled / Denied
```

The interface should distinguish:

- Application reminder enabled.
- Browser/device permission enabled.
- Reminder configuration saved.

---

# 35. Accessibility

The design must remain usable without relying on visual color recognition alone.

## Requirements

- WCAG-conscious contrast.
- Keyboard navigation.
- Visible focus states.
- Semantic headings.
- Accessible labels for tracker cells.
- Screen-reader-readable day status.
- Minimum 44px touch targets.
- Reduced-motion support.
- Error messages associated with their inputs.

Example accessible cell label:

```text
March 18, 2026 — Completed
```

not merely:

```text
Green square
```

---

# 36. Interaction States

Every interactive component should define:

```text
Default
Hover
Focus
Pressed
Disabled
Loading
Success
Error
```

For tracker cells:

```text
Upcoming
Pending
Completed
Skipped
Disabled
Focused
```

Do not introduce undocumented visual states.

---

# 37. Dashboard Responsive Behavior

## Desktop

```text
[Habit A] [Habit B] [Habit C]
[Habit D] [Habit E] [Habit F]
```

## Tablet

```text
[Habit A] [Habit B]
[Habit C] [Habit D]
```

## Mobile

```text
[Habit A]
[Habit B]
[Habit C]
```

Cards should preserve their internal information hierarchy at every breakpoint.

---

# 38. Tracker Responsive Behavior

The full tracker is the most layout-sensitive screen.

## Desktop

Display the complete matrix comfortably within the available content area.

## Tablet

Allow matrix width to grow while preserving usable cells.

## Mobile

Do not compress cells to unreadable sizes.

Preferred behavior:

```text
┌───────────────────────────────┐
│ Tracker                       │
│                               │
│ ← ┌───────────────────────┐ → │
│   │ SUN MON TUE WED THU   │   │
│   │ □   □   □   □   □     │   │
│   │ □   □   □   □   □     │   │
│   └───────────────────────┘   │
└───────────────────────────────┘
```

Use horizontal scrolling where required.

---

# 39. Navigation

The navigation should remain minimal.

Recommended desktop navigation:

```text
Habit Counter
─────────────
Dashboard
Settings
```

User/account controls can appear in the upper-right area.

Mobile navigation may collapse into a compact menu.

Do not introduce complex multi-level navigation for the MVP.

---

# 40. Content Hierarchy

For every major screen:

### Level 1

What is this screen?

### Level 2

What is the current state?

### Level 3

What should the user do?

### Level 4

Supporting information.

Example:

```text
Morning Reading                  ← Level 1

42 / 90 completed               ← Level 2
48 days remaining

[ Mark Today Complete ]         ← Level 3

Started Jan 01 · Ends Mar 31    ← Level 4
```

---

# 41. UX Rules for Multiple Counters

Users can create multiple independent counters.

Each counter must have:

- Unique identity.
- Independent start/end dates.
- Independent progress.
- Independent reminder configuration.
- Independent tracker screen.

The dashboard should make switching between counters immediate.

Avoid mixing day states between counters.

---

# 42. Date and Time Presentation

Dates should be displayed in a human-readable format.

Recommended:

```text
Jan 01, 2026
Mar 31, 2026
```

For compact metadata:

```text
Jan 01 → Mar 31
```

Relative information:

```text
48 days remaining
```

Avoid displaying raw timestamps unless the user is configuring reminders or the timestamp is necessary.

---

# 43. Status Legend

The full tracker should provide a compact legend.

```text
● Completed
● Pending
● Skipped
○ Upcoming
```

The actual UI must use the defined semantic colors and accessible labels.

---

# 44. Component Inventory

## Application

- App Shell
- Header
- Navigation
- User Menu
- Page Container

## Authentication

- Auth Card
- Identifier Input
- OTP Input
- Resend Timer
- Auth Error

## Habit

- Habit Card
- Habit Header
- Habit Metadata
- Progress Summary
- Mini Matrix
- Full Matrix
- Tracker Cell
- Day Detail
- Status Legend

## Forms

- Text Input
- Number Input
- Date Input
- Time Input
- Numeric Stepper
- Toggle
- Segmented Control

## Feedback

- Toast
- Alert
- Modal
- Bottom Sheet
- Skeleton
- Empty State
- Error State

## Navigation

- Breadcrumb/Back Link
- Page Header
- Mobile Menu

---

# 45. Component Behavior Matrix

| Component     | Mobile                 | Tablet     | Desktop          |
| ------------- | ---------------------- | ---------- | ---------------- |
| Habit Cards   | 1 column               | 2 columns  | 3 columns        |
| Primary CTA   | Full width             | Contextual | Auto width       |
| Tracker Cells | 40–60px                | Flexible   | Flexible         |
| Dialog        | Bottom sheet preferred | Dialog     | Dialog           |
| Navigation    | Collapsed              | Compact    | Full             |
| Hover States  | N/A                    | Limited    | Enabled          |
| Card Actions  | Visible                | Visible    | Hover/contextual |

---

# 46. Design Token Implementation

The implementation should expose design values as reusable tokens rather than hard-coded component-specific values.

Recommended token groups:

```text
color.*
typography.*
spacing.*
radius.*
shadow.*
motion.*
status.*
breakpoint.*
```

Example conceptual mapping:

```text
color.background
color.surface
color.primary
color.status.completed
color.status.pending
color.status.skipped
color.status.upcoming

radius.sm
radius.md
radius.lg

spacing.xs
spacing.sm
spacing.md
spacing.lg
spacing.xl
```

---

# 47. Design-to-Technical Mapping

| Design Requirement                 | Technical Concern                  |
| ---------------------------------- | ---------------------------------- |
| Multiple counters                  | Habit entity + user ownership      |
| Daily cells                        | Tracking Day entity                |
| Completed/pending/skipped/upcoming | Day status model                   |
| Progress totals                    | Derived calculations               |
| Reminder                           | Reminder configuration + scheduler |
| OTP login                          | Authentication service             |
| Dashboard                          | Habit list + summary data          |
| Full tracker                       | Date-range tracking query          |
| Responsive matrix                  | CSS grid + overflow strategy       |
| Micro-animation                    | Framer Motion                      |
| Accessible states                  | Semantic HTML + ARIA               |

---

# 48. Performance Considerations

The tracker should remain responsive even for long tracking periods.

## Requirements

- Avoid rendering unnecessary off-screen content.
- Keep tracker cell components lightweight.
- Memoize derived progress data where appropriate.
- Avoid expensive animations across the entire matrix.
- Prefer CSS transforms for micro-interactions.
- Preserve layout during loading.
- Avoid re-rendering unrelated habit cards when one day changes.

---

# 49. Design Acceptance Criteria

## Dashboard

- [ ] Multiple counters can be displayed simultaneously.
- [ ] Each card clearly identifies its habit.
- [ ] Start/end dates are visible.
- [ ] Days remaining are visible.
- [ ] Completed/total count is visible.
- [ ] Mini matrix communicates day states.
- [ ] User can open an individual tracker.

## Tracker

- [ ] Full tracking period is represented.
- [ ] Cells are visually distinguishable.
- [ ] Completed, pending, skipped, and upcoming states are distinct.
- [ ] Today's state is obvious.
- [ ] Day interactions are touch-friendly.
- [ ] Progress totals update after status changes.

## Create/Edit

- [ ] Habit title can be entered.
- [ ] Tracking duration can be configured.
- [ ] Start date can be configured.
- [ ] Reminder can be configured.
- [ ] Validation states are clear.
- [ ] Successful creation returns the user to the intended application context.

## Responsive

- [ ] Mobile layout uses one column.
- [ ] Tablet layout uses two columns where appropriate.
- [ ] Desktop layout supports three-column habit cards.
- [ ] Tracker cells remain usable on touch devices.
- [ ] No critical information is hidden on smaller screens.

## Accessibility

- [ ] Keyboard navigation works.
- [ ] Focus states are visible.
- [ ] Tracker cells have accessible labels.
- [ ] Status is not communicated by color alone.
- [ ] Touch targets meet minimum size.
- [ ] Reduced-motion preference is respected.

---

# 50. Visual Quality Bar

The final interface should satisfy the following visual criteria:

### Must Feel

- Warm.
- Precise.
- Calm.
- Premium.
- Structured.
- Tactile.
- Data-aware.
- Personal.

### Must Not Feel

- Generic SaaS.
- Neon-heavy.
- Gamified.
- Clinical.
- Over-animated.
- Dashboard-bloated.
- Visually noisy.

The source design describes the intended aesthetic as a fusion of tactile warmth and data-forward modernism, intentionally avoiding synthetic SaaS conventions, neon gradients, harsh shadows, and hyper-saturated primaries. fileciteturn0file0L140-L146

---

# 51. Final Design Principle

The product should make a simple action feel meaningful:

> **Open the tracker → see today → record today → understand your progress.**

Everything else supports that loop.

The interface should therefore prioritize:

1. **Today**
2. **Progress**
3. **Continuity**
4. **Remaining commitment**
5. **Simple action**
6. **Long-term history**

The day square is the visual language of the product. The dashboard provides orientation. The tracker provides action. The settings provide control.

That hierarchy should remain intact across every screen and breakpoint.
