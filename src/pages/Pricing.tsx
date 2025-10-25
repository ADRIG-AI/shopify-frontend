import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Target, Lightbulb, Globe, ArrowRight, CheckCircle, Users, TrendingUp, BarChart3, Shield, Star } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars-background";

const Pricing = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAnnual, setIsAnnual] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const plans = [
        {
            name: "Starter",
            description: "Perfect for small businesses getting started",
            price: { monthly: 29, annual: 290 },
            features: [
                "Up to 1,000 transactions/month",
                "Basic HS code detection",
                "Standard support",
                "Email notifications",
                "Basic reporting"
            ],
            popular: false,
            cta: "Start Free Trial"
        },
        {
            name: "Professional",
            description: "Ideal for growing businesses",
            price: { monthly: 99, annual: 990 },
            features: [
                "Up to 10,000 transactions/month",
                "Advanced AI analytics",
                "Priority support",
                "Custom integrations",
                "Advanced reporting",
                "ESG risk assessment",
                "API access"
            ],
            popular: true,
            cta: "Start Free Trial"
        },
        {
            name: "Enterprise",
            description: "For large organizations with complex needs",
            price: { monthly: 299, annual: 2990 },
            features: [
                "Unlimited transactions",
                "Custom AI models",
                "Dedicated support",
                "White-label solutions",
                "Advanced analytics",
                "Custom reporting",
                "SLA guarantee",
                "On-premise deployment"
            ],
            popular: false,
            cta: "Contact Sales"
        }
    ];

    const features = [
        {
            icon: BarChart3,
            title: "Advanced Analytics",
            description: "Comprehensive data analysis and insights"
        },
        {
            icon: Shield,
            title: "Security & Compliance",
            description: "Enterprise-grade security and compliance"
        },
        {
            icon: Globe,
            title: "Global Coverage",
            description: "Support for 50+ countries worldwide"
        },
        {
            icon: Target,
            title: "Custom Solutions",
            description: "Tailored solutions for your business needs"
        }
    ];

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
                                ? 'text-dagala-medium hover:text-dagala-black'
                                : 'text-white/80 hover:text-white'
                                }`}>INSIGHTS</Link>
                            <Link to="/pricing" className={`font-body-medium transition-colors text-sm tracking-wide ${isScrolled
                                ? 'text-dagala-black border-b-2 border-dagala-black'
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
                                Simple, Transparent Pricing
                            </h1>
                            <p className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg font-body-medium text-white/90 md:text-xl lg:text-2xl">
                                Choose the plan that fits your business needs
                            </p>
                        </div>
                    </div>
                </StarsBackground>
            </section>

            {/* Pricing Toggle */}
            <section className="py-8 px-4 bg-dagala-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-center space-x-4">
                        <span className={`font-body-medium ${!isAnnual ? 'text-dagala-black' : 'text-dagala-medium'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${isAnnual ? 'bg-dagala-black' : 'bg-dagala-light'
                                }`}
                        >
                            <span
                                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'
                                    }`}
                            />
                        </button>
                        <span className={`font-body-medium ${isAnnual ? 'text-dagala-black' : 'text-dagala-medium'}`}>Annual</span>
                        {isAnnual && (
                            <Badge className="bg-green-100 text-green-800">Save 20%</Badge>
                        )}
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 px-4 bg-dagala-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <Card key={index} className={`relative border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${plan.popular
                                    ? 'border-dagala-black bg-dagala-white shadow-xl'
                                    : 'border-dagala-light bg-dagala-white hover:border-dagala-black'
                                }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-dagala-black text-dagala-white px-4 py-1">
                                            <Star className="h-3 w-3 mr-1" />
                                            Most Popular
                                        </Badge>
                                    </div>
                                )}
                                <CardHeader className="text-center p-8">
                                    <CardTitle className="text-2xl font-display text-dagala-black mb-2">{plan.name}</CardTitle>
                                    <CardDescription className="text-sm font-body text-dagala-medium mb-4">{plan.description}</CardDescription>
                                    <div className="mb-6">
                                        <span className="text-4xl font-display text-dagala-black">
                                            ${isAnnual ? plan.price.annual : plan.price.monthly}
                                        </span>
                                        <span className="text-sm font-body text-dagala-medium ml-2">
                                            /{isAnnual ? 'year' : 'month'}
                                        </span>
                                    </div>
                                    <Button
                                        className={`w-full font-body-bold transition-all duration-300 ${plan.popular
                                                ? 'bg-dagala-black hover:bg-dagala-dark text-dagala-white'
                                                : 'border-2 border-dagala-black text-dagala-black hover:bg-dagala-black hover:text-dagala-white'
                                            }`}
                                    >
                                        {plan.cta}
                                    </Button>
                                </CardHeader>
                                <CardContent className="px-8 pb-8">
                                    <ul className="space-y-3">
                                        {plan.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center space-x-3">
                                                <CheckCircle className="h-4 w-4 text-dagala-black flex-shrink-0" />
                                                <span className="text-sm font-body text-dagala-medium">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 px-4 bg-dagala-light/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display text-dagala-black mb-4">
                            Why Choose Dagala Analytics?
                        </h2>
                        <p className="text-lg font-body text-dagala-medium max-w-3xl mx-auto leading-relaxed">
                            All plans include our core features and benefits
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="group border-2 border-dagala-light hover:border-dagala-black transition-all duration-500 hover:-translate-y-2 bg-dagala-white hover:shadow-2xl">
                                <CardHeader className="text-center p-6">
                                    <div className="mx-auto mb-4 w-12 h-12 bg-dagala-black rounded-xl flex items-center justify-center group-hover:bg-dagala-dark transition-colors duration-300">
                                        <feature.icon className="h-6 w-6 text-dagala-white" />
                                    </div>
                                    <CardTitle className="text-lg font-display text-dagala-black mb-3">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="px-6 pb-6">
                                    <CardDescription className="text-sm font-body text-dagala-medium leading-relaxed text-center">
                                        {feature.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 bg-dagala-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display text-dagala-black mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-lg font-body text-dagala-medium leading-relaxed">
                            Everything you need to know about our pricing
                        </p>
                    </div>

                    <div className="space-y-8">
                        <Card className="border-2 border-dagala-light">
                            <CardHeader>
                                <CardTitle className="text-lg font-display text-dagala-black">Can I change plans anytime?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-body text-dagala-medium leading-relaxed">
                                    Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing differences.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-dagala-light">
                            <CardHeader>
                                <CardTitle className="text-lg font-display text-dagala-black">Is there a free trial?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-body text-dagala-medium leading-relaxed">
                                    Yes, all plans come with a 14-day free trial. No credit card required to get started.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-dagala-light">
                            <CardHeader>
                                <CardTitle className="text-lg font-display text-dagala-black">What payment methods do you accept?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-body text-dagala-medium leading-relaxed">
                                    We accept all major credit cards, PayPal, and bank transfers for Enterprise plans.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-2 border-dagala-light">
                            <CardHeader>
                                <CardTitle className="text-lg font-display text-dagala-black">Do you offer custom pricing?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-body text-dagala-medium leading-relaxed">
                                    Yes, we offer custom pricing for Enterprise customers with specific requirements. Contact our sales team for more information.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gradient-to-br from-dagala-light/30 to-dagala-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-2xl md:text-3xl font-display text-dagala-black mb-4">
                        Ready to get started?
                    </h2>
                    <p className="text-base font-body text-dagala-medium mb-8 max-w-2xl mx-auto leading-relaxed">
                        Join hundreds of businesses already using Dagala Analytics to drive growth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg" className="bg-dagala-black hover:bg-dagala-dark text-dagala-white font-body-bold text-sm px-6 py-3 h-auto">
                                Start Free Trial
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button size="lg" variant="outline" className="border-2 border-dagala-black text-dagala-black hover:bg-dagala-black hover:text-dagala-white font-body-bold text-sm px-6 py-3 h-auto">
                                Contact Sales
                            </Button>
                        </Link>
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

export default Pricing;
