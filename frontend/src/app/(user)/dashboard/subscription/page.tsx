"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, CheckCircle, Zap, ShieldCheck } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free Plan",
    price: "0 ETB",
    period: "/ month",
    description: "Basic exploratory usage limits",
    features: [
      "Limited Legal Search & Chat",
      "3 Contract Generations / month",
      "2 AI Analysis uploads / month",
      "Standard support",
    ],
    cta: "Current Plan",
    ctaVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro Plan",
    price: "1,490 ETB",
    period: "/ month",
    description: "Full platform capability access",
    features: [
      "Unlimited Legal Search & Chat",
      "Unlimited Contract Generation",
      "Unlimited Risk Analysis Uploads",
      "Priority Support & Monitoring",
      "Telebirr Payment Integration",
    ],
    cta: "Upgrade to Pro",
    ctaVariant: "default" as const,
    popular: true,
  },
];

const comparisons = [
  { feature: "AI Legal Search", free: "50 queries/mo", pro: "Unlimited" },
  { feature: "Contract Generation", free: "3/month", pro: "Unlimited" },
  { feature: "Contract Analysis", free: "2 uploads/mo", pro: "Unlimited" },
  { feature: "Chat Conversations", free: "Limited", pro: "Unlimited" },
  { feature: "E-Signature", free: "3/month", pro: "Unlimited" },
  { feature: "Document Storage", free: "50 MB", pro: "10 GB" },
  { feature: "Telebirr Notifications", free: "—", pro: "✓" },
  { feature: "Priority Support", free: "—", pro: "✓" },
];

export default function SubscriptionPage() {
  const currentPlan = "Free Plan";

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
          <CreditCard className="h-6 w-6 text-indigo-600" />
          <span>Subscription</span>
        </h2>
        <p className="text-base text-slate-500 mt-1">
          Manage your plan and billing information.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 max-w-3xl">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`border bg-white shadow-sm flex flex-col ${
              plan.popular
                ? "border-indigo-500 ring-2 ring-indigo-600/5 relative overflow-hidden"
                : "border-slate-200"
            }`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-sm">
                Recommended
              </div>
            )}
            <CardHeader className="p-6 space-y-2">
              <div className="flex items-center gap-2.5">
                {plan.popular ? (
                  <Zap className="h-5 w-5 text-indigo-600" />
                ) : (
                  <ShieldCheck className="h-5 w-5 text-slate-400" />
                )}
                <CardTitle className="text-xl font-bold text-slate-900">{plan.name}</CardTitle>
              </div>
              <CardDescription className="text-sm text-slate-500">{plan.description}</CardDescription>
              <div className="pt-2">
                <span className="text-3xl font-black text-slate-900">{plan.price}</span>
                <span className="text-sm font-semibold text-slate-400 ml-1">{plan.period}</span>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-5 flex-1 flex flex-col">
              <ul className="space-y-3 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-slate-600">
                    <CheckCircle className={`h-4 w-4 flex-shrink-0 ${plan.popular ? "text-indigo-600" : "text-emerald-500"}`} />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              {currentPlan === plan.name ? (
                <Button
                  disabled
                  variant="outline"
                  className="w-full font-bold border-slate-200 text-slate-400 rounded-xl py-2.5 h-auto"
                >
                  Current Plan
                </Button>
              ) : (
                <Link href="/pricing" className="block">
                  <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl py-2.5 h-auto shadow-sm">
                    {plan.cta}
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="border-slate-200 bg-white shadow-sm">
        <CardHeader className="p-6">
          <CardTitle className="text-lg font-bold text-slate-900">Feature Comparison</CardTitle>
          <CardDescription className="text-sm text-slate-500">
            Detailed breakdown of Free vs Pro plan features.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <th className="text-left font-bold text-slate-500 px-6 py-3.5">Feature</th>
                  <th className="text-left font-bold text-slate-500 px-6 py-3.5">Free</th>
                  <th className="text-left font-bold text-slate-500 px-6 py-3.5">Pro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comparisons.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">{row.feature}</td>
                    <td className="px-6 py-4 text-slate-500">{row.free}</td>
                    <td className="px-6 py-4">
                      <span className={row.pro === "✓" ? "text-emerald-600 font-bold" : "text-slate-800 font-semibold"}>
                        {row.pro}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
