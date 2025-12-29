
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Building2, Target, Lightbulb, Globe, ArrowRight, CheckCircle, Package, FileText, DollarSign, Shield, Zap, BarChart3, Menu, X } from "lucide-react";

const Business = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const services = [
        {
            icon: Zap,
            title: "Automated HS Code Detection",
            description: "AI-powered classification with 95%+ accuracy. Eliminate manual errors and speed up customs processing.",
            features: ["AI Classification", "95%+ Accuracy", "Real-time Processing", "Multi-country Support"]
        },
        {
            icon: FileText,
            title: "Export Documentation",
            description: "Auto-generate commercial invoices, certificates of origin, and packing lists with one click.",
            features: ["Commercial Invoices", "Certificates of Origin", "Packing Lists", "Custom Templates"]
        },
        {
            icon: DollarSign,
            title: "Landed Cost Estimation",
            description: "Calculate import taxes, duties, and total landed costs for any destination worldwide in real-time.",
            features: ["Real-time Calculations", "50+ Countries", "Tax & Duty Estimates", "Currency Conversion"]
        },
        {
            icon: Shield,
            title: "ESG Risk Assessment",
            description: "Comprehensive supply chain risk analysis with environmental and social impact scoring.",
            features: ["Risk Scoring", "Supply Chain Analysis", "Compliance Monitoring", "Impact Reports"]
        }
    ];

    const stats = [
        { number: "500+", label: "Shopify Stores", icon: Package },
        { number: "95%", label: "HS Code Accuracy", icon: CheckCircle },
        { number: "80%", label: "Time Saved", icon: BarChart3 },
        { number: "50+", label: "Countries Supported", icon: Globe }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navigation */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Logo size="nav" linkTo="/" />

                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
                            <Link to="/business" className="font-medium text-sm text-slate-900 border-b-2 border-blue-600 pb-1">Features</Link>
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
                                    <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 sm:px-6 text-sm">Get Started</Button>
                                </Link>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                className="md:hidden"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-slate-200">
                            <div className="flex flex-col space-y-4">
                                <Link to="/" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                                <Link to="/business" className="font-medium text-sm text-slate-900 border-b-2 border-blue-600 pb-1" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
                                <Link to="/about" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                                <Link to="/pricing" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
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
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block mb-4 sm:mb-6">
                        <Badge className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 px-3 sm:px-4 py-1 sm:py-1.5 text-xs sm:text-sm font-medium">
                            Our Services
                        </Badge>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
                        Global Trade Solutions
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">For Shopify Merchants</span>
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-10">
                        Comprehensive tools to automate compliance, streamline documentation, and scale your international commerce operations.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {stats.map((stat, index) => (
                            <Card key={index} className="border-0 shadow-lg bg-white text-center hover:shadow-xl transition-all duration-300">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                                            <stat.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                                    <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                            Everything You Need for Global Trade
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto px-4">
                            Powerful features designed to streamline your international commerce operations
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                        {services.map((service, index) => (
                            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                                <CardHeader className="pb-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                                        <service.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                                        {service.title}
                                    </CardTitle>
                                    <CardDescription className="text-slate-600 text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 gap-3">
                                        {service.features.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-2">
                                                <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                                                <span className="text-sm text-slate-700 font-medium">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-gradient-to-r from-blue-50 to-purple-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white border-0 shadow-lg rounded-lg p-6 sm:p-8 lg:p-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                            Join 500+ Shopify merchants already automating their global trade operations.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                            <Link to="/signup" className="w-full sm:w-auto">
                                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-6 sm:px-8 py-4 sm:py-6 h-auto text-sm sm:text-base">
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Link to="/contact" className="w-full sm:w-auto">
                                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-slate-300 text-slate-900 hover:bg-slate-50 font-medium px-6 sm:px-8 py-4 sm:py-6 h-auto text-sm sm:text-base">
                                    Contact Sales
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Business;
