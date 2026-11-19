"use client";

import React, { useState } from "react";

export default function GymLandingPage() {
  const [activeFaq, setActiveFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const programs = [
    {
      index: "01",
      title: "Functional Strength & Calisthenics Cohort",
      format: "Coached Cohort • Max 8 Members per Class",
      schedule: "Monday through Friday • 5 Sessions / Week",
      price: "PKR 14,000 / month",
      summary:
        "Our core training system. A progressive mix of gymnastic bodyweight mechanics (pull-ups, ring dips, core levers) and fundamental barbell lifting (back squats, deadlifts, overhead presses). Designed for steady progression with zero ego.",
      deliverables: [
        "Structured progression scale: from first strict push-up to ring muscle-ups",
        "Dedicated 10-minute wrist, shoulder, and hip mobility warm-up every session",
        "Hands-on posture and joint alignment checks on every working set",
        "Full keycard access to the facility outside cohort hours included",
      ],
      whatsappMsg:
        "Hello APEX. I would like to book a free trial session for the Functional Strength & Calisthenics Cohort.",
    },
    {
      index: "02",
      title: "1-on-1 Individual Athletic Coaching",
      format: "Private Floor Suite • Dedicated Coach Assignment",
      schedule: "Flexible 60-Minute Slots • 3x to 5x Weekly",
      price: "PKR 35,000 / month",
      summary:
        "Private coaching for athletes working around prior injuries, desk-bound postural imbalances, or specific strength milestones. Every workout is programmed exclusively for your biomechanics with zero shared equipment.",
      deliverables: [
        "Comprehensive 45-minute baseline movement screen and joint mobility audit",
        "Bi-weekly periodized training blocks adjusted to your schedule and recovery",
        "Direct coach WhatsApp access for daily nutrition guidance and recovery check-ins",
        "Targeted return-to-sport or orthopedic rehabilitation integration",
      ],
      whatsappMsg:
        "Hello APEX. I am interested in inquiring about 1-on-1 Private Athletic Coaching.",
    },
    {
      index: "03",
      title: "Open Gym Floor Membership",
      format: "Independent Training • Strictly Capped Total Memberships",
      schedule: "05:00 — 23:00 Daily • 365 Days / Year",
      price: "PKR 9,500 / month",
      summary:
        "For self-directed athletes who want access to competition-grade barbells, unmotorized curved runners, and ceiling-anchored gymnastic rigs without the crowds, queues, or loud distractions of typical commercial gyms.",
      deliverables: [
        "Eleiko calibrated competition bumper plates and IPF-spec bars",
        "4.2-meter ceiling-mounted wooden gymnastic rings and climbing ropes",
        "Concept2 RowErgs, SkiErgs, Rogue Echo Bikes, and Woodway manual curved runners",
        "Keyless biometric door access with private locker and shower suites",
      ],
      whatsappMsg:
        "Hello APEX. Please share details regarding the Open Gym Floor membership pass.",
    },
  ];

  const timetable = [
    {
      day: "Monday",
      focus: "Upper Body Ring Strength & Barbell Pressing",
      sessions: "06:00 / 08:30 / 17:30 / 19:00",
      coach: "Marcus Vance",
      availability: "2 slots open",
    },
    {
      day: "Tuesday",
      focus: "Posterior Chain, Deadlifts & Core Stability",
      sessions: "06:00 / 08:30 / 17:30 / 19:00",
      coach: "Elena Rostova",
      availability: "Available",
    },
    {
      day: "Wednesday",
      focus: "Joint Mobility, Handstands & Ring Support",
      sessions: "07:00 / 09:30 / 18:00",
      coach: "Marcus Vance",
      availability: "1 slot open",
    },
    {
      day: "Thursday",
      focus: "Strict Overhead Press & Pull-Up Volume",
      sessions: "06:00 / 08:30 / 17:30 / 19:00",
      coach: "Elena Rostova",
      availability: "Available",
    },
    {
      day: "Friday",
      focus: "Barbell Squat Mechanics & Calisthenic Power",
      sessions: "06:00 / 08:30 / 17:30 / 19:00",
      coach: "Marcus Vance",
      availability: "Available",
    },
    {
      day: "Saturday",
      focus: "Community 60-Minute Team Conditioning",
      sessions: "08:00 / 09:30 / 11:00",
      coach: "All Coaches",
      availability: "Filling fast",
    },
    {
      day: "Sunday",
      focus: "Open Floor Self-Directed Recovery & Lifting",
      sessions: "07:00 — 21:00 (Continuous Access)",
      coach: "Floor Supervisor",
      availability: "Open Access",
    },
  ];

  const faqs = [
    {
      q: "I am a complete beginner and cannot do a single pull-up. Will I fit in?",
      a: "Absolutely. Over 60% of our members started without being able to complete a strict pull-up or a full-depth squat. Every exercise has beginner-friendly regressions—including resistance-banded ring rows, foot-assisted dips, and light dumbbell progressions. Because cohorts are capped at 8 people, our coaches guide your form on every repetition.",
    },
    {
      q: "Do you lock members into long-term annual contracts?",
      a: "No. All APEX memberships operate on a rolling 30-day basis. You can pause or cancel at any time with a 7-day advance notice via WhatsApp or email. There are no cancellation penalties, sign-up initiation fees, or maintenance surcharges.",
    },
    {
      q: "What does the free trial include?",
      a: "Your free trial includes a 45-minute visit: a tour of the facility, a basic mobility and movement screen with a coach, and participation in an actual cohort class tailored to your current fitness level. There is zero high-pressure sales pitch.",
    },
    {
      q: "Is Open Gym floor access included with cohort memberships?",
      a: "Yes. Members enrolled in the Functional Strength & Calisthenics Cohort have full keycard access to the gym from 05:00 to 23:00 every day, allowing you to practice mobility, do auxiliary workouts, or use the cardio ergs on off days.",
    },
    {
      q: "Where is APEX located and is there parking?",
      a: "We are located at Sector F-7/2 Commercial, Islamabad. We have dedicated off-street parking, private showers, secure lockers, and filtered water stations for all members.",
    },
  ];

  const buildWhatsAppUrl = (text) =>
    `https://wa.me/923000000000?text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-screen bg-[#F9F9FB] text-[#141413] antialiased selection:bg-[#EA580C] selection:text-white">
      {/* 1. TOP ANNOUNCEMENT / METADATA STRIP */}
      <div className="border-b border-[#E7E5E4] bg-[#F0EFEA] px-4 py-2 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 font-mono text-[11px] text-[#57534E] uppercase tracking-wider">
          <div className="flex items-center gap-3">
            <span className="text-[#EA580C] font-semibold">● WELCOMING NEW MEMBERS</span>
            <span>CAPACITY: 8 ATHLETES PER COHORT</span>
            <span className="hidden md:inline">• ZERO LONG-TERM CONTRACTS</span>
          </div>
          <div className="flex items-center gap-3">
            <span>HOURS: 05:00 — 23:00 DAILY</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-[#141413] font-medium">SECTOR F-7/2, ISLAMABAD</span>
          </div>
        </div>
      </div>

      {/* 2. FIXED PERSISTENT NAVIGATION */}
      <nav className="sticky top-0 z-40 border-b border-[#E7E5E4] bg-[#F9F9FB]/95 backdrop-blur-md px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[#EA580C] flex items-center justify-center text-white font-mono font-bold text-sm">
              ▲
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-tight text-[#141413] block leading-none">
                APEX
              </span>
              <span className="font-mono text-[10px] text-[#57534E] tracking-widest uppercase block mt-0.5">
                Strength & Calisthenics
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 font-mono text-xs uppercase tracking-wider text-[#57534E]">
            <a href="#about" className="hover:text-[#141413] transition-colors duration-150">
              01 // About
            </a>
            <a href="#programs" className="hover:text-[#141413] transition-colors duration-150">
              02 // Programs
            </a>
            <a href="#schedule" className="hover:text-[#141413] transition-colors duration-150">
              03 // Timetable
            </a>
            <a href="#facility" className="hover:text-[#141413] transition-colors duration-150">
              04 // The Club
            </a>
            <a href="#faq" className="hover:text-[#141413] transition-colors duration-150">
              05 // FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppUrl(
                "Hello APEX. I would like to book a free walkthrough and trial session."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium text-xs px-4 py-2.5 rounded-lg transition-colors duration-150"
            >
              <span>Book Free Trial</span>
              <span className="font-mono">→</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-[#E7E5E4] bg-white text-[#57534E] hover:text-[#141413]"
              aria-label="Toggle navigation"
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
          <div className="lg:hidden mt-3 pt-3 border-t border-[#E7E5E4] flex flex-col gap-2 font-mono text-xs uppercase tracking-wider text-[#57534E]">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F0EFEA] hover:text-[#141413]"
            >
              01 // About
            </a>
            <a
              href="#programs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F0EFEA] hover:text-[#141413]"
            >
              02 // Programs
            </a>
            <a
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F0EFEA] hover:text-[#141413]"
            >
              03 // Timetable
            </a>
            <a
              href="#facility"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F0EFEA] hover:text-[#141413]"
            >
              04 // The Club
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F0EFEA] hover:text-[#141413]"
            >
              05 // FAQ
            </a>
          </div>
        )}
      </nav>

      {/* 3. SECTION 1: ASYMMETRIC HERO SPLIT (60% / 40%) */}
      <section id="about" className="border-b border-[#E7E5E4] py-16 sm:py-24 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 60% Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#E7E5E4] bg-[#F0EFEA] font-mono text-[11px] text-[#57534E] uppercase tracking-wider">
                <span className="text-[#EA580C]">●</span>
                <span>Welcoming Beginners & Everyday Lifters</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#141413] leading-[1.08]">
                Real Functional Strength. Healthy Joints. Capped at 8 Athletes.
              </h1>

              <p className="text-[#57534E] text-base sm:text-lg leading-[1.65] max-w-[62ch]">
                Most commercial gyms leave beginners stranded with confusing machines and intimidating crowds. At APEX, we combine bodyweight calisthenics, calibrated Olympic barbells, and joint mobility in small, welcoming groups where coaches teach you proper form on every set.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={buildWhatsAppUrl(
                    "Hello APEX. I would like to book my free 1-day assessment and trial session."
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium text-sm px-6 py-3.5 rounded-lg transition-colors duration-150"
                >
                  <span>Claim Free Trial on WhatsApp</span>
                  <span className="font-mono">→</span>
                </a>

                <a
                  href="#schedule"
                  className="inline-flex items-center justify-center gap-2 border border-[#E7E5E4] hover:border-[#D6D3D1] bg-white hover:bg-[#F0EFEA] text-[#141413] font-mono text-xs uppercase tracking-wider px-5 py-3.5 rounded-lg transition-colors duration-150"
                >
                  <span>View Timetable ↓</span>
                </a>
              </div>

              {/* Monospace Specifications Strip */}
              <div className="pt-6 border-t border-[#E7E5E4] grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                <div className="p-3.5 border border-[#E7E5E4] rounded-lg bg-white">
                  <div className="text-[11px] text-[#57534E] uppercase tracking-wider">Cohort Limit</div>
                  <div className="text-[#141413] font-bold mt-1 text-sm">8 Athletes Max</div>
                </div>
                <div className="p-3.5 border border-[#E7E5E4] rounded-lg bg-white">
                  <div className="text-[11px] text-[#57534E] uppercase tracking-wider">Billing Terms</div>
                  <div className="text-[#141413] font-bold mt-1 text-sm">Rolling 30-Day</div>
                </div>
                <div className="p-3.5 border border-[#E7E5E4] rounded-lg bg-white">
                  <div className="text-[11px] text-[#57534E] uppercase tracking-wider">Member Reviews</div>
                  <div className="text-[#EA580C] font-bold mt-1 text-sm">4.92 / 5.0 (142 Verified)</div>
                </div>
              </div>
            </div>

            {/* Right 40% Column: Concrete Structural Proof */}
            <div className="lg:col-span-5">
              <div className="border border-[#E7E5E4] rounded-lg overflow-hidden bg-white">
                <div className="relative">
                  <img
                    src="/images/hero-bg.jpg"
                    alt="Athlete training with barbell and coach guidance at APEX"
                    className="w-full h-72 sm:h-80 object-cover object-center"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#F9F9FB]/95 border border-[#E7E5E4] font-mono text-[10px] text-[#EA580C] uppercase tracking-wider">
                    Fig. 01 // Dedicated Floor Coaching
                  </div>
                </div>

                {/* Technical Spec Sheet */}
                <div className="p-5 space-y-4 font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-2">
                    <span className="text-[#57534E] uppercase">Coaching Ratio</span>
                    <span className="text-[#141413] font-semibold">1 Coach : 8 Athletes</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-2">
                    <span className="text-[#57534E] uppercase">Pre-Lift Mobility</span>
                    <span className="text-[#141413] font-semibold">10-Minute Warm-Up Protocol</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-[#E7E5E4] pb-2">
                    <span className="text-[#57534E] uppercase">Hardware Standards</span>
                    <span className="text-[#141413] font-semibold">Eleiko / Woodway / Concept2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#57534E] uppercase">Door Card Access</span>
                    <span className="text-[#EA580C] font-semibold">05:00 — 23:00 (Daily)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION 2: FULL-WIDTH HORIZONTAL METRIC STRIP (HAIRLINE BORDERS) */}
      <section className="border-b border-[#E7E5E4] bg-[#F0EFEA] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="border-l-2 border-[#EA580C] pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                08 MAX
              </div>
              <div className="font-mono text-[11px] text-[#57534E] uppercase tracking-wider mt-1">
                Athletes per Coached Class
              </div>
            </div>

            <div className="border-l-2 border-[#D6D3D1] pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                100%
              </div>
              <div className="font-mono text-[11px] text-[#57534E] uppercase tracking-wider mt-1">
                Month-to-Month. No Contracts
              </div>
            </div>

            <div className="border-l-2 border-[#D6D3D1] pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                420 SQM
              </div>
              <div className="font-mono text-[11px] text-[#57534E] uppercase tracking-wider mt-1">
                Calisthenic & Strength Floor
              </div>
            </div>

            <div className="border-l-2 border-[#EA580C] pl-4">
              <div className="font-display text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                18 HOURS
              </div>
              <div className="font-mono text-[11px] text-[#57534E] uppercase tracking-wider mt-1">
                Daily Biometric Door Access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION 3: 2-COLUMN EDITORIAL + NUMBERED INDEX LIST (PROGRAMS) */}
      <section id="programs" className="border-b border-[#E7E5E4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Sticky Editorial Column */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start space-y-4">
              <div className="font-mono text-xs uppercase tracking-wider text-[#EA580C]">
                02 // Training Curriculum
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight">
                Progression Trees Over Random Workouts.
              </h2>
              <p className="text-[#57534E] text-sm leading-[1.65]">
                We avoid chaotic daily workouts that cause burnout and injury. Instead, every member follows a clear, step-by-step progression plan designed for real joint strength, posture improvement, and measurable gains.
              </p>
              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl("Hello APEX. Which training program is best for my background?")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-xs text-[#EA580C] hover:underline uppercase tracking-wider"
                >
                  <span>Consult a Coach Directly</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Numbered Index List (Separated by 1px Hairline Rules) */}
            <div className="lg:col-span-8 divide-y divide-[#E7E5E4] border-t border-b border-[#E7E5E4]">
              {programs.map((prog) => (
                <div key={prog.index} className="py-8 sm:py-10 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm text-[#EA580C] font-bold">
                        {prog.index}
                      </span>
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-[#141413]">
                        {prog.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-3 self-start sm:self-auto">
                      <span className="font-mono text-[11px] text-[#57534E] border border-[#E7E5E4] bg-[#F0EFEA] px-2.5 py-1 rounded-md">
                        {prog.format}
                      </span>
                      <span className="font-mono text-xs font-bold text-[#EA580C] border border-[#EA580C]/20 bg-[#EA580C]/5 px-2.5 py-1 rounded-md">
                        {prog.price}
                      </span>
                    </div>
                  </div>

                  <div className="font-mono text-xs text-[#57534E]">
                    {prog.schedule}
                  </div>

                  <p className="text-[#57534E] text-sm leading-[1.65] max-w-[65ch]">
                    {prog.summary}
                  </p>

                  {/* Program Deliverables */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                    {prog.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#141413]">
                        <span className="text-[#EA580C] font-mono mt-0.5">✓</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3">
                    <a
                      href={buildWhatsAppUrl(prog.whatsappMsg)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 border border-[#E7E5E4] hover:border-[#D6D3D1] bg-white hover:bg-[#F0EFEA] text-[#141413] font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-lg transition-colors duration-150"
                    >
                      <span>Inquire via WhatsApp</span>
                      <span className="font-mono">→</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECTION 4: STRUCTURED TIMETABLE (DATA TABLE) */}
      <section id="schedule" className="border-b border-[#E7E5E4] py-20 sm:py-28 bg-[#F0EFEA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#EA580C]">
                03 // Weekly Operational Grid
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight mt-1">
                Class Schedule & Coach Assignments
              </h2>
            </div>
            <p className="font-mono text-xs text-[#57534E] max-w-md">
              Cohort times are fixed to ensure punctuality and maximum coaching attention. Every class starts strictly on time with joint mobility prep.
            </p>
          </div>

          {/* Desktop Data Table */}
          <div className="hidden md:block border border-[#E7E5E4] rounded-lg overflow-hidden bg-white">
            <table className="w-full text-left font-mono text-xs">
              <thead className="bg-[#F9F9FB] border-b border-[#E7E5E4] text-[#57534E] uppercase tracking-wider text-[11px]">
                <tr>
                  <th className="py-3 px-4">Day</th>
                  <th className="py-3 px-4">Focus Discipline</th>
                  <th className="py-3 px-4">Session Times</th>
                  <th className="py-3 px-4">Coach Assignment</th>
                  <th className="py-3 px-4 text-right">Floor Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E7E5E4] text-[#141413]">
                {timetable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#F0EFEA]/60 transition-colors duration-150">
                    <td className="py-3.5 px-4 font-bold text-[#141413]">{row.day}</td>
                    <td className="py-3.5 px-4 font-sans text-sm text-[#141413]">{row.focus}</td>
                    <td className="py-3.5 px-4 text-[#57534E]">{row.sessions}</td>
                    <td className="py-3.5 px-4 text-[#141413]">{row.coach}</td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase border border-[#E7E5E4] bg-[#F9F9FB] text-[#EA580C]">
                        {row.availability}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Structured Cards */}
          <div className="md:hidden space-y-3 font-mono text-xs">
            {timetable.map((row, idx) => (
              <div key={idx} className="p-4 border border-[#E7E5E4] rounded-lg bg-white space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#141413] text-sm">{row.day}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase border border-[#E7E5E4] bg-[#F9F9FB] text-[#EA580C]">
                    {row.availability}
                  </span>
                </div>
                <div className="font-sans text-sm text-[#141413] font-medium">
                  {row.focus}
                </div>
                <div className="text-[#57534E] text-[11px]">
                  Times: <span className="text-[#141413]">{row.sessions}</span>
                </div>
                <div className="text-[#57534E] text-[11px]">
                  Coach: <span className="text-[#141413]">{row.coach}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SECTION 5: ASYMMETRIC BENTO GRID (FACILITY & COMMUNITY) */}
      <section id="facility" className="border-b border-[#E7E5E4] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#EA580C]">
              04 // The Training Facility
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight mt-1">
              Purpose-Built Hardware. Zero Distractions.
            </h2>
            <p className="text-[#57534E] text-sm max-w-[65ch] mt-2">
              Every barbell, bumper plate, ring anchor, and bench has been selected for durability and athletic safety.
            </p>
          </div>

          {/* Uneven Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Box 1: 2:1 Large Rig Bay */}
            <div className="md:col-span-8 border border-[#E7E5E4] rounded-lg overflow-hidden bg-white flex flex-col justify-between">
              <div className="relative h-64 sm:h-80">
                <img
                  src="/images/open-gym.jpg"
                  alt="Gymnastic ring bays and barbell lifting racks at APEX"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#F9F9FB]/95 border border-[#E7E5E4] font-mono text-[10px] text-[#141413] uppercase">
                  BAY 01 // 4.2M Gymnastic Ring & Rig Structure
                </div>
              </div>
              <div className="p-5 font-mono text-xs space-y-1">
                <div className="text-[#141413] font-bold text-sm">Industrial Heavy-Duty Calisthenic Rig</div>
                <p className="text-[#57534E] font-sans text-xs">
                  Ceiling-anchored wooden gymnastic rings, straight pull-up bars with competition grip powder-coating, and dual dip stations designed for zero frame wobble.
                </p>
              </div>
            </div>

            {/* Box 2: 1:1 Side Block: Coaching Form Audits */}
            <div className="md:col-span-4 border border-[#E7E5E4] rounded-lg overflow-hidden bg-white flex flex-col justify-between">
              <div className="relative h-48 sm:h-64">
                <img
                  src="/images/strength-coaching.jpg"
                  alt="Coach checking bar path and lifting posture"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#F9F9FB]/95 border border-[#E7E5E4] font-mono text-[10px] text-[#141413] uppercase">
                  BAY 02 // Form Analysis
                </div>
              </div>
              <div className="p-5 font-mono text-xs space-y-1">
                <div className="text-[#141413] font-bold text-sm">Direct Coaching & Form Audits</div>
                <p className="text-[#57534E] font-sans text-xs">
                  Real-time bar path feedback, wrist angles, and pelvic bracing checks. You will never perform a loaded lift unattended.
                </p>
              </div>
            </div>

            {/* Box 3: 1:1 Side Block: Cohort Culture */}
            <div className="md:col-span-4 border border-[#E7E5E4] rounded-lg overflow-hidden bg-white flex flex-col justify-between">
              <div className="relative h-48 sm:h-64">
                <img
                  src="/images/community.jpg"
                  alt="APEX cohort athletes training together"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-2 py-1 rounded bg-[#F9F9FB]/95 border border-[#E7E5E4] font-mono text-[10px] text-[#141413] uppercase">
                  BAY 03 // Cohort Culture
                </div>
              </div>
              <div className="p-5 font-mono text-xs space-y-1">
                <div className="text-[#141413] font-bold text-sm">Respectful, Non-Intimidating Floor</div>
                <p className="text-[#57534E] font-sans text-xs">
                  Every member supports each other. Whether working on your first knee-pushup or a 180kg deadlift, ego is checked at the door.
                </p>
              </div>
            </div>

            {/* Box 4: 2:1 Concrete Hardware Spec Sheet */}
            <div className="md:col-span-8 border border-[#E7E5E4] rounded-lg p-6 bg-white flex flex-col justify-between space-y-4 font-mono text-xs">
              <div>
                <span className="text-[#EA580C] uppercase tracking-wider text-[11px] block">
                  AUDITED INVENTORY SPECIFICATION
                </span>
                <h3 className="font-display text-2xl font-bold text-[#141413] mt-1">
                  Standard Floor Apparatus
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-[#E7E5E4] p-3 rounded-md bg-[#F9F9FB] space-y-1">
                  <div className="text-[#141413] font-bold">Barbells & Free Weights</div>
                  <div className="text-[#57534E] text-[11px]">
                    Eleiko IWF Training Bars (20kg & 15kg), 1,200kg of competition calibrated bumper plates, cast iron kettlebells (8kg to 32kg).
                  </div>
                </div>

                <div className="border border-[#E7E5E4] p-3 rounded-md bg-[#F9F9FB] space-y-1">
                  <div className="text-[#141413] font-bold">Conditioning Ergometers</div>
                  <div className="text-[#57534E] text-[11px]">
                    Concept2 RowErg (PM5), Concept2 SkiErg, Rogue Echo Bikes, and Woodway Curve manual runner treadmills.
                  </div>
                </div>

                <div className="border border-[#E7E5E4] p-3 rounded-md bg-[#F9F9FB] space-y-1">
                  <div className="text-[#141413] font-bold">Mobility & Longevity Station</div>
                  <div className="text-[#57534E] text-[11px]">
                    Slant boards, lacrosse balls, resistance bands, gymnastics chalk stations, and weighted ankle mobility blocks.
                  </div>
                </div>

                <div className="border border-[#E7E5E4] p-3 rounded-md bg-[#F9F9FB] space-y-1">
                  <div className="text-[#141413] font-bold">Facility Infrastructure</div>
                  <div className="text-[#57534E] text-[11px]">
                    Private shower suites, keyless lockers, filtered alkaline water station, and dedicated stretching mezzanine.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION 6: FAQ ACCORDION (HAIRLINE DIVIDERS) */}
      <section id="faq" className="border-b border-[#E7E5E4] py-20 sm:py-28 bg-[#F0EFEA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div>
            <div className="font-mono text-xs uppercase tracking-wider text-[#EA580C]">
              05 // Direct Inquiries
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#141413] tracking-tight mt-1">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="divide-y divide-[#E7E5E4] border-t border-b border-[#E7E5E4]">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <span className="font-display text-base sm:text-lg font-bold text-[#141413]">
                    <span className="font-mono text-xs text-[#EA580C] mr-3">
                      Q.0{idx + 1}
                    </span>
                    {faq.q}
                  </span>
                  <span className="font-mono text-base text-[#EA580C] shrink-0">
                    {activeFaq === idx ? "−" : "+"}
                  </span>
                </button>
                {activeFaq === idx && (
                  <p className="mt-3 text-[#57534E] text-sm leading-[1.65] max-w-[65ch] pl-8">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. SECTION 7: DIRECT WALKTHROUGH STRIP */}
      <section className="py-20 sm:py-24 bg-[#F9F9FB]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border border-[#E7E5E4] bg-white font-mono text-[11px] text-[#57534E] uppercase">
            <span>START WITH A COMPLIMENTARY WALKTHROUGH</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#141413] tracking-tight">
            Schedule a 45-Minute Movement Assessment.
          </h2>

          <p className="text-[#57534E] text-sm sm:text-base leading-[1.65] max-w-[55ch] mx-auto">
            Meet the coaches, inspect the equipment, and experience a coached cohort session without any financial obligation or aggressive sales pressure.
          </p>

          <div className="pt-2">
            <a
              href={buildWhatsAppUrl(
                "Hello APEX. I would like to book my free assessment and trial session."
              )}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium text-sm sm:text-base px-8 py-4 rounded-lg transition-colors duration-150"
            >
              <span>Connect on WhatsApp to Book</span>
              <span className="font-mono">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. STRUCTURAL FOOTER */}
      <footer className="border-t border-[#E7E5E4] bg-[#F0EFEA] py-12 text-[#57534E] font-mono text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded bg-[#EA580C] flex items-center justify-center text-white font-bold text-xs">
              ▲
            </div>
            <div>
              <span className="text-[#141413] font-bold">APEX STRENGTH CLUB</span>
              <span className="text-[10px] text-[#57534E] block">
                ISLAMABAD, PAKISTAN • SECTOR F-7/2
              </span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span>TEL: +92 300 0000000</span>
            <span>•</span>
            <span>DAILY 05:00 — 23:00</span>
          </div>

          <div className="text-[10px] text-[#78716C]">
            © {new Date().getFullYear()} APEX STRENGTH & CALISTHENICS. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* 11. MOBILE PERSISTENT WHATSAPP ACTION BAR */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#F9F9FB]/95 border-t border-[#E7E5E4] backdrop-blur-md">
        <a
          href={buildWhatsAppUrl(
            "Hello APEX. I would like to claim my free trial pass and book an assessment."
          )}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium text-xs py-3 rounded-lg uppercase tracking-wider transition-colors duration-150"
        >
          <span>Claim Free Trial on WhatsApp</span>
          <span className="font-mono">→</span>
        </a>
      </div>
    </div>
  );
}
