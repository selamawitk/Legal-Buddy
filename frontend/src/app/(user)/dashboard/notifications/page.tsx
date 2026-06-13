"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, CheckCircle, AlertTriangle, Info, CheckCheck, Trash2 } from "lucide-react";
import { notifications } from "@/lib/mock-data/notifications";

const typeIcons: Record<string, any> = {
  success: CheckCircle,
  warning: AlertTriangle,
  info: Info,
};

const typeColors: Record<string, string> = {
  success: "bg-emerald-50 text-emerald-600 border-emerald-100",
  warning: "bg-amber-50 text-amber-600 border-amber-100",
  info: "bg-blue-50 text-blue-600 border-blue-100",
};

export default function NotificationsPage() {
  const [items, setItems] = useState(notifications);

  const markAllRead = () => {
    setItems(items.map((n) => ({ ...n, isRead: true })));
  };

  const clearAll = () => {
    setItems([]);
  };

  const unreadCount = items.filter((n) => !n.isRead).length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
            <Bell className="h-6 w-6 text-indigo-600" />
            <span>Notifications</span>
            {unreadCount > 0 && (
              <span className="text-xs font-bold bg-indigo-600 text-white px-2 py-0.5 rounded-full">
                {unreadCount}
              </span>
            )}
          </h2>
          <p className="text-base text-slate-500 mt-1">
            Stay updated with contract statuses, payments, and legal alerts.
          </p>
        </div>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <Button onClick={markAllRead} variant="outline" className="border-slate-200 text-slate-600 font-bold rounded-xl text-sm">
              <CheckCheck className="h-4 w-4 mr-2" />
              Mark All Read
            </Button>
          )}
          {items.length > 0 && (
            <Button onClick={clearAll} variant="ghost" className="text-slate-400 hover:text-rose-500 rounded-xl text-sm font-bold">
              <Trash2 className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          )}
        </div>
      </div>

      {items.length === 0 ? (
        <Card className="border-slate-200 bg-white shadow-sm">
          <CardContent className="p-12 text-center">
            <Bell className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">All caught up!</h3>
            <p className="text-sm text-slate-500">No notifications at this time.</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-2">
          {items.map((notification) => {
            const Icon = typeIcons[notification.type] || Info;
            const colorClass = typeColors[notification.type] || typeColors.info;
            return (
              <Card
                key={notification.id}
                className={`border-slate-200 bg-white shadow-sm hover:shadow-md transition-all ${
                  !notification.isRead ? "border-l-4 border-l-indigo-500" : ""
                }`}
              >
                <CardContent className="p-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 shadow-sm ${colorClass}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2.5 mb-1">
                        <h4 className={`text-base ${notification.isRead ? "font-semibold text-slate-700" : "font-bold text-slate-900"}`}>
                          {notification.title}
                        </h4>
                        {!notification.isRead && (
                          <span className="w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0" />
                        )}
                      </div>
                      <p className="text-sm text-slate-500 font-medium">{notification.description}</p>
                      <p className="text-xs text-slate-400 font-semibold mt-1.5">{notification.timeAgo}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
