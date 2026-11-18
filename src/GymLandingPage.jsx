import React, { useState } from 'react';

export default function GymLandingPage() {
  const [activeDay, setActiveDay] = useState('mon');
  const [activeFaq, setActiveFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const schedule = {
    mon: {
      name: "Upper Body Calisthenics & Ring Work",
      focus: "Straight-arm scapular control, strict pull-up volume, false-grip ring transitions",
      circuit: "4 Rounds • 8 Strict Pull-ups + 12 Ring Dips + 30s Scapular Active Hang",
      coaches: "Head Coach Marcus • Max 8 Athletes",
      time: "06:00 / 09:00 / 18:00 / 19:30"
    },
    tue: {
      name: "Posterior Chain & Olympic Barbell Hinge",
      focus: "York USA barbell deadlifts, Romanian pulls, unilateral glute/hamstring armor",
      circuit: "5 Sets • Progressive Overload Deadlift (up to 85% 1RM) + Deficit Bulgarian Splits",
      coaches: "Coach Elena (CSCS) • Max 8 Athletes",
      time: "06:00 / 09:00 / 18:00 / 19:30"
    },
    wed: {
      name: "Handstand Mechanics & Joint Durability",
      focus: "Wrist conditioning, wall handstand holds, thoracic spine mobility, rotator cuff prep",
      circuit: "Skill Flow • Chest-to-Wall Handstand Holds + Pike Press Eccentrics + Shoulder Dislocates",
      coaches: "Head Coach Marcus • Max 8 Athletes",
      time: "07:00 / 10:00 / 18:30"
    },
    thu: {
      name: "Relative Strength & Unilateral Overload",
      focus: "Archer push-ups, heavy dumbbell pressing, single-arm rows, core tension",
      circuit: "EMOM 20 • Min 1: 10 Heavy DB Press / Min 2: 6 Archer Push-ups each side",
      coaches: "Coach Elena (CSCS) • Max 8 Athletes",
      time: "06:00 / 09:00 / 18:00 / 19:30"
    },
    fri: {
      name: "Structural Core & L-Sit Density",
      focus: "Hollow body compression, parallette L-sits, strict toes-to-bar, dragon flags",
      circuit: "6 Sets • 15s Max Height L-Sit + 10 Strict Hanging Leg Raises + 45s Plank Walk",
      coaches: "Head Coach Marcus • Max 8 Athletes",
      time: "06:00 / 09:00 / 18:00 / 19:30"
    },
    sat: {
      name: "The 60-Minute Cohort Throwdown",
      focus: "Hybrid strength & aerobic capacity test combining calisthenics, ergs, and barbells",
      circuit: "Partner WOD • 800m Curved Run + 50 Pull-ups + 50 Barbell Cleans + 50 Dips",
      coaches: "Full Coaching Staff • Open Cohort",
      time: "08:30 / 10:00"
    },
    sun: {
      name: "Regulated Recovery & Open Gym",
      focus: "Unsupervised facility access, sauna/ice protocols, light active recovery work",
      circuit: "Free Flow • Individual mobility prescriptions & open barbell platform access",
      coaches: "Floor Supervisor On-Duty",
      time: "07:00 - 21:00"
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#ebebeb] font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* 1. Industrial Top Ticker Bar (Mobile Optimized) */}
      <div className="border-b border-neutral-800 bg-[#0c0c0c] text-[10px] sm:text-[11px] font-mono tracking-wider py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <span className="text-amber-500 font-bold">LOC: [AREA], [CITY]</span>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <span className="text-neutral-400">05:00 - 23:00 MON-SUN</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
            <span className="text-neutral-400">NEXT INTAKE: <span className="text-white font-bold">MONDAY</span></span>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <span className="text-amber-500 font-bold">8 ATHLETES/COHORT</span>
          </div>
        </div>
      </div>

      {/* 2. Responsive Razor-Sharp Navigation with Mobile Drawer */}
      <nav className="border-b border-neutral-800 bg-[#070707]/95 sticky top-0 z-50 backdrop-blur-md px-4 sm:px-6 py-3.5 sm:py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-baseline gap-2 sm:gap-3">
            <span className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
              APEX
            </span>
            <span className="font-mono text-[9px] sm:text-[10px] text-neutral-400 uppercase tracking-widest border-l border-neutral-800 pl-2 sm:pl-3">
              ATHLETIC LAB
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <a href="#philosophy" className="hover:text-white transition-colors">01. Standard</a>
            <a href="#schedule" className="hover:text-white transition-colors">02. Schedule</a>
            <a href="#facility" className="hover:text-white transition-colors">03. Facility</a>
            <a href="#programs" className="hover:text-white transition-colors">04. Programs</a>
            <a href="#faq" className="hover:text-white transition-colors">05. FAQ</a>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="https://wa.me/1234567890?text=Hello,%20I'd%20like%20to%20apply%20for%20the%20upcoming%2090-Day%20Cohort."
              target="_blank"
              rel="noreferrer"
              className="border border-neutral-600 hover:border-white bg-white hover:bg-neutral-200 text-black font-mono text-[11px] sm:text-xs font-bold px-3.5 sm:px-5 py-2 sm:py-2.5 uppercase tracking-wider transition-all duration-150"
            >
              <span className="hidden xs:inline">Apply on </span>WhatsApp →
            </a>

            {/* Hamburger Button for Mobile */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-400 hover:text-white font-mono text-sm border border-neutral-800 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-neutral-800 flex flex-col gap-3 font-mono text-xs uppercase tracking-wider text-neutral-300 pb-2">
            <a 
              href="#philosophy" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              01. The Standard
            </a>
            <a 
              href="#schedule" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              02. 7-Day Schedule
            </a>
            <a 
              href="#facility" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              03. Facility Matrix
            </a>
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              04. Membership Programs
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-2 hover:bg-neutral-900 hover:text-amber-400 transition-colors"
            >
              05. FAQ & Inquiries
            </a>
          </div>
        )}
      </nav>

      {/* 3. Hero Section: Mobile-First Responsive Split */}
      <header className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Bold Typography & Actions */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-neutral-800">
            <div>
              <div className="font-mono text-[11px] sm:text-xs text-amber-500 uppercase tracking-widest mb-4 sm:mb-6">
                // DISCIPLINE OVER MOTIVATION • 90-DAY PROTOCOL
              </div>
              
              <h1 className="font-display text-5xl xs:text-6xl sm:text-7xl lg:text-8xl font-black uppercase text-white leading-[0.92] tracking-tighter mb-6 sm:mb-8 break-words">
                COMMAND <br />
                YOUR OWN <br />
                <span className="text-neutral-500">MASS.</span>
              </h1>

              <p className="text-neutral-400 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed mb-8 sm:mb-10">
                A purpose-built training ground for adults who refuse to settle for boring commercial gym routines. We combine strict gymnastic calisthenics with Olympic barbell strength to forge bodies that are lean, mobile, and capable of actual work.
              </p>

              {/* Action Buttons: Full Width on Mobile */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                <a
                  href="https://wa.me/1234567890?text=Hi,%20I'd%20like%20to%20book%20a%20private%20facility%20walkthrough."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-black font-display text-base sm:text-lg font-black uppercase tracking-wider py-3.5 sm:py-4 px-6 sm:px-8 text-center transition-colors"
                >
                  Book Assessment on WhatsApp
                </a>
                <a
                  href="#schedule"
                  className="w-full sm:w-auto border border-neutral-800 hover:border-neutral-500 text-neutral-300 font-mono text-xs uppercase tracking-widest py-3.5 sm:py-4 px-6 text-center transition-colors"
                >
                  View Weekly Programming ↓
                </a>
              </div>
            </div>

            {/* Bottom Metadata Ledger (Compact on Mobile) */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-8 sm:pt-12 mt-8 sm:mt-12 border-t border-neutral-800 text-left font-mono">
              <div>
                <span className="text-neutral-500 text-[9px] sm:text-[10px] block uppercase">Coaching Ratio</span>
                <span className="text-white text-sm sm:text-lg font-bold">1 : 6 MAX</span>
              </div>
              <div>
                <span className="text-neutral-500 text-[9px] sm:text-[10px] block uppercase">Rating Ledger</span>
                <span className="text-white text-sm sm:text-lg font-bold">4.9 / 5.0</span>
              </div>
              <div>
                <span className="text-neutral-500 text-[9px] sm:text-[10px] block uppercase">Cohort Length</span>
                <span className="text-white text-sm sm:text-lg font-bold">90 DAYS</span>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Image (Mobile-Responsive Height) */}
          <div className="lg:col-span-5 relative bg-neutral-900 overflow-hidden h-72 xs:h-80 sm:h-96 lg:h-auto min-h-[300px]">
            <img 
              src="/images/hero-bg.jpg" 
              alt="Heavy barbell deadlift with chalk" 
              className="w-full h-full object-cover object-center grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />
            
            {/* Embedded Architectural Caption */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 font-mono text-xs bg-black/90 border border-neutral-800 p-3 sm:p-4">
              <span className="text-amber-500 block mb-0.5 sm:mb-1 font-bold text-[11px] sm:text-xs">PLATE SPEC // YORK USA OLYMPIC STEEL</span>
              <p className="text-neutral-400 text-[10px] sm:text-[11px] leading-tight">
                Calibrated bumper sets, custom-height pull-up ladders, and competition rings. Zero queues.
              </p>
            </div>
          </div>

        </div>
      </header>

      {/* 4. Section 01: The Standard & Philosophy (Brutalist Grid) */}
      <section id="philosophy" className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
          
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="font-mono text-xs text-amber-500 font-bold block mb-3 sm:mb-4">RULE 01 // NO ISOLATION TRAPS</span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white mb-2 sm:mb-3">Compound Biomechanics</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              We do not sit on machines looking at phones. You will learn to brace your spine, recruit your lats from dead-hang, and generate whole-body tension through compound barbell and bodyweight patterns.
            </p>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <span className="font-mono text-xs text-amber-500 font-bold block mb-3 sm:mb-4">RULE 02 // JOINT PREHABILITATION</span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white mb-2 sm:mb-3">Bulletproof Wrists & Shoulders</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Most trainees fail at calisthenics because their connective tissue is neglected. Every session begins with scapular depression, thoracic extension, and wrist flexion protocols before loading.
            </p>
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <span className="font-mono text-xs text-amber-500 font-bold block mb-3 sm:mb-4">RULE 03 // QUANTIFIABLE BENCHMARKS</span>
            <h3 className="font-display text-xl sm:text-2xl font-black uppercase text-white mb-2 sm:mb-3">Strict Overload Tracking</h3>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              We log every eccentric second, dead-stop rep, and barbell load. You enter with baseline tests on Day 1 and graduate on Day 90 with measurable, verified upper-body strength.
            </p>
          </div>

        </div>
      </section>

      {/* 5. Section 02: 7-Day Schedule with Horizontal Mobile Scroll */}
      <section id="schedule" className="border-b border-neutral-800 py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-neutral-800 gap-2">
            <div>
              <span className="font-mono text-[10px] sm:text-xs text-amber-500 uppercase tracking-widest block mb-1">
                // WEEKLY PROGRAMMING BREAKDOWN
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white">
                The 7-Day Training Split
              </h2>
            </div>
            <p className="font-mono text-[11px] sm:text-xs text-neutral-400">
              [ 60-MIN COHORT SESSIONS • CAPPED AT 8 ATHLETES ]
            </p>
          </div>

          {/* Monospaced Day Selector: Touch Friendly & Horizontally Scrollable on Mobile */}
          <div className="flex sm:grid sm:grid-cols-7 border border-neutral-800 bg-[#0e0e0e] mb-6 sm:mb-8 font-mono text-xs text-center overflow-x-auto no-scrollbar scroll-smooth">
            {['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`flex-1 min-w-[70px] sm:min-w-0 py-3.5 sm:py-4 px-2 uppercase font-bold tracking-wider transition-colors border-r last:border-r-0 border-neutral-800 touch-manipulation ${
                  activeDay === day 
                    ? 'bg-amber-500 text-black' 
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-900'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Active Schedule Terminal Card */}
          <div className="border border-neutral-800 bg-[#0c0c0c] p-5 sm:p-8 lg:p-10 font-mono">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 sm:gap-6 pb-6 border-b border-neutral-800">
              <div>
                <span className="text-amber-500 text-[10px] sm:text-xs uppercase font-bold block mb-1">
                  DAY CODE // {activeDay.toUpperCase()}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black uppercase text-white">
                  {schedule[activeDay].name}
                </h3>
              </div>
              <div className="text-left lg:text-right pt-2 lg:pt-0">
                <span className="text-neutral-500 text-[10px] sm:text-xs block uppercase">SESSION SLOTS</span>
                <span className="text-neutral-200 text-xs sm:text-sm font-bold">{schedule[activeDay].time}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 pt-6 text-xs">
              <div>
                <span className="text-neutral-500 uppercase block mb-1">Primary Biomechanical Focus</span>
                <p className="text-neutral-200 leading-relaxed text-xs">{schedule[activeDay].focus}</p>
              </div>
              <div>
                <span className="text-neutral-500 uppercase block mb-1">Standard Circuit Blueprint</span>
                <p className="text-neutral-200 leading-relaxed text-xs">{schedule[activeDay].circuit}</p>
              </div>
              <div>
                <span className="text-neutral-500 uppercase block mb-1">Supervision & Cap</span>
                <p className="text-amber-400 font-bold text-xs">{schedule[activeDay].coaches}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Section 03: The Facility Gallery (Mobile Touch-Optimized) */}
      <section id="facility" className="border-b border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <div className="p-4 sm:p-6 lg:p-8 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] sm:text-xs">
            <span className="text-amber-500 font-bold uppercase tracking-widest">
              // FACILITY SPECIFICATION MATRIX
            </span>
            <span className="text-neutral-400">
              HEAVY IRON • RIG SUITE • ZERO COMMODITY GEAR
            </span>
          </div>

          {/* 4 Photos in Mobile-Calibrated Heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            
            {/* Cell 1: Olympic Floor */}
            <div className="group relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-neutral-900 border-b border-neutral-800">
              <img 
                src="/images/open-gym.jpg" 
                alt="Olympic Lifting Floor" 
                className="w-full h-full object-cover grayscale contrast-125 md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end font-mono">
                <span className="text-[9px] sm:text-[10px] text-amber-500 uppercase font-bold tracking-widest mb-0.5 sm:mb-1">STATION 01</span>
                <h4 className="font-display text-xl sm:text-2xl font-black uppercase text-white">Olympic York USA Barbell Deck</h4>
                <p className="text-neutral-400 text-[11px] sm:text-xs mt-1">Calibrated bumper plates, competition knurling, independent squat rigs.</p>
              </div>
            </div>

            {/* Cell 2: Dumbbells & Private Coaching */}
            <div className="group relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-neutral-900 border-b border-neutral-800">
              <img 
                src="/images/strength-coaching.jpg" 
                alt="Heavy dumbbell lifting area" 
                className="w-full h-full object-cover grayscale contrast-125 md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end font-mono">
                <span className="text-[9px] sm:text-[10px] text-amber-500 uppercase font-bold tracking-widest mb-0.5 sm:mb-1">STATION 02</span>
                <h4 className="font-display text-xl sm:text-2xl font-black uppercase text-white">Unilateral Heavy Dumbbell Suite</h4>
                <p className="text-neutral-400 text-[11px] sm:text-xs mt-1">Cast dumbbells from 2.5kg up to 54kg with commercial incline benches.</p>
              </div>
            </div>

            {/* Cell 3: Rig & Rings */}
            <div className="group relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-neutral-900 border-b md:border-b-0 border-neutral-800">
              <img 
                src="/images/hero-bg.jpg" 
                alt="Chalk station and gymnastic rings" 
                className="w-full h-full object-cover grayscale contrast-125 md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end font-mono">
                <span className="text-[9px] sm:text-[10px] text-amber-500 uppercase font-bold tracking-widest mb-0.5 sm:mb-1">STATION 03</span>
                <h4 className="font-display text-xl sm:text-2xl font-black uppercase text-white">4.2m Structural Calisthenics Rig</h4>
                <p className="text-neutral-400 text-[11px] sm:text-xs mt-1">Birch gymnastic rings, parallel dip bars, chalk basins, and stall bars.</p>
              </div>
            </div>

            {/* Cell 4: Conditioning & Group Cohorts */}
            <div className="group relative h-64 sm:h-80 lg:h-96 overflow-hidden bg-neutral-900">
              <img 
                src="/images/community.jpg" 
                alt="Cardio conditioning floor" 
                className="w-full h-full object-cover grayscale contrast-125 md:group-hover:grayscale-0 md:group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end font-mono">
                <span className="text-[9px] sm:text-[10px] text-amber-500 uppercase font-bold tracking-widest mb-0.5 sm:mb-1">STATION 04</span>
                <h4 className="font-display text-xl sm:text-2xl font-black uppercase text-white">Motorless Curved Runners & Ergs</h4>
                <p className="text-neutral-400 text-[11px] sm:text-xs mt-1">Woodway self-powered treadmills, Concept2 rowers and ski-ergs for metabolic power.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Section 04: Three Membership Options (Mobile Stacked Table) */}
      <section id="programs" className="border-b border-neutral-800 py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <span className="font-mono text-[10px] sm:text-xs text-amber-500 uppercase tracking-widest block mb-2">
              // NO LOCK-IN TRAPS • MONTH-TO-MONTH
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white">
              Program Selection
            </h2>
            <p className="font-mono text-xs text-neutral-400 mt-2">
              Select your coaching tier. All programs include full digital facility access.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x border border-neutral-800 bg-[#0a0a0a]">
            
            {/* Tier 01: 1-on-1 */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-3 sm:mb-4 font-mono text-xs">
                  <span className="text-neutral-400">TRACK // 01</span>
                  <span className="text-neutral-500">MAX 10 ATHLETES</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                  1-on-1 Strength Coaching
                </h3>
                <p className="text-xs text-neutral-400 mb-6 sm:mb-8 leading-relaxed font-mono">
                  Full individualized attention. For athletes requiring rapid rehabilitation, private schedule flexibility, or specific body recomposition.
                </p>

                <div className="border-t border-b border-neutral-800 py-4 sm:py-6 mb-6 sm:mb-8 font-mono">
                  <span className="text-xl sm:text-2xl font-bold text-white block">Private Intake</span>
                  <span className="text-xs text-neutral-400 block mt-1">3x 60-Min Private Sessions Weekly</span>
                </div>

                <ul className="space-y-3 font-mono text-xs text-neutral-300 mb-8 sm:mb-10">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">+</span>
                    <span>Custom dumbbell & barbell strength cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">+</span>
                    <span>Direct WhatsApp video form reviews within 2 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">+</span>
                    <span>Personalized metabolic nutrition & protein blueprint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">+</span>
                    <span>Full 7-day facility keycard access included</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/1234567890?text=Hi,%20I'm%20applying%20for%20the%201-on-1%20Private%20Strength%20Track."
                target="_blank"
                rel="noreferrer"
                className="w-full block py-3.5 sm:py-4 text-center font-mono text-xs uppercase font-bold tracking-wider bg-neutral-900 hover:bg-white text-white hover:text-black border border-neutral-700 transition-colors"
              >
                Apply for 1-on-1 →
              </a>
            </div>

            {/* Tier 02: 90-Day Calisthenics Cohort (HIGHLIGHTED) */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#111111] relative">
              <div className="lg:absolute lg:top-0 lg:right-0 bg-amber-500 text-black font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1 mb-4 lg:mb-0 inline-block w-fit">
                FLAGSHIP COHORT
              </div>

              <div>
                <div className="flex items-baseline justify-between mb-3 sm:mb-4 font-mono text-xs">
                  <span className="text-amber-400 font-bold">TRACK // 02</span>
                  <span className="text-amber-500 font-bold">CAPPED AT 8</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                  90-Day Calisthenics Cohort
                </h3>
                <p className="text-xs text-neutral-400 mb-6 sm:mb-8 leading-relaxed font-mono">
                  Our structured small-group protocol. Master strict dead-hang pull-ups, L-sits, ring dips, and body control alongside 7 motivated peers.
                </p>

                <div className="border-t border-b border-neutral-700 py-4 sm:py-6 mb-6 sm:mb-8 font-mono">
                  <span className="text-xl sm:text-2xl font-bold text-amber-400 block">5 Sessions / Week</span>
                  <span className="text-xs text-neutral-300 block mt-1">Mon - Fri Structured Schedule</span>
                </div>

                <ul className="space-y-3 font-mono text-xs text-neutral-200 mb-8 sm:mb-10">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-0.5">+</span>
                    <span>Full Calisthenics Skill Tree (0 to strict pull-ups & L-sit)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-0.5">+</span>
                    <span>Rotator cuff & wrist prehab protocols in every session</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-0.5">+</span>
                    <span>Monthly In-Body volumetric body composition scanning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold mt-0.5">+</span>
                    <span>Private cohort WhatsApp community & coach support</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/1234567890?text=Hi,%20I'd%20like%20to%20reserve%20a%20seat%20in%20the%2090-Day%20Calisthenics%20Cohort."
                target="_blank"
                rel="noreferrer"
                className="w-full block py-3.5 sm:py-4 text-center font-mono text-xs uppercase font-black tracking-wider bg-amber-500 hover:bg-amber-400 text-black transition-colors"
              >
                Claim Cohort Seat →
              </a>
            </div>

            {/* Tier 03: Open Gym */}
            <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-baseline justify-between mb-3 sm:mb-4 font-mono text-xs">
                  <span className="text-neutral-400">TRACK // 03</span>
                  <span className="text-neutral-500">INDEPENDENT</span>
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white mb-2">
                  Unlimited Open Gym Pass
                </h3>
                <p className="text-xs text-neutral-400 mb-6 sm:mb-8 leading-relaxed font-mono">
                  For self-directed athletes who demand serious equipment, zero queues, and a focused atmosphere free from social media crowds.
                </p>

                <div className="border-t border-b border-neutral-800 py-4 sm:py-6 mb-6 sm:mb-8 font-mono">
                  <span className="text-xl sm:text-2xl font-bold text-white block">Open Facility Access</span>
                  <span className="text-xs text-neutral-400 block mt-1">05:00 - 23:00 Daily • 7 Days/Week</span>
                </div>

                <ul className="space-y-3 font-mono text-xs text-neutral-300 mb-8 sm:mb-10">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">+</span>
                    <span>Guaranteed barbell rack availability (capped total members)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">+</span>
                    <span>Full access to rigs, chalk, rings, and heavy dumbbells</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">+</span>
                    <span>Locker rooms, showers, and filtered recovery water</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold mt-0.5">+</span>
                    <span>Mobile keyless entry pass</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://wa.me/1234567890?text=Hi,%20I'm%20interested%20in%20the%20Open%20Gym%20Membership%20pass."
                target="_blank"
                rel="noreferrer"
                className="w-full block py-3.5 sm:py-4 text-center font-mono text-xs uppercase font-bold tracking-wider bg-neutral-900 hover:bg-white text-white hover:text-black border border-neutral-700 transition-colors"
              >
                Inquire For Open Pass →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* 8. Section 05: Technical FAQ Accordion */}
      <section id="faq" className="border-b border-neutral-800 py-14 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          
          <div className="mb-8 sm:mb-12 text-left">
            <span className="font-mono text-[10px] sm:text-xs text-amber-500 uppercase tracking-widest block mb-1">
              // NO-BULLSHIT POLICY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white">
              Common Questions
            </h2>
          </div>

          <div className="border-t border-neutral-800 divide-y divide-neutral-800 font-mono">
            {[
              {
                q: "I cannot do a single pull-up or strict dip. Can I still join the Cohort?",
                a: "Yes. 65% of cohort applicants start at zero pull-ups. Every exercise has systematic regressions (scapular pulls, eccentric negatives, incline rings). You will never be asked to perform a movement your joints cannot yet tolerate."
              },
              {
                q: "How does the WhatsApp consultation process work?",
                a: "When you message us on WhatsApp, you speak with a certified head coach — not a bot or sales agent. We ask 3 questions about your training history, current joint pain, and availability, then schedule your 30-minute private baseline assessment."
              },
              {
                q: "What is your policy on contracts and pausing for travel?",
                a: "We do not lock anyone into 12-month commercial gym contracts. All plans are month-to-month. If you travel, you can freeze your membership for up to 30 days per calendar year with simple notice."
              },
              {
                q: "Are the open gym hours truly uncrowded?",
                a: "Yes. We strictly cap active open gym memberships at 120 total individuals. Because our peak cohort sessions run on dedicated schedules, the lifting platforms and dumbbell racks remain open and queue-free throughout the day."
              }
            ].map((item, idx) => (
              <div key={idx} className="py-4 sm:py-6">
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left flex items-start justify-between gap-3 text-xs sm:text-sm md:text-base font-bold text-white hover:text-amber-400 transition-colors py-1 touch-manipulation"
                >
                  <span className="leading-snug">{item.q}</span>
                  <span className="text-amber-500 text-xs sm:text-sm font-mono shrink-0 pt-0.5">
                    {activeFaq === idx ? '[-]' : '[+]'}
                  </span>
                </button>
                {activeFaq === idx && (
                  <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs md:text-sm text-neutral-400 leading-relaxed max-w-2xl">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Direct Location Terminal & Final Call To Action (Mobile Friendly) */}
      <footer className="bg-black py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-4 text-left">
            <span className="font-mono text-[10px] sm:text-xs text-amber-500 uppercase tracking-widest block">
              // NEXT STEP
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white leading-tight">
              APPLY FOR THE <br />
              UPCOMING COHORT.
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm font-mono max-w-md">
              Message our head coaches directly. We will review your movement background and confirm if a spot is open for you.
            </p>
            <div className="pt-2">
              <a
                href="https://wa.me/1234567890?text=Hi%20Coach,%20I'm%20ready%20to%20apply%20for%20the%20next%20Cohort."
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-block bg-amber-500 hover:bg-amber-400 text-black font-display text-lg sm:text-xl font-black uppercase tracking-wider py-3.5 sm:py-4 px-8 sm:px-10 text-center transition-colors"
              >
                Chat on WhatsApp in 1 Click →
              </a>
            </div>
          </div>

          <div className="lg:col-span-6 border border-neutral-800 bg-[#0a0a0a] p-6 sm:p-8 font-mono text-xs space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-neutral-800">
              <span className="text-neutral-500 uppercase text-[10px] sm:text-xs">LOCATION TERMINAL</span>
              <span className="text-amber-500 font-bold text-[10px] sm:text-xs">STATUS: OPEN</span>
            </div>
            <div className="space-y-1.5 sm:space-y-2 text-neutral-400 text-[11px] sm:text-xs">
              <p className="text-white font-bold text-xs sm:text-sm">APEX ATHLETIC LAB</p>
              <p>[ Physical Address, Street / Suite, Area, City ]</p>
              <p>
                PHONE: <a href="tel:1234567890" className="text-white hover:text-amber-400 underline underline-offset-2">[ Client Phone Number ]</a>
              </p>
              <p>HOURS: 05:00 - 23:00 MON - SUN</p>
              <p className="text-neutral-500 text-[10px] sm:text-[11px] pt-1">FREE ON-SITE ATHLETE PARKING DEDICATED</p>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-10 sm:pt-16 mt-10 sm:mt-16 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between font-mono text-[9px] sm:text-[10px] text-neutral-600 gap-3 text-center sm:text-left">
          <span>APEX ATHLETIC LAB // ALL RIGHTS RESERVED</span>
          <span>DISCIPLINE • BIOMECHANICS • FUNCTIONAL POWER</span>
        </div>
      </footer>

    </div>
  );
}
