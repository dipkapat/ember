Below is the **Technical Requirements Document (TRD)** derived from the PRD and aligned with the architecture document. It translates the product requirements into implementable technical requirements, contracts, data structures, validation rules, API/server actions, security, performance, testing, and acceptance criteria.

# Habit Counter Tracker

## Technical Requirements Document (TRD)

**Document Version:** 1.0  
**Status:** Technical Specification  
**Product:** Habit Counter Tracker  
**Architecture:** Next.js App Router + React + TypeScript  
**UI:** Tailwind CSS + shadcn/ui  
**Animation:** Framer Motion  
**Primary Platform:** Responsive Web  
**Target:** Production-ready MVP

---

# 1. Document Purpose

This document translates the Habit Counter Tracker PRD into concrete technical requirements for implementation.

It defines:

- Technical scope

- Technology requirements

- Application architecture

- Functional requirements

- Data model

- API/server contracts

- Authentication

- Authorization

- State management

- Validation

- Date/time handling

- Tracker behavior

- Reminder architecture

- Error handling

- Performance requirements

- Accessibility

- Testing

- Security

- Deployment

- Acceptance criteria

This document should be treated as the technical implementation reference for the MVP.

---

# 2. Product Technical Definition

Habit Counter Tracker is a multi-user web application where authenticated users can:

1. Create habit counters.

2. Define a tracking duration.

3. Define a start date.

4. Automatically generate tracking days.

5. Track daily status.

6. View visual progress.

7. Manage multiple independent habits.

8. Configure reminders.

9. Edit and delete habits.

10. Use the application across desktop, tablet, and mobile.

The primary technical domain is:

```text
User
  ↓
Habit
  ↓
Tracking Days
  ↓
Daily Status
  ↓
Progress Calculation
  ↓
Visual Tracker
```

---

# 3. Technical Goals

## TG-001 — Type Safety

The application must use TypeScript throughout the application layer.

No unnecessary `any` types should be used.

---

## TG-002 — Component Reusability

UI should be built from reusable components.

The following must not be duplicated across screens:

- Buttons

- Dialogs

- Inputs

- Status indicators

- Day squares

- Progress indicators

- Habit cards

---

## TG-003 — Server-First Architecture

Use Next.js Server Components by default.

Client Components should only be introduced where interactivity requires them.

---

## TG-004 — Secure Data Access

All authenticated data operations must verify the current user's ownership of the requested resource.

---

## TG-005 — Correct Date Handling

Date and timezone handling must be centralized and deterministic.

This is a critical requirement because the product is day-based.

---

## TG-006 — Fast Daily Interaction

Changing a tracking-day status should feel immediate.

Optimistic UI should be used where appropriate.

---

# 4. Technology Requirements

## 4.1 Required Technologies

| Technology      | Requirement                                    |
| --------------- | ---------------------------------------------- |
| Next.js         | App Router                                     |
| React           | Current stable version compatible with Next.js |
| TypeScript      | Strict mode                                    |
| Tailwind CSS    | Required                                       |
| shadcn/ui       | Required for base UI primitives                |
| Framer Motion   | Required for micro-interactions                |
| React Hook Form | Recommended for complex forms                  |
| Zod             | Required for input validation                  |

---

# 5. Recommended Infrastructure

The exact providers can be selected during implementation.

The architecture should support:

```text
Frontend / Application
        ↓
Database
        ↓
Authentication
        ↓
Notification Service
```

Possible production stack:

```text
Next.js
Vercel
PostgreSQL
ORM
Authentication Provider
Email/SMS OTP Provider
Notification Scheduler
```

Provider selection should remain replaceable wherever practical.

---

# 6. Runtime Requirements

## Browser Support

Support current versions of:

- Chrome

- Firefox

- Safari

- Edge

Desktop and mobile browsers should be supported.

---

# 7. Responsive Requirements

The application must support:

```text
320px+
768px+
1024px+
1440px+
```

Minimum supported viewport:

**320px width**

---

# 8. Application Routes

The following routes are required.

```text
/
├── login
├── verify
├── dashboard
├── habits
│   ├── new
│   └── [habitId]
│       └── edit
└── settings
```

---

# 9. Route Requirements

## TR-ROUTE-001

Unauthenticated users accessing protected routes must be redirected to `/login`.

---

## TR-ROUTE-002

Authenticated users accessing `/login` should be redirected to `/dashboard`.

---

## TR-ROUTE-003

Habit detail routes must contain a valid `habitId`.

---

## TR-ROUTE-004

Invalid or inaccessible habit IDs must return a not-found state rather than exposing whether another user's habit exists.

---

# 10. Authentication Requirements

## AUTH-001

The application must support authentication through:

- Email

- Phone number

---

## AUTH-002

OTP verification must be required before establishing an authenticated session.

---

## AUTH-003

OTP must have an expiration period.

Recommended default:

**5–10 minutes**

The exact value should be configurable.

---

## AUTH-004

OTP resend must use rate limiting.

---

## AUTH-005

Repeated invalid OTP attempts must be rate limited.

---

## AUTH-006

Authentication session must be stored securely.

Prefer secure HTTP-only cookies where supported.

---

## AUTH-007

Client-side authentication state must never be treated as the authoritative security mechanism.

Authorization must occur server-side.

---

# 11. User Entity

Required fields:

```text
id
email
phone
createdAt
updatedAt
```

Recommended:

```text
timezone
```

---

# 12. User Constraints

## USER-001

User ID must be unique.

## USER-002

Email must be unique when provided.

## USER-003

Phone number must be unique when provided.

## USER-004

At least one authentication identifier must exist.

---

# 13. Habit Entity

Required fields:

```text
id
userId
title
startDate
endDate
durationDays
reminderEnabled
reminderTime
createdAt
updatedAt
```

Optional:

```text
timezone
archivedAt
```

---

# 14. Habit Constraints

## HABIT-001

Title is required.

---

## HABIT-002

Title must not contain only whitespace.

---

## HABIT-003

Title length should be limited.

Recommended:

```text
Minimum: 1 character
Maximum: 100 characters
```

---

## HABIT-004

Duration must be a positive integer.

---

## HABIT-005

Minimum duration:

**1 day**

---

## HABIT-006

Recommended MVP maximum:

**365 days**

This limit should be configurable.

---

## HABIT-007

Start date must be a valid date.

---

## HABIT-008

End date must be calculated from:

```text
startDate + durationDays - 1 day
```

---

# 15. Tracking Day Entity

Each habit contains tracking-day records.

Required:

```text
id
habitId
dayNumber
date
status
createdAt
updatedAt
```

---

# 16. Tracking Day Constraints

## DAY-001

Day number starts at:

```text
1
```

---

## DAY-002

Day number must be sequential.

Example:

```text
1
2
3
...
90
```

---

## DAY-003

Every habit must have exactly one tracking day for each date in its tracking period.

---

## DAY-004

A habit cannot contain duplicate dates.

---

## DAY-005

A habit cannot contain duplicate day numbers.

---

# 17. Day Status

Supported statuses:

```text
completed
pending
skipped
upcoming
```

---

# 18. Status Technical Rules

## DAY-STATUS-001

`completed` means the user completed the habit for that day.

---

## DAY-STATUS-002

`pending` means the day is actionable but has not been completed.

---

## DAY-STATUS-003

`skipped` means the user intentionally marked the day as skipped.

---

## DAY-STATUS-004

`upcoming` means the tracking date has not arrived.

---

## DAY-STATUS-005

Future dates must not be manually marked completed.

---

## DAY-STATUS-006

Upcoming status should preferably be derived from date context rather than treated as a permanent user-controlled state.

---

# 19. Default Day Status

When a habit is created:

```text
Future days → upcoming
Current day → pending
Past days → pending
```

For a future-start habit:

```text
Before start date → upcoming
Start date → pending
After start date → upcoming
```

The application should not retroactively assume completion.

---

# 20. Progress Calculation

Progress must be calculated from tracking-day records.

## Completed Days

```text
COUNT(status = completed)
```

---

## Skipped Days

```text
COUNT(status = skipped)
```

---

## Pending Days

```text
COUNT(status = pending)
```

---

## Total Days

```text
COUNT(all tracking days)
```

---

## Completion Percentage

```text
completedDays / totalDays × 100
```

Round according to the UI specification.

Recommended:

**Nearest whole number**

---

# 21. Remaining Days

The application must distinguish between:

### Calendar Days Remaining

Number of days until the habit's end date.

### Uncompleted Tracking Days

Total days that are not completed.

These values should not be incorrectly presented as the same metric.

For the MVP dashboard, the primary "Days Remaining" value should represent calendar/tracking-period remaining days.

---

# 22. Habit Creation Flow

Technical sequence:

```text
Client
 ↓
Create Habit Form
 ↓
Client Validation
 ↓
Server Action
 ↓
Authentication Check
 ↓
Server Validation
 ↓
Create Habit
 ↓
Generate Tracking Days
 ↓
Create Reminder
 ↓
Commit Transaction
 ↓
Revalidate Dashboard
 ↓
Redirect to Habit
```

---

# 23. Habit Creation Transaction

Habit creation and tracking-day generation should occur in a database transaction.

Conceptually:

```text
BEGIN

Create Habit

Create Day 1
Create Day 2
...
Create Day N

Create Reminder if enabled

COMMIT
```

If any operation fails:

```text
ROLLBACK
```

This prevents partially created habits.

---

# 24. Create Habit Input

```ts
type CreateHabitInput = {
  title: string
  durationDays: number
  startDate: string
  reminderEnabled: boolean
  reminderTime?: string
}
```

---

# 25. Create Habit Validation

Zod schema should validate:

```text
title
durationDays
startDate
reminderEnabled
reminderTime
```

Conditional validation:

```text
if reminderEnabled === true
    reminderTime is required
```

---

# 26. Edit Habit

Users can edit:

- Title

- Reminder status

- Reminder time

Duration/start-date modification requires special handling.

---

# 27. Duration Modification

Changing duration may affect existing tracking records.

The application should not silently delete historical tracking data.

If duration is increased:

```text
Existing days remain
Additional days are generated
```

If duration is reduced:

Display a confirmation explaining that future tracking days may be removed.

Completed historical days must never be silently deleted.

---

# 28. Start Date Modification

Changing start date can invalidate existing day/date mappings.

For MVP:

**Start date should be immutable after creation**, or require explicit recreation of the tracking schedule.

This avoids complex data migration and accidental history corruption.

---

# 29. Habit Deletion

Delete operation must require explicit confirmation.

Server must:

1. Authenticate user.

2. Verify habit ownership.

3. Delete associated tracking days.

4. Delete reminder.

5. Delete habit.

Use a database transaction.

---

# 30. Tracking-Day Update

Required server operation:

```text
updateDayStatus()
```

Input:

```ts
type UpdateDayStatusInput = {
  habitId: string
  dayId: string
  status: "completed" | "pending" | "skipped"
}
```

---

# 31. Tracking-Day Update Validation

Before mutation:

1. User must be authenticated.

2. Habit must belong to user.

3. Day must belong to habit.

4. Day must not be in the future.

5. Status must be valid.

---

# 32. Optimistic Update

Recommended flow:

```text
User clicks day
       ↓
Local UI updates
       ↓
Server mutation
       ↓
Success
       ↓
Keep optimistic state
```

Failure:

```text
Server failure
       ↓
Rollback UI
       ↓
Display error toast
```

---

# 33. Tracker API/Server Contract

## Get Habit

```text
GET /api/habits/:habitId
```

Response:

```json
{
  "habit": {},
  "days": [],
  "progress": {}
}
```

---

## Update Day

```text
PATCH /api/habits/:habitId/days/:dayId
```

Request:

```json
{
  "status": "completed"
}
```

---

# 34. Dashboard Data Requirements

Dashboard must retrieve:

- User

- Active habits

- Progress for each habit

- Current-day status

- Reminder state

Avoid retrieving unnecessary historical data when a compact summary is sufficient.

---

# 35. Dashboard Query

Conceptual result:

```ts
type DashboardHabit = {
  id: string
  title: string
  startDate: Date
  endDate: Date
  durationDays: number
  todayStatus: DayStatus
  progress: HabitProgress
  days: TrackingDay[]
}
```

---

# 36. Tracker Query

Detailed tracker should retrieve:

```text
Habit
Tracking Days
Progress
Reminder
```

The tracker should not need to make multiple independent client requests for basic page rendering.

---

# 37. Reminder Entity

Required:

```text
id
habitId
enabled
time
timezone
createdAt
updatedAt
```

Relationship:

```text
Habit 1 ─── 0..1 Reminder
```

---

# 38. Reminder Requirements

## REM-001

User can enable/disable a reminder.

## REM-002

User can configure a preferred time.

## REM-003

Reminder belongs to a specific habit.

## REM-004

Reminder timezone must be stored or deterministically derived.

## REM-005

Disabled reminders must not trigger notifications.

---

# 39. Reminder Scheduling

The architecture should support scheduled background execution.

```text
Reminder Record
      ↓
Scheduler
      ↓
Job Queue
      ↓
Notification Worker
      ↓
Notification Provider
```

The MVP may use a managed scheduler/provider.

---

# 40. Reminder Behavior

When the scheduled time arrives:

1. Verify reminder is enabled.

2. Verify habit is active.

3. Determine today's tracking day.

4. Verify today's status is still actionable.

5. Send notification.

6. Record delivery result if supported.

---

# 41. Duplicate Reminder Prevention

The system should avoid sending multiple reminders for the same habit/day unless explicitly configured.

Future data structure:

```text
ReminderDelivery
├── reminderId
├── trackingDayId
├── scheduledAt
├── deliveredAt
└── status
```

---

# 42. Notification Channels

MVP can support one channel initially.

Architecture should allow:

```text
Email
Push
Browser
SMS
```

without changing the core habit domain.

---

# 43. Date & Time Requirements

Date logic is one of the most critical technical areas.

The system must distinguish:

- Calendar date

- Timestamp

- User timezone

- Reminder time

---

# 44. Date Storage

Tracking-day dates should represent a calendar date rather than an arbitrary timestamp.

Where supported, use an appropriate database date type.

Avoid converting habit dates through multiple timezone transformations unnecessarily.

---

# 45. Timezone

Store the user's timezone where practical.

Example:

```text
Asia/Kolkata
America/New_York
Europe/London
```

Do not rely on browser timezone alone for scheduled server-side notifications.

---

# 46. End Date Calculation

Given:

```text
startDate = 2026-08-01
duration = 30
```

End date:

```text
2026-08-30
```

Formula:

```text
endDate = startDate + (duration - 1)
```

---

# 47. Day Number Calculation

For a tracking date:

```text
dayNumber =
differenceInCalendarDays(date, startDate) + 1
```

Example:

```text
Start = Aug 1

Aug 1 → Day 1
Aug 2 → Day 2
Aug 30 → Day 30
```

---

# 48. Today Resolution

Today's status must be resolved using the user's relevant timezone.

Do not compare raw UTC timestamps to local calendar dates.

---

# 49. Database Requirements

A relational database is recommended.

Core tables:

```text
users
habits
tracking_days
reminders
```

Future tables:

```text
notification_deliveries
tracking_day_history
user_preferences
```

---

# 50. Database Relationships

```text
users
  │
  │ 1:N
  ▼
habits
  │
  ├──────────────┐
  │              │
  │ 1:N          │ 1:0..1
  ▼              ▼
tracking_days   reminders
```

---

# 51. Database Constraints

Required:

```text
PRIMARY KEY(id)

FOREIGN KEY(habits.userId)
FOREIGN KEY(tracking_days.habitId)
FOREIGN KEY(reminders.habitId)
```

Unique:

```text
tracking_days(habitId, dayNumber)
tracking_days(habitId, date)
```

---

# 52. Recommended ORM

An ORM such as Prisma or Drizzle may be used.

Requirements:

- Type-safe queries

- Migrations

- Transactions

- Relational constraints

- Good Next.js compatibility

The ORM should remain behind the repository layer.

---

# 53. Repository Requirements

Required repositories:

```text
UserRepository
HabitRepository
TrackingDayRepository
ReminderRepository
```

---

# 54. Habit Repository

Required operations:

```text
findById()
findByUserId()
create()
update()
delete()
```

---

# 55. Tracking Day Repository

Required operations:

```text
findByHabitId()
findById()
createMany()
updateStatus()
deleteByHabitId()
```

---

# 56. Reminder Repository

Required operations:

```text
findByHabitId()
create()
update()
delete()
```

---

# 57. Service Requirements

Required services:

```text
HabitService
TrackerService
ProgressService
ReminderService
```

---

# 58. Habit Service Responsibilities

Must coordinate:

- Habit creation

- Tracking-day generation

- Reminder creation

- Habit update

- Habit deletion

---

# 59. Tracker Service Responsibilities

Must handle:

- Tracker retrieval

- Day status mutation

- Current day resolution

- Tracker progress

---

# 60. Progress Service

Required function:

```text
calculateHabitProgress(days)
```

Returns:

```ts
type HabitProgress = {
  totalDays: number
  completedDays: number
  pendingDays: number
  skippedDays: number
  upcomingDays: number
  remainingDays: number
  completionPercentage: number
}
```

---

# 61. UI Component Requirements

Required reusable components:

```text
AppShell
Sidebar
MobileHeader
Navigation
HabitCard
HabitGrid
DaySquare
HabitProgress
ProgressBar
CreateHabitForm
EditHabitForm
ReminderSettings
StatusPopover
ConfirmDialog
Toast
EmptyState
LoadingState
ErrorState
```

---

# 62. DaySquare Requirements

Each DaySquare must receive:

```text
dayNumber
date
status
isToday
isSelected
disabled
```

It must provide:

- Visual status

- Accessible label

- Hover state

- Focus state

- Click/tap interaction

---

# 63. DaySquare Accessibility

Example accessible label:

```text
Day 37, September 23, 2026, completed
```

For upcoming:

```text
Day 45, October 1, 2026, upcoming
```

---

# 64. HabitGrid Requirements

HabitGrid must:

- Render all tracking days

- Preserve chronological order

- Group days into rows

- Support scrolling

- Support responsive sizing

- Highlight today's day

- Handle selected day

- Support keyboard navigation where practical

---

# 65. Five-Row Viewport

The tracker viewport must expose approximately five rows.

Implementation should:

- Define a responsive grid row height.

- Calculate or constrain container height.

- Enable vertical scrolling.

- Keep tracker header outside the scrolling region.

Structure:

```text
Tracker Header
──────────────

Scrollable Tracker
┌───────────────┐
│ Row 1         │
│ Row 2         │
│ Row 3         │
│ Row 4         │
│ Row 5         │
└───────────────┘
```

---

# 66. Mobile Tracker

Mobile tracker must:

- Remain touch-friendly.

- Preserve day sequence.

- Avoid tiny interaction targets.

- Support vertical scrolling.

- Use a bottom sheet/popover for status changes.

Hover-only interactions must not be required.

---

# 67. Dashboard Card Requirements

Each HabitCard must display:

```text
title
startDate
endDate
completedDays
totalDays
remainingDays
completionPercentage
miniGrid
todayStatus
```

---

# 68. Dashboard Summary Requirements

Dashboard must calculate:

```text
activeHabitCount
totalCompletedDays
todayCompletedCount
todayTotalCount
overallCompletionPercentage
```

These should be derived from server data.

---

# 69. Forms

Forms requiring validation:

```text
Login
OTP
Create Habit
Edit Habit
Reminder
Settings
```

---

# 70. Form UX

Every form must provide:

- Label

- Input

- Validation message

- Loading state

- Disabled submit state

- Success feedback

- Error feedback

---

# 71. Create Habit Form

Fields:

```text
Title
Duration
Start Date
Reminder Enabled
Reminder Time
```

Recommended preset duration UI:

```text
7
14
30
60
90
Custom
```

---

# 72. API Error Contract

Use consistent errors.

Example:

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Habit title is required."
  }
}
```

---

# 73. Error Codes

Minimum set:

```text
UNAUTHORIZED
FORBIDDEN
NOT_FOUND
VALIDATION_ERROR
INVALID_STATUS
FUTURE_DAY
HABIT_EXPIRED
DATABASE_ERROR
RATE_LIMITED
UNKNOWN_ERROR
```

---

# 74. Client Error Handling

Client must:

- Show user-friendly error messages.

- Avoid exposing database errors.

- Avoid displaying stack traces.

- Preserve entered form values where possible.

- Allow retry where appropriate.

---

# 75. Logging

Server logs should include:

- Request/action name

- User ID where appropriate

- Resource ID

- Error code

- Timestamp

Do not log:

- OTP values

- Authentication secrets

- Session tokens

- Sensitive personal data

---

# 76. Security Requirements

## SEC-001

All production traffic must use HTTPS.

## SEC-002

Authentication cookies must use secure settings.

## SEC-003

Server actions must validate authentication.

## SEC-004

Server actions must validate ownership.

## SEC-005

User-provided input must be validated.

## SEC-006

Database queries must be parameterized through the ORM/repository layer.

---

# 77. Authorization Requirement

Every habit operation must follow:

```text
Authenticated User
        ↓
Find Habit
        ↓
Verify habit.userId === user.id
        ↓
Perform operation
```

Never accept `userId` from the client as the authority for ownership.

---

# 78. Rate Limiting

Rate limiting should be applied to:

- OTP request

- OTP verification

- Authentication endpoints

- Password/account recovery if introduced

- Public APIs

---

# 79. CSRF Protection

If cookie-based authentication and mutation endpoints are exposed, ensure the selected framework/authentication strategy provides appropriate CSRF protection.

---

# 80. XSS Protection

User-generated habit titles must be rendered as text.

Never inject habit titles as raw HTML.

---

# 81. Performance Requirements

## Initial Load

Target:

**Fast first meaningful render on a normal broadband connection.**

---

## Interaction

Target:

**Day-status UI response within approximately 100ms locally before server confirmation.**

---

## Dashboard

The dashboard should avoid unnecessary client-side data fetching.

---

# 82. Tracker Performance

For MVP:

```text
1–365 days
```

should render without noticeable interaction lag on supported devices.

For larger future ranges:

- Virtualization

- Pagination

- Chunked rendering

may be introduced.

---

# 83. Database Performance

Queries must be indexed by:

```text
userId
habitId
date
```

Dashboard should avoid N+1 queries.

---

# 84. Caching

Recommended:

```text
Server-rendered dashboard
       ↓
Cached data where appropriate
       ↓
Revalidation after mutations
```

After mutation:

```text
revalidatePath('/dashboard')
revalidatePath(`/habits/${habitId}`)
```

or equivalent cache invalidation strategy.

---

# 85. Optimistic State Requirements

Only use optimistic updates where rollback is safe.

Recommended:

```text
Day status
```

Potentially:

```text
Reminder toggle
```

Avoid optimistic deletion unless rollback behavior is deliberately implemented.

---

# 86. Accessibility Requirements

Target:

**WCAG 2.1 AA-conscious implementation**

Requirements:

- Semantic HTML

- Keyboard navigation

- Focus indicators

- Accessible form labels

- Screen-reader labels

- Sufficient contrast

- No color-only status communication

- Touch-friendly controls

---

# 87. Color Status Requirements

Status must use both visual color and semantic indicators.

```text
Completed → Green + check
Pending   → Amber + pending indicator
Skipped   → Red + skip indicator
Upcoming  → Outline + calendar/clock indicator
```

---

# 88. Animation Requirements

Framer Motion may be used for:

- Day transitions

- Progress updates

- Modal transitions

- Toast transitions

- Navigation transitions

Animations must not interfere with usability.

Respect:

```text
prefers-reduced-motion
```

---

# 89. Testing Requirements

## Unit Tests

Required for:

- Date calculations

- End date calculation

- Day number calculation

- Progress calculation

- Status resolution

- Validation

---

# 90. Component Tests

Required:

```text
DaySquare
HabitGrid
HabitCard
CreateHabitForm
StatusPopover
ReminderSettings
```

---

# 91. Integration Tests

Required flows:

### Create Habit

```text
Create
→ Validate
→ Persist
→ Generate Days
→ Return Habit
```

### Update Day

```text
Select Day
→ Update
→ Recalculate
→ Display New Progress
```

---

# 92. E2E Tests

Minimum scenarios:

```text
Login
OTP verification
Create habit
Create multiple habits
Open tracker
Complete day
Skip day
Edit habit
Configure reminder
Delete habit
Logout
```

---

# 93. Test Data

Development/QA environment should include realistic seed data.

Example:

```text
Morning Exercise
90 days
36 completed

Read 30 Minutes
30 days
18 completed

Learn Python
90 days
10 completed
```

Day records should include mixed statuses.

---

# 94. Environment Configuration

Required environment variables should be documented in:

```text
.env.example
```

Possible variables:

```text
DATABASE_URL=
AUTH_SECRET=
OTP_PROVIDER_KEY=
NOTIFICATION_PROVIDER_KEY=
APP_URL=
```

Never commit actual secrets.

---

# 95. Deployment Requirements

Production deployment must include:

- Production database

- Environment variables

- Authentication configuration

- Notification provider

- HTTPS

- Database migrations

- Error monitoring

- Logging

---

# 96. Database Migration Requirements

Database changes must be version controlled.

Never manually modify production schema without a migration.

Migration process:

```text
Local
 ↓
Migration
 ↓
Staging
 ↓
Production
```

---

# 97. Backup Requirements

Production database must have automated backups.

Backup retention should be determined according to the selected database provider.

---

# 98. Monitoring

Production monitoring should track:

- Application errors

- Server errors

- Authentication failures

- Database errors

- Reminder failures

- API latency

- Client-side errors

---

# 99. Analytics Events

Recommended events:

```text
user_registered
otp_verified
dashboard_viewed
habit_created
habit_opened
habit_updated
habit_deleted
day_completed
day_skipped
day_reopened
reminder_enabled
reminder_disabled
reminder_updated
settings_updated
```

---

# 100. Analytics Privacy

Analytics should not capture:

- OTP

- Authentication tokens

- Sensitive form values

- Full private habit histories unless explicitly required

---

# 101. Technical Acceptance Criteria

## Authentication

- User can enter email or phone.

- OTP can be requested.

- OTP can be verified.

- Invalid OTP is rejected.

- Expired OTP is rejected.

- Authentication is rate limited.

- Protected routes require authentication.

---

## Habit Creation

- User can enter title.

- User can select duration.

- User can select start date.

- End date is calculated correctly.

- Reminder can be enabled.

- Reminder time is validated.

- Habit is persisted.

- Tracking days are generated.

- User is redirected to the tracker.

---

## Tracker

- Every tracking day appears.

- Day numbers are sequential.

- Dates are correct.

- Status is visually represented.

- Upcoming days are visually distinct.

- Today's day is identifiable.

- Tracker shows approximately five rows.

- Remaining rows can be scrolled.

- Day status can be changed.

- Progress updates after status change.

---

## Dashboard

- Multiple habits can be displayed.

- Each habit has independent progress.

- Summary metrics are displayed.

- Mini-grid reflects actual tracking data.

- Today's status is visible.

- Create Habit CTA is available.

---

## Reminders

- Reminder can be enabled.

- Reminder can be disabled.

- Time can be configured.

- Reminder belongs to the correct habit.

- Disabled reminders do not trigger.

---

## Settings

- User can access account settings.

- User can configure notifications.

- User can change appearance.

- User can sign out.

---

# 102. Technical Definition of Done

The implementation is complete when:

### Architecture

- Feature boundaries are respected.

- Server/client boundaries are intentional.

- Database access is isolated.

- Domain logic is reusable.

### Frontend

- Responsive desktop UI works.

- Tablet UI works.

- Mobile UI works.

- Loading states exist.

- Error states exist.

- Empty states exist.

- Accessibility requirements are implemented.

### Backend

- Authentication works.

- Authorization works.

- Habit CRUD works.

- Tracking-day CRUD/status updates work.

- Reminder configuration works.

- Transactions are used for critical multi-record mutations.

### Quality

- Unit tests pass.

- Component tests pass.

- Integration tests pass.

- Critical E2E flows pass.

- TypeScript passes without errors.

- Linting passes.

- Production build succeeds.

---

# 103. Implementation Priority

## P0 — Critical

```text
Authentication
Habit creation
Habit storage
Tracking-day generation
Tracker grid
Day status
Progress calculation
Dashboard
Multiple habits
Authorization
```

---

## P1 — Required MVP

```text
Reminder configuration
Edit habit
Delete habit
Settings
Responsive mobile UI
Loading states
Error states
Accessibility
Optimistic day updates
```

---

## P2 — Post-MVP

```text
Advanced analytics
Streaks
Milestones
Push notifications
PWA
Calendar integrations
Export
AI assistant
Habit templates
```

---

# 104. Recommended Implementation Order

```text
01. Project Foundation
        ↓
02. Design System
        ↓
03. Authentication
        ↓
04. Database Schema
        ↓
05. Habit Domain
        ↓
06. Tracking-Day Generation
        ↓
07. Progress Engine
        ↓
08. Tracker UI
        ↓
09. Dashboard
        ↓
10. Habit CRUD
        ↓
11. Reminders
        ↓
12. Settings
        ↓
13. Responsive Optimization
        ↓
14. Accessibility
        ↓
15. Testing
        ↓
16. Performance
        ↓
17. Production Deployment
```

---

# 105. Critical Implementation Rules

The following rules should be treated as non-negotiable.

### Rule 1

Never calculate business-critical progress independently in multiple components.

Use one shared progress calculation.

### Rule 2

Never trust client-provided user ownership.

Always verify ownership server-side.

### Rule 3

Never duplicate date logic.

Centralize it.

### Rule 4

Never store derived progress as the source of truth.

Tracking-day records are the source of truth.

### Rule 5

Never make future days appear completed accidentally.

Future-day behavior must be deterministic.

### Rule 6

Never make color the only way to understand a status.

### Rule 7

Never allow a notification schedule to depend on the user's browser remaining open.

### Rule 8

Never perform habit creation and tracking-day generation as unrelated operations.

Use a transaction.

### Rule 9

Never allow a failed day update to leave the UI permanently inconsistent.

Use optimistic rollback or server reconciliation.

### Rule 10

Keep the architecture simple enough for an MVP while maintaining clear extension points.

---

# 106. Final Technical Architecture

The final implementation should follow this flow:

```text
┌─────────────────────────────────────────────┐
│                 Next.js UI                  │
│                                             │
│ Dashboard │ Tracker │ Forms │ Settings      │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│              Feature Layer                  │
│                                             │
│ Auth │ Habits │ Tracker │ Reminder │ Settings│
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│             Application Layer               │
│                                             │
│ Actions │ Validation │ Business Rules       │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│                Domain Layer                 │
│                                             │
│ Habit │ Day │ Progress │ Reminder           │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│               Service Layer                 │
│                                             │
│ HabitService │ TrackerService │ ReminderSvc │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│             Repository Layer                │
│                                             │
│ User │ Habit │ TrackingDay │ Reminder        │
└──────────────────────┬──────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────┐
│                 Database                    │
│                                             │
│ Users │ Habits │ Tracking Days │ Reminders  │
└─────────────────────────────────────────────┘
```

---

# 107. Core Technical Principle

The technical implementation must preserve the fundamental product model:

```text
USER
  │
  ├── HABIT 01
  │      ├── DAY 01
  │      ├── DAY 02
  │      ├── DAY 03
  │      └── ...
  │
  ├── HABIT 02
  │      ├── DAY 01
  │      ├── DAY 02
  │      └── ...
  │
  └── HABIT 03
         ├── DAY 01
         ├── DAY 02
         └── ...
```

The **Tracking Day** is the fundamental unit of progress.

The UI visualizes that unit through the day-square system.

The backend persists that unit.

The progress engine aggregates that unit.

The reminder system references that unit.

The dashboard summarizes that unit.

This keeps the technical architecture directly aligned with the product's defining experience rather than building unnecessary abstractions around it.
