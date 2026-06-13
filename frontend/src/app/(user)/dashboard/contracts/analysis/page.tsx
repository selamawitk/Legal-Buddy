"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Upload, FileText, AlertTriangle, CheckCircle, Lightbulb, Scale, X, ArrowLeft } from "lucide-react";
import Link from "next/link";

const mockResults = {
  risks: [
    { severity: "high", clause: "Force Majeure", description: "No provision for pandemic or regulatory shutdown events.", recommendation: "Add a pandemic clause referencing Civil Code Art. 1793." },
    { severity: "medium", clause: "Termination Clause", description: "Notice period is ambiguous regarding electronic delivery methods.", recommendation: "Specify email as valid written notice under Art. 32(2) of Labor Proc. 1156/2019." },
    { severity: "low", clause: "Indemnification", description: "Indemnification cap is missing a gross negligence exception.", recommendation: "Add standard exception for willful misconduct or gross negligence." },
  ],
  clauses: [
    "Governing Law (Ethiopian Civil Code)",
    "Confidentiality / Non-Disclosure",
    "Dispute Resolution (Arbitration)",
    "Termination for Convenience",
    "Limitation of Liability",
  ],
  score: 72,
};

export default function ContractAnalysisPage() {
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<typeof mockResults | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type === "application/pdf") {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setResults(mockResults);
    }, 2000);
  };

  const handleReset = () => {
    setFile(null);
    setResults(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/dashboard/contracts" className="text-slate-400 hover:text-slate-600 transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
            <FileText className="h-6 w-6 text-indigo-600" />
            <span>Contract Analysis</span>
          </h2>
          <p className="text-base text-slate-500 mt-1">
            Upload a contract document for AI-powered risk detection, clause identification, and compliance recommendations.
          </p>
        </div>
      </div>

      {!results ? (
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardContent className="p-8">
            <div
              onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl p-12 text-center transition-all ${
                dragOver ? "border-indigo-500 bg-indigo-50/50" : "border-slate-200 bg-slate-50/30"
              }`}
            >
              {file ? (
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mx-auto shadow-sm">
                    <FileText className="h-7 w-7 text-indigo-600" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">{file.name}</p>
                    <p className="text-sm text-slate-500 mt-1">{(file.size / 1024).toFixed(1)} KB</p>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Button
                      onClick={handleAnalyze}
                      disabled={analyzing}
                      className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-base px-6 py-2.5 h-auto rounded-xl shadow-sm"
                    >
                      {analyzing ? "Analyzing..." : "Run AI Analysis"}
                    </Button>
                    <Button
                      onClick={handleReset}
                      variant="outline"
                      className="border-slate-200 text-slate-600 font-bold rounded-xl"
                    >
                      <X className="h-4 w-4 mr-1" /> Remove
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto shadow-sm">
                    <Upload className="h-7 w-7 text-slate-400" />
                  </div>
                  <div>
                    <p className="text-base font-bold text-slate-900">
                      Drag & drop your contract here
                    </p>
                    <p className="text-sm text-slate-500 mt-1">
                      or click to browse (PDF format supported)
                    </p>
                  </div>
                  <label className="inline-block cursor-pointer">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-sm rounded-xl shadow-sm transition-all">
                      <Upload className="h-4 w-4" />
                      Browse Files
                    </span>
                    <input type="file" accept=".pdf" onChange={handleFileSelect} className="hidden" />
                  </label>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader className="p-6">
                <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  <span>Risk Detection</span>
                </CardTitle>
                <CardDescription className="text-sm text-slate-500">
                  {results.risks.length} potential issues identified
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0 space-y-3">
                {results.risks.map((risk, i) => (
                  <div
                    key={i}
                    className={`rounded-xl border p-5 ${
                      risk.severity === "high"
                        ? "border-rose-200 bg-rose-50/50"
                        : risk.severity === "medium"
                        ? "border-amber-200 bg-amber-50/50"
                        : "border-slate-200 bg-slate-50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        risk.severity === "high"
                          ? "bg-rose-100 text-rose-700"
                          : risk.severity === "medium"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-slate-100 text-slate-700"
                      }`}>
                        <AlertTriangle className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="text-base font-bold text-slate-900">{risk.clause}</span>
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-md border uppercase ${
                            risk.severity === "high"
                              ? "bg-rose-100 text-rose-700 border-rose-200"
                              : risk.severity === "medium"
                              ? "bg-amber-100 text-amber-700 border-amber-200"
                              : "bg-slate-100 text-slate-700 border-slate-200"
                          }`}>
                            {risk.severity}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 mb-2">{risk.description}</p>
                        <div className="flex items-start gap-2 text-sm text-indigo-700 bg-indigo-50/80 rounded-lg p-3 border border-indigo-100/50">
                          <Lightbulb className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span className="font-medium">{risk.recommendation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader className="p-6">
                <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                  <CheckCircle className="h-5 w-5 text-emerald-600" />
                  <span>Detected Clauses</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex flex-wrap gap-2">
                  {results.clauses.map((clause, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 flex items-center gap-2"
                    >
                      <Scale className="h-4 w-4 text-indigo-500" />
                      {clause}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-slate-200 bg-white shadow-sm">
              <CardHeader className="p-6">
                <CardTitle className="text-lg font-bold text-slate-900">Compliance Score</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-center">
                <div className="w-28 h-28 rounded-full bg-indigo-50 border-4 border-indigo-100 flex items-center justify-center mx-auto shadow-sm">
                  <span className="text-3xl font-black text-indigo-600">{results.score}%</span>
                </div>
                <p className="text-sm text-slate-500 mt-4 font-medium">
                  {results.score >= 80 ? "Good compliance level" : results.score >= 60 ? "Moderate compliance - improvements needed" : "Significant compliance gaps detected"}
                </p>
              </CardContent>
            </Card>

            <Button
              onClick={handleReset}
              variant="outline"
              className="w-full border-slate-200 text-slate-600 font-bold rounded-xl py-3 h-auto"
            >
              <Upload className="h-4 w-4 mr-2" />
              Analyze New Document
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
