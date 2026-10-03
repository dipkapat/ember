//
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Clock } from "lucide-react"
import { useState } from "react"
import { dayjs } from "@/lib/dayjs"

export default function VerifyPage() {
  const [otp, setOtp] = useState("")
  const [verified, setVerified] = useState(false)
  const [expired, setExpired] = useState(false)
  const [resendDisabled, setResendDisabled] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [error, setError] = useState("")

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

  const verifyOtp = () => {
    if (otp.length !== 6) {
      setError("Please enter a 6-digit code")
      return
    }

    // Mock verification - in production this would call the API
    const isValid = otp === "123456" // Mock valid OTP
    const isExpired = dayjs().isAfter(dayjs().add(10, "minute")) // Mock expiry

    if (isValid) {
      setVerified(true)
    } else if (isExpired) {
      setExpired(true)
    } else {
      setError("Invalid code. Please try again.")
      setOtp("")
    }
  }

  if (verified) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
          <h2 className="text-2xl font-medium">Success!</h2>
          <p className="text-muted-foreground mt-2">
            You've been successfully verified. Redirecting...
          </p>
          <Button onClick={() => window.location.href="/dashboard"}>
            Go to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  if (expired) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <XCircle className="h-12 w-12 text-red-500 mb-4" />
          <h2 className="text-2xl font-medium">Expired</h2>
          <p className="text-muted-foreground mt-2">
            The verification code has expired. Please request a new one.
          </p>
          <Button onClick={() => window.location.href="/login"}>
            Request New Code
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-md mx-auto p-4 sm:px-6 lg:px-8">
        <div className="mt-8 space-y-6">
          <h2 className="text-xl font-medium text-foreground">Enter verification code</h2>

          {error && (
            <div className="rounded-md border-red-500 p-3 text-sm text-red-600 mb-4">
              {error}
            </div>
          )}

          {expired && (
            <p className="text-sm text-muted-foreground">
              This code has expired. Request a new one below.
            </p>
          )}

          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            {/* OTP Field */}
            <div className="grid grid-cols-6 gap-2">
              {[...Array(6)].map((_, i) => (
                <Input
                  key={i}
                  maxLength={1}
                  value={otp[i] || ""}
                  onChange={(e) => setOtp((otp || "") + e.target.value)}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <Button type="submit" className="flex-1">
                Verify
              </Button>
              <Button
                variant="outline"
                onClick={startResendCountdown}
                disabled={resendDisabled}
                className="flex-1"
              >
                Resend OTP
              </Button>
            </div>

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