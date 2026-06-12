"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, MessageSquare, Scale, Send, HelpCircle, FileText } from "lucide-react";

const mockConversations = [
  { id: "chat_1", title: "Severance & Proclamation 1156", date: "2 hours ago", active: true },
  { id: "chat_2", title: "Bole Apartment Lease Review", date: "Yesterday", active: false },
  { id: "chat_3", title: "Freelance Tax Obligation", date: "3 days ago", active: false },
];

const initialMessages = [
  {
    id: "msg_1",
    sender: "user",
    text: "Can a real estate lease contract in Addis Ababa be terminated without a 3-month written warning notice?",
    time: "2:15 PM"
  },
  {
    id: "msg_2",
    sender: "agent",
    text: "According to the Ethiopian Civil Code and localized real estate directives, residential or commercial leases typically require an explicit written notice as structured within your signed terms. Under Civil Code Article 2937, unless gross defaults occur (e.g., non-payment of lease value), a notice period is structurally mandated.",
    time: "2:16 PM",
    isAgent: true,
    citations: ["Civil Code Art. 2937", "Federal Proclamation Mandates"]
  }
];

export default function AILegalChatPage() {
  const [conversations, setConversations] = useState(mockConversations);
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMsg = {
      id: `msg_${Date.now()}`,
      sender: "user",
      text: inputMessage,
      time: "Just Now"
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");

    setTimeout(() => {
      const agentMsg = {
        id: `msg_${Date.now() + 1}`,
        sender: "agent",
        text: "I am indexing your prompt against current Ethiopian legal nodes. In accordance with your template context, all operational amendments must be submitted to the local structural document registry to remain binding.",
        time: "Just Now",
        isAgent: true,
        citations: ["Labor Code Ref 1156/2019", "Constitutional Art. 40 Amendment Context"]
      };
      setMessages((prev) => [...prev, agentMsg]);
    }, 1000);
  };

  const selectConversation = (id: string) => {
    setConversations(
      conversations.map((c) => ({ ...c, active: c.id === id }))
    );
    setMessages(initialMessages);
  };

  const startNewChat = () => {
    setConversations([
      { id: `chat_${Date.now()}`, title: "New Legal Consultation", date: "Just now", active: true },
      ...conversations.map((c) => ({ ...c, active: false }))
    ]);
    setMessages([]);
  };

  return (
    <div className="w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 flex items-center gap-2.5">
          <MessageSquare className="h-6 w-6 text-indigo-600" />
          <span>AI Chat Interface</span>
        </h2>
      </div>

      <div className="h-[calc(100vh-14rem)] min-h-[550px] flex flex-col md:flex-row border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden text-base">
        
        {/* SIDEBAR - CONVERSATIONS */}
        <div className="w-full md:w-72 border-b md:border-b-0 md:border-r border-slate-200 bg-slate-50 flex flex-col h-56 md:h-full">
          <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-white flex-shrink-0">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Conversations</h3>
            <Button 
              onClick={startNewChat}
              size="default" 
              variant="outline" 
              className="text-sm font-semibold h-9 px-3 border-slate-200 hover:text-indigo-600 hover:bg-indigo-50 text-slate-700 flex items-center gap-2"
            >
              <Plus className="h-4 w-4" />
              <span>New Chat</span>
            </Button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-3 space-y-2">
            {conversations.map((chat) => (
              <div
                key={chat.id}
                onClick={() => selectConversation(chat.id)}
                className={`w-full text-left p-4 rounded-xl cursor-pointer transition-all select-none border ${
                  chat.active
                    ? "bg-white border-slate-200 text-indigo-600 shadow-sm"
                    : "bg-transparent border-transparent text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <p className="text-base font-bold truncate">{chat.title}</p>
                <p className="text-sm text-slate-400 mt-1">{chat.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CHAT DISPLAY PANELS */}
        <div className="flex-1 flex flex-col bg-white h-full min-w-0">
          {messages.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-md mx-auto space-y-5">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shadow-sm">
                <HelpCircle className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-2">
                <h4 className="text-base font-bold text-slate-900">Start a conversation</h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  Ask specific questions regarding Ethiopian Labor mandates, company registration, taxation rules, or property management provisions.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2.5 w-full pt-2">
                <button 
                  onClick={() => setInputMessage("What are the minimum wage regulations in Ethiopia?")}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-indigo-500 hover:text-indigo-600 transition-all text-left flex items-center gap-2.5"
                >
                  <Scale className="h-4 w-4 text-slate-400 flex-shrink-0" />
                  <span className="truncate">Minimum Wage Regulations?</span>
                </button>
                <button 
                  onClick={() => setInputMessage("Draft an indemnity clause for software services.")}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 hover:border-indigo-500 hover:text-indigo-600 transition-all text-left flex items-center gap-2.5"
                >
                  <FileText className="h-4 w-4 text-slate-400 flex-shrink-0" />
                  <span className="truncate">Draft Indemnity Clause?</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
              {messages.map((msg) => (
                <div 
                  key={msg.id} 
                  className={`flex w-full ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-2xl rounded-2xl p-4 sm:p-5 space-y-3 shadow-xs border ${
                    msg.sender === "user"
                      ? "bg-slate-900 border-slate-900 text-white rounded-tr-none"
                      : "bg-slate-50 border-slate-200 text-slate-900 rounded-tl-none"
                  }`}>
                    {/* Cleaned up message block headers & increased text body visibility */}
                    <p className="leading-relaxed whitespace-pre-wrap text-base font-medium">
                      {msg.text}
                    </p>
                    
                    {msg.isAgent && msg.citations && (
                      <div className="pt-3 border-t border-slate-200 space-y-2">
                        <span className="text-xs font-bold uppercase text-slate-400 tracking-wider block">Context Verification:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.citations.map((cite, i) => (
                            <span key={i} className="text-xs bg-indigo-50 text-indigo-700 font-bold border border-indigo-100 px-2.5 py-1 rounded-md flex items-center gap-1.5">
                              <Scale className="h-3.5 w-3.5" />
                              <span>{cite}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="text-xs text-right opacity-60 font-medium">
                      {msg.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* INPUT FORM CONTROL LAYERS */}
          <div className="p-4 border-t border-slate-200 bg-white flex-shrink-0">
            <form onSubmit={handleSendMessage} className="flex gap-3 items-stretch">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Ask Legal Buddy anything regarding Ethiopian legal compliance..."
                className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-base font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 text-slate-900 placeholder-slate-400"
              />
              <Button 
                type="submit"
                className="bg-indigo-600 text-white hover:bg-indigo-700 font-bold text-base px-5 rounded-xl transition-all shadow-sm flex items-center gap-2 shrink-0"
              >
                <span>Send</span>
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}