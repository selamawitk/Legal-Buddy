"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!password.trim() || !confirmPassword.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError(null);
    setIsSubmitted(true);

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md border-slate-200 bg-white shadow-xl">
        <CardHeader className="px-8 pt-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-indigo-50 text-2xl">🔑</div>
          <CardTitle className="mt-4 text-3xl font-bold text-slate-900">Reset password</CardTitle>
          <CardDescription className="mt-2 text-sm text-slate-500">
            Enter your new secure password below.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 px-8 pb-10 pt-6">
          {isSubmitted ? (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-sm">
              <p className="font-semibold text-emerald-900">Password reset successfully!</p>
              <p className="mt-2 text-slate-700">Redirecting you to login...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {error ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                  {error}
                </div>
              ) : null}

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  placeholder="Enter your new password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Confirm New Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  placeholder="Repeat your new password"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-3 font-semibold">
                Reset Password
              </Button>
            </form>
          )}

          <div className="flex flex-col gap-3 text-sm text-slate-600 sm:flex-row sm:justify-between">
            <Link href="/login" className="text-indigo-600 hover:text-indigo-700 font-semibold">
              Back to login
            </Link>
            <Link href="/register" className="text-slate-500 hover:text-slate-700">
              Create a new account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
