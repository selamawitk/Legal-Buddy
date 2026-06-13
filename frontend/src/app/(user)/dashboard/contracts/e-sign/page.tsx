"use client";

import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {   Signature, Trash2, CheckCircle, Download, ArrowLeft, FileText } from "lucide-react";
import Link from "next/link";

export default function ESignaturePage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasSignature, setHasSignature] = useState(false);
  const [signed, setSigned] = useState(false);
  const [contractName, setContractName] = useState("Rental Agreement - Bole, Addis Ababa");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = canvas.offsetWidth * 2;
      canvas.height = canvas.offsetHeight * 2;
      canvas.style.width = `${canvas.offsetWidth}px`;
      canvas.style.height = `${canvas.offsetHeight}px`;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.scale(2, 2);
        ctx.strokeStyle = "#1e293b";
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    setIsDrawing(true);
    const rect = canvas.getBoundingClientRect();
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top;
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top;
    ctx.lineTo(x, y);
    ctx.stroke();
    setHasSignature(true);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSignature(false);
    setSigned(false);
  };

  const handleSign = () => {
    if (!hasSignature) return;
    setSigned(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Link href="/dashboard/contracts" className="text-slate-400 hover:text-slate-600 transition-colors">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
            <Signature className="h-6 w-6 text-indigo-600" />
            <span>E-Signature</span>
          </h2>
          <p className="text-base text-slate-500 mt-1">
            Draw, clear, and apply your digital signature securely onto legal documents.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader className="p-6">
              <CardTitle className="text-lg font-bold text-slate-900 flex items-center gap-2.5">
                <FileText className="h-5 w-5 text-slate-500" />
                <span>Document Preview</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 min-h-[300px] shadow-inner">
                <div className="space-y-4 text-sm text-slate-700 leading-relaxed">
                  <p className="font-bold text-base text-slate-900">{contractName}</p>
                  <p>This agreement is entered into between Abebe Kebede (Lessor) and Chaltu Alemu (Lessee).</p>
                  <p>The parties agree to the terms and conditions set forth in this document, including rent payment, maintenance obligations, and governing law under the Civil Code of Ethiopia.</p>
                  <div className="border-t border-slate-200 pt-4 mt-4">
                    <p className="font-semibold text-slate-800 mb-2">Signature Area:</p>
                    {signed ? (
                      <div className="bg-white border border-emerald-200 rounded-xl p-6 flex flex-col items-center gap-2">
                        <CheckCircle className="h-8 w-8 text-emerald-500" />
                        <p className="text-sm font-bold text-emerald-700">Document Signed</p>
                      </div>
                    ) : (
                      <div className="bg-white border-2 border-dashed border-slate-300 rounded-xl p-6 text-center text-slate-400 text-sm font-medium">
                        Signature will appear here after signing
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="border-slate-200 bg-white shadow-sm">
            <CardHeader className="p-6">
              <CardTitle className="text-lg font-bold text-slate-900">Signature Pad</CardTitle>
              <CardDescription className="text-sm text-slate-500">
                Draw your signature below using mouse or touch
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 space-y-4">
              <div className="border-2 border-slate-200 rounded-xl overflow-hidden bg-white">
                <canvas
                  ref={canvasRef}
                  className="w-full h-40 cursor-crosshair touch-none"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                  onTouchStart={startDrawing}
                  onTouchMove={draw}
                  onTouchEnd={stopDrawing}
                />
              </div>
              {signed && (
                <div className="flex items-center gap-2.5 text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-3">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-bold text-sm">Signature applied successfully</span>
                </div>
              )}
              <div className="flex gap-2">
                <Button
                  onClick={handleSign}
                  disabled={!hasSignature || signed}
                  className="flex-1 bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl shadow-sm disabled:opacity-50"
                >
                  <CheckCircle className="h-4 w-4 mr-2" />
                  {signed ? "Signed" : "Sign Document"}
                </Button>
                <Button
                  onClick={clearSignature}
                  variant="outline"
                  className="border-slate-200 text-slate-600 font-bold rounded-xl"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Clear
                </Button>
              </div>
              {signed && (
                <Button className="w-full bg-slate-900 text-white hover:bg-slate-800 font-bold rounded-xl shadow-sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download Signed Document
                </Button>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
