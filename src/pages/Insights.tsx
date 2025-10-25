import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Target, Lightbulb, Globe, ArrowRight, CheckCircle, Users, TrendingUp, BarChart3, Shield, Calendar, Clock } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars-background";

const Insights = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const insights = [
        {
            title: "The Future of AI in Business Analytics",
            excerpt: "How artificial intelligence is revolutionizing the way businesses analyze and interpret data for strategic decision-making.",
            author: "Sarah Johnson",
            date: "January 15, 2025",
            readTime: "5 min read",
            category: "AI & Analytics",
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
            title: "ESG Reporting: A Strategic Imperative",
            excerpt: "Why environmental, social, and governance reporting is becoming essential for business success and stakeholder trust.",
            author: "Emily Rodriguez",
            date: "January 10, 2025",
            readTime: "6 min read",
            category: "ESG",
            image: "https://images.unsplash.com/photo-1569163139394-de6e4d1b5b1e?w=500&h=300&fit=crop"
        },
        {
            title: "Data-Driven Decision Making: Best Practices",
            excerpt: "Essential strategies for implementing data-driven decision making processes that drive business growth and efficiency.",
            author: "David Kim",
            date: "January 8, 2025",
            readTime: "8 min read",
            category: "Strategy",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
        },
        {
            title: "Supply Chain Analytics: Reducing Risk",
            excerpt: "How advanced analytics can help businesses identify and mitigate supply chain risks in an increasingly complex global market.",
            author: "Sarah Johnson",
            date: "January 5, 2025",
            readTime: "6 min read",
            category: "Supply Chain",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&h=300&fit=crop"
        },
        {
            title: "The Rise of Predictive Analytics",
            excerpt: "Exploring how predictive analytics is transforming business forecasting and enabling proactive decision-making.",
            author: "Michael Chen",
            date: "January 3, 2025",
            readTime: "5 min read",
            category: "Predictive Analytics",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop"
        }
    ];

    const categories = ["All", "AI & Analytics", "Global Trade", "ESG", "Strategy", "Supply Chain", "Predictive Analytics"];

    return (
        <div className="min-h-screen bg-dagala-white">
            {/* Navigation */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-dagala-white/95 backdrop-blur-md border-b border-dagala-light shadow-lg'
                : 'bg-transparent'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link to="/" className="flex items-center space-x-3">
                            <div className="relative">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center relative transition-colors duration-300 ${isScrolled ? 'bg-dagala-black' : 'bg-white/20 backdrop-blur-sm'
                                    }`}>
                                    <div className={`w-6 h-6 border-2 rounded-full transition-colors duration-300 ${isScrolled ? 'border-dagala-white' : 'border-white'
                                        }`}></div>
                                    <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-colors duration-300 ${isScrolled ? 'bg-dagala-white' : 'bg-white'
                                        }`}></div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-2xl font-display transition-colors duration-300 ${isScrolled ? 'text-dagala-black' : 'text-white'
                                    }`}>
                                    Dagala
                                </span>
                                <span className={`text-xs font-body-medium -mt-1 tracking-wider transition-colors duration-300 ${isScrolled ? 'text-dagala-medium' : 'text-white/80'
                                    }`}>
                                    ANALYTICS
                                </span>
                            </div>
                        </Link>

                        <div className="hidden md:flex space-x-12">
                            <Link to="/business" className={`font-body-medium transition-colors text-sm tracking-wide ${isScrolled
                                ? 'text-dagala-medium hover:text-dagala-black'
                                : 'text-white/80 hover:text-white'
                                }`}>BUSINESS</Link>
                            <Link to="/about" className={`font-body-medium transition-colors text-sm tracking-wide ${isScrolled
                                ? 'text-dagala-medium hover:text-dagala-black'
                                : 'text-white/80 hover:text-white'
                                }`}>ABOUT</Link>
                            <Link to="/insights" className={`font-body-medium transition-colors text-sm tracking-wide ${isScrolled
                                ? 'text-dagala-black border-b-2 border-dagala-black'
                                : 'text-white/80 hover:text-white'
                                }`}>INSIGHTS</Link>
                            <Link to="/pricing" className={`font-body-medium transition-colors text-sm tracking-wide ${isScrolled
                                ? 'text-dagala-medium hover:text-dagala-black'
                                : 'text-white/80 hover:text-white'
                                }`}>PRICING</Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Link to="/login">
                                <Button variant="ghost" className={`font-body-medium transition-colors ${isScrolled
                                    ? 'text-dagala-medium hover:text-dagala-black'
                                    : 'text-white/80 hover:text-white'
                                    }`}>Sign In</Button>
                            </Link>
                            <Link to="/contact">
                                <Button className={`font-body-bold px-6 py-2 transition-all duration-300 ${isScrolled
                                    ? 'bg-dagala-black hover:bg-dagala-dark text-dagala-white'
                                    : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
                                    }`}>
                                    CONTACT
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="h-screen w-full overflow-hidden relative">
                <StarsBackground
                    className="h-full w-full"
                    starColor="#ffffff"
                    speed={20}
                    factor={0.05}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

                    <div className="relative z-10 h-full flex items-center justify-center">
                        <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-10 md:py-20">
                            <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-display text-white md:text-5xl lg:text-7xl mb-6">
                                Insights & Analytics
                            </h1>
                            <p className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg font-body-medium text-white/90 md:text-xl lg:text-2xl">
                                Stay ahead with the latest trends in business analytics and global trade
                            </p>
                        </div>
                    </div>
                </StarsBackground>
            </section>

            {/* Categories Filter */}
            <section className="py-8 px-4 bg-dagala-white border-b border-dagala-light">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((category, index) => (
                            <Button
                                key={index}
                                variant={index === 0 ? "default" : "outline"}
                                className={`font-body-medium transition-all duration-300 ${index === 0
                                        ? 'bg-dagala-black hover:bg-dagala-dark text-dagala-white'
                                        : 'border-dagala-black text-dagala-black hover:bg-dagala-black hover:text-dagala-white'
                                    }`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Insights Grid */}
            <section className="py-20 px-4 bg-dagala-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {insights.map((insight, index) => (
                            <Card key={index} className="group border-2 border-dagala-light hover:border-dagala-black transition-all duration-500 hover:-translate-y-2 bg-dagala-white hover:shadow-2xl overflow-hidden">
                                <div className="aspect-video bg-gradient-to-br from-dagala-black to-dagala-dark relative overflow-hidden">
                                    <img
                                        src={insight.image}
                                        alt={insight.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <Badge className="bg-white/90 text-dagala-black hover:bg-white">
                                            {insight.category}
                                        </Badge>
                                    </div>
                                </div>
                                <CardHeader className="p-6">
                                    <div className="flex items-center space-x-2 text-sm text-dagala-medium mb-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{insight.date}</span>
                                        <Clock className="h-4 w-4 ml-4" />
                                        <span>{insight.readTime}</span>
                                    </div>
                                    <CardTitle className="text-lg font-display text-dagala-black mb-3 group-hover:text-dagala-dark transition-colors">
                                        {insight.title}
                                    </CardTitle>
                                    <CardDescription className="text-sm font-body text-dagala-medium leading-relaxed">
                                        {insight.excerpt}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="px-6 pb-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-8 h-8 bg-gradient-to-br from-dagala-black to-dagala-dark rounded-full flex items-center justify-center">
                                                <span className="text-xs font-display text-dagala-white">
                                                    {insight.author.split(' ').map(n => n[0]).join('')}
                                                </span>
                                            </div>
                                            <span className="text-sm font-body text-dagala-medium">{insight.author}</span>
                                        </div>
                                        <Button variant="ghost" size="sm" className="text-dagala-black hover:text-dagala-dark">
                                            Read More
                                            <ArrowRight className="ml-1 h-3 w-3" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-dagala-light/30 to-dagala-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-display text-dagala-black mb-4">
                        Stay Updated
                    </h2>
                    <p className="text-base font-body text-dagala-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                        Get the latest insights and analytics trends delivered to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 border-2 border-dagala-light rounded-lg focus:outline-none focus:border-dagala-black transition-colors"
                        />
                        <Button className="bg-dagala-black hover:bg-dagala-dark text-dagala-white font-body-bold px-6 py-3">
                            Subscribe
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-dagala-black py-20 px-4 relative overflow-hidden">
                <StarsBackground
                    className="absolute inset-0"
                    starColor="#ffffff"
                    speed={20}
                    factor={0.05}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80"></div>
                </StarsBackground>

                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-1">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center relative bg-white/20 backdrop-blur-sm">
                                        <div className="w-6 h-6 border-2 rounded-full border-white"></div>
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white"></div>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-display text-white">
                                        Dagala
                                    </span>
                                    <span className="text-xs font-body-medium -mt-1 tracking-wider text-white/80">
                                        ANALYTICS
                                    </span>
                                </div>
                            </div>
                            <p className="font-body text-dagala-light leading-relaxed text-sm">
                                AI-powered Global Trade automation for modern DTC brands.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-body-bold text-dagala-white mb-4 text-sm tracking-wider">PRODUCT</h4>
                            <div className="space-y-3">
                                <Link to="/features" className="block font-body text-dagala-light hover:text-dagala-white transition-colors text-sm">Features</Link>
                                <Link to="/pricing" className="block font-body text-dagala-light hover:text-dagala-white transition-colors text-sm">Pricing</Link>
                                <Link to="/integrations" className="block font-body text-dagala-light hover:text-dagala-white transition-colors text-sm">Integrations</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-body-bold text-dagala-white mb-4 text-sm tracking-wider">COMPANY</h4>
                            <div className="space-y-3">
                                <Link to="/about" className="block font-body text-dagala-light hover:text-dagala-white transition-colors text-sm">About</Link>
                                <Link to="/careers" className="block font-body text-dagala-light hover:text-dagala-white transition-colors text-sm">Careers</Link>
                                <Link to="/contact" className="block font-body text-dagala-light hover:text-dagala-white transition-colors text-sm">Contact</Link>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-body-bold text-dagala-white mb-4 text-sm tracking-wider">SUPPORT</h4>
                            <div className="space-y-3">
                                <Link to="/help" className="block font-body text-dagala-light hover:text-dagala-white transition-colors text-sm">Help Center</Link>
                                <Link to="/docs" className="block font-body text-dagala-light hover:text-dagala-white transition-colors text-sm">Documentation</Link>
                                <Link to="/status" className="block font-body text-dagala-light hover:text-dagala-white transition-colors text-sm">Status</Link>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-dagala-medium text-center">
                        <p className="font-body text-dagala-light text-sm">&copy; 2025 Dagala Analytics. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Insights;
