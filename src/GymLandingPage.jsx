"use client";

import React, { useState } from 'react';

export default function GymLandingPage() {
  const [activeDay, setActiveDay] = useState('mon');
  const [activeFaq, setActiveFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const schedule = {
    mon: {
      name: "Upper Body Strength & Ring Work",
      tag: "CALISTHENICS & FORCE",
      focus: "Straight-arm scapular control, strict pull-up volume, false-grip ring transitions",
      circuit: "4 Rounds • 8 Strict Pull-ups + 12 Ring Dips + 30s Scapular Active Hang",
      coaches: "Head Coach Marcus • Capped at 8 Athletes",
      time: "06:00 / 09:00 / 18:00 / 19:30"
    },
    tue: {
      name: "Posterior Chain & Barbell Hinge",
      tag: "OLYMPIC POWER",
      focus: "York USA barbell deadlifts, Romanian pulls, unilateral glute/hamstring armor",
      circuit: "5 Sets • Progressive Overload Deadlift (up to 85% 1RM) + Deficit Bulgarian Splits",
      coaches: "Coach Elena (CSCS) • Capped at 8 Athletes",
      time: "06:00 / 09:00 / 18:00 / 19:30"
    },
    wed: {
      name: "Handstand Balance & Joint Prehab",
      tag: "SKILL & MOBILITY",
      focus: "Wrist conditioning, wall handstand holds, thoracic spine mobility, rotator cuff prep",
      circuit: "Skill Flow • Chest-to-Wall Handstand Holds + Pike Press Eccentrics + Shoulder Dislocates",
      coaches: "Head Coach Marcus • Capped at 8 Athletes",
      time: "07:00 / 10:00 / 18:30"
    },
    thu: {
      name: "Relative Strength & Unilateral Overload",
      tag: "HYPERTROPHY & GRIT",
      focus: "Archer push-ups, heavy dumbbell pressing, single-arm rows, rotational core tension",
      circuit: "EMOM 20 • Min 1: 10 Heavy DB Press / Min 2: 6 Archer Push-ups each side",
      coaches: "Coach Elena (CSCS) • Capped at 8 Athletes",
      time: "06:00 / 09:00 / 18:00 / 19:30"
    },
    fri: {
      name: "Structural Core & L-Sit Density",
      tag: "GYMNASTIC MIDSECTION",
      focus: "Hollow body compression, parallette L-sits, strict toes-to-bar, dragon flags",
      circuit: "6 Sets • 15s Max Height L-Sit + 10 Strict Hanging Leg Raises + 45s Plank Walk",
      coaches: "Head Coach Marcus • Capped at 8 Athletes",
      time: "06:00 / 09:00 / 18:00 / 19:30"
    },
    sat: {
      name: "The 60-Minute Cohort Throwdown",
      tag: "COMMUNITY CAPACITY",
      focus: "Hybrid strength & aerobic capacity test combining calisthenics, ergs, and barbells",
      circuit: "Partner Flow • 800m Curved Run + 50 Pull-ups + 50 Barbell Cleans + 50 Dips",
      coaches: "Full Coaching Staff • Open Cohort",
      time: "08:30 / 10:00"
    },
    sun: {
      name: "Active Recovery & Open Facility",
      tag: "RECOVERY & FLOW",
      focus: "Self-directed facility access, sauna/ice protocols, light active mobility work",
      circuit: "Free Flow • Individual mobility prescriptions & open barbell platform access",
      coaches: "Floor Supervisor On-Duty",
      time: "07:00 - 21:00"
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0E131F] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden pb-20 sm:pb-0 relative">
      
      {/* 1. Welcoming Top Bar */}
      <div className="bg-[#141C2E] border-b border-slate-800/80 text-xs py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center text-slate-300">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              APEX ATHLETIC LAB
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400">Open 05:00 – 23:00 Daily</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 font-medium">
            <span className="text-amber-400 flex items-center gap-1 font-bold">
              ★ 4.9/5.0 <span className="text-slate-400 font-normal">(140+ Athlete Reviews)</span>
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-300 hidden md:inline">Small Cohorts: 8 Athletes Max</span>
          </div>
        </div>
      </div>

      {/* 2. Responsive Navigation */}
      <nav className="sticky top-0 z-40 bg-[#0E131F]/95 backdrop-blur-md border-b border-slate-800/90 px-4 sm:px-8 py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20">
              ⚡
            </div>
            <div>
              <span className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white uppercase block leading-none">
                APEX
              </span>
              <span className="text-[10px] text-amber-400 font-bold uppercase tracking-widest block mt-0.5">
                Functional Calisthenics & Strength
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#philosophy" className="hover:text-amber-400 transition-colors">Why APEX</a>
            <a href="#schedule" className="hover:text-amber-400 transition-colors">Weekly Schedule</a>
            <a href="#facility" className="hover:text-amber-400 transition-colors">The Facility</a>
            <a href="#programs" className="hover:text-amber-400 transition-colors">Programs & Pricing</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/1234567890?text=Hello!%20I'd%20like%20to%20apply%20for%20a%20free%20APEX%20assessment%20session."
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200"
            >
              <span>Join on WhatsApp</span>
              <span>→</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-1 text-sm font-semibold text-slate-200 pb-3">
            <a 
              href="#philosophy" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-amber-400"
            >
              Why APEX
            </a>
            <a 
              href="#schedule" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-amber-400"
            >
              Weekly Schedule
            </a>
            <a 
              href="#facility" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-amber-400"
            >
              Facility & Equipment
            </a>
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-amber-400"
            >
              Programs & Memberships
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-amber-400"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-2 px-1">
              <a
                href="https://wa.me/1234567890?text=Hi%20Coach!%20I'd%20like%20to%20join%20the%20APEX%20Cohort."
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black py-3 rounded-xl text-center shadow-lg"
              >
                Chat with a Coach on WhatsApp →
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* 3. Hero Section: Energetic, Welcoming Atmosphere with Ambient Glows */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24 border-b border-slate-800">
        
        {/* Warm, energetic amber & crimson ambient light orbs */}
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-amber-600/20 via-orange-600/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-32 right-[-100px] w-[350px] h-[350px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-[-60px] left-[-80px] w-[350px] h-[350px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide">
                <span>⚡</span>
                <span>BEGINNERS TO ADVANCED ATHLETES WELCOME</span>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-[1.02]">
                BUILD REAL STRENGTH. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                  COMMAND YOUR BODY.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                No boring gym routines, crowded machines, or intimidating egos. We combine strict gymnastic calisthenics with Olympic barbells in supportive small groups capped at 8 athletes. Master pull-ups, build real muscle, and unlock joints that feel indestructible.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href="https://wa.me/1234567890?text=Hi!%20I'd%20like%20to%20book%20a%20free%20assessment%20and%20walkthrough%20at%20APEX."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl shadow-amber-500/25 hover:shadow-amber-500/35 transition-all duration-200"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Book Free Assessment</span>
                </a>

                <a
                  href="#schedule"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-bold text-sm sm:text-base px-6 py-4 rounded-xl transition-colors"
                >
                  View 7-Day Training Split ↓
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800">
                <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800/90 text-left">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">1 : 6 MAX</div>
                  <div className="text-xs text-slate-400 mt-0.5">Coach-to-Athlete</div>
                </div>
                <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800/90 text-left">
                  <div className="text-xl sm:text-2xl font-black text-white">4.9 ★</div>
                  <div className="text-xs text-slate-400 mt-0.5">140+ Reviews</div>
                </div>
                <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800/90 text-left">
                  <div className="text-xl sm:text-2xl font-black text-orange-400">90 DAYS</div>
                  <div className="text-xs text-slate-400 mt-0.5">Transformation Cycle</div>
                </div>
              </div>
            </div>

            {/* Right Card: Dynamic Full Color Image (Not depressing grayscale) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl shadow-orange-950/40 group">
                <img 
                  src="/images/hero-bg.jpg" 
                  alt="Athlete lifting barbell with focus and chalk" 
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg shrink-0">
                      ⚡
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold">Guaranteed Personalized Coaching</h4>
                      <p className="text-slate-300 text-xs mt-0.5">Every workout is tailored to your current fitness level with zero intimidation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Why APEX: 3 Welcoming Pillars */}
      <section id="philosophy" className="py-16 sm:py-20 bg-[#121826] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2 block">The APEX Difference</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black uppercase text-white">How We Help You Succeed</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">Supportive coaching, zero crowds, and workouts that actually build functional power.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-black">
                01
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white">No Isolation Traps</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Forget staring at phones on seated machines. You will learn to brace your core, master your own bodyweight, and build real athletic strength with barbells and gymnastic rings.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-black">
                02
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white">Bulletproof Joints First</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Most people get injured because joints are ignored. Every single session begins with rotator cuff prehab, wrist mobility, and spinal decompression before any heavy work.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 shadow-lg transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-black">
                03
              </div>
              <h3 className="font-display text-2xl font-black uppercase text-white">Zero Ego, Real Camaraderie</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Whether you can't do 1 pull-up yet or you're chasing muscle-ups, everyone trains together with encouragement. You start with Day 1 baselines and celebrate real progress on Day 90.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 7-Day Interactive Training Schedule */}
      <section id="schedule" className="py-16 sm:py-20 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 pb-4 border-b border-slate-800 gap-3">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">
                Structured Cohort Programming
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white">
                The 7-Day Training Split
              </h2>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm font-medium">
              60-Min Sessions • Max 8 Athletes per Coach
            </p>
          </div>

          {/* Interactive Day Tabs */}
          <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-6 sm:mb-8 text-center">
            {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`py-3 sm:py-3.5 px-1 sm:px-2 rounded-xl uppercase font-black tracking-wider text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                  activeDay === day 
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-[1.02]' 
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Active Schedule Card */}
          <div className="rounded-3xl border border-slate-800 bg-[#121826] p-6 sm:p-8 lg:p-10 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full mb-2">
                  {schedule[activeDay].tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white">
                  {schedule[activeDay].name}
                </h3>
              </div>
              <div className="text-left lg:text-right">
                <span className="text-slate-400 text-xs block uppercase">Available Daily Slots</span>
                <span className="text-amber-400 text-sm sm:text-base font-bold">{schedule[activeDay].time}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 text-sm">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-slate-400 text-xs uppercase font-bold block mb-1.5">Biomechanical Focus</span>
                <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">{schedule[activeDay].focus}</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-slate-400 text-xs uppercase font-bold block mb-1.5">Sample Session Circuit</span>
                <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">{schedule[activeDay].circuit}</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                <span className="text-slate-400 text-xs uppercase font-bold block mb-1.5">Coaching & Safety</span>
                <p className="text-amber-300 font-bold text-xs sm:text-sm">{schedule[activeDay].coaches}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Facility Showcase: Vibrant Full-Color Gallery */}
      <section id="facility" className="py-16 sm:py-20 bg-[#121826] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Our Athletic Training Facility</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white">The Hardware & Rig Deck</h2>
            <p className="text-slate-400 text-sm mt-2">Olympic steel, competition rings, and zero broken equipment.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-800 bg-slate-900 shadow-lg">
              <img 
                src="/images/open-gym.jpg" 
                alt="Olympic Lifting Floor" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Station 01</span>
                <h4 className="font-display text-xl font-black uppercase text-white">Olympic Barbell Deck</h4>
                <p className="text-slate-300 text-xs mt-0.5">Calibrated bumpers & independent squat platforms.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-800 bg-slate-900 shadow-lg">
              <img 
                src="/images/strength-coaching.jpg" 
                alt="Heavy dumbbell lifting area" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Station 02</span>
                <h4 className="font-display text-xl font-black uppercase text-white">Heavy Dumbbell Suite</h4>
                <p className="text-slate-300 text-xs mt-0.5">Cast iron dumbbells from 2.5kg up to 54kg.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-800 bg-slate-900 shadow-lg">
              <img 
                src="/images/hero-bg.jpg" 
                alt="Calisthenics Rig and rings" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Station 03</span>
                <h4 className="font-display text-xl font-black uppercase text-white">4.2m Calisthenics Rig</h4>
                <p className="text-slate-300 text-xs mt-0.5">Birch gymnastic rings, parallel dips, and chalk basins.</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72 sm:h-80 group border border-slate-800 bg-slate-900 shadow-lg">
              <img 
                src="/images/community.jpg" 
                alt="Conditioning ergs and curved runners" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-5 flex flex-col justify-end">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">Station 04</span>
                <h4 className="font-display text-xl font-black uppercase text-white">Conditioning Floor</h4>
                <p className="text-slate-300 text-xs mt-0.5">Woodway curved runners, Concept2 rowers & ski-ergs.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Programs & Memberships */}
      <section id="programs" className="py-16 sm:py-24 bg-[#0E131F] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Month-to-Month • No Sneaky Lock-Ins</span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white">Training Programs</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">Every program includes complete digital facility and shower access.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Track 1: 1-on-1 */}
            <div className="rounded-3xl p-7 sm:p-8 bg-[#121826] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-bold">
                  <span className="text-amber-400">TRACK // 01</span>
                  <span>MAX 10 ATHLETES</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                  1-on-1 Coaching
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  Full individualized attention for fast rehabilitation, specific body recomposition, or custom scheduling.
                </p>

                <div className="py-4 border-y border-slate-800 mb-6">
                  <div className="text-2xl font-black text-white">Private Intake</div>
                  <div className="text-xs text-slate-400 mt-0.5">3x 60-Min Private Sessions Weekly</div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Custom dumbbell & barbell strength cycles</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Direct WhatsApp video form reviews within 2 hours</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Personalized metabolic nutrition & macro plan</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Full 7-day facility keycard access included</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/1234567890?text=Hi,%20I'm%20applying%20for%20the%201-on-1%20Private%20Strength%20Track."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-bold bg-slate-800 hover:bg-slate-700 text-white transition-all"
              >
                Apply for 1-on-1 Coaching →
              </a>
            </div>

            {/* Track 2: 90-Day Cohort (FLAGSHIP) */}
            <div className="rounded-3xl p-7 sm:p-8 bg-gradient-to-b from-[#182033] to-[#121826] border-2 border-amber-500 shadow-2xl shadow-amber-500/10 flex flex-col justify-between relative">
              <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 text-[11px] font-black uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md">
                Most Popular
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-amber-400 mb-2 font-black">
                  <span>TRACK // 02</span>
                  <span>CAPPED AT 8 ATHLETES</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                  90-Day Cohort
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  Our structured small-group protocol. Master strict dead-hang pull-ups, L-sits, ring dips, and body control with 7 peers.
                </p>

                <div className="py-4 border-y border-slate-700/80 mb-6">
                  <div className="text-2xl font-black text-amber-400">5 Sessions / Week</div>
                  <div className="text-xs text-slate-300 mt-0.5">Mon – Fri Guided Schedule</div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200 mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Full Calisthenics Skill Tree (0 to strict pull-ups)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Rotator cuff & wrist prehab in every workout</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Monthly In-Body biometric composition scans</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Supportive peer WhatsApp group & coach guidance</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/1234567890?text=Hi,%20I'd%20like%20to%20reserve%20a%20seat%20in%20the%2090-Day%20Calisthenics%20Cohort."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-black bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20 transition-all"
              >
                Claim Cohort Seat on WhatsApp →
              </a>
            </div>

            {/* Track 3: Open Gym */}
            <div className="rounded-3xl p-7 sm:p-8 bg-[#121826] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2 font-bold">
                  <span>TRACK // 03</span>
                  <span>INDEPENDENT</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                  Open Gym Access
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  For self-directed lifters who demand serious barbells, zero queues, and a focused atmosphere with zero crowds.
                </p>

                <div className="py-4 border-y border-slate-800 mb-6">
                  <div className="text-2xl font-black text-white">Full Facility Access</div>
                  <div className="text-xs text-slate-400 mt-0.5">05:00 - 23:00 Daily • 7 Days/Week</div>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-8">
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Guaranteed rack availability (capped total memberships)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Full access to rigs, chalk, rings & heavy dumbbells</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Hot showers, secure lockers & recovery station</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-amber-400 font-bold">✓</span>
                    <span>Seamless mobile phone keyless entry pass</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20the%20Open%20Gym%20Membership%20pass."
                target="_blank"
                rel="noreferrer"
                className="w-full py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-bold bg-slate-800 hover:bg-slate-700 text-white transition-all"
              >
                Inquire For Open Pass →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 8. FAQ Accordion */}
      <section id="faq" className="py-16 sm:py-20 bg-[#121826] border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Clear Answers</span>
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "I cannot do a single pull-up or strict dip. Can I still join the Cohort?",
                a: "Absolutely! Over 65% of our cohort members start at zero pull-ups. Every movement has step-by-step progressions (scapular active hangs, eccentric slow negatives, and feet-supported rings). You will never be asked to do a movement your joints are not ready for."
              },
              {
                q: "How does the WhatsApp consultation work? Who answers?",
                a: "When you tap any WhatsApp button, you chat directly with one of our head coaches. We ask 3 quick questions about your fitness goals and past injuries, then invite you in for a zero-pressure walkthrough and movement assessment."
              },
              {
                q: "What is your policy on contracts and freezing memberships?",
                a: "Zero long-term lock-in contracts! All our programs are month-to-month. If you travel or get busy with work, you can easily freeze your membership for up to 30 days per year."
              },
              {
                q: "Are the open gym hours truly uncrowded?",
                a: "Yes. We strictly cap active memberships at 120 total lifters. Because our cohorts run on dedicated class schedules, our Olympic platforms and dumbbell racks remain open without waiting or queues."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-white hover:text-amber-400 transition-colors"
                >
                  <span className="font-bold text-sm sm:text-base leading-snug">{item.q}</span>
                  <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 font-bold shrink-0">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Welcoming Footer */}
      <footer className="bg-[#0B0F19] text-slate-300 py-12 sm:py-16 px-4 sm:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-6 space-y-4">
            <h3 className="font-display text-3xl sm:text-4xl font-black text-white uppercase">
              APEX ATHLETIC LAB
            </h3>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              A community of athletes building functional strength, healthy joints, and real calisthenics control. Join the next cohort today.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/1234567890?text=Hi%20Coach!%20I'd%20like%20to%20apply%20for%20the%20APEX%20Cohort."
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <span>Chat on WhatsApp in 1 Click</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-6 rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-3 text-xs sm:text-sm">
            <div className="text-white font-bold text-base mb-1">Facility Details</div>
            <p className="text-slate-300"><strong className="text-white">Location:</strong> Main Boulevard, Commercial Sector</p>
            <p className="text-slate-300">
              <strong className="text-white">Direct Line:</strong>{" "}
              <a href="tel:1234567890" className="text-amber-400 hover:underline">+92 300 0000000</a>
            </p>
            <p className="text-slate-300"><strong className="text-white">Operating Hours:</strong> 05:00 – 23:00 Mon – Sun</p>
            <p className="text-slate-400 text-xs pt-1">Dedicated Athlete Parking On-Site</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <span>© {new Date().getFullYear()} APEX Athletic Lab. All rights reserved.</span>
          <span>Calisthenics • Barbell Conditioning • Mobility</span>
        </div>
      </footer>

      {/* 10. Floating Sticky Mobile WhatsApp Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-lg">
        <a
          href="https://wa.me/1234567890?text=Hi%20Coach!%20I'd%20like%20to%20book%20a%20free%20APEX%20assessment."
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm py-3 px-4 rounded-xl shadow-md active:scale-[0.98] transition-transform"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Apply for Cohort on WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
