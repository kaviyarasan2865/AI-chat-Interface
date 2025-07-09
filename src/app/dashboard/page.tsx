"use client"

import { useState } from "react"
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
      backgroundColor: "rgba(59, 130, 246, 0.8)",
      borderColor: "rgba(59, 130, 246, 1)",
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
      borderColor: "rgba(59, 130, 246, 1)",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
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
      backgroundColor: ["rgba(59, 130, 246, 0.8)", "rgba(16, 185, 129, 0.8)", "rgba(245, 158, 11, 0.8)"],
      borderColor: ["rgba(59, 130, 246, 1)", "rgba(16, 185, 129, 1)", "rgba(245, 158, 11, 1)"],
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
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "white",
      bodyColor: "white",
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: 1,
      cornerRadius: 8,
      padding: 12,
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
        color: "rgba(0, 0, 0, 0.1)",
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
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      titleColor: "white",
      bodyColor: "white",
      borderColor: "rgba(255, 255, 255, 0.1)",
      borderWidth: 1,
      cornerRadius: 8,
      padding: 12,
      callbacks: {
        label: (context: TooltipItem<'doughnut'>) => {
          const label = context.label || ""
          const value = context.parsed
          return `${label}: ${value}%`
        },
      },
    },
  },
  cutout: "60%",
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { name: "Dashboard", icon: Home, href: "/dashboard", current: true },
    { name: "Analytics", icon: BarChart3, href: "#", current: false },
    { name: "Chat", icon: MessageSquare, href: "/chat", current: false },
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
    },
    {
      name: "Active Users",
      value: "2,345",
      change: "+15.3%",
      changeType: "positive",
      icon: Users,
    },
    {
      name: "Conversion Rate",
      value: "3.24%",
      change: "+2.5%",
      changeType: "positive",
      icon: TrendingUp,
    },
    {
      name: "Server Uptime",
      value: "99.9%",
      change: "+0.1%",
      changeType: "positive",
      icon: Activity,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden ${sidebarOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="fixed inset-y-0 left-0 flex w-64 flex-col bg-white shadow-xl">
          <div className="flex h-16 items-center justify-between px-4">
            <span className="text-xl font-semibold">AI Dashboard</span>
            <button onClick={() => setSidebarOpen(false)}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 px-4 py-4">
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
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg mb-1 ${
                  item.current ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white border-r border-gray-200 shadow-sm">
          <div className="flex h-16 items-center px-4 border-b border-gray-200">
            <span className="text-xl font-semibold text-gray-900">AI Dashboard</span>
          </div>
          <nav className="flex-1 px-4 py-4">
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
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg mb-1 transition-colors ${
                  item.current ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button className="lg:hidden mr-4" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {/* Stats */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-sm font-medium text-green-600">{stat.change}</span>
                  <span className="text-sm text-gray-500 ml-2">from last month</span>
                </div>
              </div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Bar Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h3>
              <div className="h-[300px]">
                <Bar data={barData} options={chartOptions} />
              </div>
            </div>

            {/* Line Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Growth Trends</h3>
              <div className="h-[300px]">
                <Line data={lineData} options={lineOptions} />
              </div>
            </div>
          </div>

          {/* Doughnut Chart and Recent Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Doughnut Chart */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Device Usage</h3>
              <div className="h-[250px]">
                <Doughnut data={doughnutData} options={doughnutOptions} />
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { user: "John Doe", action: "completed a purchase", time: "2 minutes ago" },
                  { user: "Jane Smith", action: "signed up for premium", time: "5 minutes ago" },
                  { user: "Mike Johnson", action: "updated profile", time: "10 minutes ago" },
                  { user: "Sarah Wilson", action: "left a review", time: "15 minutes ago" },
                  { user: "Tom Brown", action: "shared content", time: "20 minutes ago" },
                ].map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {activity.user
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">
                        <span className="font-medium">{activity.user}</span> {activity.action}
                      </p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
