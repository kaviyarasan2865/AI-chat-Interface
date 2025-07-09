"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowRight, Sparkles, Zap, Shield, Globe, Star, CheckCircle } from "lucide-react"

export default function LandingPage() {
  const router = useRouter()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleGetStarted = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Premium background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.05),transparent_50%)]"></div>

      {/* Navigation */}
      <nav className="relative z-10 px-6 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              HelloAI
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              About
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">
              Pricing
            </a>
            <button className="px-6 py-2.5 bg-white border border-gray-200 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm font-medium">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-16 lg:py-6">
        <div className="max-w-5xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Premium badge */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-full text-sm text-blue-700 mb-8 shadow-sm">
              <Star className="w-4 h-4 mr-2 text-amber-500" />
              Trusted by 10,000+ professionals
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              The Future of
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                AI Analytics
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Transform your data into actionable insights with our cutting-edge AI dashboard. Experience the power of
              intelligent analytics with enterprise-grade security and seamless user interaction.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
              <button
                onClick={handleGetStarted}
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-800/25 transition-all duration-300 flex items-center text-lg shadow-lg hover:scale-105"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all text-lg shadow-sm">
                Watch Demo
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="relative z-10 px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-700 mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Why Choose Our Platform
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Built for the Future of
              <span className="block text-blue-600">AI-Powered Applications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience next-generation analytics with enterprise-grade security, lightning-fast performance, and
              global scalability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Lightning Fast Performance",
                description:
                  "Real-time analytics and instant insights powered by advanced AI algorithms. Process millions of data points in milliseconds with our optimized infrastructure.",
                color: "from-amber-500 to-orange-500",
                bgColor: "bg-amber-50",
                borderColor: "border-amber-100",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Enterprise Security",
                description:
                  "Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection. Your data is always safe and secure.",
                color: "from-green-500 to-emerald-500",
                bgColor: "bg-green-50",
                borderColor: "border-green-100",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Scale",
                description:
                  "Built to scale globally with distributed infrastructure across 15+ regions. 99.99% uptime guaranteed with edge computing optimization.",
                color: "from-blue-800 to-purple-500",
                bgColor: "bg-blue-50",
                borderColor: "border-blue-100",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className={`group bg-white ${feature.bgColor} border ${feature.borderColor} rounded-3xl p-8 hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 hover:-translate-y-2`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 shadow-lg`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 px-6 py-20 bg-gradient-to-r from-gray-50 to-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10K+", label: "Active Users", color: "text-blue-600" },
              { number: "99.9%", label: "Uptime", color: "text-green-600" },
              { number: "50M+", label: "Data Points", color: "text-purple-600" },
              { number: "15+", label: "Global Regions", color: "text-amber-600" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Ready to Transform Your
            <span className="block text-blue-600">Data Analytics?</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professionals who trust our platform for their AI-powered analytics needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={handleGetStarted}
              className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-blue-800/25 transition-all duration-300 flex items-center text-lg shadow-lg hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all text-lg shadow-sm">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-10 blur-xl"></div>
      <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-10 blur-xl"></div>
    </div>
  )
}
