'use client'

import { useState } from 'react'

export default function DashboardPage() {
  const [focusMode, setFocusMode] = useState(true)

  const habits = [
    {
      id: '1',
      category: 'Physical Stamina',
      title: 'Morning Jog & Stretch',
      cycle: '90-day hearth cycle',
      progress: '45 of 90 days done',
      streak: '18d streak',
      cycleHalfway: '50%',
      matrixStatus: 'Strong pulse',
      action: 'Log Run • 5.2 km',
      grid: Array(42).fill(0).map((_, i) => {
        if (i === 12 || i === 28) return 'red'
        if (i >= 41) return 'border'
        return 'green'
      })
    },
    {
      id: '2',
      category: 'Quiet Mind',
      title: 'Deep Reading (30 Pages)',
      cycle: '60-day cycle',
      progress: '32 of 60 days logged',
      streak: '12d streak',
      milestone: 'Next Milestone: 35 Days',
      milestoneProgress: '53%',
      status: 'In progress',
      book: 'Marcus Aurelius • Ch. 6',
      action: 'Done Today ✓',
      grid: Array(42).fill(0).map((_, i) => {
        if ([8, 24, 33].includes(i)) return 'red'
        if (i === 41) return 'yellow'
        return 'green'
      })
    },
    {
      id: '3',
      category: 'Creative Rhythm',
      title: 'Practice Acoustic Guitar',
      cycle: '30-day cycle',
      progress: '18 of 30 days kept',
      streak: '7d streak',
      target: 'Session Target: 25m Fingerpicking',
      targetProgress: '60%',
      status: 'Needs kindle',
      consistency: 'Fretboard Consistency',
      note: 'D-Major Arpeggios',
      action: 'Record Session',
      grid: Array(42).fill(0).map((_, i) => {
        if ([2, 10, 18, 30, 40].includes(i)) return 'red'
        if (i === 41) return 'white'
        return 'green'
      })
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#0a0a0a]/80 backdrop-blur border-b border-[#1e1f25]">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-[#1e1f25] flex items-center justify-center">
                <span className="text-xs">img</span>
              </div>
              <span className="font-display font-bold text-lg">Ember</span>
            </div>
            <div className="flex items-center gap-6">
              <button className="px-4 py-1.5 rounded-full bg-[#1e1f25] text-sm font-medium">Dashboard</button>
              <button className="text-[#a8a0a0] text-sm">Trackers</button>
              <button className="text-[#a8a0a0] text-sm">Insights</button>
              <button className="text-[#a8a0a0] text-sm">Settings</button>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="px-4 py-1.5 rounded-full bg-[#1e1f25] text-xs text-[#e07147]">
              18 Day Hearth Streak 🔥
            </div>
            <button className="px-4 py-2 rounded-lg bg-[#e07147] text-sm font-medium">
              + Start a New Habit
            </button>
            <div className="w-8 h-8 rounded bg-[#1e1f25]">img</div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#a8a0a0] mb-2">
              <span className="font-medium">DAILY HEARTH LOG</span>
              <span>•</span>
              <span>Wednesday, Oct 23</span>
            </div>
            <h1 className="font-display text-4xl font-bold mb-2">Welcome back, Maya</h1>
            <p className="text-[#a8a0a0]">
              Tending the hearth — <span className="text-white font-medium">3 Active Flames</span> burning bright today.
            </p>
          </div>
          <div className="bg-[#1a1b20] rounded-xl p-4 flex gap-8">
            <div>
              <div className="text-xs text-[#a8a0a0] mb-1">OVERALL REGULARITY</div>
              <div className="text-2xl font-bold text-[#90d794]">93% <span className="text-sm text-[#90d794]">+2.4%</span></div>
            </div>
            <div className="w-px bg-[#292a2f]"></div>
            <div>
              <div className="text-xs text-[#a8a0a0] mb-1">LONGEST STREAK</div>
              <div className="text-2xl font-bold text-[#e07147]">45 <span className="text-sm text-[#a8a0a0]">Days</span></div>
            </div>
            <div className="w-px bg-[#292a2f]"></div>
            <div>
              <div className="text-xs text-[#a8a0a0] mb-1">SPARKS FED</div>
              <div className="text-2xl font-bold text-[#ffb59b]">128 <span className="text-xs text-[#a8a0a0]">Total</span></div>
            </div>
          </div>
        </div>

        {/* Hearth Ember Quote */}
        <div className="bg-[#1a1b20] rounded-xl p-6 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#292a2f] flex items-center justify-center">🔥</div>
            <div>
              <div className="text-sm font-medium">HEARTH EMBER • <span className="italic">"One spark today, A fire tomorrow."</span></div>
            </div>
          </div>
          <div className="text-xs text-[#a8a0a0] bg-[#292a2f] px-3 py-1 rounded-full">Book of Stillness</div>
        </div>

        {/* Filters and Search */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button className="px-4 py-1.5 rounded-lg bg-[#1e1f25] text-sm font-medium">All Flames (3)</button>
            <button className="px-4 py-1.5 rounded-lg text-[#a8a0a0] text-sm">Active (3)</button>
            <button className="px-4 py-1.5 rounded-lg text-[#a8a0a0] text-sm">Needs Attention ●</button>
            <button className="px-4 py-1.5 rounded-lg text-[#a8a0a0] text-sm">Archived (0)</button>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <input
                placeholder="Search habits or tags..."
                className="w-64 pl-9 pr-4 py-2 bg-[#1a1b20] rounded-lg text-sm placeholder-[#a8a0a0]"
              />
              <span className="absolute left-3 top-2.5 text-[#a8a0a0]">🔍</span>
            </div>
            <button className="p-2 bg-[#1a1b20] rounded-lg">⊞</button>
            <button className="p-2 bg-[#1a1b20] rounded-lg">☰</button>
            <button className="px-4 py-2 bg-[#e07147] rounded-lg text-sm font-medium">
              + Start a New Habit
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Habits */}
          <div className="lg:col-span-2 grid gap-6">
            {habits.map((habit) => (
              <div key={habit.id} className="bg-white rounded-xl p-6">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs px-2 py-1 bg-[#f0f0f0] rounded-full">{habit.category}</span>
                  <span className="text-xs px-2 py-1 bg-[#ffb59b] rounded-full">🔥 {habit.streak}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{habit.title}</h3>
                <p className="text-sm text-[#666] mb-4">{habit.cycle} • {habit.progress}</p>

                {habit.id === '1' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">Cycle Halfway</span>
                      <span className="text-xs">50%</span>
                    </div>
                    <div className="w-full h-2 bg-[#e5e5e5] rounded-full mb-4">
                      <div className="w-1/2 h-full bg-[#90d794] rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between mb-2 text-xs">
                      <span>Rolling 6-week matrix</span>
                      <span className="text-[#90d794]">Strong pulse</span>
                    </div>
                  </>
                )}

                {habit.id === '2' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">Next Milestone: 35 Days</span>
                      <span className="text-xs">53%</span>
                    </div>
                    <div className="w-full h-2 bg-[#e5e5e5] rounded-full mb-4">
                      <div className="w-[53%] h-full bg-[#e07147] rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between mb-2 text-xs">
                      <span>Recent Hearth Warmth</span>
                      <span className="text-[#e07147]">In progress</span>
                    </div>
                  </>
                )}

                {habit.id === '3' && (
                  <>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium">{habit.target}</span>
                      <span className="text-xs">60%</span>
                    </div>
                    <div className="w-full h-2 bg-[#e5e5e5] rounded-full mb-4">
                      <div className="w-[60%] h-full bg-[#e07147] rounded-full"></div>
                    </div>
                    <div className="flex items-center justify-between mb-2 text-xs">
                      <span>{habit.consistency}</span>
                      <span className="text-[#e07147]">Needs kindle</span>
                    </div>
                  </>
                )}

                <div className="grid grid-cols-7 gap-1 mb-4">
                  {habit.grid.slice(0, 42).map((cell, i) => (
                    <div key={i} className={`w-4 h-4 rounded-sm ${
                      cell === 'red' ? 'bg-red-500' :
                      cell === 'green' ? 'bg-[#90d794]' :
                      cell === 'yellow' ? 'bg-yellow-500' :
                      cell === 'white' ? 'bg-white border' :
                      cell === 'border' ? 'border-2 border-[#333]' :
                      'bg-[#e5e5e5]'
                    }`} />
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-[#666] mb-6">
                  <span>{habit.id === '1' ? '6 wks ago' : habit.id === '2' ? 'Marcus Aurelius • Ch. 6' : 'D-Major Arpeggios'}</span>
                  <span className={habit.id === '2' ? 'text-[#e07147]' : ''}>{habit.id === '1' ? 'Today' : habit.id === '2' ? 'Pending today' : 'Unlogged'}</span>
                </div>

                <button className={`w-full py-3 rounded-lg font-medium ${
                  habit.id === '1' ? 'bg-[#e07147] text-white' :
                  habit.id === '2' ? 'bg-[#e07147] text-white' :
                  'bg-black text-white'
                }`}>
                  {habit.action}
                </button>
              </div>
            ))}

            {/* Discipline Crucible */}
            <div className="bg-[#1a1b20] rounded-xl p-6 border border-[#292a2f]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#e07147]">⚙️</span>
                <span className="text-xs text-[#e07147] font-medium tracking-wider">DISCIPLINE CRUCIBLE</span>
              </div>
              <h3 className="font-display text-lg font-bold mb-2">Consistent execution converts intention into physical reality.</h3>
              <p className="text-sm text-[#a8a0a0] mb-4">
                All 3 active disciplines are currently primed for today. Keep your unbroken composite momentum intact.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold">3 of 3 Today</div>
                  <div className="text-xs text-[#a8a0a0]">Target cutoff: 22:00</div>
                </div>
                <div className="w-12 h-12 rounded-full bg-[#e07147] flex items-center justify-center">🔥</div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Weekly Momentum */}
            <div className="bg-[#1a1b20] rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Weekly Momentum</h3>
                <span className="text-[#90d794] font-bold">94%</span>
              </div>
              <p className="text-xs text-[#a8a0a0] mb-4">Daily Consistency Rhythm</p>
              <div className="flex items-end gap-2 mb-4">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={day} className="flex-1 flex flex-col items-center">
                    <div className={`w-full rounded-t ${
                      i < 3 ? 'bg-[#90d794]' : 'bg-[#292a2f]'
                    }`} style={{ height: i < 3 ? `${80 - i * 15}%` : '20%' }} />
                    <span className="text-xs mt-2 text-[#a8a0a0]">{day}</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#121318] rounded-lg p-3">
                <div className="flex gap-2 mb-1">
                  <span className="text-[#e07147]">◐</span>
                  <p className="text-xs text-[#a8a0a0]">You are 2 completions away from locking your highest October streak record.</p>
                </div>
              </div>
            </div>

            {/* Spark Inspirations */}
            <div className="bg-[#1a1b20] rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-medium">Spark Inspirations</h3>
                <span className="text-[#a8a0a0]">○</span>
              </div>
              <p className="text-xs text-[#a8a0a0] mb-4">Micro-habits proven to fortify existing flames.</p>

              {[
                { icon: '🌙', title: 'Digital Twilight 10 PM', desc: 'Quiet Mind • 15 mins' },
                { icon: '💧', title: 'Hydrate at Dawn', desc: 'Physical Stamina • 500ml' },
                { icon: '✨', title: '5-Minute Hearth Recap', desc: 'Mindfulness • Daily' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-[#121318] rounded-lg mb-3">
                  <span>{item.icon}</span>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{item.title}</div>
                    <div className="text-xs text-[#a8a0a0]">{item.desc}</div>
                  </div>
                  <button className="text-[#a8a0a0]">+</button>
                </div>
              ))}
            </div>

            {/* Focus Mode */}
            <div className="bg-[#1a1b20] rounded-xl p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[#a8a0a0]">⚙️</span>
                <span className="text-sm">Focus Mode</span>
              </div>
              <button
                onClick={() => setFocusMode(!focusMode)}
                className={`w-12 h-6 rounded-full p-1 transition-colors ${focusMode ? 'bg-[#e07147]' : 'bg-[#292a2f]'}`}
              >
                <div className={`w-4 h-4 bg-white rounded-full transition-transform ${focusMode ? 'translate-x-6' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#1e1f25] mt-12 py-6">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between text-xs text-[#a8a0a0]">
          <div>Ember • Cultivate quiet discipline & momentum</div>
          <div>© 2026 Ember Habits. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}