import "./globals.css"
import { Inter } from "next/font/google"
import { Search } from "lucide-react"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] })

export const metadata = {
  title: "Habit Counter Tracker",
  description: "A visual day-by-day habit counter",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ fontFamily: inter.style.fontFamily }}>
        {children}
      </body>
    </html>
  )
}