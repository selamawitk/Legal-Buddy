"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Scale, ShieldCheck, AlertTriangle, Globe } from "lucide-react";

// Structured mock search response representing the future RAG pipeline output
const mockSearchLawData = [
  {
    id: "RES-101",
    title: "Article 27 - Severance Pay Rates",
    proclamation: "Ethiopian Labor Proclamation No. 1156/2019",
    snippet: "Where a contract of employment is terminated under this Proclamation, severance pay shall be calculated on the basis of the worker’s average salary over the preceding 6 months...",
    relevanceScore: "98%",
    citations: ["Art. 27(1)", "Art. 39 Contextual Reference", "Fed. Cassation File No. 84920"],
    language: "English / Amharic reference"
  },
  {
    id: "RES-102",
    title: "Article 32 - Period of Notice Termination",
    proclamation: "Ethiopian Labor Proclamation No. 1156/2019",
    snippet: "The period of notice for terminating a contract of employment shall be given in writing and must not be less than one month from the effective date specified...",
    relevanceScore: "89%",
    citations: ["Art. 32(2)", "Civil Code Art. 2570 cross-map"],
    language: "English Only"
  }
];

export default function AILegalSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedResult, setSelectedResult] = useState<typeof mockSearchLawData[0] | null>(null);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setHasSearched(true);
    setSelectedResult(mockSearchLawData[0]);
  };

  return (
    <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-6 text-base">
      
      {/* AI Legal Search Page Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
          <Search className="h-6 w-6 text-indigo-600" />
          <span>AI Legal Search</span>
        </h2>
        <p className="text-base text-slate-500 mt-1">
          Query cross-referenced federal proclamations, labor codes, and civil directives instantly using semantic vector layers.
        </p>
      </div>

      {/* Search Input Controller */}
      <Card className="border-slate-200 bg-white shadow-sm overflow-hidden">
        <CardContent className="p-6">
          <form onSubmit={handleSearchSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                <Search className="h-5 w-5" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g., What is the severance pay under Labor Proclamation 1156/2019?"
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all text-slate-900 shadow-sm"
              />
            </div>
            <Button 
              type="submit"
              className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-base px-6 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 h-auto"
            >
              <span>Execute AI Search</span>
            </Button>
          </form>
          
          <div className="flex flex-wrap items-center gap-2.5 mt-5 text-sm font-bold text-slate-400">
            <span className="uppercase text-xs tracking-wider text-slate-500">Suggested Filters:</span>
            <button 
              type="button" 
              onClick={() => setSearchQuery("Labor Proclamation 1156/2019")} 
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700 flex items-center gap-2"
            >
              <Scale className="h-4 w-4 text-slate-500" />
              <span>Labor Law</span>
            </button>
            <button 
              type="button" 
              onClick={() => setSearchQuery("Commercial registration tax mandates")} 
              className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors text-slate-700 flex items-center gap-2"
            >
              <Scale className="h-4 w-4 text-slate-500" />
              <span>Commercial Code</span>
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Main Search Page View Layout */}
      {!hasSearched ? (
        <div className="border border-dashed border-slate-200 bg-slate-50/50 rounded-2xl p-12 text-center max-w-xl mx-auto space-y-4">
          <div className="w-14 h-14 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-sm mx-auto">
            <Search className="h-6 w-6 text-indigo-600" />
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-bold text-slate-900">Awaiting Search Input</h4>
            <p className="text-base text-slate-500 max-w-sm mx-auto leading-relaxed">
              Input a legal question targeting federal mandates. Our vector index maps semantic proximity directly back to verified legal source provisions.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3 items-start">
          
          {/* Search Results Cards Container */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Semantic Matching Records ({mockSearchLawData.length})</h3>
            
            {mockSearchLawData.map((result) => {
              const isSelected = selectedResult?.id === result.id;
              return (
                <div 
                  key={result.id}
                  onClick={() => setSelectedResult(result)}
                  className={`p-6 bg-white border rounded-xl shadow-sm cursor-pointer transition-all ${
                    isSelected 
                      ? "border-indigo-600 ring-2 ring-indigo-600/5" 
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div className="space-y-2">
                      <span className="inline-flex text-xs font-bold text-indigo-700 uppercase bg-indigo-50 border border-indigo-100 px-2.5 py-1 rounded">
                        {result.proclamation}
                      </span>
                      <h4 className="text-lg font-bold text-slate-900">{result.title}</h4>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-block text-sm font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg border border-emerald-100">
                        {result.relevanceScore} match
                      </span>
                    </div>
                  </div>
                  <p className="text-base text-slate-600 leading-relaxed line-clamp-3 mb-5">
                    "{result.snippet}"
                  </p>
                  <div className="flex items-center justify-between text-sm font-bold text-slate-500 border-t border-slate-100 pt-4">
                    <span className="flex items-center gap-2 text-slate-600">
                      <Globe className="h-4 w-4 text-slate-400" />
                      <span>{result.language}</span>
                    </span>
                    <span className="text-indigo-600 flex items-center gap-1.5">
                      <span>View Citation Index</span>
                      <span className="text-base">→</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Citation Cards Panel */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Verified Legal Citations</h3>
            
            {selectedResult ? (
              <Card className="border-slate-200 bg-white shadow-sm sticky top-24">
                <CardHeader className="p-6 pb-4 border-b border-slate-100">
                  <CardTitle className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2.5">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                    <span>Source Verification Map</span>
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-slate-500 truncate mt-1">
                    {selectedResult.title}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="space-y-2.5">
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Context Source Block</span>
                    <p className="text-base text-slate-600 bg-slate-50 rounded-xl p-4 border border-slate-100 leading-relaxed shadow-inner">
                      {selectedResult.snippet}
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Strict Citation Mappings</span>
                    <div className="space-y-2">
                      {selectedResult.citations.map((cite, index) => (
                        <div key={index} className="flex items-center gap-3 text-base font-bold text-slate-700 bg-indigo-50/40 border border-indigo-100/50 rounded-xl p-3.5">
                          <Scale className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                          <span>{cite}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 text-base text-amber-900 leading-relaxed flex items-start gap-3 p-4 rounded-xl">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold block mb-0.5">Developer Notice:</span> 
                      During portfolio evaluation, explain to recruiters how this interface connects to an active <code className="bg-amber-100/60 px-1 py-0.5 rounded text-amber-950 font-mono text-sm font-bold">pgvector</code> retrieval framework parsing legal nodes.
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center text-base text-slate-400 font-bold">
                Select a result card to inspect citation parameters.
              </div>
            )}
          </div>

        </div>
      )}

    </div>
  );
}