"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Phone,
  MessageSquare,
  Heart,
  Puzzle,
  Settings,
  ExternalLink,
  TrendingUp,
  TrendingDown,
  Users,
  PhoneCall,
  Clock,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  LogOut,
} from "lucide-react";

const sidebarItems = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { id: "calls", label: "Calls", icon: Phone },
  { id: "chatbot", label: "Chatbot", icon: MessageSquare },
  { id: "care", label: "Care", icon: Heart },
  { id: "integrations", label: "Integrations", icon: Puzzle },
  { id: "settings", label: "Settings", icon: Settings },
];

const tabs = ["Overview", "Calls", "Chatbot", "Care", "Settings"];

const stats = [
  {
    label: "Total Calls",
    value: "247",
    trend: "+12%",
    up: true,
    icon: PhoneCall,
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    label: "Prayer Requests",
    value: "18",
    trend: "+3",
    up: true,
    icon: Heart,
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    label: "New Visitors",
    value: "12",
    trend: "+5",
    up: true,
    icon: Users,
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    label: "Uptime",
    value: "99.8%",
    trend: "Stable",
    up: true,
    icon: CheckCircle2,
    color: "text-[#D4AF37]",
    bg: "bg-amber-50",
  },
];

const recentCalls = [
  {
    time: "2:34 PM",
    caller: "Sarah M.",
    duration: "3:12",
    type: "Prayer Request",
    status: "Handled",
  },
  {
    time: "1:15 PM",
    caller: "Unknown",
    duration: "1:45",
    type: "Service Info",
    status: "Handled",
  },
  {
    time: "12:02 PM",
    caller: "James T.",
    duration: "4:28",
    type: "Visitor",
    status: "Transferred",
  },
  {
    time: "11:30 AM",
    caller: "Mary K.",
    duration: "2:05",
    type: "Directions",
    status: "Handled",
  },
  {
    time: "10:18 AM",
    caller: "Robert J.",
    duration: "0:42",
    type: "Prayer Request",
    status: "Voicemail",
  },
];

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Handled: "bg-emerald-50 text-emerald-700",
    Transferred: "bg-blue-50 text-blue-700",
    Voicemail: "bg-stone-100 text-stone-600",
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${styles[status] || "bg-stone-100 text-stone-600"}`}
    >
      {status}
    </span>
  );
}

function TypeBadge({ type }: { type: string }) {
  const icons: Record<string, React.ReactNode> = {
    "Prayer Request": <Heart size={12} />,
    "Service Info": <Clock size={12} />,
    Visitor: <Users size={12} />,
    Directions: <AlertCircle size={12} />,
  };
  return (
    <span className="inline-flex items-center gap-1.5 text-stone-600">
      {icons[type]}
      {type}
    </span>
  );
}

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="flex min-h-screen bg-stone-50">
      {/* Sidebar */}
      <aside className="w-64 bg-stone-900 text-white flex flex-col shrink-0">
        {/* Logo */}
        <div className="px-5 py-5 border-b border-stone-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#D4AF37] to-amber-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">CW</span>
            </div>
            <span
              className="text-lg font-semibold"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              ChurchWiseAI
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-stone-800 text-white border-l-[3px] border-[#D4AF37] -ml-px"
                    : "text-stone-400 hover:text-stone-200 hover:bg-stone-800/50"
                }`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Bottom link */}
        <div className="px-3 py-4 border-t border-stone-800">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 text-sm text-stone-500 hover:text-stone-300 transition-colors rounded-lg hover:bg-stone-800/50"
          >
            <ExternalLink size={18} />
            Back to site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-stone-200 px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <h1 className="text-lg font-semibold text-stone-900">
              Grace Community Church
            </h1>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Live
            </span>
          </div>
          <button className="flex items-center gap-2 text-sm text-stone-500 hover:text-stone-700 transition-colors">
            <LogOut size={16} />
            Logout
          </button>
        </header>

        {/* Tab bar */}
        <div className="bg-white border-b border-stone-200 px-6 shrink-0">
          <div className="flex gap-0">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-[#D4AF37] text-stone-900"
                    : "border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Dashboard content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Page header */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-stone-900">Dashboard</h2>
            <p className="text-sm text-stone-500 mt-1">
              Overview of your AI voice agent and chatbot activity this month.
            </p>
          </div>

          {/* Stat cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white rounded-lg shadow-sm border border-stone-200 p-5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${stat.bg} ${stat.color} flex items-center justify-center`}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-medium ${
                        stat.up ? "text-emerald-600" : "text-rose-600"
                      }`}
                    >
                      {stat.up ? (
                        <TrendingUp size={14} />
                      ) : (
                        <TrendingDown size={14} />
                      )}
                      {stat.trend}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-stone-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-stone-500 mt-0.5">{stat.label}</p>
                </div>
              );
            })}
          </div>

          {/* Recent activity table */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200">
            <div className="px-5 py-4 border-b border-stone-200 flex items-center justify-between">
              <h3 className="text-sm font-semibold text-stone-900">
                Recent Calls
              </h3>
              <button className="text-sm text-[#D4AF37] hover:text-[#a07d1c] font-medium inline-flex items-center gap-1 transition-colors">
                View all
                <ChevronRight size={14} />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-stone-100">
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Time
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Caller
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Duration
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="text-left px-5 py-3 text-xs font-medium text-stone-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {recentCalls.map((call, i) => (
                    <tr
                      key={i}
                      className="hover:bg-stone-50 transition-colors"
                    >
                      <td className="px-5 py-3.5 text-sm text-stone-600">
                        {call.time}
                      </td>
                      <td className="px-5 py-3.5 text-sm font-medium text-stone-900">
                        {call.caller}
                      </td>
                      <td className="px-5 py-3.5 text-sm text-stone-600">
                        {call.duration}
                      </td>
                      <td className="px-5 py-3.5 text-sm">
                        <TypeBadge type={call.type} />
                      </td>
                      <td className="px-5 py-3.5">
                        <StatusPill status={call.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
