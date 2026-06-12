import type { ReactNode } from "react";
import Link from "next/link";

export default function UserRootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-medium text-base">
      
      {/* HEADER SECTION */}
      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/90 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-5 sm:px-8">
          
          {/* Logo Branding */}
          <Link href="/dashboard" className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
            <span>⚖️</span>
            <span>Legal Buddy</span>
          </Link>
          
          {/* Action Blocks */}
          <div className="flex items-center gap-4">
            <Link 
              href="/login" 
              className="rounded-xl bg-slate-100 hover:bg-slate-200 px-5 py-2.5 text-base font-bold text-slate-700 transition shadow-sm"
            >
              Sign out
            </Link>
          </div>

        </div>
      </header>
      
      {/* MAIN VIEWPORT FRAME */}
      <main className="mx-auto max-w-7xl px-6 py-8 sm:px-8 lg:px-10">
        {children}
      </main>

    </div>
  );
}