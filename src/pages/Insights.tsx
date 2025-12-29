
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Calendar, Clock, ArrowRight, Menu, X } from "lucide-react";

const Insights = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const insights = [
        {
            title: "The Future of AI in Global Trade Compliance",
            excerpt: "How artificial intelligence is revolutionizing HS code classification and customs processing for international commerce.",
            author: "Sarah Johnson",
            date: "January 15, 2025",
            readTime: "5 min read",
            category: "AI & Compliance",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
        },
        {
            title: "Global Trade Trends: What to Expect in 2025",
            excerpt: "An in-depth analysis of emerging trends in global trade and how businesses can adapt to changing market conditions.",
            author: "Michael Chen",
            date: "January 12, 2025",
            readTime: "7 min read",
            category: "Global Trade",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop"
        },
        {
            title: "ESG Reporting: A Strategic Imperative for Global Trade",
            excerpt: "Why environmental, social, and governance reporting is becoming essential for international commerce and stakeholder trust.",
            author: "Emily Rodriguez",
            date: "January 10, 2025",
            readTime: "6 min read",
            category: "ESG",
            image: "https://images.unsplash.com/photo-1569163139394-de6e4d1b5b1e?w=500&h=300&fit=crop"
        },
        {
            title: "Data-Driven Decision Making in International Trade",
            excerpt: "Essential strategies for implementing data-driven decision making processes that drive global business growth and efficiency.",
            author: "David Kim",
            date: "January 8, 2025",
            readTime: "8 min read",
            category: "Strategy",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
        },
        {
            title: "Supply Chain Analytics: Reducing Risk in Global Trade",
            excerpt: "How advanced analytics can help businesses identify and mitigate supply chain risks in an increasingly complex global market.",
            author: "Sarah Johnson",
            date: "January 5, 2025",
            readTime: "6 min read",
            category: "Supply Chain",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop"
        },
        {
            title: "The Rise of Predictive Analytics in Trade Compliance",
            excerpt: "Exploring how predictive analytics is transforming trade forecasting and enabling proactive compliance decision-making.",
            author: "Michael Chen",
            date: "January 3, 2025",
            readTime: "5 min read",
            category: "Predictive Analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
        }
    ];

    const categories = ["All", "AI & Compliance", "Global Trade", "ESG", "Strategy", "Supply Chain", "Predictive Analytics"];

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Navigation */}
            <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Logo size="nav" linkTo="/" />

                        <div className="hidden md:flex items-center space-x-8">
                            <Link to="/" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors">Home</Link>
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
                                <Link to="/business" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
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
                            Insights & Analytics
                        </Badge>
                    </div>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6">
                        Global Trade Insights
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto mb-6 sm:mb-10">
                        Stay informed with the latest trends, best practices, and insights in global trade compliance and analytics.
                    </p>
                </div>
            </section>

            {/* Categories */}
            <section className="py-6 sm:py-8 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                    category === "All"
                                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                                        : "bg-white text-slate-600 hover:bg-slate-50 border border-slate-200"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insights Grid */}
            <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {insights.map((insight, index) => (
                            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow overflow-hidden">
                                <div className="aspect-video w-full overflow-hidden bg-slate-50">
                                    <img
                                        src={insight.image}
                                        alt={insight.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <CardHeader>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Badge className="bg-green-100 text-green-800 border-0 text-xs">
                                            {insight.category}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-xl font-bold text-slate-900 mb-2 line-clamp-2">
                                        {insight.title}
                                    </CardTitle>
                                    <CardDescription className="text-slate-600 line-clamp-2">
                                        {insight.excerpt}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex items-center justify-between text-sm text-slate-600 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{insight.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{insight.readTime}</span>
                                        </div>
                                    </div>
                                    <div className="text-sm text-slate-600 mb-4">
                                        By {insight.author}
                                    </div>
                                    <Button variant="ghost" className="w-full text-blue-600 hover:text-purple-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50">
                                        Read More
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-200">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 lg:p-12">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
                            Ready to Transform Your Global Trade Operations?
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
                            Start automating your compliance and analytics today with a 14-day free trial.
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

export default Insights;
