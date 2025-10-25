
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, BarChart3, FileText, Globe, Zap, CheckCircle, Star, Users, TrendingUp, Building2, Target, Lightbulb } from "lucide-react";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "motion/react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Building2,
      title: "Governance Solutions",
      description: "Advanced analytics and compliance tools for modern business governance"
    },
    {
      icon: Target,
      title: "Growth Analytics",
      description: "Data-driven insights and strategic advisory for sustainable business growth"
    },
    {
      icon: Globe,
      title: "Social Impact",
      description: "Comprehensive ESG risk assessment and social impact measurement tools"
    },
    {
      icon: Lightbulb,
      title: "Innovation Advisory",
      description: "Strategic technology advisory and innovation consulting services"
    }
  ];

  const testimonials = [
    {
      quote: "ShopifyQ reduced our Global Trade processing time by 80%. Game-changer for our international expansion.",
      name: "Sarah Chen",
      title: "EcoStyle Co.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "The HS code detection is incredibly accurate. We've eliminated manual classification errors completely.",
      name: "Marcus Williams",
      title: "TechGear Plus",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Automated documentation generation saved us hours every week. The compliance features are outstanding.",
      name: "Emily Rodriguez",
      title: "Fashion Forward",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "ESG risk assessment helped us identify supply chain issues before they became problems. Invaluable tool.",
      name: "David Kim",
      title: "GreenTech Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      quote: "Landed cost calculations are spot-on. We can now price our products accurately for any market.",
      name: "Lisa Thompson",
      title: "Global Crafts Co.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
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
            {/* Dagala Group Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                {/* G Icon */}
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
            </div>

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

      {/* Hero Section - Animated with Stars Background */}
      <section className="h-screen w-full overflow-hidden relative">
        {/* Stars Background */}
        <StarsBackground
          className="h-full w-full"
          starColor="#ffffff"
          speed={20}
          factor={0.05}
        >
          {/* Gradient Overlays for Depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20"></div>

          {/* Animated Border Lines */}
          <div className="absolute inset-y-0 left-0 h-full w-px bg-white/20">
            <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse" />
          </div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-white/20">
            <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-white/60 to-transparent animate-pulse" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px w-full bg-white/20">
            <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-white/60 to-transparent animate-pulse" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="relative mx-auto flex max-w-7xl flex-col items-center justify-center px-4 py-10 md:py-20">
              {/* Animated Headline */}
              <h1 className="relative z-10 mx-auto max-w-4xl text-center text-3xl font-display text-white md:text-5xl lg:text-7xl mb-6">
                {"Global Trade Simplified"
                  .split(" ")
                  .map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.1,
                        ease: "easeInOut",
                      }}
                      className="mr-2 inline-block"
                    >
                      {word}
                    </motion.span>
                  ))}
              </h1>

              {/* Animated Tagline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.8 }}
                className="relative z-10 mx-auto max-w-2xl py-4 text-center text-lg font-body-medium text-white/90 md:text-xl lg:text-2xl"
              >
                An AI analytics platform built for Shopify merchants
              </motion.p>

              {/* Animated CTA Buttons */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
                className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
              >
                <Link to="/dashboard">
                  <Button className="w-60 transform rounded-lg bg-white px-6 py-3 font-body-bold text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 shadow-2xl">
                    Start Free Trial
                  </Button>
                </Link>
                <Link to="/demo">
                  <Button variant="outline" className="w-60 transform rounded-lg border-2 border-white bg-transparent px-6 py-3 font-body-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black">
                    Watch Demo
                  </Button>
                </Link>
              </motion.div>

              {/* Animated Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 1.2 }}
                className="relative z-10 mt-12 flex items-center justify-center space-x-8 text-white/70 font-body-medium text-sm"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-white" />
                  <span>Cancel anytime</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </StarsBackground>
      </section>

      {/* Core Features Section - BentoGrid Layout */}
      <section className="py-20 px-4 bg-dagala-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-dagala-black mb-4">
              Core Features
            </h2>
            <p className="text-lg font-body text-dagala-medium max-w-3xl mx-auto leading-relaxed">
              Everything you need for Global Trade Analytics
            </p>
          </div>

          <BentoGrid className="max-w-6xl mx-auto">
            {/* Automated HS Code Detection */}
            <BentoGridItem
              title="Automated HS Code Detection"
              description="AI-powered classification with 95%+ accuracy for seamless customs processing and compliance."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-dagala-black to-dagala-dark flex items-center justify-center">
                  <Zap className="h-8 w-8 text-dagala-white" />
                </div>
              }
              icon={<Zap className="h-4 w-4 text-dagala-black" />}
            />

            {/* Export Documentation */}
            <BentoGridItem
              title="Export Documentation"
              description="Auto-generate commercial invoices, certificates of origin, and packing lists with one click."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-dagala-medium to-dagala-dark flex items-center justify-center">
                  <FileText className="h-8 w-8 text-dagala-white" />
                </div>
              }
              icon={<FileText className="h-4 w-4 text-dagala-black" />}
            />

            {/* Landed Cost Estimation */}
            <BentoGridItem
              title="Landed Cost Estimation"
              description="Calculate import taxes, duties, and total landed costs for any destination worldwide."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-dagala-black to-dagala-medium flex items-center justify-center">
                  <BarChart3 className="h-8 w-8 text-dagala-white" />
                </div>
              }
              icon={<BarChart3 className="h-4 w-4 text-dagala-black" />}
            />

            {/* ESG Risk Assessment */}
            <BentoGridItem
              title="ESG Risk Assessment"
              description="Comprehensive supply chain risk analysis with environmental and social impact scoring."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-dagala-dark to-dagala-black flex items-center justify-center">
                  <Shield className="h-8 w-8 text-dagala-white" />
                </div>
              }
              icon={<Shield className="h-4 w-4 text-dagala-black" />}
              className="md:col-span-2"
            />

            {/* Compliance Automation */}
            <BentoGridItem
              title="Compliance Automation"
              description="Automatically ensure compliance with international trade regulations and standards."
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-dagala-medium to-dagala-black flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-dagala-white" />
                </div>
              }
              icon={<CheckCircle className="h-4 w-4 text-dagala-black" />}
            />
          </BentoGrid>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-dagala-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-dagala-black mb-4">
              Powerful Features
            </h2>
            <p className="text-lg font-body text-dagala-medium max-w-2xl mx-auto leading-relaxed">
              Everything you need to transform your Shopify store into a data-driven powerhouse
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="group border-2 border-dagala-light hover:border-dagala-black transition-all duration-500 hover:-translate-y-2 bg-dagala-white hover:shadow-2xl">
                <CardHeader className="text-center p-6">
                  <div className="mx-auto mb-4 w-12 h-12 bg-dagala-black rounded-xl flex items-center justify-center group-hover:bg-dagala-dark transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-dagala-white" />
                  </div>
                  <CardTitle className="text-lg font-display text-dagala-black mb-3">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <CardDescription className="text-sm font-body text-dagala-medium leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-dagala-black relative overflow-hidden">
        <StarsBackground
          className="absolute inset-0"
          starColor="#ffffff"
          speed={20}
          factor={0.05}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80"></div>
        </StarsBackground>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display text-dagala-white mb-4">
            Trusted by growing DTC brands worldwide
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-display text-dagala-white mb-1 group-hover:text-dagala-light transition-colors duration-300">500+</div>
              <div className="text-sm font-body-medium text-dagala-light">Active Stores</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-display text-dagala-white mb-1 group-hover:text-dagala-light transition-colors duration-300">95%</div>
              <div className="text-sm font-body-medium text-dagala-light">HS Code Accuracy</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-display text-dagala-white mb-1 group-hover:text-dagala-light transition-colors duration-300">80%</div>
              <div className="text-sm font-body-medium text-dagala-light">Time Saved</div>
            </div>
            <div className="text-center group">
              <div className="text-2xl md:text-3xl font-display text-dagala-white mb-1 group-hover:text-dagala-light transition-colors duration-300">50+</div>
              <div className="text-sm font-body-medium text-dagala-light">Countries Supported</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Transition */}
      <div className="h-16 bg-gradient-to-b from-dagala-black via-dagala-dark to-dagala-white"></div>

      {/* Customer Stories Section */}
      <section className="py-16 px-4 bg-dagala-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-display text-dagala-black mb-2">
              Customer Stories
            </h2>
            <p className="text-sm font-body text-dagala-medium">
              Loved by businesses like yours
            </p>
          </div>

          <div className="h-[28rem] rounded-md flex flex-col antialiased bg-dagala-white items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="slow"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-dagala-light/30 to-dagala-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-display text-dagala-black mb-4">
            Ready to automate your Global Trade?
          </h2>
          <p className="text-base font-body text-dagala-medium mb-8 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of DTC brands already saving time and reducing risk with ShopifyQ.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link to="/dashboard">
              <Button size="lg" className="bg-dagala-black hover:bg-dagala-dark text-dagala-white font-body-bold text-sm px-6 py-3 h-auto">
                Start Your Free Trial
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
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/80"></div>
        </StarsBackground>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  {/* G Icon */}
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
    </div >
  );
};

export default Index;
