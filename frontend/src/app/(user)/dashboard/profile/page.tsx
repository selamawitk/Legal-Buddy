"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Save, Camera, Mail, Building, Phone, MapPin } from "lucide-react";

export default function ProfilePage() {
  const [form, setForm] = useState({
    fullName: "Abebe Alula",
    email: "abebe@legalbuddy.et",
    company: "LegalBuddy Tech Solutions PLC",
    phone: "+251 911 234 567",
    location: "Addis Ababa, Ethiopia",
    bio: "Legal professional specializing in Ethiopian commercial and labor law compliance.",
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setSaved(false);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
          <User className="h-6 w-6 text-indigo-600" />
          <span>Profile Settings</span>
        </h2>
        <p className="text-base text-slate-500 mt-1">
          Manage your personal information and account preferences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-slate-200 bg-white shadow-sm lg:col-span-2">
          <CardHeader className="p-6">
            <CardTitle className="text-lg font-bold text-slate-900">Personal Information</CardTitle>
            <CardDescription className="text-sm text-slate-500">
              Update your account details and contact information.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <form onSubmit={handleSave} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <User className="h-4 w-4 text-slate-400" /> Full Name
                  </label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-800 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-slate-400" /> Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-800 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Building className="h-4 w-4 text-slate-400" /> Company
                  </label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-800 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Phone className="h-4 w-4 text-slate-400" /> Phone
                  </label>
                  <input
                    type="text"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-800 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-400" /> Location
                  </label>
                  <input
                    type="text"
                    value={form.location}
                    onChange={(e) => handleChange("location", e.target.value)}
                    className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-800 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-sm font-bold text-slate-700">Bio</label>
                  <textarea
                    value={form.bio}
                    onChange={(e) => handleChange("bio", e.target.value)}
                    rows={3}
                    className="border border-slate-200 bg-white rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-slate-800 shadow-sm resize-none"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <Button
                  type="submit"
                  className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold rounded-xl shadow-sm"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Save Changes
                </Button>
                {saved && (
                  <span className="text-sm font-bold text-emerald-600">Changes saved successfully!</span>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader className="p-6">
            <CardTitle className="text-lg font-bold text-slate-900">Profile Picture</CardTitle>
            <CardDescription className="text-sm text-slate-500">
              Upload a profile photo
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-4">
            <div className="w-28 h-28 rounded-full bg-indigo-600 flex items-center justify-center mx-auto shadow-md">
              <span className="text-4xl font-black text-white">AA</span>
            </div>
            <label className="block cursor-pointer">
              <div className="flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-100 transition-all">
                <Camera className="h-4 w-4" />
                Change Photo
              </div>
              <input type="file" accept="image/*" className="hidden" />
            </label>

            <div className="border-t border-slate-100 pt-4 mt-4">
              <h4 className="text-sm font-bold text-slate-700 mb-3">Account Summary</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Plan</span>
                  <span className="font-bold text-slate-800">Free Account</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Member Since</span>
                  <span className="font-bold text-slate-800">May 2024</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Contracts</span>
                  <span className="font-bold text-slate-800">4</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
