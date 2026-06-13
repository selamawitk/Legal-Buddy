"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <div className="mx-auto flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md border-slate-200 bg-white shadow-xl">
        <CardHeader className="px-8 pt-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-amber-50 text-2xl">🔐</div>
          <CardTitle className="mt-4 text-3xl font-bold text-slate-900">Password recovery</CardTitle>
          <CardDescription className="mt-2 text-sm text-slate-500">
            Enter your registered email and we will send a secure recovery verification link.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6 px-8 pb-10 pt-6">
          {isSubmitted ? (
            <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-sm text-emerald-900">
              <p className="font-semibold">Recovery link dispatched</p>
              <p className="mt-2 text-slate-700">
                A secure verification node has been sent to <span className="font-semibold">{email}</span>. Please check your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Registered Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>
              <Button type="submit" className="w-full bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-3 font-semibold">
                Send recovery link
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
