'use client'

import { useState } from 'react'

export default function Home() {
  const [emailField, setEmailField] = useState(true)
  const [email] = useState('elias.vance@craftsman.io')
  const [otp, setOtp] = useState(['7', '2', '9', '4', '', ''])

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row bg-transparent overflow-hidden shadow-2xl">
        {/* Left Panel - Dark Side */}
        <div className="w-full lg:w-1/2 bg-gradient-to-b from-[#121318] to-[#0a0a0a] p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col relative rounded-[24px] lg:rounded-r-none lg:rounded-l-[24px]">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-10 min-w-0">
            <div className="w-14 h-14 rounded-2xl bg-[#1e1f25] border border-[#292a2f] flex items-center justify-center">
              <div className="text-[#ffb59b] text-3xl">🔥</div>
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold text-xl text-white">EMBER</div>
              <div className="font-sans text-[10px] tracking-[0.2em] text-[#ddc0b7]">DISCIPLINE ENGINE</div>
            </div>
          </div>

          {/* Craftsman Discipline Matrix Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e1f25] border border-[#292a2f] mb-8 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e07147]"></span>
            <span className="font-sans text-[11px] tracking-[0.14em] text-[#ddc0b7] font-medium">CRAFTSMAN DISCIPLINE MATRIX</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-bold text-[40px] sm:text-[52px] lg:text-[56px] leading-[1.05] text-white mb-4">
            Build Your Fire Daily.
          </h1>

          <p className="font-sans text-[16px] leading-[1.7] text-[#a8a0a0] mb-12 max-w-md">
            Tangible, deliberate momentum inspired by the forge. Track rituals without corporate noise, shallow gamification, or guilt loops.
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-[#1a1b20] border border-[#292a2f] rounded-2xl p-5">
              <div className="text-[#e07147] text-xl mb-3">🔑</div>
              <div className="font-display font-semibold text-white text-[13px] mb-2">Zero Password Friction</div>
              <div className="font-sans text-xs text-[#8a8585] leading-[1.6]">
                Fluid 6-digit magic keypads and biometric hardware access.
              </div>
            </div>

            <div className="bg-[#1a1b20] border border-[#292a2f] rounded-2xl p-5">
              <div className="text-[#e07147] text-xl mb-3">🔒</div>
              <div className="font-display font-semibold text-white text-[13px] mb-2">End-to-End Encrypted</div>
              <div className="font-sans text-xs text-[#8a8585] leading-[1.6]">
                First-hand habit stores synced with authenticated vaults.
              </div>
            </div>

            <div className="bg-[#1a1b20] border border-[#292a2f] rounded-2xl p-5">
              <div className="text-[#90d794] text-xl mb-3">💧</div>
              <div className="font-display font-semibold text-white text-[13px] mb-2">No Cold Corporate Work</div>
              <div className="font-sans text-xs text-[#8a8585] leading-[1.6]">
                A tactile workshop canvas built exclusively for real builders.
              </div>
            </div>
          </div>

          {/* Current Cadence */}
          <div className="bg-[#1a1b20] border border-[#292a2f] rounded-2xl p-4 mb-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="font-sans text-[10px] tracking-[0.14em] text-[#8a8585] uppercase">CURRENT CADENCE • 24-DAY ACTIVE SPARK</span>
              <span className="font-sans text-[10px] tracking-wider text-[#e07147]">94% COMPLETION</span>
            </div>
            <div className="flex gap-1.5">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full ${
                    i < 8 ? 'bg-[#90d794]' : i === 8 ? 'bg-[#E3A008]' : 'bg-[#34343a]'
                  }`}
                ></div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="mt-12 pt-8 border-t border-[#292a2f]">
            <blockquote className="font-sans italic text-[13px] text-[#8a8585] leading-[1.7] pl-4 border-l-2 border-[#e07147]">
              "Ember shifts habit tracking from digital guilt into a personal tactile ritual. You simply keep the fire alive."
            </blockquote>
          </div>
        </div>

        {/* Right Panel - Light Side */}
        <div className="w-full lg:w-1/2 bg-[#f4f1ea] p-6 sm:p-8 lg:p-12 xl:p-16 flex flex-col rounded-[24px] lg:rounded-l-none lg:rounded-r-[24px]">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-10">
            <div className="inline-flex items-center px-3 py-1.5 rounded-md bg-[#e7e3da] font-sans text-[10px] tracking-[0.14em] text-[#1A1A1A] font-medium">
              SECURE KINDLE PASS
            </div>
            <div className="flex items-center gap-2 font-sans text-xs text-[#6B6B6B]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#90d794]"></span>
              System Online
            </div>
          </div>

          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="font-display font-bold text-[36px] leading-[1.1] text-[#1A1A1A] mb-3">
              Welcome to Ember
            </h2>
            <p className="font-sans text-[15px] text-[#6B6B6B] leading-[1.6]">
              Enter your credentials to kindle your momentum and access your habits.
            </p>
          </div>

          {/* Email/Phone Toggle */}
          <div className="bg-[#e7e3da] rounded-xl p-1.5 mb-6">
            <button
              onClick={() => setEmailField(true)}
              className={`flex-1 px-4 py-2.5 rounded-lg font-sans text-[13px] transition-all ${
                emailField
                  ? 'bg-white shadow-sm text-[#1A1A1A] font-semibold'
                  : 'text-[#6B6B6B]'
              }`}
            >
              Email
            </button>
            <button
              onClick={() => setEmailField(false)}
              className={`flex-1 px-4 py-2.5 rounded-lg font-sans text-[13px] transition-all ${
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
            <label className="font-sans text-[10px] tracking-[0.14em] text-[#6B6B6B] mb-2 block uppercase">
              EMAIL ADDRESS
            </label>
            <div className="relative">
              <div className="flex items-center gap-3 bg-white border border-[#d8d4cc] rounded-xl px-4 py-3">
                <span className="text-[#6B6B6B]">✉️</span>
                <input
                  type="email"
                  value={email}
                  className="flex-1 bg-transparent outline-none font-sans text-[15px] text-[#1A1A1A]"
                  readOnly
                />
                <button className="bg-[#e07147] hover:bg-[#c25b33] text-white px-4 py-2 rounded-lg font-sans text-xs font-medium transition-colors flex items-center gap-1 whitespace-nowrap">
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
          <div className="mb-8">
            <div className="flex items-center justify-between mb-3">
              <label className="font-sans text-[10px] tracking-[0.14em] text-[#6B6B6B] uppercase">
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
                  className="w-14 h-14 text-center bg-white border border-[#d8d4cc] rounded-xl font-display text-[18px] font-semibold text-[#1A1A1A] focus:outline-none focus:border-[#e07147] focus:ring-2 focus:ring-[#e07147]/20"
                />
              ))}
            </div>
          </div>

          {/* Verify Button */}
          <button className="w-full bg-[#3A7D44] hover:bg-[#2e6435] text-white py-4 rounded-xl font-display font-semibold text-[16px] mb-6 transition-colors flex items-center justify-center gap-2 shadow-lg">
            Verify & Enter Hearth ↩
          </button>

          {/* Didn't receive code */}
          <div className="text-center mb-10">
            <span className="font-sans text-[13px] text-[#6B6B6B]">Didn't receive code? </span>
            <button className="font-sans text-[13px] text-[#e07147] font-medium hover:underline">
              Request via Voice Call
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-auto pt-6 border-t border-[#d8d4cc]">
            <div className="flex items-center justify-center gap-4 font-sans text-xs text-[#6B6B6B] mb-2">
              <a href="#" className="hover:text-[#1A1A1A]">Terms of Service</a>
              <span className="text-[#d8d4cc]">•</span>
              <a href="#" className="hover:text-[#1A1A1A]">Privacy Policy</a>
              <span className="text-[#d8d4cc]">•</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 font-sans text-xs text-[#6B6B6B]">
              <span>🛡️</span>
              <span>Zero-Knowledge Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}