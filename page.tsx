"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  BarChart3,
  Shield,
  Zap,
  TrendingUp,
  Users,
  DollarSign,
  Github,
  Twitter,
  MessageCircle,
  Calculator,
  Globe,
  Award,
  CheckCircle,
  ArrowUpRight,
  Wallet,
  PieChart,
  Target,
  Rocket,
  Brain,
  Layers,
  Plus,
  Mail,
  ChevronDown,
  Menu,
  X,
  Play,
  Star,
  Coins,
  TrendingDown,
  RefreshCw,
} from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

export default function HomePage() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [depositAmount, setDepositAmount] = useState("1000")
  const [selectedTimeframe, setSelectedTimeframe] = useState("1year")
  const [currentStat, setCurrentStat] = useState(0)
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Stats data
  const stats = [
    { label: "Total Value Locked", value: "$847.2M", change: "+12.5%" },
    { label: "Average APY", value: "24.7%", change: "+2.1%" },
    { label: "Active Users", value: "156.8K", change: "+8.2%" },
    { label: "Protocols", value: "47", change: "+5 new" },
  ]

  // Timeframes for calculator
  const timeframes = {
    "1month": { multiplier: 0.02, label: "1 Month" },
    "3months": { multiplier: 0.06, label: "3 Months" },
    "6months": { multiplier: 0.12, label: "6 Months" },
    "1year": { multiplier: 0.247, label: "1 Year" },
  }

  // FAQ data
  const faqs = [
    {
      question: "What is QuantumYield?",
      answer:
        "QuantumYield is a next-generation DeFi protocol that uses quantum-inspired algorithms to optimize yield farming strategies across multiple blockchain networks.",
    },
    {
      question: "How does the quantum optimization work?",
      answer:
        "Our proprietary algorithms analyze thousands of yield opportunities in real-time, automatically rebalancing your portfolio to maximize returns while minimizing risk.",
    },
    {
      question: "Is my money safe?",
      answer:
        "Yes, we employ bank-grade security measures including multi-signature wallets, smart contract audits by leading firms, and insurance coverage for deposited funds.",
    },
    {
      question: "What are the fees?",
      answer:
        "We charge a competitive 2% performance fee only on profits generated. There are no deposit or withdrawal fees for our users.",
    },
    {
      question: "How do I get started?",
      answer:
        "Simply connect your Web3 wallet, deposit your crypto assets, and our quantum algorithms will start optimizing your yields automatically.",
    },
  ]

  // Live price data simulation
  const [liveData, setLiveData] = useState({
    btc: { price: 43250, change: 2.4 },
    eth: { price: 2456, change: -1.2 },
    qy: { price: 12.45, change: 8.7 },
  })

  // Calculate yield
  const calculateYield = () => {
    const amount = Number.parseFloat(depositAmount) || 0
    const multiplier = timeframes[selectedTimeframe as keyof typeof timeframes].multiplier
    return (amount * multiplier).toFixed(2)
  }

  // Navigation handlers
  const handleLaunchApp = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/staking")
      setIsLoading(false)
    }, 1000)
  }

  const handleStartEarning = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/staking")
      setIsLoading(false)
    }, 800)
  }

  const handleViewDemo = () => {
    setIsLoading(true)
    setTimeout(() => {
      router.push("/app")
      setIsLoading(false)
    }, 1000)
  }

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  // Auto-rotate stats
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  // Update live prices
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData((prev) => ({
        btc: {
          price: prev.btc.price + (Math.random() - 0.5) * 100,
          change: prev.btc.change + (Math.random() - 0.5) * 0.5,
        },
        eth: {
          price: prev.eth.price + (Math.random() - 0.5) * 50,
          change: prev.eth.change + (Math.random() - 0.5) * 0.3,
        },
        qy: {
          price: prev.qy.price + (Math.random() - 0.5) * 0.5,
          change: prev.qy.change + (Math.random() - 0.5) * 0.2,
        },
      }))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-black via-slate-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-3000"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 px-4 lg:px-6 h-16 flex items-center border-b border-white/10 backdrop-blur-sm bg-black/20 sticky top-0">
        <Link className="flex items-center justify-center" href="/">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <span className="ml-2 text-xl font-bold text-white">QuantumYield</span>
        </Link>

        {/* Live Price Ticker */}
        <div className="hidden lg:flex items-center ml-8 space-x-6 text-sm">
          <div className="flex items-center space-x-2">
            <span className="text-orange-400">BTC</span>
            <span className="text-white">${liveData.btc.price.toFixed(0)}</span>
            <span className={liveData.btc.change >= 0 ? "text-green-400" : "text-red-400"}>
              {liveData.btc.change >= 0 ? "+" : ""}
              {liveData.btc.change.toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-blue-400">ETH</span>
            <span className="text-white">${liveData.eth.price.toFixed(0)}</span>
            <span className={liveData.eth.change >= 0 ? "text-green-400" : "text-red-400"}>
              {liveData.eth.change >= 0 ? "+" : ""}
              {liveData.eth.change.toFixed(1)}%
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-400">QY</span>
            <span className="text-white">${liveData.qy.price.toFixed(2)}</span>
            <span className={liveData.qy.change >= 0 ? "text-green-400" : "text-red-400"}>
              {liveData.qy.change >= 0 ? "+" : ""}
              {liveData.qy.change.toFixed(1)}%
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <button
            onClick={() => scrollToSection("features")}
            className="text-sm font-medium text-white/80 hover:text-green-400 transition-colors cursor-pointer"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("stats")}
            className="text-sm font-medium text-white/80 hover:text-green-400 transition-colors cursor-pointer"
          >
            Stats
          </button>
          <button
            onClick={() => scrollToSection("calculator")}
            className="text-sm font-medium text-white/80 hover:text-green-400 transition-colors cursor-pointer"
          >
            Calculator
          </button>
          <button
            onClick={() => scrollToSection("roadmap")}
            className="text-sm font-medium text-white/80 hover:text-green-400 transition-colors cursor-pointer"
          >
            Roadmap
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="text-sm font-medium text-white/80 hover:text-green-400 transition-colors cursor-pointer"
          >
            Team
          </button>
        </nav>

        <div className="ml-4 flex items-center gap-2">
          <Button
            variant="outline"
            className="hidden sm:flex border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent"
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>
          <Button
            className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600"
            onClick={handleLaunchApp}
            disabled={isLoading}
          >
            {isLoading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : null}
            Launch App
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black/90 backdrop-blur-sm border-b border-white/10 md:hidden">
            <nav className="flex flex-col p-4 space-y-2">
              <button
                onClick={() => scrollToSection("features")}
                className="text-sm font-medium text-white/80 hover:text-green-400 transition-colors py-2 text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("stats")}
                className="text-sm font-medium text-white/80 hover:text-green-400 transition-colors py-2 text-left"
              >
                Stats
              </button>
              <button
                onClick={() => scrollToSection("calculator")}
                className="text-sm font-medium text-white/80 hover:text-green-400 transition-colors py-2 text-left"
              >
                Calculator
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="text-sm font-medium text-white/80 hover:text-green-400 transition-colors py-2 text-left"
              >
                Roadmap
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-sm font-medium text-white/80 hover:text-green-400 transition-colors py-2 text-left"
              >
                Team
              </button>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 relative z-10">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-green-500/20 text-green-300 border-green-500/30 animate-pulse">
                  🚀 Next-Gen DeFi Protocol - Now Live!
                </Badge>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white animate-fade-in">
                  Quantum-Powered
                  <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-gradient">
                    {" "}
                    Yields
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl leading-relaxed">
                  Harness the power of quantum algorithms to maximize your DeFi yields. Experience unprecedented returns
                  with our revolutionary yield optimization protocol that adapts in real-time.
                </p>
              </div>

              {/* Animated Stats Preview */}
              <div className="bg-white/5 backdrop-blur-sm border border-green-500/20 rounded-lg p-6 min-w-[350px] hover:scale-105 transition-transform">
                <div className="text-sm text-white/60 mb-1">{stats[currentStat].label}</div>
                <div className="text-3xl font-bold text-white mb-1">{stats[currentStat].value}</div>
                <div className="text-sm text-green-400 flex items-center justify-center">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {stats[currentStat].change}
                </div>
                <div className="flex justify-center mt-3 space-x-1">
                  {stats.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentStat ? "bg-green-400" : "bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg shadow-green-500/25"
                  onClick={handleStartEarning}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Rocket className="mr-2 h-4 w-4" />
                  )}
                  Start Earning Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 bg-transparent shadow-lg shadow-blue-500/25"
                  onClick={handleViewDemo}
                  disabled={isLoading}
                >
                  {isLoading ? <RefreshCw className="mr-2 h-4 w-4 animate-spin" /> : <Play className="mr-2 h-4 w-4" />}
                  View Live Demo
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 mt-8 text-sm text-white/60">
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <Shield className="h-4 w-4 text-green-400" />
                  Audited by CertiK
                </div>
                <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Award className="h-4 w-4 text-blue-400" />
                  $10M Insurance Coverage
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Users className="h-4 w-4 text-cyan-400" />
                  150K+ Active Users
                </div>
                <div className="flex items-center gap-2 hover:text-purple-400 transition-colors">
                  <Star className="h-4 w-4 text-purple-400" />
                  5-Star Rated
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Trading Section */}
        <section className="w-full py-12 bg-black/30 backdrop-blur-sm border-y border-white/10">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Live Market Data</h2>
              <p className="text-gray-400">Real-time cryptocurrency prices and trends</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3 max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border-orange-500/20 backdrop-blur-sm hover:scale-105 transition-transform">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">₿</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Bitcoin</div>
                        <div className="text-gray-400 text-sm">BTC</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">${liveData.btc.price.toFixed(0)}</div>
                      <div
                        className={`text-sm flex items-center ${liveData.btc.change >= 0 ? "text-green-400" : "text-red-400"}`}
                      >
                        {liveData.btc.change >= 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {liveData.btc.change >= 0 ? "+" : ""}
                        {liveData.btc.change.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-transform">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">Ξ</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Ethereum</div>
                        <div className="text-gray-400 text-sm">ETH</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">${liveData.eth.price.toFixed(0)}</div>
                      <div
                        className={`text-sm flex items-center ${liveData.eth.change >= 0 ? "text-green-400" : "text-red-400"}`}
                      >
                        {liveData.eth.change >= 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {liveData.eth.change >= 0 ? "+" : ""}
                        {liveData.eth.change.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-sm hover:scale-105 transition-transform">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">QuantumYield</div>
                        <div className="text-gray-400 text-sm">QY</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-bold">${liveData.qy.price.toFixed(2)}</div>
                      <div
                        className={`text-sm flex items-center ${liveData.qy.change >= 0 ? "text-green-400" : "text-red-400"}`}
                      >
                        {liveData.qy.change >= 0 ? (
                          <TrendingUp className="h-3 w-3 mr-1" />
                        ) : (
                          <TrendingDown className="h-3 w-3 mr-1" />
                        )}
                        {liveData.qy.change >= 0 ? "+" : ""}
                        {liveData.qy.change.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section id="stats" className="w-full py-12 md:py-24 lg:py-32 bg-black/20 backdrop-blur-sm">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Protocol Statistics</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Real-time metrics showcasing the growth and performance of the QuantumYield ecosystem.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 mb-12">
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200 group">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white/80">Total Value Locked</CardTitle>
                  <DollarSign className="h-4 w-4 text-green-400 group-hover:scale-110 transition-transform" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">$847.2M</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +12.5% from last month
                  </p>
                  <Progress value={85} className="mt-2" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200 group">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white/80">Average APY</CardTitle>
                  <TrendingUp className="h-4 w-4 text-blue-400 group-hover:scale-110 transition-transform" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">24.7%</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    +2.1% this week
                  </p>
                  <Progress value={75} className="mt-2" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200 group">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white/80">Active Users</CardTitle>
                  <Users className="h-4 w-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">156.8K</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <Plus className="h-3 w-3 mr-1" />
                    +8.2% this month
                  </p>
                  <Progress value={92} className="mt-2" />
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200 group">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-white/80">Protocols Integrated</CardTitle>
                  <BarChart3 className="h-4 w-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">47</div>
                  <p className="text-xs text-green-400 flex items-center">
                    <Plus className="h-3 w-3 mr-1" />
                    +5 new this month
                  </p>
                  <Progress value={68} className="mt-2" />
                </CardContent>
              </Card>
            </div>

            {/* Additional Metrics */}
            <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
              <Card className="bg-white/5 border-blue-500/20 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Globe className="mr-2 h-5 w-5 text-cyan-400" />
                    Global Reach
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Countries</span>
                      <span className="text-white font-semibold">127</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Supported Networks</span>
                      <span className="text-white font-semibold">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Languages</span>
                      <span className="text-white font-semibold">23</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-green-500/20 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Target className="mr-2 h-5 w-5 text-green-400" />
                    Performance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Uptime</span>
                      <span className="text-green-400 font-semibold">99.9%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Avg Response</span>
                      <span className="text-white font-semibold">0.3s</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Success Rate</span>
                      <span className="text-green-400 font-semibold">99.7%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-blue-500/20 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Award className="mr-2 h-5 w-5 text-blue-400" />
                    Security
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Audits Completed</span>
                      <span className="text-white font-semibold">7</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Bug Bounty</span>
                      <span className="text-white font-semibold">$500K</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Insurance</span>
                      <span className="text-white font-semibold">$10M</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Yield Calculator Section */}
        <section id="calculator" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Yield Calculator</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Calculate your potential earnings with QuantumYield's quantum-optimized strategies.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border-green-500/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Calculator className="mr-2 h-5 w-5 text-green-400" />
                    Earnings Simulator
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    See how much you could earn with our quantum-optimized yield strategies.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">Deposit Amount (USD)</label>
                        <Input
                          type="number"
                          value={depositAmount}
                          onChange={(e) => setDepositAmount(e.target.value)}
                          className="bg-white/5 border-green-500/20 text-white focus:border-green-400"
                          placeholder="Enter amount"
                        />
                      </div>

                      <div>
                        <label className="text-sm font-medium text-white mb-2 block">Time Period</label>
                        <Tabs value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                          <TabsList className="grid w-full grid-cols-2 bg-white/5">
                            <TabsTrigger value="1month" className="text-white data-[state=active]:bg-green-500">
                              1M
                            </TabsTrigger>
                            <TabsTrigger value="3months" className="text-white data-[state=active]:bg-green-500">
                              3M
                            </TabsTrigger>
                          </TabsList>
                          <TabsList className="grid w-full grid-cols-2 bg-white/5 mt-2">
                            <TabsTrigger value="6months" className="text-white data-[state=active]:bg-blue-500">
                              6M
                            </TabsTrigger>
                            <TabsTrigger value="1year" className="text-white data-[state=active]:bg-blue-500">
                              1Y
                            </TabsTrigger>
                          </TabsList>
                        </Tabs>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-white/5 rounded-lg p-6 border border-green-500/20">
                        <div className="text-center space-y-2">
                          <div className="text-sm text-white/60">Estimated Earnings</div>
                          <div className="text-3xl font-bold text-green-400">${calculateYield()}</div>
                          <div className="text-sm text-white/60">
                            in {timeframes[selectedTimeframe as keyof typeof timeframes].label}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between text-white/60">
                          <span>Initial Deposit:</span>
                          <span>${depositAmount}</span>
                        </div>
                        <div className="flex justify-between text-white/60">
                          <span>Estimated APY:</span>
                          <span>24.7%</span>
                        </div>
                        <div className="flex justify-between text-green-400 font-semibold">
                          <span>Total Value:</span>
                          <span>
                            ${(Number.parseFloat(depositAmount) + Number.parseFloat(calculateYield())).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button
                      className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 shadow-lg shadow-green-500/25"
                      onClick={handleStartEarning}
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <Coins className="mr-2 h-4 w-4" />
                      )}
                      Start Earning These Returns
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-black/20 backdrop-blur-sm">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Revolutionary Features</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Experience the future of DeFi with our quantum-enhanced yield optimization technology.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Brain className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Quantum AI Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Our quantum algorithms analyze thousands of yield opportunities across multiple chains in real-time
                    to maximize your returns.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Real-time market analysis
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Risk-adjusted optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Multi-chain strategies
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Military-Grade Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Multi-layered security protocols and smart contract audits ensure your funds are always protected
                    with institutional-grade security.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Multi-signature wallets
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Regular security audits
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Insurance coverage
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Layers className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Auto-Compounding Vaults</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Automated yield compounding maximizes your earnings without any manual intervention required. Set it
                    and forget it.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Automatic reinvestment
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Gas optimization
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Compound frequency tuning
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-emerald-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Cross-Chain Integration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Access yield opportunities across 12+ blockchain networks with seamless cross-chain asset
                    management.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      12+ supported chains
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Instant bridging
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Unified dashboard
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <PieChart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Portfolio Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Advanced analytics and reporting tools to track your performance and optimize your investment
                    strategy.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Real-time tracking
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Performance metrics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Risk assessment
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border-teal-500/20 backdrop-blur-sm hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Instant Liquidity</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 mb-4">
                    Access your funds instantly without waiting periods. Our liquidity pools ensure you can withdraw
                    anytime.
                  </CardDescription>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      No lock-up periods
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Deep liquidity pools
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-2" />
                      Minimal slippage
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Development Roadmap</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our journey to revolutionize DeFi with quantum-powered yield optimization.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                    <div className="w-0.5 h-16 bg-green-500/30"></div>
                  </div>
                  <div className="flex-1">
                    <Card className="bg-white/5 border-green-500/20 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white">Q1 2024 - Foundation ✅</CardTitle>
                          <Badge className="bg-green-500/20 text-green-400">Completed</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Protocol launch and smart contract deployment</li>
                          <li>• Initial yield optimization algorithms</li>
                          <li>• Security audits and bug bounty program</li>
                          <li>• Community building and governance token launch</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-0.5 h-16 bg-blue-500/30"></div>
                  </div>
                  <div className="flex-1">
                    <Card className="bg-white/5 border-blue-500/20 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white">Q2 2024 - Expansion 🚀</CardTitle>
                          <Badge className="bg-blue-500/20 text-blue-400">In Progress</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Cross-chain integration (Polygon, Arbitrum, Optimism)</li>
                          <li>• Advanced quantum algorithms implementation</li>
                          <li>• Mobile app development</li>
                          <li>• Institutional partnerships</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-cyan-500 rounded-full"></div>
                    <div className="w-0.5 h-16 bg-cyan-500/30"></div>
                  </div>
                  <div className="flex-1">
                    <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white">Q3 2024 - Innovation</CardTitle>
                          <Badge className="bg-cyan-500/20 text-cyan-400">Planned</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-300">
                          <li>• AI-powered risk management system</li>
                          <li>• Decentralized governance implementation</li>
                          <li>• NFT yield farming integration</li>
                          <li>• Layer 2 scaling solutions</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <Card className="bg-white/5 border-teal-500/20 backdrop-blur-sm">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-white">Q4 2024 - Global Scale</CardTitle>
                          <Badge className="bg-teal-500/20 text-teal-400">Future</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-300">
                          <li>• Global expansion and regulatory compliance</li>
                          <li>• Quantum computing integration</li>
                          <li>• Advanced derivatives and options</li>
                          <li>• Enterprise solutions launch</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-black/20 backdrop-blur-sm">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                World-class experts in quantum computing, DeFi, and blockchain technology.
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-5 md:grid-cols-2">
              <Card className="bg-white/5 border-green-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">DD</span>
                  </div>
                  <CardTitle className="text-white">Daniel Duran</CardTitle>
                  <CardDescription className="text-green-400">CEO & Co-Founder</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm mb-4">
                    Visionary leader with expertise in DeFi protocols and quantum computing applications.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-white hover:text-green-400">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:text-green-400">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-blue-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AL</span>
                  </div>
                  <CardTitle className="text-white">Arthur Lopez</CardTitle>
                  <CardDescription className="text-blue-400">CTO & Co-Founder</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm mb-4">
                    Blockchain architect and smart contract specialist with deep technical expertise.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-cyan-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">AS</span>
                  </div>
                  <CardTitle className="text-white">Arthur Sfair</CardTitle>
                  <CardDescription className="text-cyan-400">Head of Product</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm mb-4">
                    Product strategist focused on user experience and quantum algorithm optimization.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-white hover:text-cyan-400">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:text-cyan-400">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-emerald-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">CC</span>
                  </div>
                  <CardTitle className="text-white">Caio Castro</CardTitle>
                  <CardDescription className="text-emerald-400">Head of Operations</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm mb-4">
                    Operations expert ensuring seamless protocol performance and user satisfaction.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-white hover:text-emerald-400">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:text-emerald-400">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-teal-500/20 backdrop-blur-sm hover:scale-105 transition-transform duration-200">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">SC</span>
                  </div>
                  <CardTitle className="text-white">Saul Castro</CardTitle>
                  <CardDescription className="text-teal-400">Head of Security</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300 text-sm mb-4">
                    Cybersecurity specialist ensuring the highest level of protocol and user fund protection.
                  </p>
                  <div className="flex justify-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-white hover:text-teal-400">
                      <Twitter className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:text-teal-400">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Get answers to the most common questions about QuantumYield.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card
                  key={index}
                  className="bg-white/5 border-green-500/20 backdrop-blur-sm hover:bg-white/10 transition-colors"
                >
                  <CardHeader className="cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white text-left">{faq.question}</CardTitle>
                      <ChevronDown
                        className={`h-5 w-5 text-green-400 transition-transform ${openFaq === index ? "rotate-180" : ""}`}
                      />
                    </div>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent>
                      <p className="text-gray-300">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-white">Stay Updated</h2>
              <p className="text-gray-300">
                Get the latest updates on QuantumYield development, new features, and exclusive insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-green-500/20 text-white placeholder:text-white/60 focus:border-green-400"
                />
                <Button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 whitespace-nowrap">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>

              <p className="text-xs text-white/60">No spam, unsubscribe at any time. We respect your privacy.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-white">Ready to Maximize Your Yields?</h2>
                <p className="max-w-2xl mx-auto text-gray-300 text-lg">
                  Join over 150,000 users already earning quantum-optimized returns on their crypto assets. Start your
                  journey to financial freedom today.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-200 text-lg px-8 py-6 shadow-lg shadow-green-500/25"
                  onClick={handleLaunchApp}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Rocket className="mr-2 h-5 w-5" />
                  )}
                  Launch App Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10 bg-transparent text-lg px-8 py-6 shadow-lg shadow-blue-500/25"
                >
                  <Users className="mr-2 h-5 w-5" />
                  Join Community
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm text-white/60">
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <Shield className="h-4 w-4 text-green-400" />
                  Audited & Secure
                </div>
                <div className="flex items-center gap-2 hover:text-blue-400 transition-colors">
                  <Award className="h-4 w-4 text-blue-400" />
                  $10M Insurance
                </div>
                <div className="flex items-center gap-2 hover:text-cyan-400 transition-colors">
                  <Users className="h-4 w-4 text-cyan-400" />
                  150K+ Users
                </div>
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  24.7% Average APY
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm">
        <div className="container px-4 md:px-6 py-12 mx-auto">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">QuantumYield</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs">
                Revolutionizing DeFi with quantum-powered yield optimization. Maximize your returns with cutting-edge
                technology.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-green-400">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                  <MessageCircle className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-cyan-400">
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Product</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    onClick={() => router.push("/staking")}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Yield Vaults
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/staking")}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Staking Pools
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => router.push("/app")}
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    Analytics
                  </button>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Mobile App
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    API Reference
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Security Audits
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                    Bug Bounty
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Press Kit
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-400">
              © 2024 QuantumYield. All rights reserved. Built with quantum precision.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-xs text-gray-400 hover:text-green-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
