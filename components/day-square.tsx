import { cn } from "@/lib/utils"
import { Check, XMark, Clock } from "lucide-react"
import { dayjs } from "@/lib/dayjs"

interface DaySquareProps {
  dayNumber: number
  date: string
  status: "completed" | "pending" | "skipped" | "upcoming"
  isToday?: boolean
  isSelected?: boolean
  disabled?: boolean
}

export const DaySquare = ({
  dayNumber,
  date,
  status,
  isToday = false,
  isSelected = false,
  disabled = false,
}: DaySquareProps) => {
  // Status color mapping with semantic indicators (per DESIGN.md & TRD #87)
  const statusColors = {
    completed: {
      bg: "bg-green-500",
      fg: "bg-green-500",
      icon: "check",
      labelColor: "text-white",
    },
    pending: {
      bg: "bg-amber-500",
      fg: "bg-amber-500",
      icon: "clock",
      labelColor: "text-white",
    },
    skipped: {
      bg: "bg-red-500",
      fg: "bg-red-500",
      icon: "x-mark",
      labelColor: "text-white",
    },
    upcoming: {
      bg: "bg-neutral-200",
      fg: "bg-neutral-300",
      icon: "calendar",
      labelColor: "text-neutral-600",
    },
  }

  const statusConfig = statusColors[status]

  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center rounded-md border p-2 transition-colors cursor-pointer",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        disabled
          ? "pointer-events-none select-none opacity-50"
          : "",
        isToday && "border-2 border-primary"
      )}
      style={{ pointerEvents: disabled ? "none" : "auto" }}
    >
      {/* Day Number */}
      <div className="text-xs font-medium text-muted-foreground mb-1">
        Day {dayNumber}
      </div>

      {/* Status Circle / Square */}
      <div
        className={cn(
          "w-6 h-6 rounded-sm flex items-center justify-center",
          statusConfig.bg,
          isSelected && "ring-2 ring-offset-2 ring-primary",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        {statusConfig.icon === "check" && (
          <Check className={cn("h-3 w-3", statusConfig.labelColor)} />
        )}
        {statusConfig.icon === "x-mark" && (
          <XMark className={cn("h-3 w-3", statusConfig.labelColor)} />
        )}
        {statusConfig.icon === "clock" && (
          <Clock className={cn("h-3 w-3", statusConfig.labelColor)} />
        )}
        {statusConfig.icon === "calendar" && (
          <svg
            className={cn("h-3 w-3", statusConfig.labelColor)}
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <rect x="3" y="4" width="20" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        )}
      </div>

      {/* Tooltip / Label on hover */}
      {isSelected && !disabled && (
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs max-w-xs bg-neutral-800 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {status === "upcoming"
            ? `Available ${dayjs(date).format("MMM D")}`
            : `${dayjs(date).format("MMM D, YYYY")}, ${status}`}
        </div>
      )}
    </div>
  )
}