
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Target, Heart, Lightbulb, Users, CheckCircle, Package, Globe, Clock } from "lucide-react";

const About = () => {
    const values = [
        {
            icon: Target,
            title: "Excellence",
            description: "We strive for excellence in everything we do, delivering exceptional results for our clients."
        },
        {
            icon: Heart,
            title: "Integrity",
            description: "We maintain the highest standards of integrity and transparency in all our business practices."
        },
        {
            icon: Lightbulb,
            title: "Innovation",
            description: "We embrace innovation and cutting-edge technology to solve complex business challenges."
        },
        {
            icon: Users,
            title: "Collaboration",
            description: "We believe in the power of collaboration and building strong partnerships with our clients."
        }
    ];

    const stats = [
        { number: "500+", label: "Shopify Stores", icon: Package },
        { number: "95%", label: "HS Code Accuracy", icon: CheckCircle },
        { number: "80%", label: "Time Saved", icon: Clock },
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
                            <Link to="/business" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors">Features</Link>
                            <Link to="/about" className="font-medium text-sm text-slate-900 border-b-2 border-blue-600 pb-1">About</Link>
                            <Link to="/pricing" className="font-medium text-sm text-slate-600 hover:text-slate-900 transition-colors">Pricing</Link>
                        </div>

                        <div className="flex items-center space-x-6">
                            <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-600">
                                <a href="mailto:support@dagala.com" className="hover:text-slate-900 transition-colors">support@dagala.com</a>
                                <a href="tel:+15551234567" className="hover:text-slate-900 transition-colors">+1 (555) 123-4567</a>
                            </div>
                            <Link to="/login">
                                <Button variant="ghost" className="text-slate-900 hover:bg-slate-100">Login</Button>
                            </Link>
                            <Link to="/signup">
                                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-block mb-6">
                        <Badge className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border-blue-200 px-4 py-1.5 text-sm font-medium">
                            About Us
                        </Badge>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
                        Empowering Global Trade
                        <br />
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Through Innovation</span>
                    </h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-10">
                        We're building the future of global trade compliance. Our AI-powered platform helps Shopify merchants automate compliance, reduce errors, and scale internationally with confidence.
                    </p>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 px-4 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <Card key={index} className="border-0 shadow-lg bg-white text-center">
                                <CardContent className="p-6">
                                    <div className="flex justify-center mb-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md flex items-center justify-center">
                                            <stat.icon className="h-6 w-6 text-white" />
                                        </div>
                                    </div>
                                    <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
                                    <div className="text-sm text-slate-600">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                To simplify global trade compliance for Shopify merchants worldwide. We believe that every business, regardless of size, should have access to enterprise-grade compliance tools that enable seamless international expansion.
                            </p>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Through AI-powered automation and real-time analytics, we're eliminating the barriers that prevent businesses from scaling globally. Our platform handles the complexity so you can focus on what matters most—growing your business.
                            </p>
                        </div>
                        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-purple-50">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why We Built This</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">Manual HS code classification is time-consuming and error-prone</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">Export documentation generation is repetitive and tedious</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">Landed cost calculations are complex and vary by country</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-700 font-medium">Compliance requirements change frequently across markets</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 px-4 bg-slate-50 border-t border-slate-200">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <Card key={index} className="border-0 shadow-lg bg-white text-center">
                                <CardHeader>
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-md flex items-center justify-center mx-auto mb-4">
                                        <value.icon className="h-6 w-6 text-white" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                                        {value.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-slate-600 leading-relaxed">
                                        {value.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-4 bg-white border-t border-slate-200">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Join Us on This Journey
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Be part of the future of global trade. Start automating your compliance operations today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/signup">
                                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 h-auto text-base">
                                    Start Free Trial
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-900 hover:bg-slate-50 font-medium px-8 py-6 h-auto text-base">
                                    Contact Us
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

export default About;
