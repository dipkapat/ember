//
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Sun, Moon, Settings, LogOut } from "lucide-react"

export default function SettingsPage() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [notifications, setNotifications] = useState(true)
  const [appearance, setAppearance] = useState<"light" | "dark" | "system">("system")
  const [reminderTime, setReminderTime] = useState("08:00")

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto p-4 sm:px-6 lg:px-8">
        <div className="mt-8 space-y-6">
          <h2 className="text-xl font-medium text-foreground">Settings</h2>

          {/* Account Section */}
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground mb-3">Account</h3>
            <div className="space-y-3">
              <div>
                <label className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>Email</span>
                </label>
                <Input
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>Phone</span>
                </label>
                <Input
                  placeholder="+1 555-0123"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground mb-3">
              Notification Settings
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer select-none rounded-md border border-border px-4 py-2 transition-colors hover:bg-accent/10">
                <input
                  type="checkbox"
                  checked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  className="rounded border-primary bg-primary/10 px-2 py-1 text-sm font-medium text-primary"
                />
                <span>Daily reminders</span>
              </label>

              <div className="mt-3">
                <label className="block text-sm font-medium text-foreground mb-1">
                  Default reminder time
                </label>
                <Input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Appearance */}
          <div>
            <h3 className="font-semibold text-sm text-muted-foreground mb-3">
              Appearance
            </h3>
            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => setAppearance("light")}
                className={cn(
                  "flex flex-col items-center rounded-md border border-border bg-transparent px-3 py-2 text-xs font-medium transition-colors",
                  appearance === "light"
                    ? "border-primary bg-primary/10 text-primary"
                    : ""
                )}
                >
                  <Sun className="h-4 w-4 mb-1" />
                  Light
                </button>
              <button
                onClick={() => setAppearance("dark")}
                className={cn(
                  "flex flex-col items-center rounded-md border border-border bg-transparent px-3 py-2 text-xs font-medium transition-colors",
                  appearance === "dark"
                    ? "border-primary bg-primary/10 text-primary"
                    : ""
                )}
                >
                  <Moon className="h-4 w-4 mb-1" />
                  Dark
                </button>
              <button
                onClick={() => setAppearance("system")}
                className={cn(
                  "flex flex-col items-center rounded-md border border-border bg-transparent px-3 py-2 text-xs font-medium transition-colors",
                  appearance === "system"
                    ? "border-primary bg-primary/10 text-primary"
                    : ""
                )}
                >
                  <Settings className="h-4 w-4 mb-1" />
                  System
                </button>
              </div>
            </div>
          </div>

          {/* Sign Out */}
          <div className="mt-8 pt-8 border-t border-border">
            <Button
              variant="outline"
              onClick={() => {
                // In production, this would sign out
                window.location.href = "/"
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}