
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { ArrowRight, Shield, BarChart3, FileText, Globe, Zap, CheckCircle, Users, TrendingUp, Package, DollarSign, Clock, AlertTriangle, Eye, ChevronRight, ChevronLeft, Settings, Play, Menu, X } from "lucide-react";
import { ChartContainer } from "@/components/ui/chart";
import { BarChart, Bar, Cell } from "recharts";

const Index = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("A Week");
  const [selectedTab, setSelectedTab] = useState("Compliance");
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Chart data - Real metrics for Global Trade platform
  const productsProcessedData = [
    { name: "Mon", value: 1250 },
    { name: "Tue", value: 1580 },
    { name: "Wed", value: 1920 },
    { name: "Thu", value: 2100 },
    { name: "Fri", value: 2300 },
    { name: "Sat", value: 1850 },
    { name: "Sun", value: 1650 }
  ];

  const complianceScoreData = [
    { name: "Q1", value: 78 },
    { name: "Q2", value: 85 },
    { name: "Q3", value: 92 },
    { name: "Q4", value: 95 }
  ];

  const hsCodeAccuracyData = [
    { name: "Jan", value: 88 },
    { name: "Feb", value: 91 },
    { name: "Mar", value: 93 },
    { name: "Apr", value: 95 }
  ];

  const chartConfig = {
    value: {
      label: "Value",
      color: "#3b82f6",
    },
  };

  const coreFeatures = [
    {
      icon: Zap,
      title: "Automated HS Code Detection",
      description: "AI-powered classification with 95%+ accuracy. Eliminate manual errors and speed up customs processing.",
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      icon: FileText,
      title: "Export Documentation",
      description: "Generate commercial invoices, certificates of origin, and packing lists automatically with one click.",
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      icon: DollarSign,
      title: "Landed Cost Estimation",
      description: "Calculate import taxes, duties, and total landed costs for any destination worldwide in real-time.",
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      icon: Shield,
      title: "ESG Risk Assessment",
      description: "Comprehensive supply chain risk analysis with environmental and social impact scoring.",
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      icon: CheckCircle,
      title: "Compliance Automation",
      description: "Automatically ensure compliance with international trade regulations and standards across 50+ countries.",
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    },
    {
      icon: Globe,
      title: "Global Trade Intelligence",
      description: "Real-time insights into trade regulations, tariffs, and market opportunities worldwide.",
      color: "bg-gradient-to-br from-blue-500 to-purple-500"
    }
  ];

  const platformBenefits = [
    {
      icon: Package,
      title: "Shopify Integration",
      description: "Seamlessly sync your Shopify products and orders. No manual data entry required."
    },
    {
      icon: Clock,
      title: "Time Savings",
      description: "Reduce compliance processing time by up to 80%. Focus on growing your business."
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Accurate landed cost calculations help you price products competitively and maximize margins."
    },
    {
      icon: Settings,
      title: "Automated Workflows",
      description: "Set up automated compliance checks and documentation generation for your entire product catalog."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Logo size="nav" linkTo="/" />

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="font-medium text-sm text-slate-900 border-b-2 border-blue-600 pb-1">Home</Link>
              <Link to="/business" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors">Features</Link>
              <Link to="/about" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors">About</Link>
              <Link to="/pricing" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors">Pricing</Link>
            </div>

            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-600">
                <a href="mailto:support@tradeops.com" className="hover:text-slate-900 transition-colors">support@tradeops.com</a>
                <a href="tel:+15551234567" className="hover:text-slate-900 transition-colors">+1 (555) 123-4567</a>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Link to="/login">
                  <Button variant="ghost" className="text-slate-900 hover:bg-slate-100 text-sm">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 text-sm">
                    Get Started
                  </Button>
                </Link>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 bg-white">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="font-medium text-sm text-slate-900 border-b-2 border-blue-600 pb-1" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                <Link to="/business" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                <Link to="/about" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link to="/pricing" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                <Link to="/insights" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Insights</Link>
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                  <div className="flex flex-col space-y-2 text-sm text-slate-600">
                    <a href="mailto:support@tradeops.com" className="hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>support@tradeops.com</a>
                    <a href="tel:+15551234567" className="hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>+1 (555) 123-4567</a>
                  </div>
                  <div className="flex flex-col space-y-2 pt-2">
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button variant="ghost" className="w-full text-slate-900 hover:bg-slate-100 justify-start">Login</Button>
                    </Link>
                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-8 sm:pt-12 lg:pt-16 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-blue-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-[250px] h-[250px] sm:w-[500px] sm:h-[500px] bg-purple-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
            {/* Left Side - Headline & CTA */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-block">
                  <Badge className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold">
                    Enterprise Global Trade Platform
                  </Badge>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight tracking-tight">
                  Automate Global Trade
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Compliance & Analytics
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  AI-powered enterprise platform for Shopify merchants. Automate HS code classification, generate export documentation, calculate landed costs, and ensure compliance across 50+ countries.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
                <Link to="/signup" className="w-full sm:w-auto">
                  <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold h-auto group shadow-lg hover:shadow-xl transition-all">
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/business" className="w-full sm:w-auto">
                  <Button variant="outline" className="w-full sm:w-auto border-2 border-slate-300 text-slate-900 hover:bg-slate-50 hover:border-slate-400 px-6 sm:px-10 py-4 sm:py-6 text-base sm:text-lg font-semibold h-auto">
                    View Features
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 border-t border-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">500+ Active Stores</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">80% Time Reduction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  <span className="text-xs sm:text-sm font-medium text-slate-700">50+ Countries</span>
                </div>
              </div>
            </div>

            {/* Right Side - Professional Dashboard Preview */}
            <div className="relative mt-8 lg:mt-0 w-full max-w-lg mx-auto lg:max-w-none">
              <Card 
                className="border-0 shadow-2xl bg-white overflow-visible cursor-pointer hover:shadow-3xl transition-all duration-300 group w-full"
                onClick={() => setIsVideoOpen(true)}
              >
                <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b border-slate-200 px-4 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0"></div>
                      <CardTitle className="text-xs sm:text-sm font-bold text-slate-900">Platform Analytics</CardTitle>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-0 text-xs font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 flex-shrink-0">
                      Live
                    </Badge>
                  </div>
                </CardHeader>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center pointer-events-none z-20 rounded-lg">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="h-8 w-8 sm:h-10 sm:w-10 text-blue-600 ml-1" fill="currentColor" />
                  </div>
                </div>
                <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                  {/* Key Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3 sm:p-5 border border-blue-100">
                      <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 sm:mb-2">Products Processed</div>
                      <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">12.6K</div>
                      <div className="text-xs font-semibold text-blue-600">+18% this week</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-3 sm:p-5 border border-blue-100">
                      <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1 sm:mb-2">HS Code Accuracy</div>
                      <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1">95%</div>
                      <div className="text-xs font-semibold text-blue-600">AI-powered</div>
                    </div>
                  </div>

                  {/* Chart Section */}
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="text-xs sm:text-sm font-bold text-slate-900">Compliance Score Trend</div>
                      <div className="text-xs text-slate-600 font-medium">Last 4 Quarters</div>
                    </div>
                    <div className="w-full overflow-hidden">
                      <ChartContainer config={chartConfig} className="h-28 sm:h-36 w-full">
                        <BarChart data={complianceScoreData}>
                          <Bar dataKey="value" fill="#3b82f6" radius={4} />
                        </BarChart>
                      </ChartContainer>
                    </div>
                    <div className="flex justify-between text-xs text-slate-600 font-semibold">
                      <span>Q1: 78%</span>
                      <span>Q2: 85%</span>
                      <span>Q3: 92%</span>
                      <span>Q4: 95%</span>
                    </div>
                  </div>

                  {/* Stats Footer */}
                  <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-slate-200">
                    <div className="text-center flex-1">
                      <div className="text-lg sm:text-xl font-bold text-slate-900">500+</div>
                      <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide">Stores</div>
                    </div>
                    <div className="w-px h-8 sm:h-10 bg-slate-200"></div>
                    <div className="text-center flex-1">
                      <div className="text-lg sm:text-xl font-bold text-slate-900">50+</div>
                      <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide">Countries</div>
                    </div>
                    <div className="w-px h-8 sm:h-10 bg-slate-200"></div>
                    <div className="text-center flex-1">
                      <div className="text-lg sm:text-xl font-bold text-slate-900">80%</div>
                      <div className="text-xs text-slate-600 font-semibold uppercase tracking-wide">Efficiency</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-5xl w-full p-0 bg-black border-0 [&>button]:text-white [&>button]:hover:text-white [&>button]:hover:bg-white/20">
          <DialogHeader className="sr-only">
            <DialogTitle>Platform Demo Video</DialogTitle>
          </DialogHeader>
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Platform Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>

      {/* How It Works Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <Badge className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-semibold">
                How It Works
              </Badge>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Streamline Your Global Trade Operations
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Connect your Shopify store and automate compliance in minutes. Our AI-powered platform handles everything from HS code classification to export documentation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {/* Step 1 */}
            <Card className="border-0 shadow-lg bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                  Connect Your Shopify Store
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  One-click integration syncs your products, orders, and inventory. No manual data entry required.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-0 shadow-lg bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                  AI Automates Classification
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Our AI automatically detects HS codes with 95%+ accuracy and ensures compliance across 50+ countries.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-0 shadow-lg bg-white text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                  Generate & Export Documents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-slate-600 leading-relaxed">
                  Instantly generate invoices, certificates of origin, and packing lists. Calculate landed costs in real-time.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* Key Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">95% HS Code Accuracy</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      AI-powered classification eliminates manual errors and speeds up customs processing. Reduce classification time by 80%.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Save 320+ Hours Monthly</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Automate documentation generation and compliance checks. Focus on growing your business instead of paperwork.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Globe className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">50+ Countries Supported</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Real-time landed cost calculations and compliance rules for major markets worldwide. Scale globally with confidence.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">ESG Risk Assessment</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Comprehensive supply chain risk analysis helps you identify and mitigate environmental and social compliance issues.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Everything You Need for Global Trade
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
              Comprehensive tools to automate compliance, streamline documentation, and scale your international commerce operations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Why Shopify Merchants Choose Us
            </h2>
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto px-4">
              Built specifically for Shopify stores. Integrate seamlessly and start automating your global trade operations today.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {platformBenefits.map((benefit, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl hover:scale-105 transition-all duration-300">
                <CardHeader className="text-center p-6">
                  <div className="mx-auto mb-4 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-bold text-slate-900 mb-3">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-sm text-slate-600 leading-relaxed text-center">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg rounded-lg p-6 sm:p-8 lg:p-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
              Ready to Automate Your Global Trade?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
              Join 500+ Shopify merchants already saving time and reducing compliance risk. Start your 14-day free trial today.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/signup" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 sm:px-8 py-4 sm:py-6 h-auto text-sm sm:text-base shadow-md hover:shadow-lg transition-all">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-slate-300 text-slate-900 hover:bg-white hover:border-slate-400 font-semibold px-6 sm:px-8 py-4 sm:py-6 h-auto text-sm sm:text-base">
                  Contact Sales
                </Button>
              </Link>
            </div>
            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
