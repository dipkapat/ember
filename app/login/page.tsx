//
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2, Mail, Phone } from "lucide-react"
import { useState } from "react"

export default function LoginPage() {
  const [type, setType] = useState<"email" | "phone">("email")
  const [value, setValue] = useState("")
  const [otp, setOtp] = useState("")
  const [resendDisabled, setResendDisabled] = useState(false)
  const [countdown, setCountdown] = useState(0)

  const types = [
    { label: "Email", value: "email", icon: Mail },
    { label: "Phone", value: "phone", icon: Phone },
  ]

  const startResendCountdown = () => {
    setResendDisabled(true)
    let seconds = 30
    setCountdown(seconds)
    const interval = setInterval(() => {
      setCountdown(seconds - 1)
      seconds--
      if (seconds <= 0) {
        clearInterval(interval)
        setResendDisabled(false)
        setCountdown(0)
      }
    }, 1000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would trigger OTP send
    // For MVP, redirect to verification
    setOtp("")
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto p-4 sm:px-6 lg:px-8">
        <div className="mt-8 space-y-6">
          {/* Auth Type Selector */}
          <div className="border rounded-2xl p-6 border-border bg-card">
            <h2 className="text-xl font-medium text-foreground mb-6">Sign in</h2>
            <div className="grid grid-cols-2 gap-2">
              {types.map((type) => (
                <button
                  key={type.value}
                  onClick={() => setType(type.value)}
                  className={cn(
                    "flex flex-1 items-center justify-center rounded-md border border-border bg-transparent px-3 py-2 text-sm font-medium transition-colors",
                    type.value === type
                      ? "border-primary bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <type.icon className="mr-2 h-4 w-4" />
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Identifier Field */}
            <div>
              <Input
                placeholder={type === "email" ? "Enter your email" : "Enter your phone number"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={resendDisabled}
                className="grid-col-span-full"
                type={type === "email" ? "email" : "tel"}
                autoComplete="username"
              />
            </div>

            {/* OTP Field */}
            <div className="grid grid-cols-4 gap-2">
              {[...Array(6)].map((_, i) => (
                <Input
                  key={i}
                  maxLength={1}
                  value={otp[i] || ""}
                  onChange={(e) => setOtp((otp || "") + e.target.value)}
                  disabled={resendDisabled}
                />
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <Button type="submit" disabled={resendDisabled} className="flex-1">
                {resendDisabled ? (
                  <div className="flex items-center justify-center">
                    <span className="text-sm text-muted-foreground">
                      {countdown}s
                    </span>
                  </div>
                ) : (
                  "Send OTP"
                )}
              </Button>
              <Button
                variant="outline"
                onClick={() => setType(type === "email" ? "phone" : "email")}
                disabled={resendDisabled}
                className="flex-1"
              >
                Switch {type === "email" ? "Phone" : "Email"}
              </Button>
            </div>

            {/* Resend Link */}
            {resendDisabled && (
              <p className="text-xs text-muted-foreground mt-2">
                Resend in <span>{countdown}</span> seconds
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}