"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FolderOpen, Search, Upload, Download, Eye, FileText } from "lucide-react";
import { documents } from "@/lib/mock-data/documents";

const typeColors: Record<string, string> = {
  "Civil Code": "bg-purple-50 text-purple-700 border-purple-100",
  "Proclamation": "bg-blue-50 text-blue-700 border-blue-100",
  "Commercial Code": "bg-emerald-50 text-emerald-700 border-emerald-100",
};

export default function DocumentsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
            <FolderOpen className="h-6 w-6 text-indigo-600" />
            <span>Documents Library</span>
          </h2>
          <p className="text-base text-slate-500 mt-1">
            Browse and manage legal reference documents, proclamations, and codes.
          </p>
        </div>
        <Button className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-base px-5 py-2.5 h-auto rounded-xl shadow-sm flex items-center gap-2">
          <Upload className="h-5 w-5" />
          <span>Upload Document</span>
        </Button>
      </div>

      <Card className="border-slate-200 bg-white shadow-sm">
        <CardContent className="p-4 sm:p-6">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search documents..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-slate-900"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDocs.length === 0 ? (
          <Card className="border-slate-200 bg-white shadow-sm sm:col-span-2 lg:col-span-3">
            <CardContent className="p-12 text-center">
              <FolderOpen className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">No documents found</h3>
              <p className="text-sm text-slate-500">Try adjusting your search terms.</p>
            </CardContent>
          </Card>
        ) : (
          filteredDocs.map((doc) => (
            <Card
              key={doc.id}
              className="border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-slate-300 transition-all flex flex-col"
            >
              <CardHeader className="p-5 pb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-3 shadow-sm">
                  <FileText className="h-5 w-5 text-indigo-600" />
                </div>
                <CardTitle className="text-base font-bold text-slate-900 leading-snug">{doc.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-5 pt-0 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${typeColors[doc.type] || "bg-slate-50 text-slate-700 border-slate-200"}`}>
                      {doc.type}
                    </span>
                    <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${
                      doc.status === "Active" ? "bg-emerald-50 text-emerald-700 border-emerald-100" : "bg-slate-50 text-slate-700 border-slate-200"
                    }`}>
                      {doc.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 font-medium">Updated: {doc.lastUpdated}</p>
                </div>
                <div className="flex gap-2 mt-4 pt-3 border-t border-slate-100">
                  <Button variant="ghost" size="sm" className="text-slate-500 hover:text-indigo-600 rounded-lg text-xs font-bold flex-1">
                    <Eye className="h-3.5 w-3.5 mr-1" /> Preview
                  </Button>
                  <Button variant="ghost" size="sm" className="text-slate-500 hover:text-indigo-600 rounded-lg text-xs font-bold flex-1">
                    <Download className="h-3.5 w-3.5 mr-1" /> Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  );
}
