"use client";

import React, { useState } from 'react';

export default function GymLandingPage() {
  const [activeTab, setActiveTab] = useState('programs');
  const [activeFaq, setActiveFaq] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const programs = [
    {
      id: "group",
      title: "Functional Strength & Calisthenics",
      badge: "Most Popular",
      badgeColor: "bg-amber-500 text-slate-950",
      highlight: true,
      sessions: "5 Sessions / Week • Small Cohort",
      desc: "Our core training community. Master pull-ups, barbell squats, push-ups, and gymnastic ring control in small groups capped at 8 athletes.",
      features: [
        "Structured beginner-to-advanced progression tree",
        "Dedicated mobility & joint longevity prep every class",
        "Personalized coach form checks & encouragement",
        "Supportive cohort community with zero intimidation",
        "Full keyless 7-day open gym access included",
      ],
      cta: "Join Cohort via WhatsApp",
      msg: "Hi! I'd like to try a free session of the Functional Strength & Calisthenics group."
    },
    {
      id: "personal",
      title: "1-on-1 Personal Coaching",
      badge: "Personalized",
      badgeColor: "bg-teal-500 text-slate-950",
      highlight: false,
      sessions: "3x 60-Minute Private Sessions Weekly",
      desc: "Tailored directly to your goals, past injuries, and schedule. Ideal for individuals who want dedicated private guidance and rapid body recomposition.",
      features: [
        "100% custom barbell, dumbbell & mobility programming",
        "Private coaching suite with zero distractions",
        "Nutrition & metabolic guidance tailored to your lifestyle",
        "Direct coach WhatsApp support for form checks anytime",
        "Flexible morning, afternoon, or evening scheduling",
      ],
      cta: "Inquire About 1-on-1",
      msg: "Hi! I'm interested in private 1-on-1 personal coaching at APEX."
    },
    {
      id: "opengym",
      title: "Open Gym Membership",
      badge: "Self-Paced",
      badgeColor: "bg-slate-700 text-slate-200",
      highlight: false,
      sessions: "05:00 – 23:00 Daily • 7 Days/Week",
      desc: "For self-directed lifters who want high-end equipment, calibrated barbells, competition rings, and zero queues or commercial gym crowding.",
      features: [
        "Olympic bumper plates, squat racks & chalk stations",
        "Curved Woodway runners, Concept2 rowers & ski-ergs",
        "4.2m gymnastic ring & pull-up structural rig",
        "Spacious locker rooms, hot showers & recovery station",
        "Strictly capped total memberships so it's never packed",
      ],
      cta: "Get Open Gym Pass",
      msg: "Hi! I'd like to get information on the Open Gym Membership pass."
    }
  ];

  const schedulePreview = [
    { day: "Monday", focus: "Upper Body & Ring Strength", time: "06:00 / 09:00 / 18:00 / 19:30", coach: "Coach Marcus" },
    { day: "Tuesday", focus: "Barbell Deadlift & Lower Armor", time: "06:00 / 09:00 / 18:00 / 19:30", coach: "Coach Elena" },
    { day: "Wednesday", focus: "Core, Handstands & Mobility", time: "07:00 / 10:00 / 18:30", coach: "Coach Marcus" },
    { day: "Thursday", focus: "Dumbbell Pressing & Pull Volume", time: "06:00 / 09:00 / 18:00 / 19:30", coach: "Coach Elena" },
    { day: "Friday", focus: "L-Sit Midsection & Pull-ups", time: "06:00 / 09:00 / 18:00 / 19:30", coach: "Coach Marcus" },
    { day: "Saturday", focus: "Community 60-Min Team Throwdown", time: "08:30 / 10:00", coach: "All Coaches" },
    { day: "Sunday", focus: "Active Recovery & Open Facility", time: "07:00 - 21:00", coach: "Floor Staff" },
  ];

  const buildWhatsAppLink = (text) =>
    `https://wa.me/1234567890?text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-screen bg-[#0C121E] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 pb-20 sm:pb-0 overflow-x-hidden relative">

      {/* TOP ANNOUNCEMENT BAR */}
      <div className="bg-[#11192A] border-b border-slate-800/80 text-xs py-2.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap justify-center text-slate-300">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
              APEX FITNESS & STRENGTH LAB
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-400">Open 05:00 – 23:00 Daily</span>
          </div>
          <div className="flex items-center gap-3 text-slate-300 font-medium text-xs">
            <span className="text-amber-400 flex items-center gap-1 font-bold">
              ★ 4.9 <span className="text-slate-400 font-normal">(140+ Member Reviews)</span>
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="text-slate-300 hidden md:inline">Beginner-Friendly • Max 8 per Class</span>
          </div>
        </div>
      </div>

      {/* CLEAN MODERN HEADER */}
      <nav className="sticky top-0 z-40 bg-[#0C121E]/95 backdrop-blur-md border-b border-slate-800/90 px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-black text-xl shadow-lg shadow-amber-500/20">
              ⚡
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white block leading-tight">
                APEX <span className="text-amber-400 font-medium">FITNESS</span>
              </span>
              <span className="text-[11px] text-slate-400 tracking-wider uppercase block font-medium">
                Calisthenics & Strength
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
            <a href="#programs" className="hover:text-amber-400 transition-colors">Programs</a>
            <a href="#schedule" className="hover:text-amber-400 transition-colors">Schedule</a>
            <a href="#facility" className="hover:text-amber-400 transition-colors">The Gym</a>
            <a href="#faq" className="hover:text-amber-400 transition-colors">FAQ</a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={buildWhatsAppLink("Hi! I'd like to book a free 1-day pass and gym walkthrough at APEX.")}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-md shadow-amber-500/20 hover:shadow-amber-500/35 transition-all"
            >
              <span>Get Free Pass</span>
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

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-slate-800 flex flex-col gap-1 text-sm font-semibold text-slate-200 pb-3">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-amber-400"
            >
              About Our Gym
            </a>
            <a 
              href="#programs" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-amber-400"
            >
              Programs & Classes
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
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)} 
              className="py-2.5 px-3 rounded-lg hover:bg-slate-800/60 hover:text-amber-400"
            >
              Frequently Asked Questions
            </a>
            <div className="pt-2 px-1">
              <a
                href={buildWhatsAppLink("Hi Coach! I'd like to book a free trial session.")}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold py-3 rounded-xl text-center shadow-lg"
              >
                Claim Free Day Pass on WhatsApp →
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* WELCOMING HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 sm:py-20 lg:py-24 border-b border-slate-800">
        
        {/* Warm Ambient Radial Glows */}
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-amber-500/15 via-orange-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-[-60px] right-[-60px] w-[350px] h-[350px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide">
                <span>✦</span>
                <span>Welcoming Beginners & Everyday Athletes</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Real Strength. Healthy Joints. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">
                  Zero Ego Community.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                Tired of crowded commercial gyms, confusing machines, and feeling like just another membership number? At APEX, we combine bodyweight calisthenics, Olympic barbells, and mobility coaching in welcoming small groups where coaches actually know your name.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <a
                  href={buildWhatsAppLink("Hi! I'd like to book a free assessment and trial workout at APEX.")}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl shadow-amber-500/20 hover:shadow-amber-500/35 transition-all duration-200"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span>Claim Free Trial on WhatsApp</span>
                </a>

                <a
                  href="#programs"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-bold text-sm sm:text-base px-6 py-4 rounded-xl transition-colors"
                >
                  Explore Programs ↓
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-800">
                <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800/90 text-left">
                  <div className="text-xl sm:text-2xl font-bold text-white">8 Max</div>
                  <div className="text-xs text-slate-400 mt-0.5">Athletes / Coach</div>
                </div>
                <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800/90 text-left">
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">4.9 ★</div>
                  <div className="text-xs text-slate-400 mt-0.5">140+ Reviews</div>
                </div>
                <div className="p-3.5 bg-slate-900/80 rounded-2xl border border-slate-800/90 text-left">
                  <div className="text-xl sm:text-2xl font-bold text-teal-400">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Month-to-Month</div>
                </div>
              </div>
            </div>

            {/* Right Card: Vibrant Full Color Atmosphere */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl shadow-orange-950/20 group">
                <img 
                  src="/images/hero-bg.jpg" 
                  alt="Athlete lifting barbell with focus and good form" 
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-slate-700 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="text-white text-sm font-bold">Safe, Encouraging Environment</h4>
                      <p className="text-slate-300 text-xs mt-0.5">Whether starting from zero pull-ups or hitting PRs, everyone is supported.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY APEX: THREE REASONS TO TRAIN HERE */}
      <section id="about" className="py-16 sm:py-20 bg-[#101726] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-2 block">Why People Love APEX</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Fitness Built For Everyday Life</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">Workouts designed to make you strong, agile, and pain-free for decades.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 shadow-sm transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-black">
                01
              </div>
              <h3 className="text-xl font-bold text-white">Natural Functional Movements</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We train full-body movements: pulling, pushing, hinging, and carrying. You build functional muscles that help you move with ease in real everyday life.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 shadow-sm transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-black">
                02
              </div>
              <h3 className="text-xl font-bold text-white">Joint Longevity & Warm-ups</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                No jumping straight into heavy weights. Every class includes 15 minutes of wrist prep, rotator cuff drills, and hip mobility to keep joints feeling great.
              </p>
            </div>

            <div className="p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 shadow-sm transition-all space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center text-xl font-black">
                03
              </div>
              <h3 className="text-xl font-bold text-white">Small Classes, Real Attention</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                With a maximum of 8 athletes per class, our coaches constantly watch your form, adjust loads, and keep you safe from day one to year five.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS & MEMBERSHIP SECTION */}
      <section id="programs" className="py-16 sm:py-24 bg-[#0C121E] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">No Contracts • Transparent Membership</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">Choose Your Training Path</h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">All options include showers, keyless facility access, and community events.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {programs.map((prog) => (
              <div 
                key={prog.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all relative ${
                  prog.highlight 
                    ? "bg-gradient-to-b from-[#192236] to-[#111828] border-2 border-amber-500 shadow-2xl shadow-amber-500/15" 
                    : "bg-slate-900/80 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {prog.badge && (
                  <div className={`absolute -top-3.5 right-6 text-[11px] font-bold uppercase tracking-wider py-1 px-3.5 rounded-full shadow-md ${prog.badgeColor}`}>
                    {prog.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{prog.title}</h3>
                  <div className="text-xs font-bold text-amber-400 mb-3">{prog.sessions}</div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">{prog.desc}</p>

                  <div className="py-3 border-y border-slate-800 mb-6">
                    <span className="text-xs text-slate-400 block">Highlights:</span>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 mb-8">
                    {prog.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="text-amber-400 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={buildWhatsAppLink(prog.msg)}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-bold transition-all ${
                    prog.highlight
                      ? "bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 shadow-lg shadow-amber-500/20"
                      : "bg-slate-800 hover:bg-slate-700 text-white"
                  }`}
                >
                  {prog.cta} →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WEEKLY CLASS SCHEDULE */}
      <section id="schedule" className="py-16 sm:py-20 bg-[#101726] border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Class Timetable</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Weekly Training Schedule</h2>
            <p className="text-slate-400 text-sm mt-2">Classes are 60 minutes long. Book spots directly on WhatsApp.</p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/90 overflow-hidden shadow-xl">
            <div className="divide-y divide-slate-800">
              {schedulePreview.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-slate-800/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="w-24 text-xs font-bold uppercase tracking-wider text-amber-400 shrink-0">
                      {item.day}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white">{item.focus}</h4>
                      <span className="text-xs text-slate-400 sm:hidden block mt-0.5">{item.time} • {item.coach}</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-6 text-xs text-slate-300">
                    <span className="font-semibold">{item.time}</span>
                    <span className="text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">{item.coach}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* THE GYM FACILITY & EQUIPMENT */}
      <section id="facility" className="py-16 sm:py-20 bg-[#0C121E] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">The Training Facility</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Our Gym & Equipment</h2>
            <p className="text-slate-400 text-sm mt-2">Clean, well-maintained equipment with dedicated lifting stations.</p>
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
                <h4 className="text-lg font-bold text-white">Olympic Barbell Deck</h4>
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
                <h4 className="text-lg font-bold text-white">Heavy Dumbbell Suite</h4>
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
                <h4 className="text-lg font-bold text-white">4.2m Calisthenics Rig</h4>
                <p className="text-slate-300 text-xs mt-0.5">Birch gymnastic rings, parallel dips & pull-up ladders.</p>
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
                <h4 className="text-lg font-bold text-white">Conditioning Floor</h4>
                <p className="text-slate-300 text-xs mt-0.5">Woodway curved runners, Concept2 rowers & ski-ergs.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-16 sm:py-20 bg-[#101726] border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Got Questions?</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "I cannot do a single pull-up yet. Can I still join?",
                a: "Yes, 100%! More than half of our members couldn't do a single strict pull-up when they started. Every movement has beginner-friendly progressions (feet-supported rings, resistance bands, and eccentric lowers) so you gain strength safely."
              },
              {
                q: "How does the free trial workout work?",
                a: "Just send us a quick message on WhatsApp. We will invite you for a 30-minute private walkthrough, check your movement goals, and set you up with a free trial session so you can experience the gym firsthand."
              },
              {
                q: "Do you lock members into long 12-month contracts?",
                a: "Never. All our memberships are month-to-month. If you travel or need a break, you can easily freeze your membership for up to 30 days per year."
              },
              {
                q: "Is the gym crowded during peak hours?",
                a: "No. We cap our group classes at 8 athletes per coach, and strictly limit open gym memberships to 120 total lifters. You will never have to wait around for a squat rack or dumbbell pair."
              }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
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

      {/* FOOTER & LOCATION */}
      <footer className="bg-[#0A0E17] text-slate-300 py-12 sm:py-16 px-4 sm:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          <div className="md:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              APEX FITNESS & STRENGTH LAB
            </h3>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              A community of athletes building functional strength, healthy joints, and real calisthenics control. Try a free session with us today.
            </p>
            <div className="pt-2">
              <a
                href={buildWhatsAppLink("Hi! I'd like to book a free trial session at APEX.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all"
              >
                <span>Book Free Trial on WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-6 rounded-2xl bg-slate-900 border border-slate-800 p-6 space-y-3 text-xs sm:text-sm">
            <div className="text-white font-bold text-base mb-1">Gym Location & Hours</div>
            <p className="text-slate-300"><strong className="text-white">Address:</strong> Main Commercial Boulevard</p>
            <p className="text-slate-300">
              <strong className="text-white">Phone / WhatsApp:</strong>{" "}
              <a href="tel:1234567890" className="text-amber-400 hover:underline">+92 300 0000000</a>
            </p>
            <p className="text-slate-300"><strong className="text-white">Hours:</strong> 05:00 – 23:00 Mon – Sun</p>
            <p className="text-slate-400 text-xs pt-1">Dedicated Free Parking Available On-Site</p>
          </div>

        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 text-center sm:text-left">
          <span>© {new Date().getFullYear()} APEX Fitness & Strength Lab. All rights reserved.</span>
          <span>Functional Movement • Joint Longevity • Community</span>
        </div>
      </footer>

      {/* MOBILE FLOATING WHATSAPP BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-slate-950/95 backdrop-blur-md border-t border-slate-800 p-3 shadow-lg">
        <a
          href={buildWhatsAppLink("Hi! I'd like to book a free trial session at APEX.")}
          target="_blank"
          rel="noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-bold text-sm py-3 px-4 rounded-xl shadow-md active:scale-[0.98] transition-transform"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
          <span>Claim Free Trial on WhatsApp</span>
        </a>
      </div>

    </div>
  );
}
