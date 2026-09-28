import "./globals.css"
import type { ReactNode } from "react"

export const metadata = {
  title: "Ember - Login Page",
  description: "A modern login page built with Next.js, TypeScript, and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#121318]">
        {children}
      </body>
    </html>
  )
}