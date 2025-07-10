"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { TooltipItem } from "chart.js"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
} from "chart.js"
import { Bar, Line, Doughnut } from "react-chartjs-2"
import {
  Home,
  BarChart3,
  MessageSquare,
  Settings,
  Users,
  TrendingUp,
  Activity,
  DollarSign,
  Menu,
  X,
  Bell,
  Search,
  ChevronUp,
  Eye,
  Download,
  Filter,
  Calendar,
  ArrowUpRight,
  Sparkles,
} from "lucide-react"
import { useRouter } from "next/navigation"

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, ArcElement)

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Monthly Performance",
      data: [400, 300, 600, 800, 500, 900],
      backgroundColor: "rgba(99, 102, 241, 0.8)",
      borderColor: "rgba(99, 102, 241, 1)",
      borderWidth: 1,
      borderRadius: 8,
      borderSkipped: false,
    },
  ],
}

const lineData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Users",
      data: [1200, 1900, 3000, 2780],
      borderColor: "rgba(99, 102, 241, 1)",
      backgroundColor: "rgba(99, 102, 241, 0.1)",
      tension: 0.4,
      fill: true,
    },
    {
      label: "Revenue",
      data: [2400, 1398, 9800, 3908],
      borderColor: "rgba(16, 185, 129, 1)",
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      tension: 0.4,
      fill: true,
    },
  ],
}

const doughnutData = {
  labels: ["Desktop", "Mobile", "Tablet"],
  datasets: [
    {
      data: [45, 35, 20],
      backgroundColor: ["rgba(99, 102, 241, 0.8)", "rgba(16, 185, 129, 0.8)", "rgba(245, 158, 11, 0.8)"],
      borderColor: ["rgba(99, 102, 241, 1)", "rgba(16, 185, 129, 1)", "rgba(245, 158, 11, 1)"],
      borderWidth: 2,
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        usePointStyle: true,
        padding: 20,
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      backgroundColor: "rgba(30, 41, 59, 0.95)",
      titleColor: "white",
      bodyColor: "white",
      borderColor: "rgba(99, 102, 241, 0.5)",
      borderWidth: 1,
      cornerRadius: 12,
      padding: 16,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          size: 12,
        },
      },
    },
    y: {
      grid: {
        color: "rgba(99, 102, 241, 0.1)",
      },
      ticks: {
        font: {
          size: 12,
        },
      },
    },
  },
}

const lineOptions = {
  ...chartOptions,
  interaction: {
    intersect: false,
    mode: "index" as const,
  },
  elements: {
    point: {
      radius: 6,
      hoverRadius: 8,
    },
  },
}

const doughnutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
      labels: {
        usePointStyle: true,
        padding: 20,
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      backgroundColor: "rgba(30, 41, 59, 0.95)",
      titleColor: "white",
      bodyColor: "white",
      borderColor: "rgba(99, 102, 241, 0.5)",
      borderWidth: 1,
      cornerRadius: 12,
      padding: 16,
      callbacks: {
        label: (context: TooltipItem<"doughnut">) => {
          const label = context.label || ""
          const value = context.parsed
          return `${label}: ${value}%`
        },
      },
    },
  },
  cutout: "65%",
}

// Enhanced Glassmorphism Loader Component
function GlassLoader({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-white/40 to-white/20 backdrop-blur-xl rounded-2xl border border-white/30 shadow-2xl ${className}`}
      style={{ minHeight: 80, ...style }}
    >
      {/* Glowing glassmorphism shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 rounded-2xl bg-white/20 blur-xl opacity-60 animate-glow" />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        {/* Optionally, a subtle glowing dot or bar can be added here for more effect */}
      </div>
    </div>
  )
}

export default function EnhancedDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  const navigation = [
    { name: "Dashboard", icon: Home, href: "/dashboard", current: true },
    { name: "Chat", icon: MessageSquare, href: "/chat", current: false, badge: "3" },
    { name: "Analytics", icon: BarChart3, href: "#", current: false },
    { name: "Users", icon: Users, href: "#", current: false },
    { name: "Settings", icon: Settings, href: "#", current: false },
  ]

  const stats = [
    {
      name: "Total Revenue",
      value: "$45,231",
      change: "+20.1%",
      changeType: "positive",
      icon: DollarSign,
      progress: 85,
      color: "from-emerald-500 to-emerald-600",
    },
    {
      name: "Active Users",
      value: "2,345",
      change: "+15.3%",
      changeType: "positive",
      icon: Users,
      progress: 72,
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "Conversion Rate",
      value: "3.24%",
      change: "+2.5%",
      changeType: "positive",
      icon: TrendingUp,
      progress: 68,
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Server Uptime",
      value: "99.9%",
      change: "+0.1%",
      changeType: "positive",
      icon: Activity,
      progress: 99,
      color: "from-orange-500 to-orange-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-72 flex-col bg-white/95 backdrop-blur-xl shadow-2xl border-r border-white/20">
          <div className="flex h-16 items-center justify-between px-6 border-b border-gray-200/50">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                HelloAI
              </span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href === "/chat") {
                    e.preventDefault()
                    router.push("/chat")
                  }
                }}
                className={`group flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  item.current
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25"
                    : "text-gray-700 hover:bg-gray-100 hover:scale-105"
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">{item.badge}</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white/80 backdrop-blur-xl border-r border-white/20 shadow-xl">
          <div className="flex h-16 items-center px-6 border-b border-gray-200/50">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                HelloAI
              </span>
            </div>
          </div>
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.href === "/chat") {
                    e.preventDefault()
                    router.push("/chat")
                  }
                }}
                className={`group flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  item.current
                    ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105"
                    : "text-gray-700 hover:bg-white/60 hover:scale-105 hover:shadow-md"
                }`}
              >
                <div className="flex items-center">
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </div>
                {item.badge && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                    {item.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-72">
        {/* Enhanced Top bar */}
        <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 py-4 sm:px-6 lg:px-8 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
              <div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Dashboard
                </h1>
                <p className="text-sm text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/60 backdrop-blur-sm border border-gray-200/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-transparent transition-all"
                />
              </div>
              {/* Notifications */}
              <button className="relative p-2 rounded-xl hover:bg-gray-100 transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              {/* Profile */}
              <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Dashboard content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => <GlassLoader key={i} className="h-40" />)
              : stats.map((stat, index) => (
                  <div
                    key={stat.name}
                    className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                    />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`p-3 bg-gradient-to-r ${stat.color} rounded-xl shadow-lg`}>
                          <stat.icon className="h-4 w-4 text-white" />
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">{stat.name}</p>
                        <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                        <div className="flex items-center">
                          <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
                          <span className="text-sm font-semibold text-emerald-600">{stat.change}</span>
                          <span className="text-sm text-gray-500 ml-2">from last month</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>

          {/* Enhanced Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Bar Chart */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Monthly Performance</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Filter className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Download className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="h-[320px]">
                {loading ? <GlassLoader className="h-full" /> : <Bar data={barData} options={chartOptions} />}
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Growth Trends</h3>
                <div className="flex items-center space-x-2">
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Calendar className="h-4 w-4 text-gray-500" />
                  </button>
                  <button className="p-2 rounded-lg hover:bg-gray-100 transition-colors">
                    <Eye className="h-4 w-4 text-gray-500" />
                  </button>
                </div>
              </div>
              <div className="h-[320px]">
                {loading ? <GlassLoader className="h-full" /> : <Line data={lineData} options={lineOptions} />}
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Doughnut Chart */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Device Usage</h3>
              <div className="h-[280px]">
                {loading ? (
                  <GlassLoader className="h-full" />
                ) : (
                  <Doughnut data={doughnutData} options={doughnutOptions} />
                )}
              </div>
            </div>

            {/* Enhanced Recent Activity */}
            <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-6 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">Recent Activity</h3>
                <button className="text-sm text-indigo-600 hover:text-indigo-700 font-medium">View all</button>
              </div>
              <div className="space-y-4">
                {loading
                  ? Array.from({ length: 5 }).map((_, i) => <GlassLoader key={i} className="h-16" />)
                  : [
                      { user: "Kaviyarasan", action: "completed a purchase", time: "2 minutes ago", type: "purchase" },
                      { user: "Naveen", action: "signed up for premium", time: "5 minutes ago", type: "signup" },
                      { user: "Sany", action: "updated profile", time: "10 minutes ago", type: "update" },
                      { user: "Sri Prakash", action: "left a review", time: "15 minutes ago", type: "review" },
                      { user: "Venkatesh", action: "shared content", time: "20 minutes ago", type: "share" },
                    ].map((activity, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-4 hover:bg-white/50 rounded-xl transition-all duration-200 group cursor-pointer"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="relative">
                          <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                            {activity.user
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </div>
                          <div
                            className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                              activity.type === "purchase"
                                ? "bg-emerald-500"
                                : activity.type === "signup"
                                  ? "bg-blue-500"
                                  : activity.type === "update"
                                    ? "bg-orange-500"
                                    : activity.type === "review"
                                      ? "bg-purple-500"
                                      : "bg-pink-500"
                            }`}
                          />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900 group-hover:text-gray-700">
                            <span className="font-semibold">{activity.user}</span> {activity.action}
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                        <ChevronUp className="h-4 w-4 text-gray-400 group-hover:text-gray-600 transition-colors" />
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-reverse {
          animation-direction: reverse;
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 32px 8px rgba(139,92,246,0.15), 0 0 0 0 rgba(99,102,241,0.08); }
          50% { box-shadow: 0 0 48px 16px rgba(139,92,246,0.25), 0 0 0 8px rgba(99,102,241,0.12); }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
          background-size: 200% 100%;
        }
        .animate-glow {
          animation: glow 2.2s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}
