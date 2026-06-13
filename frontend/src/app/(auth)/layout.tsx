import type { ReactNode } from "react";

export default function AuthRootLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-4 py-10 sm:px-6">
        {children}
      </div>
    </div>
  );
}
