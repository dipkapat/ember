import { cn } from "@/lib/utils"
import { ProgressBar } from "@/components/ui/progress-bar"
import { dayjs } from "@/lib/dayjs"
import { DaySquare } from "@/components/day-square"
import { Heartbeat, Calendar, Check, Skip, Clock, ArrowUpDown, AlertCircle } from "lucide-react"

interface HabitDetailProps {
  params: { habitId: string }
}

export default function HabitDetailPage({ params }: HabitDetailProps) {
  const habitId = params.habitId

  // Mock data - will be replaced with server data
  const habit = {
    id: habitId,
    title: "Morning Exercise",
    startDate: dayjs("2026-08-01"),
    durationDays: 90,
    reminderEnabled: true,
    reminderTime: "08:00 AM",
  }

  // Calculate end date: startDate + durationDays - 1
  const endDate = habit.startDate.add(habit.durationDays - 1, "day")
  const today = dayjs()

  // Calculate day numbers
  const days: Array<{
    dayNumber: number
    date: string
    status: "completed" | "pending" | "skipped" | "upcoming"
    isToday: boolean
    isSelected: boolean
    disabled: boolean
  }> = []

  // Generate tracking days
  for (let i = 0; i < habit.durationDays; i++) {
    const date = habit.startDate.add(i, "day")
    const dayNumber = i + 1
    const isToday = date.isSame(today, "day")
    const isSelected = isToday

    // Determine status
    let status: "completed" | "pending" | "skipped" | "upcoming"
    if (date.isBefore(today, "day")) {
      status = "pending" // Past days default to pending
    } else if (date.isAfter(today, "day")) {
      status = "upcoming"
    } else {
      status = "pending" // Today is pending
    }

    days.push({
      dayNumber,
      date: date.format("YYYY-MM-DD"),
      status,
      isToday,
      isSelected,
      disabled: date.isAfter(today, "day"), // Disable future days
    })
  }

  // Calculate progress
  const completedDays = days.filter((d) => d.status === "completed").length
  const progressPercentage = Math.round((completedDays / habit.durationDays) * 100)
  const remainingDays = habit.durationDays - completedDays

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-muted-foreground" />
              <h1 className="text-xl font-medium">{habit.title}</h1>
            </div>

            <div className="flex items-center gap-2">
              {habit.reminderEnabled && (
                <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-primary">Reminder</span>
                </div>
              )}
              <span className="text-sm text-muted-foreground">
                {habit.startDate.format("MMM D, YYYY")}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {/* Days Completed */}
          <div className="p-4 rounded-lg border-border bg-card">
            <div className="text-2xl font-bold text-foreground">{completedDays}</div>
            <div className="text-sm text-muted-foreground">Completed</div>
            <ProgressBar
              value={progressPercentage}
              label={`${progressPercentage}%`}
            />
          </div>

          {/* Days Remaining */}
          <div className="p-4 rounded-lg border-border bg-card">
            <div className="text-2xl font-bold text-foreground">{remainingDays}</div>
            <div className="text-sm text-muted-foreground">Remaining</div>
          </div>

          {/* End Date */}
          <div className="p-4 rounded-lg border-border bg-card">
            <div className="text-sm text-muted-foreground">Ends</div>
            <div className="text-xl font-medium">{endDate.format("MMM D, YYYY")}</div>
          </div>

          {/* Progress */}
          {/* Already included in first card */}
        </div>

        {/* Five-Row Tracker Viewport */}
        <div className="rounded-lg border-border bg-card p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-medium text-lg">
              Day {habit.startDate.format("D")} of {habit.durationDays}
            </h2>
            <span className="text-xs text-muted-foreground">
              {days.length} of {habit.durationDays} days
            </span>
          </div>

          {/* Scrollable tracker */}
          <div className="h-64 overflow-y-auto space-y-1" style={{ maxHeight: "200px" }}>
            <div className="flex -space-x-1">
              {days.map((day) => (
                <DaySquare
                  key={day.dayNumber}
                  dayNumber={day.dayNumber}
                  date={day.date}
                  status={day.status}
                  isToday={day.isToday}
                  isSelected={day.isSelected}
                  disabled={day.disabled}
                />
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <p className="text-xs text-muted-foreground mt-2">
            Scroll to see more days
          </p>
        </div>

        {/* Status Transition Rules section */}
        <div className="mt-6 pt-6 border-t border-border">
          <h3 className="font-medium text-sm mb-3">Status Legend</h3>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-2">Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-amber-500" />
              <span className="ml-2">Pending</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="ml-2">Skipped</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full border-2 bg-neutral-300" />
              <span className="ml-2">Upcoming</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}