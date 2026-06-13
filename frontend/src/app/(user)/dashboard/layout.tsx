"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  Search,
  MessageSquare,
  FileText,
  FilePlus,
  FileSearch,
  Signature,
  FolderOpen,
  Bell,
  User,
  CreditCard,
  ShieldCheck,
  Menu,
  X,
  Scale,
  ChevronRight,
  LogOut,
} from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const mainNav = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "AI Search", href: "/dashboard/search", icon: Search },
    { name: "AI Chat", href: "/dashboard/chat", icon: MessageSquare },
  ];

  const contractsNav = [
    { name: "My Contracts", href: "/dashboard/contracts", icon: FileText },
    { name: "Contract Generator", href: "/dashboard/contracts/generate", icon: FilePlus },
    { name: "Contract Analysis", href: "/dashboard/contracts/analysis", icon: FileSearch },
    { name: "E-Signature", href: "/dashboard/contracts/e-sign", icon: Signature },
  ];

  const workspaceNav = [
    { name: "Documents", href: "/dashboard/documents", icon: FolderOpen },
    { name: "Notifications", href: "/dashboard/notifications", icon: Bell },
    { name: "Profile", href: "/dashboard/profile", icon: User },
  ];

  const systemNav = [
    { name: "Subscription", href: "/dashboard/subscription", icon: CreditCard },
    { name: "Admin", href: "/dashboard/admin", icon: ShieldCheck },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  const NavItem = ({ href, icon: Icon, name }: { href: string; icon: any; name: string }) => {
    const active = isActive(href);
    return (
      <Link href={href} onClick={() => setIsMobileOpen(false)} className="block">
        <span
          className={`flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
            active
              ? "bg-indigo-50 text-indigo-600 shadow-sm shadow-indigo-100/50"
              : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          }`}
        >
          <Icon className={`h-4.5 w-4.5 ${active ? "text-indigo-600" : "text-slate-400"}`} />
          <span>{name}</span>
          {active && <ChevronRight className="h-3.5 w-3.5 ml-auto text-indigo-400" />}
        </span>
      </Link>
    );
  };

  const NavSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <div className="mb-5">
      <h4 className="px-4 mb-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400">
        {title}
      </h4>
      <div className="space-y-0.5">{children}</div>
    </div>
  );

  return (
    <div className="h-screen w-full bg-slate-50 text-slate-900 antialiased flex overflow-hidden relative">
      <button
        type="button"
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 rounded-xl border border-slate-200 bg-white p-2.5 text-slate-700 shadow-md transition-colors hover:bg-slate-50 flex items-center justify-center"
      >
        <Menu className="h-5 w-5" />
      </button>

      <aside className="hidden lg:flex flex-col w-64 bg-white border-r border-slate-200/60 fixed left-0 top-0 bottom-0 z-30">
        <div className="flex h-16 items-center justify-between px-5 border-b border-slate-200 flex-shrink-0">
          <Link href="/dashboard" className="flex items-center gap-2.5 text-lg font-bold text-slate-900 tracking-tight hover:opacity-90 transition">
            <span className="text-xl drop-shadow-sm">⚖️</span>
            <span className="bg-gradient-to-r from-slate-900 to-indigo-950 bg-clip-text text-transparent">Legal Buddy</span>
          </Link>
        </div>

        <nav className="flex-1 p-4 overflow-y-auto">
          <NavSection title="Main">
            {mainNav.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </NavSection>

          <NavSection title="Contracts">
            {contractsNav.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </NavSection>

          <NavSection title="Workspace">
            {workspaceNav.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </NavSection>

          <NavSection title="System">
            {systemNav.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </NavSection>
        </nav>

        <div className="p-4 border-t border-slate-200/60 bg-slate-50 flex-shrink-0">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white text-sm">
              AA
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-slate-900 truncate">Abebe Alula</p>
              <p className="text-xs font-medium text-slate-400">Free Account</p>
            </div>
            <button
              onClick={() => router.push("/login")}
              className="text-slate-400 hover:text-rose-500 transition-colors p-1"
              title="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </aside>

      {isMobileOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden backdrop-blur-sm transition-opacity" onClick={() => setIsMobileOpen(false)} />
      )}

      <aside
        className={`fixed left-0 top-0 bottom-0 z-50 w-72 bg-white border-r border-slate-200 shadow-xl lg:hidden transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5 border-b border-slate-200 flex-shrink-0">
          <span className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <Scale className="h-5 w-5 text-indigo-600" /> Legal Buddy
          </span>
          <button onClick={() => setIsMobileOpen(false)} className="text-slate-400 hover:text-slate-600 p-1">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 p-4 overflow-y-auto">
          <NavSection title="Main">
            {mainNav.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </NavSection>
          <NavSection title="Contracts">
            {contractsNav.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </NavSection>
          <NavSection title="Workspace">
            {workspaceNav.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </NavSection>
          <NavSection title="System">
            {systemNav.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </NavSection>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col min-w-0 lg:ml-64 h-screen overflow-hidden">
        <main className="flex-1 overflow-y-auto bg-slate-50/50 pb-8 px-6 lg:px-8 pt-20 lg:pt-8">
          <div className="max-w-7xl w-full mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
