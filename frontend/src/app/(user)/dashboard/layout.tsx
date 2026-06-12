"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Search, 
  MessageSquare, 
  FileText, 
  LogOut, 
  Menu, 
  X, 
  Scale 
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const navigationItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "Search", href: "/dashboard/search", icon: Search },
    { name: "Chat", href: "/dashboard/chat", icon: MessageSquare },
    { name: "Contracts", href: "/dashboard/contracts", icon: FileText },
  ];

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 antialiased flex overflow-hidden relative">
      
      {/* FLOATING MOBILE MENU TRIGGER BUTTON */}
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-md transition-colors hover:bg-slate-50 flex items-center justify-center"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* DESKTOP SIDEBAR - MOVED DOWN USING top-16 AND HEIGHT ADJUSTED */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r border-slate-200/60 fixed left-0 top-16 bottom-0 h-[calc(100vh-4rem)] z-30">
        

        {/* Sidebar Dynamic Navigation */}
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <Link key={item.name} href={item.href} className="block">
                <span className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100/50"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}>
                  <IconComponent className={`h-5 w-5 ${isActive ? "text-indigo-600" : "text-slate-400"}`} />
                  <span>{item.name}</span>
                </span>
              </Link>
            );
          })}
        </nav>

        {/* User Workspace Profile Card */}
        <div className="p-4 border-t border-slate-200/60 bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white text-sm">
              AA
            </div>
            <div className="min-w-0">
              <p className="text-sm font-bold text-slate-900 truncate">Abebe Alula</p>
              <p className="text-xs font-medium text-slate-400">Free Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MOBILE DRAWER BACKDROP OVERLAY */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden backdrop-blur-sm transition-opacity" onClick={() => setIsMobileOpen(false)} />
      )}

      {/* MOBILE SIDEBAR PANEL - MOVED DOWN USING top-16 AND HEIGHT ADJUSTED */}
      <aside className={`fixed left-0 top-16 bottom-0 z-50 w-72 bg-white border-r border-slate-200 shadow-xl lg:hidden transform transition-transform duration-300 ease-in-out flex flex-col h-[calc(100vh-4rem)] ${
        isMobileOpen ? "translate-x-0" : "-translate-x-full"
      }`}>
        <div className="flex h-16 items-center justify-between px-5 border-b border-slate-200 flex-shrink-0">
          <span className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <Scale className="h-5 w-5 text-indigo-600" /> Legal Buddy
          </span>
          <button onClick={() => setIsMobileOpen(false)} className="text-slate-400 hover:text-slate-600 p-1">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 space-y-1.5 overflow-y-auto">
          {navigationItems.map((item) => {
            const isActive = pathname === item.href;
            const IconComponent = item.icon;
            return (
              <Link key={item.name} href={item.href} onClick={() => setIsMobileOpen(false)} className="block">
                <span className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                  isActive ? "bg-indigo-50 text-indigo-600" : "text-slate-600 hover:bg-slate-100"
                }`}>
                  <IconComponent className="h-5 w-5" />
                  <span>{item.name}</span>
                </span>
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* MAIN CONTENT VIEWPORT AXIS */}
      <div className="flex-1 flex flex-col min-w-0 lg:ml-72 h-screen overflow-hidden">
        
        {/* INDEPENDENT WORKSPACE CONTENT AREA SCROLLER */}
        {/* Added extra padding-top on mobile screens to clear space for the floating menu trigger button */}
        <main className="flex-1 overflow-y-auto bg-slate-50/50 pb-8 pr-8 pl-8 lg:pl-0 pt-16 lg:pt-4">
          <div className="-mt-1.5 -ml-[10px] max-w-7xl w-full text-lg">
            {children}
          </div>
        </main>
      </div>

    </div>
  );
}