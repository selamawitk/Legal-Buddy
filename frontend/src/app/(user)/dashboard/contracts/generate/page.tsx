"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Home, Briefcase, Settings2, Printer, FilePen, Trash2, ArrowLeft } from "lucide-react";
import Link from "next/link";

const CONTRACT_TEMPLATES = [
  {
    id: "lease",
    title: "Residential Lease Agreement",
    description: "Standard residential tenancy agreement compliant with Civil Code leasing standards.",
    icon: Home,
    fields: [
      { name: "lessorName", label: "Lessor (Landlord) Full Name", placeholder: "e.g., Abebe Kebede" },
      { name: "lesseeName", label: "Lessee (Tenant) Full Name", placeholder: "e.g., Chaltu Alemu" },
      { name: "propertyAddress", label: "Property Physical Location / Description", placeholder: "e.g., Bole Sub-City, Woreda 03, House No. 402" },
      { name: "monthlyRent", label: "Monthly Rent Amount (ETB)", placeholder: "e.g., 25,000" },
      { name: "securityDeposit", label: "Security Deposit Amount (ETB)", placeholder: "e.g., 50,000" },
    ],
    generatePreview: (vals: any) => `
RESIDENTIAL LEASE AGREEMENT
==============================================
Conformed safely under provisions of the Civil Code of Ethiopia.

1. PARTIES
This Residential Lease Agreement ("Agreement") is dynamically finalized by and between:
LANDLORD / LESSOR: ${vals.lessorName || "[Lessor Name]"}
TENANT / LESSEE: ${vals.lesseeName || "[Lessee Name]"}

2. PREMISES
The Lessor hereby agrees to lease out the real property framework residing cleanly at:
PROPERTY ADDRESS: ${vals.propertyAddress || "[Property Address Location Nodes]"}

3. FINANCIAL TERMS & RENT OBLIGATIONS
* Monthly Rent Due: ${vals.monthlyRent ? `${vals.monthlyRent} ETB` : "[Rent Value] ETB"} payable on the first day of every operational calendar month.
* Mandatory Security Escrow Deposit: ${vals.securityDeposit ? `${vals.securityDeposit} ETB` : "[Deposit Value] ETB"} held bound as collateral protection.

4. GOVERNING COMPLIANCE
This agreement is governed directly under the general obligations, frameworks, and declarations embedded within the Civil Code of the Federal Democratic Republic of Ethiopia.

IN WITNESS WHEREOF, the parties execute this instrument.

___________________________            ___________________________
Lessor (Signature & Date)              Lessee (Signature & Date)
    `.trim()
  },
  {
    id: "employment",
    title: "Standard Employment Contract",
    description: "Configured cleanly against standard provisions within Labor Proclamation No. 1156/2019.",
    icon: Briefcase,
    fields: [
      { name: "companyName", label: "Employer / Company Name", placeholder: "e.g., LegalBuddy Tech Solutions PLC" },
      { name: "employeeName", label: "Employee Full Name", placeholder: "e.g., Dawit Yohannes" },
      { name: "jobTitle", label: "Designated Professional Title", placeholder: "e.g., Senior Full Stack Engineer" },
      { name: "baseSalary", label: "Gross Base Monthly Salary (ETB)", placeholder: "e.g., 45,000" },
    ],
    generatePreview: (vals: any) => `
CONTRACT OF EMPLOYMENT
==============================================
Executed pursuant to the terms of Ethiopian Labor Proclamation No. 1156/2019.

1. CONTRACTING SIDES
This formal compact is struck cleanly between the operational entities below:
EMPLOYER: ${vals.companyName || "[Employer Enterprise Node]"}
EMPLOYEE: ${vals.employeeName || "[Employee Individual Node]"}

2. POSITION AND SCOPE OF REVENUE CORES
* Official Title Node: The individual is securely assigned to perform services as a ${vals.jobTitle || "[Job Title / Function Workspace]"}.
* Compensation Framework: The Employer agrees to render a gross base monthly salary profile of exactly ${vals.baseSalary ? `${vals.baseSalary} ETB` : "[Gross Value] ETB"}, subject to statutory income tax deductions.

3. STATUTORY COMPLIANCE BOUNDARIES
Both parties verify full allegiance to the minimum and maximum guidelines defined cleanly within current regional labor directives.

IN WITNESS WHEREOF, the structural sides initialize this agreement below.

___________________________            ___________________________
Authorized Employer Rep                Employee Signature
    `.trim()
  }
];

export default function ContractGeneratorPage() {
  const [currentStep, setCurrentStep] = useState<"select" | "form" | "preview">("select");
  const [selectedTemplate, setSelectedTemplate] = useState<typeof CONTRACT_TEMPLATES[0] | null>(null);
  const [formValues, setFormValues] = useState<Record<string, string>>({});

  const handleSelectTemplate = (template: typeof CONTRACT_TEMPLATES[0]) => {
    setSelectedTemplate(template);
    const initialVals: Record<string, string> = {};
    template.fields.forEach(f => initialVals[f.name] = "");
    setFormValues(initialVals);
    setCurrentStep("form");
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleReset = () => {
    setSelectedTemplate(null);
    setFormValues({});
    setCurrentStep("select");
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
            <span>Contract Generator</span>
          </h2>
          <p className="text-base text-slate-500 mt-1">
            Select dynamic baselines, inject operational parameters, and export legal documentation perfectly aligned with structural proclamations.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5 border border-slate-200 bg-white rounded-xl p-4 text-sm font-bold text-slate-400 shadow-sm">
        <span className={`px-3 py-1 rounded-lg ${currentStep === "select" ? "bg-indigo-50 text-indigo-600" : "text-slate-400"}`}>1. Template</span>
        <span className="text-slate-300">→</span>
        <span className={`px-3 py-1 rounded-lg ${currentStep === "form" ? "bg-indigo-50 text-indigo-600" : "text-slate-400"}`}>2. Details</span>
        <span className="text-slate-300">→</span>
        <span className={`px-3 py-1 rounded-lg ${currentStep === "preview" ? "bg-indigo-50 text-indigo-600" : "text-slate-400"}`}>3. Preview</span>
      </div>

      {currentStep === "select" && (
        <div className="grid gap-4 sm:grid-cols-2">
          {CONTRACT_TEMPLATES.map((template) => {
            const IconComponent = template.icon;
            return (
              <Card
                key={template.id}
                className="border-slate-200 bg-white hover:border-indigo-500 hover:shadow-md cursor-pointer transition-all"
                onClick={() => handleSelectTemplate(template)}
              >
                <CardHeader className="flex flex-row items-start gap-4 p-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-600 flex-shrink-0 shadow-sm">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="space-y-1.5">
                    <CardTitle className="text-lg font-bold text-slate-800">{template.title}</CardTitle>
                    <CardDescription className="text-base text-slate-500 leading-relaxed">{template.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      )}

      {currentStep === "form" && selectedTemplate && (
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader className="p-6">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-2">
              <button onClick={handleReset} className="text-indigo-600 hover:text-indigo-700 font-semibold flex items-center gap-1">
                <ArrowLeft className="h-4 w-4" /> Back to templates
              </button>
            </div>
            <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
              <Settings2 className="h-6 w-6 text-slate-500" />
              <span>Configure {selectedTemplate.title}</span>
            </CardTitle>
            <CardDescription className="text-base text-slate-500">
              Provide specific operational data parameters below to structure your customized compliance output.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {selectedTemplate.fields.map((field) => (
                <div key={field.name} className="flex flex-col gap-2">
                  <label className="text-base font-bold text-slate-700">{field.label}</label>
                  <input
                    type="text"
                    value={formValues[field.name] || ""}
                    onChange={(e) => handleInputChange(field.name, e.target.value)}
                    placeholder={field.placeholder}
                    className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-800 placeholder-slate-400 shadow-sm"
                  />
                </div>
              ))}
            </div>

            <div className="flex gap-3 justify-end pt-5 border-t border-slate-100">
              <Button onClick={handleReset} variant="outline" className="text-base font-bold h-11 border-slate-200 text-slate-600 px-5 rounded-xl">
                Cancel
              </Button>
              <Button onClick={() => setCurrentStep("preview")} className="bg-indigo-600 text-white hover:bg-indigo-700 text-base font-bold h-11 px-5 rounded-xl shadow-sm">
                Generate Draft
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {currentStep === "preview" && selectedTemplate && (
        <div className="grid gap-6 lg:grid-cols-3 items-start">
          <Card className="border-slate-200 bg-white shadow-sm lg:col-span-2">
            <CardContent className="p-6">
              <pre className="whitespace-pre-wrap font-mono text-sm text-slate-800 leading-relaxed bg-slate-50 border border-slate-200 p-5 rounded-xl max-h-[700px] overflow-y-auto shadow-inner">
                {selectedTemplate.generatePreview(formValues)}
              </pre>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader className="p-6">
              <CardTitle className="text-lg font-bold text-slate-800">Draft Inspector</CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <p className="text-base text-slate-500 leading-relaxed">
                Review your dynamic layout nodes before exporting to external PDF structures.
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  onClick={() => window.print()}
                  className="w-full bg-slate-900 text-white hover:bg-slate-800 text-base font-bold h-11 rounded-xl shadow-sm flex items-center justify-center gap-2"
                >
                  <Printer className="h-5 w-5" />
                  <span>Export to PDF</span>
                </Button>
                <Button
                  onClick={() => setCurrentStep("form")}
                  variant="outline"
                  className="w-full text-base font-bold h-11 border-slate-200 text-slate-600 rounded-xl flex items-center justify-center gap-2"
                >
                  <FilePen className="h-5 w-5" />
                  <span>Edit Variables</span>
                </Button>
                <Button
                  onClick={handleReset}
                  variant="ghost"
                  className="w-full text-base font-bold h-11 text-rose-600 hover:bg-rose-50 rounded-xl flex items-center justify-center gap-2"
                >
                  <Trash2 className="h-5 w-5" />
                  <span>Discard</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
