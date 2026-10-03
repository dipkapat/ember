import { cn } from "@/lib/utils"

export const ProgressBar = ({ value, label }: { value: number; label: string }) => {
  const clampedValue = Math.max(0, Math.min(100, value))

  return (
    <div className="flex flex-col items-end">
      <div className="w-32 h-2 rounded-md overflow-hidden bg-muted">
        <div
          className={cn("h-full rounded-md", "bg-primary", "transition-colors duration-300")}
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-1 text-center">{label}</p>
    </div>
  )
}