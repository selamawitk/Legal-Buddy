"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const faqs = [
  {
    question: "How are system vector nodes synced with newly released Federal Negarit Gazetta proclamations?",
    answer: "The system uses local mock synchronization logic to represent how vector indexes would be refreshed after a new Gazetta release. In a real backend, new proclamations would be ingested, tokenized, and appended to the compliance vector store for semantic retrieval updates.",
  },
  {
    question: "Does this platform store or parse proprietary corporate lease inputs securely?",
    answer: "Yes. In production, all proprietary data is meant to be stored within secure, encrypted storage and processed only after user consent. This client-side prototype models the secure UX with no real data persistence, ensuring the interface remains robust without external risk.",
  },
  {
    question: "Can generated drafts be legally weaponized inside structural Cassation Court proceedings directly?",
    answer: "Generated drafts serve as compliance-ready templates and are not a substitute for qualified legal advice. They are intended to accelerate drafting, but final legal validation should always be performed by licensed counsel before court submission.",
  }
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 xl:grid-cols-[1.2fr_0.8fr]">
          <section className="space-y-8">
            <div className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">About Legal Buddy</div>
            <h1 className="text-4xl font-black text-slate-900 sm:text-5xl">Corporate mission & compliance intelligence</h1>
            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                Legal Buddy is designed to bridge AI tooling and Ethiopian legal compliance. Our platform helps businesses, legal teams, and independent practitioners interpret proclamations, align documents with local civil code mandates, and identify structural risks.
              </p>
              <p>
                We are committed to transparency, data security, and localized legal accuracy. The portal demonstrates how vectorized proclamation search, document composition, and consultant chat experiences can work together to support Ethiopian regulatory workflows.
              </p>
              <p>
                The system architecture is built around automated ingestion mechanisms, compliance scoring metrics, and multi-stage draft assembly. Each article is mapped to a legal source node, enabling the user to understand the regulatory basis behind each recommendation.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/pricing">
                <Button className="bg-indigo-600 text-white hover:bg-indigo-700 px-6 py-3 font-semibold">
                  Explore Pricing
                </Button>
              </Link>
              <Link href="/login" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
                Return to login
              </Link>
            </div>
          </section>

          <section className="space-y-6">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader className="px-6 py-6">
                <CardTitle className="text-xl font-bold text-slate-900">Frequently Asked Questions</CardTitle>
                <CardDescription className="text-sm text-slate-500">
                  Core design inquiries about Legal Buddy’s compliance engine.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 px-6 pb-6">
                {faqs.map((faq, index) => (
                  <div key={faq.question} className="rounded-3xl border border-slate-200">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900"
                    >
                      <span>{faq.question}</span>
                      <span className="text-indigo-600">{activeIndex === index ? "−" : "+"}</span>
                    </button>
                    {activeIndex === index ? (
                      <div className="px-5 pb-5 text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </div>
                    ) : null}
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
