"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Folder, Search, FileText, FilePenLine, FileCheck, AlertTriangle, CheckCircle, Lightbulb } from "lucide-react";
import { contracts } from "@/lib/mock-data/contracts";

export default function DashboardHome() {
  const currentContractsCount = contracts?.length || 0;

  const stats = [
    { title: "Active Managed Documents", value: currentContractsCount, desc: "Saved templates & files", icon: Folder, tint: "bg-indigo-50 text-indigo-600 border-indigo-100/50" },
    { title: "RAG Proclamation Queries", value: "14 / 50", desc: "Monthly allowance remaining", icon: Search, tint: "bg-blue-50 text-blue-600 border-blue-100/50" },
    { title: "AI Generations Completed", value: "2", desc: "Out of 3 safe generations", icon: FileText, tint: "bg-purple-50 text-purple-600 border-purple-100/50" },
    { title: "Pending Signatures", value: "1", desc: "Awaiting execution map", icon: FilePenLine, tint: "bg-amber-50 text-amber-600 border-amber-100/50" },
  ];

  const activities = [
    { id: 1, action: "Analyzed Uploaded Contract", detail: "Commercial Lease Agreement (Bole, Addis Ababa)", time: "2 hours ago", icon: AlertTriangle, status: "Risk Detected" },
    { id: 2, action: "Queried Ethiopian Labor Law", detail: "Proclamation No. 1156/2019 Severance calculations", time: "Yesterday", icon: Search, status: "Success" },
    { id: 3, action: "Generated Custom Contract", detail: "Freelance Services Agreement (English/Amharic)", time: "3 days ago", icon: FileCheck, status: "Draft" },
  ];

  return (
    <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6 text-base">
      
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-6 translate-x-6 w-64 h-64 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />
        <div className="space-y-2 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center gap-2.5">
            <span>Salam, Abebe!</span>
            <span className="text-2xl">🇪🇹</span>
          </h2>
          <p className="text-base text-slate-300 max-w-xl leading-relaxed">
            Welcome to your AI Legal Workspace. Query proclamations, build binding custom templates, or inspect compliance structural vulnerabilities instantly.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto relative z-10">
          <Link href="/dashboard/search" className="w-full sm:w-auto">
            <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-base px-5 py-3 h-auto flex items-center justify-center gap-2 shadow-sm rounded-xl">
              <Search className="h-5 w-5" />
              <span>New AI Search</span>
            </Button>
          </Link>
          <Link href="/dashboard/contracts" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20 font-bold text-base px-5 py-3 h-auto flex items-center justify-center gap-2 transition-all rounded-xl">
              <FileText className="h-5 w-5" />
              <span>Create Contract</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Metrics Section */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">Current Usage Metrics</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 p-5 pb-3">
                  <CardTitle className="text-sm font-bold text-slate-500 tracking-tight">{stat.title}</CardTitle>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-sm ${stat.tint}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-1">
                  <div className="text-3xl font-bold text-slate-900 tracking-tight">{stat.value}</div>
                  <p className="text-sm text-slate-400 font-bold">{stat.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Activity and Sidebar */}
      <div className="grid gap-6 lg:grid-cols-3 items-start">
        
        {/* Workspace Activity */}
        <Card className="lg:col-span-2 border-slate-200 bg-white shadow-sm">
          <CardHeader className="p-6">
            <CardTitle className="text-lg font-bold text-slate-900 tracking-tight">Recent Workspace Activity</CardTitle>
            <CardDescription className="text-sm font-medium text-slate-500 mt-1">Historical records of your localized agent iterations</CardDescription>
          </CardHeader>
          <CardContent className="divide-y divide-slate-100 p-0 border-t border-slate-100">
            {activities.map((act) => {
              const ActivityIcon = act.icon;
              return (
                <div key={act.id} className="flex items-center justify-between p-5 hover:bg-slate-50/50 transition-colors">
                  <div className="flex items-start gap-3.5 flex-1 min-w-0 pr-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <ActivityIcon className="h-5 w-5 text-slate-500" />
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <p className="text-base font-bold text-slate-800 truncate">{act.action}</p>
                        <span className={`text-xs px-2.5 py-0.5 rounded-md font-bold border ${
                          act.status.includes("Risk") 
                            ? "bg-rose-50 text-rose-700 border-rose-100" 
                            : act.status === "Success" 
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100" 
                            : "bg-slate-50 text-slate-700 border-slate-200"
                        }`}>
                          {act.status}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 font-medium truncate">{act.detail}</p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-sm text-slate-400 font-bold">{act.time}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Upsell Sidebar */}
        <Card className="border-slate-200 bg-white shadow-sm flex flex-col justify-between min-h-[380px]">
          <CardHeader className="p-6 space-y-2.5">
            <div className="w-fit rounded-full bg-indigo-50 border border-indigo-100 px-3 py-1 text-xs font-bold text-indigo-700 flex items-center gap-1.5">
              <Lightbulb className="h-4 w-4" />
              <span>Pro Tip</span>
            </div>
            <CardTitle className="text-lg font-bold text-slate-900 tracking-tight">Unlock Agent Tools</CardTitle>
            <CardDescription className="text-sm font-medium text-slate-500">Upgrade to Premium for integrated features</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0 text-base text-slate-600 leading-relaxed font-medium">
            <p>
              Your account currently defaults to our free exploratory structure limit. Pro layers allow automatic <b>Telebirr email alerting pipelines</b>, continuous multi-document uploads, and unlimited custom legal analysis execution profiles.
            </p>
          </CardContent>
          <div className="p-6 pt-0 mt-auto">
            <Link href="/pricing" className="w-full block">
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-base py-3 h-auto shadow-sm flex items-center justify-center gap-2 rounded-xl">
                <span>View Pricing Tiers</span>
                <CheckCircle className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </Card>
        
      </div>
    </div>
  );
}