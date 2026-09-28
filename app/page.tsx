'use client'

import { useState } from 'react'

export default function Home() {
  const [emailField, setEmailField] = useState(true)
  const [email] = useState('elias.vance@craftsman.io')
  const [otp, setOtp] = useState(['7', '2', '9', '4', '', ''])

  return (
    <div className="min-h-screen bg-[#121318] flex items-center justify-center p-0 sm:p-4 lg:p-6">
      <div className="w-full max-w-7xl min-h-screen sm:min-h-0 sm:h-[calc(100vh-2rem)] lg:h-[calc(100vh-3rem)] lg:rounded-[24px] overflow-hidden flex flex-col lg:flex-row bg-[#121318]">
        {/* Left Panel - Dark Side */}
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#121318] to-[#0a0a0a] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col relative">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-[#1e1f25] border border-[#292a2f] flex items-center justify-center">
              <div className="w-6 h-6 text-[#ffb59b] text-2xl">🔥</div>
            </div>
            <div>
              <div className="font-display font-bold text-lg sm:text-xl text-white">EMBER</div>
              <div className="font-sans text-xs tracking-wider text-[#ddc0b7]">DISCIPLINE ENGINE</div>
            </div>
          </div>

          {/* Craftsman Discipline Matrix Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e1f25] border border-[#292a2f] mb-6 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffb59b]"></span>
            <span className="font-sans text-xs tracking-wider text-[#ddc0b7]">CRAFTSMAN DISCIPLINE MATRIX</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-[36px] sm:text-[44px] lg:text-[56px] leading-[1.1] text-white mb-3 sm:mb-4">
            Build Your Fire Daily.
          </h1>

          <p className="font-sans text-[16px] sm:text-[18px] leading-[1.6] text-[#ddc0b7] mb-6 sm:mb-10 max-w-md">
            Tangible, deliberate momentum inspired by the forge. Track rituals without corporate noise, shallow gamification, or guilt loops.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 sm:mb-8">
            <div className="bg-[#1e1f25] border border-[#292a2f] rounded-xl p-4">
              <div className="text-[#ffb59b] mb-3">🔑</div>
              <div className="font-display font-semibold text-white text-sm mb-2">Zero Password Friction</div>
              <div className="font-sans text-xs text-[#ddc0b7] leading-relaxed">
                Fluid 6-digit magic keypads and biometric hardware access.
              </div>
            </div>

            <div className="bg-[#1e1f25] border border-[#292a2f] rounded-xl p-4">
              <div className="text-[#ffb59b] mb-3">🔒</div>
              <div className="font-display font-semibold text-white text-sm mb-2">End-to-End Encrypted</div>
              <div className="font-sans text-xs text-[#ddc0b7] leading-relaxed">
                First-hand habit stores synced with authenticated vaults.
              </div>
            </div>

            <div className="bg-[#1e1f25] border border-[#292a2f] rounded-xl p-4">
              <div className="text-[#90d794] mb-3">💧</div>
              <div className="font-display font-semibold text-white text-sm mb-2">No Cold Corporate Work</div>
              <div className="font-sans text-xs text-[#ddc0b7] leading-relaxed">
                A tactile workshop canvas built exclusively for real builders.
              </div>
            </div>
          </div>

          {/* Current Cadence */}
          <div className="bg-[#1e1f25] border border-[#292a2f] rounded-xl p-3 sm:p-4 mb-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="font-sans text-xs tracking-wider text-[#ddc0b7]">CURRENT CADENCE • 24-DAY ACTIVE SPARK</span>
              <span className="font-sans text-xs text-[#ffb59b]">94% COMPLETION</span>
            </div>
            <div className="flex gap-1.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`h-3 flex-1 rounded-sm ${
                    i < 8 ? 'bg-[#90d794]' : i === 8 ? 'bg-[#E3A008]' : 'bg-[#34343a]'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="mt-8 pt-8 border-t border-[#292a2f]">
            <blockquote className="font-sans italic text-sm text-[#ddc0b7] leading-relaxed pl-4 border-l-2 border-[#ffb59b]">
              "Ember shifts habit tracking from digital guilt into a personal tactile ritual. You simply keep the fire alive."
            </blockquote>
          </div>
        </div>

        {/* Right Panel - Light Side */}
        <div className="w-full lg:w-1/2 bg-[#f4f1ea] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#e7e3da] font-sans text-xs tracking-wider text-[#1A1A1A]">
              SECURE KINDLE PASS
            </div>
            <div className="flex items-center gap-2 font-sans text-xs text-[#6B6B6B]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#90d794]"></span>
              System Online
            </div>
          </div>

          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-[26px] sm:text-[32px] text-[#1A1A1A] mb-2">
              Welcome to Ember
            </h2>
            <p className="font-sans text-[16px] text-[#6B6B6B] leading-relaxed">
              Enter your credentials to kindle your momentum and access your habits.
            </p>
          </div>

          {/* Email/Phone Toggle */}
          <div className="bg-[#e7e3da] rounded-xl p-1.5 mb-4 sm:mb-6 flex">
            <button
              onClick={() => setEmailField(true)}
              className={`flex-1 px-4 py-2 rounded-lg font-sans text-sm transition-all ${
                emailField
                  ? 'bg-white shadow-sm text-[#1A1A1A] font-semibold'
                  : 'text-[#6B6B6B]'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setEmailField(false)}
              className={`flex-1 px-4 py-2 rounded-lg font-sans text-sm transition-all ${
                !emailField
                  ? 'bg-white shadow-sm text-[#1A1A1A] font-semibold'
                  : 'text-[#6B6B6B]'
              }`}
            >
              Phone Number
            </button>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label className="font-sans text-xs tracking-wider text-[#6B6B6B] mb-2 block">
              EMAIL ADDRESS
            </label>
            <div className="relative">
              <div className="flex items-center gap-3 bg-white border border-[#d8d4cc] rounded-xl px-3 sm:px-4 py-3">
                <span className="text-[#6B6B6B]">✉️</span>
                <input
                  type="email"
                  value={email}
                  className="flex-1 bg-transparent outline-none font-sans text-[16px] text-[#1A1A1A]"
                  readOnly
                />
                <button className="bg-[#e07147] hover:bg-[#c25b33] text-white px-4 py-2 rounded-lg font-sans text-sm font-medium transition-colors flex items-center gap-2">
                  Send OTP ⚡
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[#90d794] font-sans text-xs">
                <span>✓</span>
                <span>One-time code dispatched to elias.vance@craftsman.io</span>
              </div>
            </div>
          </div>

          {/* OTP Input */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-3">
              <label className="font-sans text-xs tracking-wider text-[#6B6B6B]">
                6-DIGIT VERIFICATION SPARK
              </label>
              <button className="font-sans text-xs text-[#e07147] flex items-center gap-1">
                <span>↻</span> Resend code
              </button>
            </div>
            <div className="flex gap-3">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => {
                    const newOtp = [...otp]
                    newOtp[i] = e.target.value
                    setOtp(newOtp)
                  }}
                  className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] text-center bg-white border border-[#d8d4cc] rounded-xl font-display text-[18px] sm:text-[20px] font-semibold text-[#1A1A1A] focus:outline-none focus:border-[#e07147] focus:ring-2 focus:ring-[#e07147]/20"
                />
              ))}
            </div>
          </div>

          {/* Verify Button */}
          <button className="w-full bg-[#3A7D44] hover:bg-[#2e6435] text-white py-3.5 sm:py-4 rounded-xl font-display font-semibold text-[15px] sm:text-[16px] mb-4 transition-colors flex items-center justify-center gap-2">
            Verify & Enter Hearth →
          </button>

          {/* Didn't receive code */}
          <div className="text-center mb-8">
            <span className="font-sans text-sm text-[#6B6B6B]">Didn't receive code? </span>
            <button className="font-sans text-sm text-[#e07147] font-medium hover:underline">
              Request via Voice Call
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-auto pt-4 sm:pt-6 border-t border-[#d8d4cc]">
            <div className="flex items-center justify-center gap-4 font-sans text-xs text-[#6B6B6B] mb-2">
              <a href="#" className="hover:text-[#1A1A1A]">Terms of Service</a>
              <span className="text-[#d8d4cc]">•</span>
              <a href="#" className="hover:text-[#1A1A1A]">Privacy Policy</a>
              <span className="text-[#d8d4cc]">•</span>
            </div>
            <div className="flex items-center justify-center gap-1 font-sans text-xs text-[#6B6B6B]">
              <span>✓</span>
              <span>Zero-Knowledge Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}