"use client";

import React, { useState } from "react";

export default function GymLandingPage() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const programs = [
    {
      index: "01",
      title: "Functional Strength & Calisthenics Cohort",
      format: "Small Cohort (Capped at 8 Athletes)",
      frequency: "5 Sessions / Week • Mon through Fri",
      summary:
        "Structured progressive overload combining gymnastic bodyweight mastery with Olympic barbell foundations. Every session includes joint mobility prep, skill work, and coached conditioning.",
      deliverables: [
        "Documented progression tree: Push-up to Ring Muscle-up",
        "Barbell back squat, deadlift, and strict overhead press mechanics",
        "10-minute wrist, shoulder, and hip mobility protocol prior to lifting",
        "Full keycard access to Open Gym floor outside cohort hours",
      ],
      whatsappMsg:
        "Hello APEX. I would like to reserve a trial session for the Functional Strength & Calisthenics Cohort.",
    },
    {
      index: "02",
      title: "1-on-1 Individual Athletic Coaching",
      format: "Private Suite • Individual Assignment",
      frequency: "Flexible 60-Minute Slots • 3x to 5x Weekly",
      summary:
        "Direct one-on-one programming tailored to specific postural imbalances, athletic targets, or prior orthopedic limitations. Zero shared floor time during your dedicated slot.",
      deliverables: [
        "Comprehensive 45-minute movement screen & joint assessment",
        "Custom periodized training blocks updated bi-weekly",
        "Direct coach WhatsApp channel for daily nutrition & recovery logs",
        "Targeted return-to-sport or orthopedic rehabilitation integration",
      ],
      whatsappMsg:
        "Hello APEX. I am interested in inquiring about 1-on-1 Private Athletic Coaching.",
    },
    {
      index: "03",
      title: "Open Gym Floor Membership",
      format: "Self-Directed • Strictly Capped Capacity",
      frequency: "05:00 — 23:00 Daily • 365 Days / Year",
      summary:
        "For autonomous lifters who require competition-spec barbells, structural pull-up rigs, and conditioning ergs without queuing or commercial gym chaos.",
      deliverables: [
        "Eleiko calibrated competition bumper plates and IPF-spec bars",
        "4.2-meter ceiling-mounted gymnastic ring bays and climbing ropes",
        "Concept2 RowErgs, SkiErgs, and Woodway unmotorized curved runners",
        "Keyless biometric door access with private locker and shower suites",
      ],
      whatsappMsg:
        "Hello APEX. Please send details regarding the Open Gym Floor membership.",
    },
  ];

  const schedule = [
    {
      day: "Monday",
      discipline: "Upper Body Ring & Barbell Mechanics",
      times: "06:00 / 08:30 / 17:30 / 19:00",
      coach: "Marcus Vance",
      status: "2 slots remaining",
    },
    {
      day: "Tuesday",
      discipline: "Posterior Chain, Deadlift & Core Stability",
      times: "06:00 / 08:30 / 17:30 / 19:00",
      coach: "Elena Rostova",
      status: "Open",
    },
    {
      day: "Wednesday",
      discipline: "Joint Longevity, Handstand & Ring Support",
      times: "07:00 / 09:30 / 18:00",
      coach: "Marcus Vance",
      status: "1 slot remaining",
    },
    {
      day: "Thursday",
      discipline: "Strict Pressing, Pulling & Structural Armor",
      times: "06:00 / 08:30 / 17:30 / 19:00",
      coach: "Elena Rostova",
      status: "Open",
    },
    {
      day: "Friday",
      discipline: "Barbell Squat Patterns & Calisthenic Power",
      times: "06:00 / 08:30 / 17:30 / 19:00",
      coach: "Marcus Vance",
      status: "Open",
    },
    {
      day: "Saturday",
      discipline: "Coached Team Aerobic Conditioning (60m)",
      times: "08:00 / 09:30 / 11:00",
      coach: "Both Coaches",
      status: "Filling fast",
    },
    {
      day: "Sunday",
      discipline: "Open Floor Self-Directed Recovery & Lifting",
      times: "07:00 — 21:00 (Continuous Access)",
      coach: "Floor Supervisor",
      status: "All Access",
    },
  ];

  const faqs = [
    {
      q: "I cannot do a single pull-up yet. Is APEX suitable for beginners?",
      a: "Yes. Our curriculum uses strict progression trees. Every barbell and bodyweight exercise is scaled to your current strength level—using resistance bands, foot-supported ring rows, and empty-bar technique work before load is applied. Every cohort is capped at 8 athletes so you receive hands-on instruction on every repetition.",
    },
    {
      q: "What is your contract policy? Are there hidden cancellation fees?",
      a: "We do not use long-term locked contracts. Memberships operate on a 30-day rolling basis. You can pause or cancel at any time with a 7-day advance notice via WhatsApp or email. There are no registration penalties or cancellation fees.",
    },
    {
      q: "How does the free trial work?",
      a: "Clicking any trial button connects you directly to our floor manager on WhatsApp. We schedule a 45-minute slot that includes a facility walkthrough, basic movement assessment, and attendance in a beginner-friendly cohort session. You do not need to bring specialized gear—just clean flat-soled sneakers and training attire.",
    },
    {
      q: "Is Open Gym included in the Coached Cohort membership?",
      a: "Yes. Members enrolled in the Functional Strength Cohort receive full keyless access to the facility from 05:00 to 23:00 daily to practice mobility, log extra accessory work, or use the cardio ergs on off-days.",
    },
    {
      q: "Where is APEX located and what are the facility amenities?",
      a: "We are located at Sector F-7/2 Commercial, Islamabad. We feature dedicated shower suites, lockers, filtered electrolyte water stations, chalk towers, and dedicated recovery foam rollers and bands.",
    },
  ];

  const buildWhatsAppUrl = (text) =>
    `https://wa.me/923000000000?text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-screen bg-[#121214] text-[#F5F5F4] antialiased selection:bg-[#F59E0B] selection:text-black">
      {/* 1. TOP SYSTEM METADATA BAR */}
      <div className="border-b border-white/10 bg-[#161618] px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 font-mono text-[11px] text-[#A1A1AA] tracking-wider uppercase">
          <div className="flex items-center gap-3">
            <span className="text-[#F59E0B] font-semibold">● LIVE DISPATCH</span>
            <span>CAPACITY: 8 ATHLETES PER COHORT</span>
            <span className="hidden md:inline">• NO LONG-TERM CONTRACTS</span>
          </div>
          <div className="flex items-center gap-3">
            <span>FACILITY HOURS: 05:00 — 23:00 DAILY</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#F5F5F4]">SECTOR F-7/2, ISLAMABAD</span>
          </div>
        </div>
      </div>

      {/* 2. FIXED PERSISTENT NAVIGATION */}
      <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#121214]/90 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[#F59E0B] flex items-center justify-center text-black font-mono font-bold text-sm">
              ▲
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-tight text-white block leading-none">
                APEX
              </span>
              <span className="font-mono text-[10px] text-[#A1A1AA] tracking-widest uppercase block mt-0.5">
                Strength Lab
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-[#A1A1AA]">
            <a href="#overview" className="hover:text-white transition-colors duration-150">
              01 // Overview
            </a>
            <a href="#curriculum" className="hover:text-white transition-colors duration-150">
              02 // Curriculum
            </a>
            <a href="#schedule" className="hover:text-white transition-colors duration-150">
              03 // Schedule
            </a>
            <a href="#facility" className="hover:text-white transition-colors duration-150">
              04 // Facility
            </a>
            <a href="#faq" className="hover:text-white transition-colors duration-150">
              05 // FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppUrl(
                "Hello APEX. I would like to book a free assessment and trial session."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-xs px-4 py-2.5 rounded-lg transition-colors duration-150"
            >
              <span>Book Free Trial</span>
              <span className="font-mono">→</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-white/10 bg-[#18181B] text-[#A1A1AA] hover:text-white"
              aria-label="Toggle Navigation"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-white/10 flex flex-col gap-2 font-mono text-xs uppercase tracking-wider text-[#A1A1AA]">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#18181B] hover:text-white"
            >
              01 // Overview
            </a>
            <a
              href="#curriculum"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#18181B] hover:text-white"
            >
              02 // Curriculum
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#18181B] hover:text-white"
            >
              03 // Schedule
            </a>
            <a
              href="#facility"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#18181B] hover:text-white"
            >
              04 // Facility
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#18181B] hover:text-white"
            >
              05 // FAQ
            </a>
          </div>
        )}
      </nav>

      {/* 3. SECTION 1: ASYMMETRIC HERO SPLIT (60% / 40%) */}
      <section id="overview" className="border-b border-white/10 py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 60% Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-white/10 bg-[#18181B] font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider">
                <span className="text-[#F59E0B]">●</span>
                <span>Calisthenics & Olympic Barbell Laboratory</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                Barbell Strength & Bodyweight Mastery. Capped at 8 Athletes.
              </h1>

              <p className="text-[#A1A1AA] text-base sm:text-lg leading-[1.65] max-w-[62ch]">
                Most commercial gyms profit when members do not show up. APEX is structured for the opposite: coached cohorts limited to 8 athletes per floor block, systematic calisthenic progressions from zero to muscle-up, and Olympic barbell lifting with hands-on form correction every single set.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={buildWhatsAppUrl(
                    "Hello APEX. I would like to schedule my free 1-day assessment and trial session."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-sm px-6 py-3.5 rounded-lg transition-colors duration-150"
                >
                  <span>Claim Free Assessment on WhatsApp</span>
                  <span className="font-mono">→</span>
                </a>

                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center gap-2 border border-white/10 hover:border-white/20 bg-[#18181B] hover:bg-[#202024] text-[#F5F5F4] font-mono text-xs uppercase tracking-wider px-5 py-3.5 rounded-lg transition-colors duration-150"
                >
                  <span>Inspect Timetable ↓</span>
                </a>
              </div>

              {/* Monospace System Specifications Strip */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-3.5 border border-white/10 rounded-lg bg-[#18181B]">
                  <div className="text-[11px] text-[#A1A1AA] uppercase tracking-wider">Cohort Limit</div>
                  <div className="text-white font-bold mt-1 text-sm">8 Athletes Max</div>
                </div>
                <div className="p-3.5 border border-white/10 rounded-lg bg-[#18181B]">
                  <div className="text-[11px] text-[#A1A1AA] uppercase tracking-wider">Billing Term</div>
                  <div className="text-white font-bold mt-1 text-sm">Rolling 30-Day</div>
                </div>
                <div className="p-3.5 border border-white/10 rounded-lg bg-[#18181B]">
                  <div className="text-[11px] text-[#A1A1AA] uppercase tracking-wider">Audited Score</div>
                  <div className="text-[#F59E0B] font-bold mt-1 text-sm">4.92 / 5.0 (142 Reviews)</div>
                </div>
              </div>
            </div>

            {/* Right 40% Column: Concrete Structural Proof & Artifact */}
            <div className="lg:col-span-5">
              <div className="border border-white/10 rounded-lg overflow-hidden bg-[#18181B]">
                <div className="relative">
                  <img
                    src="/images/hero-bg.jpg"
                    alt="Barbell deadlift and gymnastic conditioning floor at APEX Strength Lab"
                    className="w-full h-72 sm:h-80 object-cover object-center grayscale contrast-125"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#121214]/90 border border-white/10 font-mono text-[10px] text-[#F59E0B] uppercase tracking-wider">
                    Fig. 01 // Coached Barbell Floor
                  </div>
                </div>

                {/* Technical Spec Sheet */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A1A1AA] uppercase">Training Standard</span>
                    <span className="text-white font-semibold">Strict Technical Mastery</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A1A1AA] uppercase">Joint Prep Protocol</span>
                    <span className="text-white font-semibold">10-Min Pre-Lift Mobility</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2">
                    <span className="text-[#A1A1AA] uppercase">Equipment Class</span>
                    <span className="text-white font-semibold">Eleiko / Woodway / Concept2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#A1A1AA] uppercase">Open Floor Hours</span>
                    <span className="text-[#F59E0B] font-semibold">05:00 — 23:00 (Daily)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: FULL-WIDTH HORIZONTAL METRIC STRIP (HAIRLINE BORDERS) */}
      <section className="border-b border-white/10 bg-[#161618] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="border-l-2 border-[#F59E0B] pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                08 MAX
              </div>
              <div className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider mt-1">
                Athletes per Coached Class
              </div>
            </div>

            <div className="border-l-2 border-white/20 pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                100%
              </div>
              <div className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider mt-1">
                Month-to-Month. No Contracts
              </div>
            </div>

            <div className="border-l-2 border-white/20 pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                420 SQM
              </div>
              <div className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider mt-1">
                Dedicated Calisthenic Floor
              </div>
            </div>

            <div className="border-l-2 border-[#F59E0B] pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                18 HOURS
              </div>
              <div className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider mt-1">
                Daily Biometric Door Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: 2-COLUMN EDITORIAL + NUMBERED INDEX LIST (PROGRAMS) */}
      <section id="curriculum" className="border-b border-white/10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Sticky Editorial Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-4">
              <div className="font-mono text-xs uppercase tracking-wider text-[#F59E0B]">
                02 // Training Systems
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Progression Trees Over Random Workouts.
              </h2>
              <p className="text-[#A1A1AA] text-sm leading-[1.65]">
                We reject meaningless exhaustion. At APEX, training is treated as an athletic craft. Every member progresses through calibrated skill trees with measurable benchmarks, joint preservation protocols, and individual form feedback.
              </p>
              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl("Hello APEX. I have a question about which program is right for me.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#F59E0B] hover:underline uppercase tracking-wider"
                >
                  <span>Ask a Coach Directly</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Numbered Index List (Separated by 1px Hairline Rules) */}
            <div className="lg:col-span-8 divide-y divide-white/10 border-t border-b border-white/10">
              {programs.map((prog) => (
                <div key={prog.index} className="py-8 sm:py-10 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-[#F59E0B] font-bold">
                        {prog.index}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                        {prog.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[11px] text-[#A1A1AA] uppercase tracking-wider border border-white/10 bg-[#18181B] px-2.5 py-1 rounded-md self-start sm:self-auto">
                      {prog.format}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-[#A1A1AA]">
                    {prog.frequency}
                  </div>

                  <p className="text-[#A1A1AA] text-sm leading-[1.65] max-w-[65ch]">
                    {prog.summary}
                  </p>

                  {/* Concrete Deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {prog.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#F5F5F4]">
                        <span className="text-[#F59E0B] font-mono mt-0.5">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <a
                      href={buildWhatsAppUrl(prog.whatsappMsg)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 bg-[#18181B] hover:bg-[#202024] text-white font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-colors duration-150"
                    >
                      <span>Reserve Spot via WhatsApp</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: TECHNICAL SCHEDULE & TIMETABLE (STRUCTURED DATA TABLE) */}
      <section id="schedule" className="border-b border-white/10 py-20 sm:py-28 bg-[#141417]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#F59E0B]">
                03 // Weekly Operational Grid
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
                Coached Sessions & Timetable
              </h2>
            </div>
            <p className="font-mono text-xs text-[#A1A1AA] max-w-md">
              Cohort times are fixed to ensure punctuality and maximum coaching attention. Every class starts strictly on time with joint mobility prep.
            </p>
          </div>

          {/* Desktop Data Table */}
          <div className="hidden md:block border border-white/10 rounded-lg overflow-hidden bg-[#18181B]">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#121214] border-b border-white/10 text-[#A1A1AA] uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Day</th>
                  <th className="py-3 px-4">Focus Discipline</th>
                  <th className="py-3 px-4">Class Time Blocks</th>
                  <th className="py-3 px-4">Assigned Coach</th>
                  <th className="py-3 px-4 text-right">Floor Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-[#F5F5F4]">
                {schedule.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#202024]/50 transition-colors duration-150">
                    <td className="py-3.5 px-4 font-bold text-white">{row.day}</td>
                    <td className="py-3.5 px-4 font-sans text-sm text-[#F5F5F4]">{row.discipline}</td>
                    <td className="py-3.5 px-4 text-[#A1A1AA]">{row.times}</td>
                    <td className="py-3.5 px-4 text-[#F5F5F4]">{row.coach}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase border border-white/10 bg-[#121214] text-[#F59E0B]">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Structured Cards */}
          <div className="md:hidden space-y-3 font-mono text-xs">
            {schedule.map((row, idx) => (
              <div key={idx} className="p-4 border border-white/10 rounded-lg bg-[#18181B] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-sm">{row.day}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase border border-white/10 bg-[#121214] text-[#F59E0B]">
                    {row.status}
                  </span>
                </div>
                <div className="font-sans text-sm text-[#F5F5F4] font-medium">
                  {row.discipline}
                </div>
                <div className="text-[#A1A1AA] text-[11px]">
                  Times: <span className="text-white">{row.times}</span>
                </div>
                <div className="text-[#A1A1AA] text-[11px]">
                  Coach: <span className="text-white">{row.coach}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: ASYMMETRIC BENTO GRID (FACILITY & EQUIPMENT SPEC) */}
      <section id="facility" className="border-b border-white/10 py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#F59E0B]">
              04 // The Training Facility
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Purpose-Built Hardware. Zero Distractions.
            </h2>
            <p className="text-[#A1A1AA] text-sm max-w-[65ch] mt-2">
              We do not lease cheap residential equipment. Every barbell, plate, ring anchor, and bench is rated to competition standards.
            </p>
          </div>

          {/* Uneven Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Box 1: 2:1 ratio large block */}
            <div className="md:col-span-8 border border-white/10 rounded-lg overflow-hidden bg-[#18181B] flex flex-col justify-between">
              <div className="relative h-64 sm:h-80">
                <img
                  src="/images/open-gym.jpg"
                  alt="Gymnastic ring bays and barbell racks at APEX Lab"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#121214]/90 border border-white/10 font-mono text-[10px] text-white uppercase">
                  BAY 01 // 4.2M Gymnastic Ring & Rig Structure
                </div>
              </div>
              <div className="p-5 font-mono text-xs space-y-1">
                <div className="text-white font-bold text-sm">Industrial Heavy-Duty Calisthenic Rig</div>
                <p className="text-[#A1A1AA] font-sans text-xs">
                  Ceiling-anchored wooden gymnastic rings, straight pull-up bars with competition grip powder-coating, and dual dip stations designed for zero frame wobble.
                </p>
              </div>
            </div>

            {/* Box 2: 1:1 ratio side block */}
            <div className="md:col-span-4 border border-white/10 rounded-lg overflow-hidden bg-[#18181B] flex flex-col justify-between">
              <div className="relative h-48 sm:h-64">
                <img
                  src="/images/strength-coaching.jpg"
                  alt="Coach reviewing bar path and joint angles"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#121214]/90 border border-white/10 font-mono text-[10px] text-white uppercase">
                  BAY 02 // Form Analysis
                </div>
              </div>
              <div className="p-5 font-mono text-xs space-y-1">
                <div className="text-white font-bold text-sm">Direct Coaching & Form Audits</div>
                <p className="text-[#A1A1AA] font-sans text-xs">
                  Real-time bar path feedback, wrist angles, and pelvic bracing checks. You will never perform a loaded lift unattended.
                </p>
              </div>
            </div>

            {/* Box 3: 1:1 ratio side block */}
            <div className="md:col-span-4 border border-white/10 rounded-lg overflow-hidden bg-[#18181B] flex flex-col justify-between">
              <div className="relative h-48 sm:h-64">
                <img
                  src="/images/community.jpg"
                  alt="APEX cohort athletes training together"
                  className="w-full h-full object-cover grayscale contrast-125"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#121214]/90 border border-white/10 font-mono text-[10px] text-white uppercase">
                  BAY 03 // Cohort Culture
                </div>
              </div>
              <div className="p-5 font-mono text-xs space-y-1">
                <div className="text-white font-bold text-sm">Respectful, Non-Intimidating Floor</div>
                <p className="text-[#A1A1AA] font-sans text-xs">
                  Every member supports each other. Whether working on your first knee-pushup or a 180kg deadlift, ego is checked at the door.
                </p>
              </div>
            </div>

            {/* Box 4: 2:1 ratio concrete equipment spec list */}
            <div className="md:col-span-8 border border-white/10 rounded-lg p-6 bg-[#18181B] flex flex-col justify-between space-y-4 font-mono text-xs">
              <div>
                <span className="text-[#F59E0B] uppercase tracking-wider text-[11px] block">
                  AUDITED INVENTORY SPECIFICATION
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">
                  Standard Floor Apparatus
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-white/10 p-3 rounded-md bg-[#121214] space-y-1">
                  <div className="text-white font-bold">Barbells & Free Weights</div>
                  <div className="text-[#A1A1AA] text-[11px]">
                    Eleiko IWF Training Bars (20kg & 15kg), 1,200kg of competition calibrated bumper plates, cast iron kettlebells (8kg to 32kg).
                  </div>
                </div>

                <div className="border border-white/10 p-3 rounded-md bg-[#121214] space-y-1">
                  <div className="text-white font-bold">Conditioning Ergometers</div>
                  <div className="text-[#A1A1AA] text-[11px]">
                    Concept2 RowErg (PM5), Concept2 SkiErg, Rogue Echo Bikes, and Woodway Curve manual runner treadmills.
                  </div>
                </div>

                <div className="border border-white/10 p-3 rounded-md bg-[#121214] space-y-1">
                  <div className="text-white font-bold">Mobility & Longevity Station</div>
                  <div className="text-[#A1A1AA] text-[11px]">
                    Slant boards, lacrosse balls, resistance bands, gymnastics chalk stations, and weighted ankle mobility blocks.
                  </div>
                </div>

                <div className="border border-white/10 p-3 rounded-md bg-[#121214] space-y-1">
                  <div className="text-white font-bold">Facility Infrastructure</div>
                  <div className="text-[#A1A1AA] text-[11px]">
                    Private shower suites, keyless lockers, filtered alkaline water station, and dedicated stretching mezzanine.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: FAQ ACCORDION (HAIRLINE DIVIDERS) */}
      <section id="faq" className="border-b border-white/10 py-20 sm:py-28 bg-[#141417]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#F59E0B]">
              05 // Direct Inquiries
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-white/10 border-t border-b border-white/10">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-white">
                    <span className="font-mono text-xs text-[#F59E0B] mr-3">
                      Q.0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="font-mono text-base text-[#F59E0B] shrink-0">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <p className="mt-3 text-[#A1A1AA] text-sm leading-[1.65] max-w-[65ch] pl-8">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: CALL TO ACTION STRIP */}
      <section className="py-20 sm:py-24 bg-[#121214]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-white/10 bg-[#18181B] font-mono text-[11px] text-[#A1A1AA] uppercase">
            <span>START WITH A COMPLIMENTARY WALKTHROUGH</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Schedule a 45-Minute Movement Assessment.
          </h2>

          <p className="text-[#A1A1AA] text-sm sm:text-base leading-[1.65] max-w-[55ch] mx-auto">
            Meet the coaches, test the equipment, and experience a coached cohort session without any financial obligation or pushy sales pitch.
          </p>

          <div className="pt-2">
            <a
              href={buildWhatsAppUrl(
                "Hello APEX. I would like to book my free assessment and trial session."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-sm sm:text-base px-8 py-4 rounded-lg transition-colors duration-150"
            >
              <span>Connect on WhatsApp to Book</span>
              <span className="font-mono">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. STRUCTURAL FOOTER */}
      <footer className="border-t border-white/10 bg-[#161618] py-12 text-[#A1A1AA] font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#F59E0B] flex items-center justify-center text-black font-bold text-xs">
              ▲
            </div>
            <div>
              <span className="text-white font-bold">APEX STRENGTH LAB</span>
              <span className="text-[10px] text-[#A1A1AA] block">
                ISLAMABAD, PAKISTAN • SECTOR F-7/2
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span>TEL: +92 300 0000000</span>
            <span>•</span>
            <span>DAILY 05:00 — 23:00</span>
          </div>

          <div className="text-[10px] text-[#71717A]">
            © {new Date().getFullYear()} APEX STRENGTH & CALISTHENICS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* 11. MOBILE PERSISTENT WHATSAPP ACTION BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#121214]/95 border-t border-white/10 backdrop-blur-md">
        <a
          href={buildWhatsAppUrl(
            "Hello APEX. I would like to claim my free trial pass and book an assessment."
          )}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-black font-semibold text-xs py-3 rounded-lg uppercase tracking-wider transition-colors duration-150"
        >
          <span>Claim Free Trial on WhatsApp</span>
          <span className="font-mono">→</span>
        </a>
      </div>
    </div>
  );
}
