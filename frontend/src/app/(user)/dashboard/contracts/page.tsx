"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Plus, Search, Download, Trash2, Filter, FileCheck, FilePenLine, Clock } from "lucide-react";
import { contracts } from "@/lib/mock-data/contracts";

const statusColors: Record<string, string> = {
  Signed: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Draft: "bg-amber-50 text-amber-700 border-amber-100",
  "Under Review": "bg-blue-50 text-blue-700 border-blue-100",
};

export default function MyContractsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<string>("All");

  const filteredContracts = contracts.filter((c) => {
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "All" || c.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
            <FileText className="h-6 w-6 text-indigo-600" />
            <span>My Contracts</span>
          </h2>
          <p className="text-base text-slate-500 mt-1">
            Manage and track all your legal documents in one place.
          </p>
        </div>
        <Link href="/dashboard/contracts/generate">
          <Button className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-base px-5 py-2.5 h-auto rounded-xl shadow-sm flex items-center gap-2">
            <Plus className="h-5 w-5" />
            <span>New Contract</span>
          </Button>
        </Link>
      </div>

      <Card className="border-slate-200 bg-white shadow-sm">
        <CardContent className="p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search contracts..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-slate-900"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {["All", "Signed", "Draft", "Under Review"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-xl text-sm font-bold border transition-all ${
                    filter === f
                      ? "bg-indigo-50 text-indigo-600 border-indigo-200"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {filteredContracts.length === 0 ? (
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardContent className="p-12 text-center">
              <FileText className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">No contracts found</h3>
              <p className="text-sm text-slate-500 mb-6">
                {searchTerm ? "Try adjusting your search or filters." : "Create your first contract to get started."}
              </p>
              {!searchTerm && (
                <Link href="/dashboard/contracts/generate">
                  <Button className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Contract
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ) : (
          filteredContracts.map((contract) => (
            <Card
              key={contract.id}
              className="border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              <CardContent className="p-5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <FileText className="h-5.5 w-5.5 text-indigo-600" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2.5 mb-1">
                        <h4 className="text-base font-bold text-slate-900 truncate">{contract.title}</h4>
                        <span
                          className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${
                            statusColors[contract.status] || "bg-slate-50 text-slate-700 border-slate-200"
                          }`}
                        >
                          {contract.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 font-medium">
                        <span>{contract.type}</span>
                        <span className="text-slate-300">|</span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5" />
                          {contract.updatedAt}
                        </span>
                        {contract.amount && (
                          <>
                            <span className="text-slate-300">|</span>
                            <span className="font-semibold text-slate-700">{contract.amount}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 rounded-lg">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-slate-400 hover:text-rose-500 rounded-lg">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
