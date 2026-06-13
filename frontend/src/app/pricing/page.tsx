"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const tiers = [
  {
    name: "Free Tier Node",
    price: "0 ETB",
    description: "Basic exploration thresholds and standard historical catalog reviews.",
    features: [
      "Limited legal search queries",
      "3 contract generations per month",
      "Standard historical activity review",
      "Community support"
    ],
    button: "Start Free"
  },
  {
    name: "Professional Counselor",
    price: "1,490 ETB / month",
    description: "Advanced chat queues, vector queries, and full proclamation search indexes.",
    features: [
      "Unlimited AI legal search queries",
      "Unlimited consultation chats",
      "Full proclamation vector indexing",
      "Priority performance access"
    ],
    button: "Register Pro"
  },
  {
    name: "Enterprise Infrastructure",
    price: "Custom Pricing",
    description: "API automation access hooks and dedicated organizational spaces.",
    features: [
      "Dedicated workspace management",
      "API automation access",
      "Custom compliance templates",
      "Enterprise onboarding support"
    ],
    button: "Contact Sales"
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Pricing</p>
          <h1 className="mt-4 text-4xl font-black text-slate-900 sm:text-5xl">Tiered product grid for every compliance stage</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-500">
            Select the workspace tier that matches your legal review volume, contract generation cadence, and organizational security needs.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {tiers.map((tier) => (
            <Card key={tier.name} className="border-slate-200 bg-white shadow-sm transition hover:shadow-xl hover:-translate-y-1">
              <CardHeader className="px-6 pt-6">
                <CardTitle className="text-2xl font-bold text-slate-900">{tier.name}</CardTitle>
                <CardDescription className="mt-2 text-sm text-slate-500">{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-4 space-y-5">
                <div>
                  <p className="text-4xl font-black text-slate-900">{tier.price}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-1 text-indigo-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/register" className="block">
                  <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 px-4 py-3 font-semibold">
                    {tier.button}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Need help choosing?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-500">
            Reach out for enterprise planning, workflow integration, or a custom legal automation strategy for Ethiopian public law compliance.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/register" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">
              Register for a demo
            </Link>
            <Link href="/login" className="rounded-full bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-200">
              Already a member? Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
