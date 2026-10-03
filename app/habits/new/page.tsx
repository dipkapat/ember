//
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Check, X, Heart, Timer, CalendarDays } from "lucide-react"
import { dayjs } from "@/lib/dayjs"

export default function CreateHabitPage() {
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState("30")
  const [startDate, setStartDate] = useState(dayjs())
  const [reminderEnabled, setReminderEnabled] = useState(false)
  const [reminderTime, setReminderTime] = useState< string | null >(null)
  const [error, setError] = useState("")

  const presetDurations = [
    { value: "7", label: "7 days" },
    { value: "14", label: "14 days" },
    { value: "30", label: "30 days" },
    { value: "60", label: "60 days" },
    { value: "90", label: "90 days" },
    { value: "custom", label: "Custom" },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validation
    if (!title.trim()) {
      setError("Habit title is required")
      return
    }

    if (!title.trim().length) {
      setError("Habit title must not be empty")
      return
    }

    if (reminderEnabled && !reminderTime) {
      setError("Reminder time is required when reminder is enabled")
      return
    }

    // In production, this would be a server action
    // For MVP, simulate creation
    console.log("Habit created:", { title, duration, startDate: startDate.format(), reminderEnabled, reminderTime })
    setTimeout(() => {
      window.location.href = `/habits/${Math.random().toString(36).substr(2, 9)}`
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto p-4 sm:px-6 lg:px-8">
        <div className="mt-8 space-y-6">
          <h2 className="text-xl font-medium text-foreground">Create a new habit</h2>

          {error && (
            <div className="rounded-md border-red-500 p-3 text-sm text-red-600 mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Habit Title */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Habit Title
              </label>
              <Input
                placeholder="e.g. Morning Exercise, Read 30 Minutes"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoComplete="off"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Tracking Duration
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue
                    placeholder="Select duration"
                  />
                  <SelectContent>
                    {presetDurations.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Start Date
              </label>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <Input
                  readOnly
                  value={startDate.format("MMM D, YYYY")}
                  onChange={(e) => {
                    const date = dayjs(e.target.value, "MMM D, YYYY")
                    if (date.isValid()) setStartDate(date)
                  }}
                  placeholder="MMM D, YYYY"
                />
              </div>
            </div>

            {/* Reminder */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Daily Reminder
              </label>
              <label className="flex items-center gap-2 cursor-pointer select-none rounded-md border border-border px-4 py-2 transition-colors hover:bg-accent/10">
                <input
                  type="checkbox"
                  checked={reminderEnabled}
                  onChange={(e) => setReminderEnabled(e.target.checked)}
                  className="rounded border-primary bg-primary/10 px-2 py-1 text-sm font-medium text-primary"
                />
                <span>
                  Enable daily reminder
                  {reminderEnabled && (
                    <span className="ml-2 text-sm font-medium">
                      at {reminderTime || "08:00 AM"}
                    </span>
                  )}
                </span>
              </label>
            </div>

            {/* Reminder Time */}
            {reminderEnabled && (
              <div className="mt-3">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Reminder Time
                </label>
                <Input
                  type="time"
                  value={reminderTime || "08:00"}
                  onChange={(e) => setReminderTime(e.target.value)}
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2.5 text-lg font-medium text-white hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              Create Habit Counter
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}