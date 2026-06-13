"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { contracts } from "@/lib/mock-data/contracts";
import { users } from "@/lib/mock-data/users";

export default function MasterLandingPage() {
  const totalContracts = contracts?.length || 0;
  const totalUsers = users?.length || 0;

  return (
    <div className="flex min-h-screen flex-col bg-slate-50/50 text-slate-900 antialiased font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* BACKGROUND ACCENTS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -z-10 h-[1000px] w-[1000px] -translate-x-1/2 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)] bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08),transparent)]" />
        <div className="absolute top-[800px] left-0 right-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_20%_50%,rgba(139,92,246,0.04),transparent_45%)]" />
      </div>

      {/* FIXED NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/70 backdrop-blur-md transition-all">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2.5 text-xl font-bold text-slate-900 tracking-tight hover:opacity-90 transition">
            <span className="text-2xl drop-shadow-sm">⚖️</span> 
            <span className="bg-gradient-to-r from-slate-900 to-indigo-950 bg-clip-text text-transparent">Legal Buddy</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition-colors">Features</a>
            <a href="#about" className="hover:text-indigo-600 transition-colors">About</a>
            <a href="#pricing" className="hover:text-indigo-600 transition-colors">Pricing</a>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-slate-100/80">
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-indigo-600 text-sm font-semibold text-white hover:bg-indigo-700 shadow-sm shadow-indigo-600/10 active:scale-[0.98] transition-all px-5">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN SCROLL CONTENT */}
      <main className="flex-1">
        
        {/* 1. HERO SECTION */}
        <section className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 text-center space-y-8 pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/60 px-4 py-1.5 text-xs font-semibold text-indigo-700 backdrop-blur-sm shadow-sm animate-fade-in">
            <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500 animate-pulse" />
            🇪🇹 Tailored for Ethiopian Laws & Proclamations
          </div>
          
          <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-slate-900 md:text-6xl lg:text-7xl lg:leading-[1.1]">
            AI-Powered Legal Assistant <br/>
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 bg-clip-text text-transparent">for Ethiopia</span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-base md:text-lg text-slate-500 leading-relaxed font-medium">
            Generate bulletproof contracts, analyze risks, search cross-referenced proclamations, and get tailored AI legal guidance in Amharic and English.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
            <Link href="/register" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-indigo-600 text-white hover:bg-indigo-700 px-8 text-base font-semibold shadow-md shadow-indigo-600/20 active:scale-[0.98] transition-all">
                Get Started Free
              </Button>
            </Link>
            <a href="#features" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-300 bg-white px-8 text-base font-semibold hover:bg-slate-50 hover:text-slate-900 shadow-sm active:scale-[0.98] transition-all">
                See How It Works
              </Button>
            </a>
          </div>
          
          {/* MODERNIZED METRICS STRIP */}
          <div className="mx-auto max-w-5xl grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 pt-16 border-t border-slate-200/80 mt-12">
            {[
              { metric: `${totalUsers}+`, label: "Registered Users", sub: "Growing community" },
              { metric: `${totalContracts}+`, label: "Documents Managed", sub: "Safe & verified" },
              { metric: "5K+", label: "Legal Queries", sub: "Resolved by AI models" },
              { metric: "99.9%", label: "Uptime Guarantee", sub: "Enterprise infrastructure" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/40 backdrop-blur-sm border border-slate-200/40 rounded-xl p-5 shadow-sm/50">
                <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{item.metric}</div>
                <div className="text-sm font-semibold text-slate-800 mt-1">{item.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 2. FEATURES SECTION */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-16">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Platform Core Capabilities</h2>
            <div className="h-1 w-12 bg-indigo-600 mx-auto rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Advanced features engineered specifically to streamline workflows for businesses, developers, and practitioners.</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "AI Legal Search (RAG)", desc: "Instantly query criminal, civil, or labor proclamations with deep localized contextual understanding.", icon: "🔍", color: "from-blue-500/10 to-indigo-500/10 text-indigo-600" },
              { title: "Contract Generator", desc: "Interactive multi-step form executions to build legally sound rental, employment, or custom agreement styles.", icon: "📝", color: "from-purple-500/10 to-pink-500/10 text-purple-600" },
              { title: "Contract Analysis", desc: "Upload processing documents to discover risks, missing clauses, and verify compliance indicators dynamically.", icon: "📊", color: "from-amber-500/10 to-orange-500/10 text-amber-600" },
              { title: "E-Signature Engine", desc: "Draw, upload, or apply cryptographically secure signatures directly onto generated final contract sheets.", icon: "✍️", color: "from-emerald-500/10 to-teal-500/10 text-emerald-600" }
            ].map((feat, idx) => (
              <Card key={idx} className="group relative border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center text-xl mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {feat.icon}
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">{feat.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-slate-500 leading-relaxed">{feat.desc}</p>
                  </CardContent>
                </div>
                <CardFooter className="pt-4 border-t border-slate-50/50 mt-auto">
                  <span className="text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform flex items-center gap-1 cursor-pointer">Explore view <span>→</span></span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* 3. ABOUT SECTION (MODERN DARK CARD) */}
        <section id="about" className="mx-auto max-w-7xl px-6 py-8 scroll-mt-16">
          <div className="bg-slate-900 rounded-3xl text-white py-16 px-8 md:px-16 relative overflow-hidden shadow-xl shadow-slate-900/10">
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
            
            <div className="max-w-4xl mx-auto text-center space-y-6 relative z-10">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Legal Buddy</h2>
              <div className="h-1 w-10 bg-indigo-400 mx-auto rounded-full" />
              <p className="text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium">
                Legal Buddy is an AI-driven assistant designed specifically to address localized challenges in accessibility, discovery, and structuring of legal services throughout Ethiopia. Our framework outputs trusted citations, cross-referenced articles, and contextual compliance indicators in seconds.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 text-left border-t border-slate-800/80 mt-10">
                <div className="space-y-2">
                  <div className="text-indigo-400 font-bold flex items-center gap-2">
                    <span className="text-lg">🛡️</span> Secure & Private
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">Bank-grade document encryption safeguarding operational integrity and access permissions.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-indigo-400 font-bold flex items-center gap-2">
                    <span className="text-lg">🏛️</span> Localized Core
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">Direct processing maps across structural federal codes, tax mandates, and proclamations.</p>
                </div>
                <div className="space-y-2">
                  <div className="text-indigo-400 font-bold flex items-center gap-2">
                    <span className="text-lg">⚡</span> Agentic Workflows
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">Autonomous legal tools built to track deadlines, extract values, and summarize queries.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PRICING SECTION (FIXED & FULLY RENDERED) */}
        <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 scroll-mt-16">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Simple, Transparent Pricing</h2>
            <div className="h-1 w-12 bg-indigo-600 mx-auto rounded-full" />
            <p className="text-slate-500 max-w-2xl mx-auto font-medium">Choose the operational plan that perfectly fits your processing demands.</p>
          </div>

          <div className="mx-auto max-w-4xl grid md:grid-cols-2 gap-8 items-stretch px-2">
            
            {/* FREE PLAN CARD */}
            <Card className="flex flex-col justify-between border-slate-200/80 bg-white p-2 shadow-sm hover:border-slate-300 transition-all">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl font-bold text-slate-900">Free Plan</CardTitle>
                <CardDescription className="font-medium text-slate-400">Basic exploratory usage limits</CardDescription>
                <div className="pt-4 text-4xl font-black text-slate-900 flex items-baseline gap-1">
                  0 ETB 
                  <span className="text-sm font-semibold text-slate-400">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm font-medium text-slate-600 py-6 my-2 border-t border-b border-slate-100 flex-1">
                <div className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>Limited Legal Search & Chat limits</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>3 Contract Generations / month</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-emerald-500 font-bold text-base">✓</span>
                  <span>2 AI Analysis file uploads / month</span>
                </div>
                <div className="flex items-center gap-3 text-slate-400 line-through">
                  <span>✕</span>
                  <span>Telebirr Priority Reminders & Notifications</span>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Link href="/register" className="w-full">
                  <Button variant="outline" className="w-full font-bold border-slate-300 text-slate-700 hover:bg-slate-50 active:scale-[0.98] transition-transform">
                    Get Started
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            {/* PRO PREMIUM PLAN CARD */}
            <Card className="flex flex-col justify-between border-indigo-500 ring-4 ring-indigo-600/5 bg-white p-2 shadow-xl shadow-indigo-600/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-sm">
                Recommended
              </div>
              <CardHeader className="space-y-2">
                <div className="w-fit rounded-full bg-indigo-50 border border-indigo-200/50 px-3 py-1 text-xs font-bold text-indigo-700">
                  ⚡ Ultimate Intelligence
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900">Pro Plan</CardTitle>
                <CardDescription className="font-medium text-slate-400">Full platform capability access</CardDescription>
                <div className="pt-4 text-4xl font-black text-indigo-600 flex items-baseline gap-1">
                  1,490 ETB 
                  <span className="text-sm font-semibold text-slate-400">/ month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-sm font-medium text-slate-600 py-6 my-2 border-t border-b border-slate-100 flex-1">
                <div className="flex items-center gap-3 text-indigo-950 font-semibold">
                  <span className="text-indigo-600 font-bold text-base">✨</span>
                  <span>Unlimited Legal Search & Chat prompts</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-600 font-bold text-base">✓</span>
                  <span>Unlimited Document & Contract Generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-600 font-bold text-base">✓</span>
                  <span>Unlimited Risk & Clause Upload Parsing</span>
                </div>
                <div className="flex items-center gap-3 font-semibold text-slate-900">
                  <span className="text-indigo-600 font-bold text-base">✓</span>
                  <span>Smart Email Deadlines & Monitoring Alerts</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-600 font-bold text-base">✓</span>
                  <span>Priority Model Access & Support</span>
                </div>
              </CardContent>
              <CardFooter className="pt-4">
                <Link href="/register" className="w-full">
                  <Button className="w-full font-bold bg-indigo-600 text-white hover:bg-indigo-700 shadow-md shadow-indigo-600/10 active:scale-[0.98] transition-transform">
                    Start Pro Free Trial
                  </Button>
                </Link>
              </CardFooter>
            </Card>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 bg-white py-10 mt-auto">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-400">
          <div>⚖️ Legal Buddy for Ethiopia</div>
          <div>© {new Date().getFullYear()} Legal Buddy. Engineered for high performance production layouts.</div>
        </div>
      </footer>
    </div>
  );
}
