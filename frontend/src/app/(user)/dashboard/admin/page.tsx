"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Users,
  FileText,
  TrendingUp,
  Activity,
  UserCheck,
  UserX,
  MoreHorizontal,
  Search,
} from "lucide-react";
import { users } from "@/lib/mock-data/users";

export default function AdminDashboardPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [userList, setUserList] = useState(users);

  const metrics = [
    { title: "Total Users", value: "1,247", change: "+12%", icon: Users, tint: "bg-blue-50 text-blue-600 border-blue-100" },
    { title: "Active Contracts", value: "384", change: "+8%", icon: FileText, tint: "bg-purple-50 text-purple-600 border-purple-100" },
    { title: "Pro Users", value: "523", change: "+18%", icon: TrendingUp, tint: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { title: "Pending Signatures", value: "47", change: "-3%", icon: Activity, tint: "bg-amber-50 text-amber-600 border-amber-100" },
  ];

  const toggleStatus = (id: string) => {
    setUserList(userList.map((u) =>
      u.id === id ? { ...u, status: u.status === "Active" ? "Inactive" as const : "Active" as const } : u
    ));
  };

  const filteredUsers = userList.filter((u) =>
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
          <ShieldCheck className="h-6 w-6 text-indigo-600" />
          <span>Admin Dashboard</span>
        </h2>
        <p className="text-base text-slate-500 mt-1">
          Platform overview, user management, and system analytics.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          return (
            <Card key={idx} className="border-slate-200 bg-white shadow-sm hover:shadow-md transition-all">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 p-5 pb-3">
                <CardTitle className="text-sm font-bold text-slate-500 tracking-tight">{metric.title}</CardTitle>
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shadow-sm ${metric.tint}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </CardHeader>
              <CardContent className="p-5 pt-0 space-y-1">
                <div className="text-3xl font-bold text-slate-900 tracking-tight">{metric.value}</div>
                <div className={`text-sm font-bold ${metric.change.startsWith("+") ? "text-emerald-600" : "text-rose-600"}`}>
                  {metric.change} this month
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="border-slate-200 bg-white shadow-sm lg:col-span-2">
          <CardHeader className="p-6">
            <CardTitle className="text-lg font-bold text-slate-900">Charts Overview</CardTitle>
            <CardDescription className="text-sm text-slate-500">Monthly platform activity metrics</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <div className="h-48 bg-gradient-to-r from-indigo-50 via-indigo-50/50 to-slate-50 rounded-xl border border-slate-200 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 text-indigo-400 mx-auto mb-2" />
                <p className="text-sm font-bold text-slate-500">Analytics Chart</p>
                <p className="text-xs text-slate-400 mt-1">Mock chart - Real data from backend</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 bg-white shadow-sm">
          <CardHeader className="p-6">
            <CardTitle className="text-lg font-bold text-slate-900">Recent Activity</CardTitle>
            <CardDescription className="text-sm text-slate-500">Latest platform events</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-4">
            {[
              { action: "New user registered", time: "2 mins ago", icon: UserCheck, color: "text-emerald-600" },
              { action: "Contract analysis completed", time: "15 mins ago", icon: FileText, color: "text-blue-600" },
              { action: "Pro plan subscription", time: "1 hour ago", icon: TrendingUp, color: "text-purple-600" },
              { action: "User deactivated", time: "3 hours ago", icon: UserX, color: "text-rose-600" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <Icon className={`h-4 w-4 ${item.color} flex-shrink-0`} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-slate-700 truncate">{item.action}</p>
                    <p className="text-xs text-slate-400">{item.time}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-200 bg-white shadow-sm">
        <CardHeader className="p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-lg font-bold text-slate-900">User Management</CardTitle>
              <CardDescription className="text-sm text-slate-500">
                Manage registered users and their account status.
              </CardDescription>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search users..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-t border-slate-100 bg-slate-50/50">
                  <th className="text-left font-bold text-slate-500 px-6 py-3.5">Name</th>
                  <th className="text-left font-bold text-slate-500 px-6 py-3.5">Email</th>
                  <th className="text-left font-bold text-slate-500 px-6 py-3.5">Plan</th>
                  <th className="text-left font-bold text-slate-500 px-6 py-3.5">Status</th>
                  <th className="text-left font-bold text-slate-500 px-6 py-3.5">Joined</th>
                  <th className="text-right font-bold text-slate-500 px-6 py-3.5">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-bold text-slate-800 capitalize">{user.name}</span>
                    </td>
                    <td className="px-6 py-4 text-slate-600">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${
                        user.plan === "Pro" ? "bg-indigo-50 text-indigo-700 border-indigo-100" : "bg-slate-50 text-slate-600 border-slate-200"
                      }`}>
                        {user.plan}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => toggleStatus(user.id)}
                        className={`text-xs font-bold px-2.5 py-1 rounded-md border flex items-center gap-1.5 ${
                          user.status === "Active"
                            ? "bg-emerald-50 text-emerald-700 border-emerald-100 hover:bg-emerald-100"
                            : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {user.status === "Active" ? <UserCheck className="h-3 w-3" /> : <UserX className="h-3 w-3" />}
                        {user.status}
                      </button>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">{user.joinedDate}</td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-slate-600 rounded-lg">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
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
